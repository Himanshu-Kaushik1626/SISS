'use client';

import Image from 'next/image';
import { INDUSTRIES } from '@/config';
import Icon from './Icon';

export default function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">
            <Icon name="building" size={14} />
            Industries We Serve
          </span>
          <h2 className="section-title">
            Tailored Security for <span className="highlight">Every Industry</span>
          </h2>
          <p className="section-subtitle">
            Delivering specialized, licensed, and trained security and manpower deployments across key sectors in India.
          </p>
        </div>

        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className="industry-card glass-card reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="industry-card-img-wrap">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="industry-card-img"
                />
                <div className="industry-card-overlay" />
                <div className="industry-card-badge">
                  <Icon name={ind.icon} size={18} />
                </div>
              </div>
              <div className="industry-card-body">
                <h4>{ind.name}</h4>
                <p>{ind.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
