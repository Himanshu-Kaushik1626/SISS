'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { HERO_SLIDES } from '@/config';
import Icon from './Icon';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [imgErrors, setImgErrors] = useState<boolean[]>(
    new Array(HERO_SLIDES.length).fill(false)
  );
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback((index: number) => {
    const len = HERO_SLIDES.length;
    setCurrent(((index % len) + len) % len);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, current]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  const handleImgError = (index: number) => {
    setImgErrors((prev) => {
      const n = [...prev];
      n[index] = true;
      return n;
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          diff > 0 ? next() : prev();
        }
      }}
      aria-label="Hero slider"
    >
      {HERO_SLIDES.map((slide, i) => (
        <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
          <div
            className="hero-slide-bg"
            style={{
              backgroundImage: !imgErrors[i]
                ? `url(${slide.image})`
                : 'none',
              background: imgErrors[i] ? slide.gradient : undefined,
            }}
          >
            {/* Hidden img to detect load errors */}
            {!imgErrors[i] && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={slide.image}
                alt=""
                onError={() => handleImgError(i)}
                style={{ display: 'none' }}
              />
            )}
          </div>
          <div className="hero-content">
            <div className="container">
              <div className="hero-text-card">
                <h1>{slide.heading}</h1>
                <p>{slide.subheading}</p>
                <div className="hero-buttons">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => scrollToSection('booking')}
                  >
                    Get a Free Quote
                    <Icon name="arrow-right" size={18} />
                  </button>
                  <button
                    className="btn btn-secondary btn-lg"
                    onClick={() => scrollToSection('services')}
                  >
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <div className="hero-arrows">
        <button className="hero-arrow" onClick={prev} aria-label="Previous slide">
          <Icon name="chevron-left" size={22} />
        </button>
        <button className="hero-arrow" onClick={next} aria-label="Next slide">
          <Icon name="chevron-right" size={22} />
        </button>
      </div>

      {/* Dots */}
      <div className="hero-dots" role="tablist" aria-label="Slide selector">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            role="tab"
            aria-selected={i === current}
          />
        ))}
      </div>
    </section>
  );
}
