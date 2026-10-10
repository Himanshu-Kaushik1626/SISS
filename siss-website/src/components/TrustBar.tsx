'use client';

import Icon from './Icon';

const trustItems = [
  { icon: 'user-check', label: 'Trained Staff' },
  { icon: 'shield', label: 'Reliable Service' },
  { icon: 'clock', label: '24/7 Support' },
  { icon: 'star', label: 'Client Satisfaction' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        {trustItems.map((item, i) => (
          <div
            key={i}
            className="trust-item reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="trust-item-icon">
              <Icon name={item.icon} size={22} />
            </div>
            <h4>{item.label}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
