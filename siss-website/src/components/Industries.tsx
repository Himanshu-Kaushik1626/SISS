'use client';

import { INDUSTRIES } from '@/config';
import Icon from './Icon';

export default function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">
            <Icon name="building" size={14} />
            Industries
          </span>
          <h2 className="section-title">
            Industries We <span className="highlight">Serve</span>
          </h2>
          <p className="section-subtitle">
            Delivering specialized security and manpower across diverse sectors.
          </p>
        </div>

        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className="industry-card glass-card reveal"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="industry-card-icon">
                <Icon name={ind.icon} size={28} />
              </div>
              <h4>{ind.name}</h4>
              <p>{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
