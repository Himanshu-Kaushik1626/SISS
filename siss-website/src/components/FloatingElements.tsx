'use client';

import { useState, useEffect } from 'react';
import { CONFIG } from '@/config';
import Icon from './Icon';

export default function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    CONFIG.whatsappGreeting
  )}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <Icon name="message-circle" size={28} />
      </a>

      {/* Floating Call Button (Mobile) */}
      <a
        href={`tel:${CONFIG.phoneRaw}`}
        className="floating-call"
        aria-label="Call SISS Helpline"
        title="Call Now"
      >
        <Icon name="phone" size={24} />
      </a>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
        title="Back to top"
      >
        <Icon name="arrow-up" size={20} />
      </button>

      {/* Sticky Mobile Bottom Bar */}
      <div className="mobile-bottom-bar" aria-label="Mobile quick actions">
        <div className="mobile-bottom-bar-inner">
          <a href={`tel:${CONFIG.phoneRaw}`} className="mobile-bottom-btn">
            <span className="icon">
              <Icon name="phone" size={18} />
            </span>
            <span>Call</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bottom-btn"
          >
            <span className="icon" style={{ color: '#25D366' }}>
              <Icon name="message-circle" size={18} />
            </span>
            <span>WhatsApp</span>
          </a>

          <a href="#booking" className="mobile-bottom-btn highlight">
            <span>Get Quote</span>
          </a>
        </div>
      </div>
    </>
  );
}
