import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { CONFIG } from '@/config';

export const metadata: Metadata = {
  title: `Privacy Policy | ${CONFIG.brandName}`,
  description: `Privacy Policy for ${CONFIG.companyName} (${CONFIG.brandName}). Learn how we collect, protect, and handle your information.`,
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="section" style={{ paddingTop: '140px', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="glass-card-strong" style={{ padding: 'var(--space-2xl)' }}>
            <span className="section-badge">Legal &amp; Compliance</span>
            <h1 className="section-title" style={{ fontSize: '2.2rem', marginBottom: 'var(--space-md)' }}>
              Privacy <span className="highlight">Policy</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-xl)' }}>
              Last updated: October 2026
            </p>

            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <section>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: 'var(--space-xs)' }}>1. Introduction</h2>
                <p>
                  Welcome to <strong>{CONFIG.companyName}</strong> (&quot;{CONFIG.brandName}&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
                  We respect your privacy and are committed to protecting personal information you provide when visiting our website or engaging our security and manpower services.
                </p>
              </section>

              <section>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: 'var(--space-xs)' }}>2. Information We Collect</h2>
                <p>
                  We collect information that you voluntarily provide to us when submitting booking inquiries, quote requests, or job applications:
                </p>
                <ul style={{ paddingLeft: 'var(--space-lg)', listStyleType: 'disc', marginTop: 'var(--space-xs)' }}>
                  <li>Contact details: Name, phone/mobile number, email address, and site location.</li>
                  <li>Service requirements: Type of security or manpower personnel required, shifts, site category, and dates.</li>
                  <li>Job applicant details: Qualifications, experience, police verification status, and contact details.</li>
                  <li>Technical data: IP address, browser type, device information, and anonymous usage data collected via Google Analytics / Google Ads tags.</li>
                </ul>
              </section>

              <section>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: 'var(--space-xs)' }}>3. How We Use Your Information</h2>
                <p>
                  The data collected is strictly used to:
                </p>
                <ul style={{ paddingLeft: 'var(--space-lg)', listStyleType: 'disc', marginTop: 'var(--space-xs)' }}>
                  <li>Provide quotations, respond to service inquiries, and schedule site surveys.</li>
                  <li>Deploy trained security guards, facility staff, and manpower as per agreements.</li>
                  <li>Communicate via WhatsApp, phone, or email regarding service updates.</li>
                  <li>Measure and optimize the performance of our website and Google advertising campaigns.</li>
                  <li>Comply with applicable legal, police verification, and regulatory obligations in India.</li>
                </ul>
              </section>

              <section>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: 'var(--space-xs)' }}>4. Google Ads &amp; Analytics Disclosure</h2>
                <p>
                  We use Google Ads and Google Analytics to reach potential clients. Third-party vendors, including Google, use cookies to serve ads based on prior visits to our website. You can opt out of Google&apos;s use of cookies or device identifiers by visiting Google&apos;s Ads Settings.
                </p>
              </section>

              <section>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: 'var(--space-xs)' }}>5. Data Protection &amp; Security</h2>
                <p>
                  We implement industry-standard administrative, physical, and technical security safeguards (including SSL/TLS encryption, secure headers, and strict access controls) to protect your personal data from unauthorized access, alteration, or disclosure.
                </p>
              </section>

              <section>
                <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: 'var(--space-xs)' }}>6. Contact Information</h2>
                <p>
                  If you have questions regarding this Privacy Policy, please contact our Data Protection desk:
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
