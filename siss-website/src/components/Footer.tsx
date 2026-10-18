'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CONFIG, NAV_LINKS, SERVICES } from '@/config';
import Icon from './Icon';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  const topServices = SERVICES.slice(0, 6);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & About */}
          <div className="footer-about">
            <div className="footer-brand">
              {!logoError ? (
                <Image
                  src={CONFIG.logoPath}
                  alt={`${CONFIG.companyName} Logo`}
                  width={48}
                  height={48}
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--royal-blue), var(--gold))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  SISS
                </div>
              )}
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>
                  {CONFIG.shortName}
                </span>{' '}
                <span style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '0.85rem' }}>
                  GROUP
                </span>
              </div>
            </div>

            <p>
              {CONFIG.companyName} delivers reliable, disciplined, and verified security, manpower, and facility solutions for housing societies, corporate offices, and industries across India.
            </p>

            <div className="footer-social">
              <a href={CONFIG.social.facebook} aria-label="Facebook">
                <Icon name="facebook" size={18} />
              </a>
              <a href={CONFIG.social.instagram} aria-label="Instagram">
                <Icon name="instagram" size={18} />
              </a>
              <a href={CONFIG.social.linkedin} aria-label="LinkedIn">
                <Icon name="linkedin" size={18} />
              </a>
              <a href={CONFIG.social.twitter} aria-label="Twitter">
                <Icon name="twitter" size={18} />
              </a>
              <a href={CONFIG.social.youtube} aria-label="YouTube">
                <Icon name="youtube" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    <Icon name="chevron-right" size={12} />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Key Services</h4>
            <ul>
              {topServices.map((svc) => (
                <li key={svc.id}>
                  <a href="#services">
                    <Icon name="chevron-right" size={12} />
                    <span>{svc.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" style={{ color: 'var(--gold)' }}>
                  <Icon name="arrow-right" size={12} />
                  <span>View All Services</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Head Office</h4>
            <ul>
              <li style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-sm)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                {CONFIG.address}
              </li>
              <li>
                <a href={`tel:${CONFIG.phoneRaw}`}>
                  <Icon name="phone" size={14} />
                  <span>{CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#25D366' }}
                >
                  <Icon name="message-circle" size={14} />
                  <span>+{CONFIG.whatsapp} (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONFIG.email}`}>
                  <Icon name="mail" size={14} />
                  <span>{CONFIG.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2026 {CONFIG.companyName} ({CONFIG.brandName}). All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="/privacy" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Privacy Policy</a>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <a href="/terms" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Terms &amp; Conditions</a>
          </div>
          <p style={{ color: 'var(--text-muted)' }}>{CONFIG.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
