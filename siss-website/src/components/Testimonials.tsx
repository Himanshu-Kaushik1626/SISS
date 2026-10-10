'use client';

import { useRef } from 'react';
import { TESTIMONIALS } from '@/config';
import Icon from './Icon';

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="section">
      <div className="glow-blob glow-blob-blue" style={{ top: '20%', right: '10%' }} />

      <div className="container">
        <div className="section-header text-center">
          <div className="badge badge-gold">
            <Icon name="star" size={14} />
            <span>Client Experiences</span>
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by residential societies, corporate campuses, and industrial facilities across India.
          </p>
        </div>

        <div className="testimonials-track" ref={trackRef}>
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="testimonial-card glass-card">
              <span className="placeholder-badge">Verified Review</span>
              <div className="testimonial-quote">&ldquo;</div>
              <p>{item.content}</p>

              <div className="testimonial-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {item.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-nav">
          <button
            onClick={() => scroll('left')}
            className="btn btn-glass btn-sm"
            aria-label="Previous testimonial"
          >
            <Icon name="chevron-left" size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="btn btn-glass btn-sm"
            aria-label="Next testimonial"
          >
            <Icon name="chevron-right" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
