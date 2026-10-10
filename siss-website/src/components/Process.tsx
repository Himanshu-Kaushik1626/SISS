'use client';

import { PROCESS_STEPS } from '@/config';
import Icon from './Icon';

export default function Process() {
  return (
    <section id="process" className="section">
      <div
        className="glow-blob glow-blob-blue"
        style={{ width: 300, height: 300, top: '20%', left: '-8%' }}
      />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">
            <Icon name="settings" size={14} />
            Our Process
          </span>
          <h2 className="section-title">
            How We <span className="highlight">Work</span>
          </h2>
          <p className="section-subtitle">
            A systematic approach from understanding your needs to delivering
            excellence on-site.
          </p>
        </div>

        <div className="process-timeline">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={i}
              className="process-step reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="process-step-number">{step.step}</div>
              <div className="process-step-content glass-card">
                <h3>
                  <Icon name={step.icon} size={18} /> {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
