import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { CONFIG } from '@/config';

export const metadata: Metadata = {
  title: `Terms & Conditions | ${CONFIG.brandName}`,
  description: `Terms and Conditions for services provided by ${CONFIG.companyName} (${CONFIG.brandName}).`,
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditions() {
  return (
    <>
      <Navbar />
      <main className="section" style={{ paddingTop: '140px', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="glass-card-strong" style={{ padding: 'var(--space-2xl)' }}>
            <span className="section-badge">Legal Terms</span>
            <h1 className="section-title" style={{ fontSize: '2.2rem', marginBottom: 'var(--space-md)' }}>
              Terms &amp; <span className="highlight">Conditions</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-xl)' }}>
              Last updated: October 2026
            </p>

            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <section>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: 'var(--space-xs)' }}>1. Agreement to Terms</h2>
                <p>
                  By accessing the website of <strong>{CONFIG.companyName}</strong> (&quot;{CONFIG.brandName}&quot;) or requesting quotes and services, you agree to comply with and be bound by these Terms and Conditions.
                </p>
              </section>

              <section>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: 'var(--space-xs)' }}>2. Scope of Services</h2>
                <p>
                  SISS Group provides licensed and verified security guards, ex-servicemen personnel, bouncers, armed security (in compliance with the Indian Arms Act and local police licensing), housekeeping staff, and facility manpower solutions. All deployments are subject to formal site assessment, agreed Service Level Agreements (SLAs), and client contracts.
                </p>
              </section>

              <section>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: 'var(--space-xs)' }}>3. Quotations &amp; Engagements</h2>
                <p>
                  Inquiries submitted via our online form or WhatsApp generate preliminary quotations. Final pricing is confirmed based on personnel count, shift timing, risk assessment, and equipment requirements.
                </p>
              </section>

              <section>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: 'var(--space-xs)' }}>4. Compliance &amp; Verification</h2>
                <p>
                  All personnel provided by SISS undergo background verification, document validation, and training. Armed security personnel hold valid arms licenses issued by competent government authorities.
                </p>
              </section>

              <section>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: 'var(--space-xs)' }}>5. Contact Us</h2>
                <p>
                  For any questions regarding our terms of service:
                </p>
                <p style={{ marginTop: 'var(--space-xs)' }}>
                  <strong>{CONFIG.companyName} ({CONFIG.brandName})</strong><br />
                  Office: {CONFIG.address}<br />
                  Email: <a href={`mailto:${CONFIG.email}`} style={{ color: 'var(--gold)' }}>{CONFIG.email}</a><br />
                  Phone: <a href={`tel:${CONFIG.phoneRaw}`} style={{ color: 'var(--gold)' }}>{CONFIG.phone}</a>
                </p>
              </section>
            </div>

            <div style={{ marginTop: 'var(--space-2xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--border-color)' }}>
              <Link href="/" className="btn btn-secondary">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
