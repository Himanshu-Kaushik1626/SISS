'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { CONFIG, NAV_LINKS } from '@/config';
import Icon from './Icon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [imgError, setImgError] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll listener for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for active nav link
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((p) => !p);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const handleNavClick = (href: string) => {
    closeDrawer();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lock scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => document.body.classList.remove('scroll-locked');
  }, [drawerOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Logo */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            aria-label={`${CONFIG.shortName} - Home`}
          >
            {!imgError ? (
              <Image
                src={CONFIG.logoPath}
                alt={`${CONFIG.shortName} Logo`}
                width={42}
                height={42}
                onError={() => setImgError(true)}
                priority
              />
            ) : (
              <div className="navbar-logo-text">{CONFIG.shortName}</div>
            )}
            <div className="navbar-brand">
              {CONFIG.shortName}
              <span>Security &amp; Manpower</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="navbar-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="navbar-cta">
            <a
              href={`tel:${CONFIG.phoneRaw}`}
              className="btn btn-secondary btn-sm"
              aria-label="Call us"
            >
              <Icon name="phone" size={16} />
              Call Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${drawerOpen ? 'active' : ''}`}
            onClick={toggleDrawer}
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`mobile-drawer-overlay ${drawerOpen ? 'visible' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile menu">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href.replace('#', '') ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
        <div className="mobile-drawer-cta">
          <a
            href={`tel:${CONFIG.phoneRaw}`}
            className="btn btn-blue"
          >
            <Icon name="phone" size={18} />
            Call Now
          </a>
          <a
            href={`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappGreeting)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Icon name="whatsapp" size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
