'use client';

import { CONFIG } from '@/config';
import Icon from './Icon';

export default function Contact() {
  const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    CONFIG.whatsappGreeting
  )}`;

  return (
    <section id="contact" className="section">
      <div className="glow-blob glow-blob-blue" style={{ top: '20%', right: '5%' }} />
      <div className="glow-blob glow-blob-gold" style={{ bottom: '10%', left: '10%' }} />

      <div className="container">
        <div className="section-header text-center">
          <div className="badge badge-gold">
            <Icon name="mail" size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Reach out to our round-the-clock operations team for deployments, site surveys, or general inquiries.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Card */}
          <div className="glass-card-strong" style={{ padding: 'var(--space-2xl)' }}>
            <div className="contact-info-list">
              {/* Address */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Icon name="map-pin" size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>Head Office Address</h4>
                  <p>{CONFIG.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Icon name="phone" size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>Call Us</h4>
                  <p>
                    <a href={`tel:${CONFIG.phoneRaw}`}>{CONFIG.phone}</a>
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-item">
                <div className="contact-item-icon" style={{ color: '#25D366' }}>
                  <Icon name="message-circle" size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>WhatsApp Desk</h4>
                  <p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#25D366' }}
                    >
                      +{CONFIG.whatsapp}
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Icon name="mail" size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Icon name="clock" size={22} />
                </div>
                <div className="contact-item-text">
                  <h4>Working Hours</h4>
                  <p>{CONFIG.workingHours}</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-2xl)', display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <a href={`tel:${CONFIG.phoneRaw}`} className="btn btn-primary">
                <Icon name="phone-call" size={16} />
                <span>Call Now</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <Icon name="message-circle" size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="contact-map">
            <iframe
              title="SISS Office Location - Gaur City Center, Greater Noida West"
              src={CONFIG.mapEmbedUrl}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
