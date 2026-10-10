'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { CONFIG, JOB_POSITIONS } from '@/config';
import Icon from './Icon';

interface CareerFormData {
  name: string;
  mobile: string;
  age: string;
  city: string;
  position: string;
  experience: string;
  education: string;
  previousEmployer: string;
  armedForcesRank: string;
  gunLicense: string;
  notes: string;
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

export default function CareersForm() {
  const initial: CareerFormData = {
    name: '',
    mobile: '',
    age: '',
    city: '',
    position: '',
    experience: '',
    education: '',
    previousEmployer: '',
    armedForcesRank: '',
    gunLicense: 'No',
    notes: '',
    honeypot: '',
  };

  const [form, setForm] = useState<CareerFormData>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState('');

  const update = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Errors = {};

    if (!form.name.trim()) errs.name = 'Full Name is required';

    const mobileDigits = form.mobile.replace(/\D/g, '');
    if (!mobileDigits) {
      errs.mobile = 'Mobile Number is required';
    } else if (mobileDigits.length !== 10 || !/^[6-9]/.test(mobileDigits)) {
      errs.mobile = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!form.age.trim()) {
      errs.age = 'Age is required';
    } else {
      const ageNum = parseInt(form.age, 10);
      if (isNaN(ageNum) || ageNum < 18 || ageNum > 65) {
        errs.age = 'Age must be between 18 and 65';
      }
    }

    if (!form.city.trim()) errs.city = 'City / Location is required';
    if (!form.position) errs.position = 'Please select a position applied for';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (form.honeypot) return;
    if (!validate()) return;

    setLoading(true);

    const now = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const lines = [
      '*NEW JOB APPLICATION – SISS Website*',
      '',
      `*Name:* ${sanitize(form.name)}`,
      `*Mobile:* ${sanitize(form.mobile)}`,
      `*Age:* ${sanitize(form.age)}`,
      `*City / Location:* ${sanitize(form.city)}`,
      `*Position Applied For:* ${sanitize(form.position)}`,
      form.experience ? `*Experience:* ${sanitize(form.experience)} years` : '',
      form.education ? `*Education:* ${sanitize(form.education)}` : '',
      form.previousEmployer
        ? `*Previous Employer:* ${sanitize(form.previousEmployer)}`
        : '',
      form.position === 'Ex-Serviceman' && form.armedForcesRank
        ? `*Armed Forces Rank & Service:* ${sanitize(form.armedForcesRank)}`
        : '',
      form.position === 'Gunman / Armed Guard'
        ? `*Gun License Available:* ${sanitize(form.gunLicense)}`
        : '',
      form.notes ? `*Notes:* ${sanitize(form.notes)}` : '',
      '',
      'Note: Documents (Aadhaar, photo, resume) can be shared on WhatsApp after we contact you.',
      '',
      `_Submitted on: ${now}_`,
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(lines)}`;

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFallbackUrl(url);

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
      <section id="careers" className="section form-section">
        <div className="container">
          <div className="form-container glass-card-strong">
            <div className="form-success">
              <div className="form-success-icon">
                <Icon name="check" size={36} />
              </div>
              <h3 className="section-title">Application Submitted!</h3>
              <p>
                Thank you, <strong>{form.name}</strong>. Your job application details have been directed to our HR recruitment desk on WhatsApp.
              </p>
              <div
                style={{
                  background: 'rgba(21, 101, 216, 0.1)',
                  border: '1px solid var(--glass-border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-md) var(--space-lg)',
                  marginBottom: 'var(--space-xl)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--fs-sm)',
                }}
              >
                <Icon name="shield-check" size={18} />
                <span>
                  <strong>Reminder:</strong> Documents (Aadhaar, photo, resume/discharge book) can be shared on WhatsApp after we contact you.
                </span>
              </div>
              {fallbackUrl && (
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <a
                    href={fallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                  >
                    <Icon name="message-circle" size={18} />
                    Open WhatsApp Chat Again
                  </a>
                </div>
              )}
              <button className="btn btn-secondary" onClick={resetForm}>
                Submit Another Application
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="careers" className="section form-section">
      <div
        className="glow-blob glow-blob-gold"
        style={{ width: 350, height: 350, top: '10%', left: '-5%' }}
      />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">
            <Icon name="users" size={14} />
            Careers / Join Us
          </span>
          <h2 className="section-title">
            Work With <span className="highlight">SISS</span>
          </h2>
          <p className="section-subtitle">
            Join India&apos;s most disciplined security and manpower services team. We offer stable careers, professional training, and on-time payouts.
          </p>
        </div>

        <div className="form-container glass-card-strong reveal">
          <form onSubmit={handleSubmit} noValidate>
            {/* Honeypot */}
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="hp-careers">Leave blank</label>
              <input
                id="hp-careers"
                name="honeypot"
                type="text"
                value={form.honeypot}
                onChange={update}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="form-grid">
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="career-name">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  id="career-name"
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

              {/* Mobile Number */}
              <div className="form-group">
                <label className="form-label" htmlFor="career-mobile">
                  Mobile Number <span className="required">*</span>
                </label>
                <input
                  className={`form-input ${errors.mobile ? 'error' : ''}`}
                  id="career-mobile"
                  name="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={update}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                />
                {errors.mobile && (
                  <div className="form-error">
                    <Icon name="x" size={12} /> {errors.mobile}
                  </div>
                )}
              </div>

              {/* Age */}
              <div className="form-group">
                <label className="form-label" htmlFor="career-age">
                  Age <span className="required">*</span>
                </label>
                <input
                  className={`form-input ${errors.age ? 'error' : ''}`}
                  id="career-age"
                  name="age"
                  type="number"
                  min="18"
                  max="65"
                  value={form.age}
                  onChange={update}
                  placeholder="e.g. 28"
                />
                {errors.age && (
                  <div className="form-error">
                    <Icon name="x" size={12} /> {errors.age}
                  </div>
                )}
              </div>

              {/* City / Location */}
              <div className="form-group">
                <label className="form-label" htmlFor="career-city">
                  City / Location <span className="required">*</span>
                </label>
                <input
                  className={`form-input ${errors.city ? 'error' : ''}`}
                  id="career-city"
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={update}
                  placeholder="e.g. Greater Noida, Delhi, Lucknow"
                />
                {errors.city && (
                  <div className="form-error">
                    <Icon name="x" size={12} /> {errors.city}
                  </div>
                )}
              </div>

              {/* Position Applied For */}
              <div className="form-group form-full">
                <label className="form-label" htmlFor="career-position">
                  Position Applied For <span className="required">*</span>
                </label>
                <select
                  className={`form-select ${errors.position ? 'error' : ''}`}
                  id="career-position"
                  name="position"
                  value={form.position}
                  onChange={update}
                >
                  <option value="">Select a position</option>
                  {JOB_POSITIONS.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
                {errors.position && (
                  <div className="form-error">
                    <Icon name="x" size={12} /> {errors.position}
                  </div>
                )}
              </div>

              {/* Conditional Ex-Serviceman */}
              {form.position === 'Ex-Serviceman' && (
                <div className="form-group form-full">
                  <label className="form-label" htmlFor="career-armed-rank">
                    Armed Forces Rank &amp; Service (Army / Navy / Air Force / Para-Military)
                  </label>
                  <input
                    className="form-input"
                    id="career-armed-rank"
                    name="armedForcesRank"
                    type="text"
                    value={form.armedForcesRank}
                    onChange={update}
                    placeholder="e.g. Havildar (Indian Army, 15 Years)"
                  />
                </div>
              )}

              {/* Conditional Gunman */}
              {form.position === 'Gunman / Armed Guard' && (
                <div className="form-group form-full">
                  <label className="form-label" htmlFor="career-gun-license">
                    Gun License Available?
                  </label>
                  <select
                    className="form-select"
                    id="career-gun-license"
                    name="gunLicense"
                    value={form.gunLicense}
                    onChange={update}
                  >
                    <option value="Yes - Valid All India License">Yes - Valid All India License</option>
                    <option value="Yes - Valid State License">Yes - Valid State License</option>
                    <option value="Under Renewal">Under Renewal</option>
                    <option value="No">No</option>
                  </select>
                </div>
              )}

              {/* Experience */}
              <div className="form-group">
                <label className="form-label" htmlFor="career-exp">
                  Experience (years)
                </label>
                <input
                  className="form-input"
                  id="career-exp"
                  name="experience"
                  type="number"
                  min="0"
                  max="40"
                  value={form.experience}
                  onChange={update}
                  placeholder="e.g. 3"
                />
              </div>

              {/* Education */}
              <div className="form-group">
                <label className="form-label" htmlFor="career-edu">
                  Education / Qualification
                </label>
                <input
                  className="form-input"
                  id="career-edu"
                  name="education"
                  type="text"
                  value={form.education}
                  onChange={update}
                  placeholder="e.g. 10th / 12th / Graduate / ITI"
                />
              </div>

              {/* Previous Employer */}
              <div className="form-group form-full">
                <label className="form-label" htmlFor="career-prev">
                  Previous Employer / Company (optional)
                </label>
                <input
                  className="form-input"
                  id="career-prev"
                  name="previousEmployer"
                  type="text"
                  value={form.previousEmployer}
                  onChange={update}
                  placeholder="e.g. Previous security agency or company name"
                />
              </div>

              {/* Notes */}
              <div className="form-group form-full">
                <label className="form-label" htmlFor="career-notes">
                  Additional Notes (optional)
                </label>
                <textarea
                  className="form-textarea"
                  id="career-notes"
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={update}
                  placeholder="Any additional information, preferred locations or special skills..."
                />
              </div>

              {/* Document note */}
              <div className="form-full">
                <div
                  style={{
                    background: 'rgba(212, 175, 55, 0.08)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-md)',
                    fontSize: 'var(--fs-xs)',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                  }}
                >
                  <Icon name="file-text" size={16} />
                  <span>
                    <strong>Note:</strong> Documents (Aadhaar, photo, resume) can be shared on WhatsApp after we contact you.
                  </span>
                </div>
              </div>
            </div>

            <div className="form-submit-wrap">
              <button
                type="submit"
                className={`btn btn-gold btn-lg ${loading ? 'btn-loading' : ''}`}
                disabled={loading}
              >
                <Icon name="message-circle" size={18} />
                <span>Submit Application &amp; Chat on WhatsApp</span>
              </button>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: 'var(--fs-xs)',
                  maxWidth: 380,
                }}
              >
                We do not charge any registration fees from candidates. Selection is strictly on merit and verification.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
