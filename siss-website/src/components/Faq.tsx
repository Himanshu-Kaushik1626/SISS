'use client';

import { useState } from 'react';
import { FAQ_DATA } from '@/config';
import Icon from './Icon';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faq" className="section">
      <div className="glow-blob glow-blob-gold" style={{ top: '30%', left: '5%' }} />

      <div className="container">
        <div className="section-header text-center">
          <div className="badge badge-gold">
            <Icon name="help-circle" size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about partnering with Shivay India Securitas Services.
          </p>
        </div>

        <div className="faq-list">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item glass-card ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8" style={{ marginTop: '2rem' }}>
          <p className="text-muted" style={{ marginBottom: '1rem' }}>
            Have questions about specialized security or custom manpower deployment?
          </p>
          <a href="#contact" className="btn btn-outline">
            <Icon name="phone" size={16} />
            <span>Talk With Our Operations Team</span>
          </a>
        </div>
      </div>
    </section>
  );
}
