'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import {
  CONFIG,
  SERVICES,
  SHIFT_OPTIONS,
  DURATION_OPTIONS,
  SITE_TYPES,
} from '@/config';
import Icon from './Icon';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  service: string;
  personnel: string;
  shift: string;
  duration: string;
  startDate: string;
  city: string;
  address: string;
  siteType: string;
  requirements: string;
  honeypot: string;
}

interface Errors {
  [key: string]: string;
}

function sanitize(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
}

export default function BookingForm() {
  const initial: FormData = {
    name: '',
    mobile: '',
    email: '',
    service: '',
    personnel: '',
    shift: '',
    duration: '',
    startDate: '',
    city: '',
    address: '',
    siteType: '',
    requirements: '',
    honeypot: '',
  };

  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState('');

  const update = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((p) => {
        const n = { ...p };
        delete n[name];
        return n;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!/^[6-9]\d{9}$/.test(form.mobile.trim()))
      errs.mobile = 'Enter a valid 10-digit Indian mobile number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = 'Enter a valid email address';
    if (!form.service) errs.service = 'Please select a service';
    if (!form.personnel || Number(form.personnel) < 1)
      errs.personnel = 'Enter the number of personnel needed';
    if (!form.city.trim()) errs.city = 'City / Location is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (form.honeypot) return;

    if (!validate()) return;

    setLoading(true);

    const now = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const lines = [
      '*NEW SERVICE BOOKING – SISS Website*',
      '',
      `*Name:* ${sanitize(form.name)}`,
      `*Mobile:* ${sanitize(form.mobile)}`,
      form.email ? `*Email:* ${sanitize(form.email)}` : '',
      `*Service Required:* ${sanitize(form.service)}`,
      `*Personnel Required:* ${sanitize(form.personnel)}`,
      form.shift ? `*Shift:* ${sanitize(form.shift)}` : '',
      form.duration ? `*Duration:* ${sanitize(form.duration)}` : '',
      form.startDate ? `*Start Date:* ${sanitize(form.startDate)}` : '',
      `*City / Location:* ${sanitize(form.city)}`,
      form.address ? `*Full Address:* ${sanitize(form.address)}` : '',
      form.siteType ? `*Type of Site:* ${sanitize(form.siteType)}` : '',
      form.requirements
        ? `*Additional Requirements:* ${sanitize(form.requirements)}`
        : '',
      '',
      `_Submitted on: ${now}_`,
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lines)}`;

    // Simulate brief loading state
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFallbackUrl(url);

      // Open WhatsApp
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  const resetForm = () => {
    setForm(initial);
    setErrors({});
    setSuccess(false);
    setFallbackUrl('');
  };

  if (success) {
    return (
      <section id="booking" className="section form-section">
        <div className="container">
          <div className="form-container glass-card-strong">
            <div className="form-success">
              <div className="form-success-icon">
                <Icon name="check-circle" size={40} />
              </div>
              <h3>Booking Request Sent!</h3>
              <p>
                Your service request has been sent to our WhatsApp. We&apos;ll get
                back to you shortly.
              </p>
              {fallbackUrl && (
                <p>
                  <a
                    href={fallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--gold)', textDecoration: 'underline' }}
                  >
                    Click here if WhatsApp did not open
                  </a>
                </p>
              )}
              <button className="btn btn-secondary" onClick={resetForm}>
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section form-section">
      <div
        className="glow-blob glow-blob-blue"
        style={{ width: 350, height: 350, bottom: '10%', right: '-5%' }}
      />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">
            <Icon name="send" size={14} />
            Book a Service
          </span>
          <h2 className="section-title">
            Get a <span className="highlight">Free Quote</span>
          </h2>
          <p className="section-subtitle">
            Fill in your requirements and we&apos;ll respond within hours via
            WhatsApp.
          </p>
        </div>

        <div className="form-container glass-card-strong reveal">
          <form onSubmit={handleSubmit} noValidate>
            {/* Honeypot */}
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="hp-booking">Leave blank</label>
              <input
                id="hp-booking"
                name="honeypot"
                type="text"
                value={form.honeypot}
                onChange={update}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="form-grid">
              {/* Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="booking-name">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  id="booking-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={update}
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
                {errors.name && (
                  <div className="form-error">
                    <Icon name="x" size={12} /> {errors.name}
                  </div>
                )}
              </div>

              {/* Mobile */}
              <div className="form-group">
                <label className="form-label" htmlFor="booking-mobile">
                  Mobile Number <span className="required">*</span>
                </label>
                <input
                  className={`form-input ${errors.mobile ? 'error' : ''}`}
                  id="booking-mobile"
                  name="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={update}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  autoComplete="tel"
                />
                {errors.mobile && (
                  <div className="form-error">
                    <Icon name="x" size={12} /> {errors.mobile}
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label" htmlFor="booking-email">
                  Email (optional)
                </label>
                <input
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  id="booking-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="your@email.com"
                  autoComplete="email"
                />
                {errors.email && (
                  <div className="form-error">
                    <Icon name="x" size={12} /> {errors.email}
                  </div>
                )}
              </div>

              {/* Service */}
              <div className="form-group">
                <label className="form-label" htmlFor="booking-service">
                  Service Required <span className="required">*</span>
                </label>
                <select
                  className={`form-select ${errors.service ? 'error' : ''}`}
                  id="booking-service"
                  name="service"
                  value={form.service}
                  onChange={update}
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <div className="form-error">
                    <Icon name="x" size={12} /> {errors.service}
                  </div>
                )}
              </div>

              {/* Personnel */}
              <div className="form-group">
                <label className="form-label" htmlFor="booking-personnel">
                  Number of Personnel <span className="required">*</span>
                </label>
                <input
                  className={`form-input ${errors.personnel ? 'error' : ''}`}
                  id="booking-personnel"
                  name="personnel"
                  type="number"
                  min="1"
                  value={form.personnel}
                  onChange={update}
                  placeholder="e.g. 5"
                />
                {errors.personnel && (
                  <div className="form-error">
                    <Icon name="x" size={12} /> {errors.personnel}
                  </div>
                )}
              </div>

              {/* Shift */}
              <div className="form-group">
                <label className="form-label" htmlFor="booking-shift">
                  Shift
                </label>
                <select
                  className="form-select"
                  id="booking-shift"
                  name="shift"
                  value={form.shift}
                  onChange={update}
                >
                  <option value="">Select shift</option>
                  {SHIFT_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration */}
              <div className="form-group">
                <label className="form-label" htmlFor="booking-duration">
                  Duration
                </label>
                <select
                  className="form-select"
                  id="booking-duration"
                  name="duration"
                  value={form.duration}
                  onChange={update}
                >
                  <option value="">Select duration</option>
                  {DURATION_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              {/* Start Date */}
              <div className="form-group">
                <label className="form-label" htmlFor="booking-date">
                  Start Date
                </label>
                <input
                  className="form-input"
                  id="booking-date"
                  name="startDate"
                  type="date"
                  value={form.startDate}
                  onChange={update}
                />
              </div>

              {/* City */}
              <div className="form-group">
                <label className="form-label" htmlFor="booking-city">
                  City / Location <span className="required">*</span>
                </label>
                <input
                  className={`form-input ${errors.city ? 'error' : ''}`}
                  id="booking-city"
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={update}
                  placeholder="e.g. Greater Noida"
                />
                {errors.city && (
                  <div className="form-error">
                    <Icon name="x" size={12} /> {errors.city}
                  </div>
                )}
              </div>

              {/* Site Type */}
              <div className="form-group">
                <label className="form-label" htmlFor="booking-site-type">
                  Type of Site
                </label>
                <select
                  className="form-select"
                  id="booking-site-type"
                  name="siteType"
                  value={form.siteType}
                  onChange={update}
                >
                  <option value="">Select site type</option>
                  {SITE_TYPES.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              {/* Address */}
              <div className="form-group form-full">
                <label className="form-label" htmlFor="booking-address">
                  Full Site Address
                </label>
                <textarea
                  className="form-textarea"
                  id="booking-address"
                  name="address"
                  value={form.address}
                  onChange={update}
                  placeholder="Complete address of the site"
                  rows={3}
                />
              </div>

              {/* Additional Requirements */}
              <div className="form-group form-full">
                <label className="form-label" htmlFor="booking-requirements">
                  Additional Requirements
                </label>
                <textarea
                  className="form-textarea"
                  id="booking-requirements"
                  name="requirements"
                  value={form.requirements}
                  onChange={update}
                  placeholder="Any specific requirements, special instructions, etc."
                  rows={4}
                />
              </div>
            </div>

            <div className="form-submit-wrap">
              <button
                type="submit"
                className={`btn btn-primary btn-lg ${loading ? 'btn-loading' : ''}`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send to WhatsApp'}
                {!loading && <Icon name="whatsapp" size={18} />}
              </button>
              <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-xs)' }}>
                Your details will be sent via WhatsApp for a quick response.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
