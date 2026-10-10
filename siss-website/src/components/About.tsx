'use client';

import { useEffect, useRef, useState } from 'react';
import { CONFIG } from '@/config';
import Icon from './Icon';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-number">
      {count}
      {suffix}
    </div>
  );
}

export default function About() {
  const values = ['Integrity', 'Discipline', 'Professionalism', 'Accountability', 'Service'];

  return (
    <section id="about" className="section">
      <div
        className="glow-blob glow-blob-blue"
        style={{ width: 400, height: 400, top: '10%', right: '-5%' }}
      />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">
            <Icon name="shield" size={14} />
            About Us
          </span>
          <h2 className="section-title">
            Who We Are – <span className="highlight">SISS</span>
          </h2>
          <p className="section-subtitle">
            Professional security and manpower solutions you can trust.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text reveal-left">
            <p>
              Shivay India Securitas Services (SISS) provides professional security
              and manpower solutions for residential, commercial, industrial and
              institutional environments. Our approach combines trained personnel,
              disciplined deployment, site supervision and responsive client support.
            </p>

            <div className="about-mission-vision">
              <div className="about-mv-card">
                <h4>
                  <Icon name="target" size={16} /> Our Mission
                </h4>
                <p>
                  To deliver reliable, professional and client-focused security and
                  manpower solutions.
                </p>
              </div>
              <div className="about-mv-card">
                <h4>
                  <Icon name="eye" size={16} /> Our Vision
                </h4>
                <p>
                  To build a trusted service organization known for discipline,
                  responsiveness and quality.
                </p>
              </div>
            </div>

            <div className="about-values">
              {values.map((v) => (
                <span key={v} className="about-value-tag">
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className="stats-grid reveal-right">
            {CONFIG.stats.map((stat, i) => (
              <div
                key={i}
                className="stat-card glass-card"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
