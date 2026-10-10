'use client';

import { WHY_CHOOSE_US } from '@/config';
import Icon from './Icon';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section">
      <div
        className="glow-blob glow-blob-gold"
        style={{ width: 350, height: 350, top: '10%', right: '-5%' }}
      />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">
            <Icon name="check-circle" size={14} />
            Why SISS
          </span>
          <h2 className="section-title">
            Why Choose <span className="highlight">SISS</span>?
          </h2>
          <p className="section-subtitle">
            We go beyond providing staff — we deliver trust, discipline and peace of
            mind.
          </p>
        </div>

        <div className="why-grid">
          {WHY_CHOOSE_US.map((item, i) => (
            <div
              key={i}
              className="why-card glass-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="why-card-icon">
                <Icon name={item.icon} size={24} />
              </div>
              <div className="why-card-text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
