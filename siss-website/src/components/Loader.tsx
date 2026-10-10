'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { CONFIG } from '@/config';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imgError, setImgError] = useState(false);
  const startTime = useRef<number>(0);

  useEffect(() => {
    startTime.current = Date.now();
    document.body.classList.add('scroll-locked');

    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const handleLoad = () => {
      const elapsed = Date.now() - startTime.current;
      const minDuration = 2500;
      const remainingTime = Math.max(0, minDuration - elapsed);

      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setVisible(false);
          document.body.classList.remove('scroll-locked');
        }, 500);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback: hide after 5s regardless
    const fallback = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
        document.body.classList.remove('scroll-locked');
      }, 400);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallback);
      document.body.classList.remove('scroll-locked');
    };
  }, []);

  return (
    <div
      className={`loader-overlay ${!visible ? 'hidden' : ''}`}
      role="status"
      aria-label="Loading"
    >
      <div className="loader-logo-wrap">
        {!imgError ? (
          <Image
            src={CONFIG.logoPath}
            alt={`${CONFIG.shortName} Logo`}
            width={80}
            height={80}
            className="loader-logo"
            onError={() => setImgError(true)}
            priority
          />
        ) : (
          <div className="loader-logo-text">{CONFIG.shortName}</div>
        )}
        <div className="loader-ring" />
      </div>
      <div className="loader-progress">
        <div
          className="loader-progress-bar"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="loader-text">Loading...</p>
    </div>
  );
}
