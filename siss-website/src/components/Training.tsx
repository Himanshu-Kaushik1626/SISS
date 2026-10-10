'use client';

import { TRAINING_MODULES } from '@/config';
import Icon from './Icon';

export default function Training() {
  return (
    <section id="training" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">
            <Icon name="award" size={14} />
            Training &amp; Quality
          </span>
          <h2 className="section-title">
            Quality You Can <span className="highlight">Count On</span>
          </h2>
          <p className="section-subtitle">
            Every team member is trained, verified and briefed before deployment.
          </p>
        </div>

        <div className="training-grid">
          {TRAINING_MODULES.map((mod, i) => (
            <div
              key={i}
              className="training-card glass-card reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="training-card-number">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="training-card-icon">
                <Icon name={mod.icon} size={22} />
              </div>
              <h4>{mod.title}</h4>
              <p>{mod.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
