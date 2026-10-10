'use client';

import { useState, useCallback } from 'react';
import { SERVICES, ServiceCategory } from '@/config';
import Icon from './Icon';

type FilterType = 'all' | ServiceCategory;

const filters: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Security', value: 'security' },
  { label: 'Manpower', value: 'manpower' },
  { label: 'Facility', value: 'facility' },
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [animating, setAnimating] = useState(false);

  const filtered =
    activeFilter === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeFilter);

  const handleFilter = useCallback((f: FilterType) => {
    if (f === activeFilter) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveFilter(f);
      setAnimating(false);
    }, 250);
  }, [activeFilter]);

  const handleBookNow = (serviceName: string) => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Pre-select service in dropdown after scroll
      setTimeout(() => {
        const select = document.getElementById(
          'booking-service'
        ) as HTMLSelectElement | null;
        if (select) {
          const option = Array.from(select.options).find(
            (o) => o.value === serviceName
          );
          if (option) {
            select.value = serviceName;
            select.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }
      }, 800);
    }
  };

  return (
    <section id="services" className="section">
      <div
        className="glow-blob glow-blob-gold"
        style={{ width: 350, height: 350, bottom: '5%', left: '-3%' }}
      />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">
            <Icon name="briefcase" size={14} />
            Our Services
          </span>
          <h2 className="section-title">
            Comprehensive <span className="highlight">Security &amp; Manpower</span>{' '}
            Solutions
          </h2>
          <p className="section-subtitle">
            From armed guards to facility staff — tailored solutions for every
            industry and need.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="service-filters reveal">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => handleFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="services-grid">
          {filtered.map((service, i) => (
            <div
              key={service.id}
              className={`service-card glass-card ${
                animating ? 'service-card-exit' : 'service-card-enter'
              }`}
              style={{
                animationDelay: `${i * 0.05}s`,
                ['--i' as string]: i,
              }}
            >
              <div className="service-card-icon">
                <Icon name={service.icon} size={26} />
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <button
                className="btn btn-outline btn-sm"
                onClick={() => handleBookNow(service.name)}
              >
                Book Now
                <Icon name="arrow-right" size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
