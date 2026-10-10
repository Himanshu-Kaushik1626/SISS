'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { CONFIG } from '@/config';
import Icon from './Icon';

export default function WelcomeModal() {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const closeModal = useCallback(() => {
    setVisible(false);
    if (previousFocus.current) {
      previousFocus.current.focus();
    }
  }, []);

  useEffect(() => {
    // Only show once per session
    try {
      if (sessionStorage.getItem('siss-welcome-shown')) return;
    } catch {
      // Storage not available — proceed anyway
    }

    // Show 1.5s after loader likely finishes (≈4s from mount)
    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem('siss-welcome-shown', 'true');
      } catch {
        // Ignore
      }
      previousFocus.current = document.activeElement as HTMLElement;
      setVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Focus trap
  useEffect(() => {
    if (!visible || !modalRef.current) return;

    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible, closeModal]);

  const handleBookService = () => {
    closeModal();
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappGreeting)}`,
      '_blank',
      'noopener,noreferrer'
    );
    closeModal();
  };

  return (
    <div
      className={`modal-overlay ${visible ? 'visible' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome popup"
    >
      <div className="modal-content" ref={modalRef}>
        <button
          className="modal-close"
          onClick={closeModal}
          aria-label="Close modal"
        >
          <Icon name="x" size={20} />
        </button>

        <div className="modal-icon">
          <Icon name="shield" size={28} />
        </div>

        <h2>Need a Security or Manpower Service?</h2>
        <p className="modal-subtitle">
          Get a free quote within minutes. Professional staff, reliable service.
        </p>

        <div className="modal-buttons">
          <button className="btn btn-primary btn-lg" onClick={handleBookService}>
            <Icon name="send" size={18} />
            Book a Service
          </button>
          <button className="btn btn-blue btn-lg" onClick={handleWhatsApp}>
            <Icon name="whatsapp" size={18} />
            Chat on WhatsApp
          </button>
          <button className="btn btn-secondary" onClick={closeModal}>
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
