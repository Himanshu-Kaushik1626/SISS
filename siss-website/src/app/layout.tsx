import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SISS Group | Professional Security & Manpower Services – 500+ Happy Clients',
  description:
    'SISS Group (Shivay India Securitas Services) provides professional security guards, ex-servicemen, armed guards, housekeeping, and facility manpower solutions across India. 500+ happy clients, 7000+ skilled workers, 10+ years of experience.',
  keywords: [
    'SISS Group',
    'Shivay India Securitas Services',
    'Security Guards India',
    'Security Guards Greater Noida',
    'Manpower solutions Noida',
    'Manpower solutions Delhi NCR',
    'Ex-Servicemen Security',
    'Facility management services',
    'Armed guards Delhi NCR',
    'Housekeeping manpower India',
    'Bouncers for events',
    'Security agency near me',
    'Professional security services',
    'Corporate security solutions',
    'Residential security guards',
    'Industrial security services',
    'Event security management',
    'Skilled workers manpower',
  ],
  authors: [{ name: 'SISS Group – Shivay India Securitas Services' }],
  creator: 'SISS Group',
  publisher: 'SISS Group',
  metadataBase: new URL('https://sissgroup.com'),
  alternates: {
    canonical: 'https://sissgroup.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sissgroup.com',
    siteName: 'SISS Group – Security & Manpower Services',
    title: 'SISS Group | Professional Security & Manpower Services',
    description:
      'Premier security and manpower solutions for residential societies, commercial facilities, and industries across India. 500+ happy clients. Verified staff, site supervision, and 24/7 support.',
    images: [
      {
        url: '/assets/logo-new.png',
        width: 800,
        height: 800,
        alt: 'SISS Group Logo – Security & Manpower Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SISS Group | Security & Manpower Services',
    description: 'Professional Security and Manpower Solutions PAN India. 500+ Happy Clients, 7000+ Skilled Workers.',
    images: ['/assets/logo-new.png'],
  },
  icons: {
    icon: '/assets/logo-new.png',
    apple: '/assets/logo-new.png',
  },
  verification: {
    // Add your Google verification code here when you have it
    // google: 'your-google-verification-code',
  },
  category: 'Security Services',
};

// JSON-LD structured data for Google Ads & rich results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SISS Group – Shivay India Securitas Services',
  alternateName: 'SISS Group',
  url: 'https://sissgroup.com',
  logo: 'https://sissgroup.com/assets/logo-new.png',
  image: 'https://sissgroup.com/assets/logo-new.png',
  description:
    'Professional security guards, ex-servicemen, armed guards, housekeeping, and facility manpower solutions across India.',
  telephone: ['+919528474547', '+917819977334', '+919675892177', '+919634055001'],
  email: 'info@sissgroup.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'SF 214A, 2nd Floor, Gaur City Center, Sector 4',
    addressLocality: 'Greater Noida West',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201009',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.5887',
    longitude: '77.4252',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '500',
    bestRating: '5',
  },
  sameAs: [],
  serviceType: [
    'Security Guard Services',
    'Ex-Servicemen Security',
    'Armed Security Guards',
    'Housekeeping Staff',
    'Facility Management',
    'Manpower Solutions',
    'Event Security',
    'Residential Security',
    'Corporate Security',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#07162b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Security headers via meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(self)" />

        {/* Content Security Policy - relaxed for Google Ads */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://tpc.googlesyndication.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net; frame-src 'self' https://www.google.com https://tpc.googlesyndication.com https://googleads.g.doubleclick.net;"
        />

        {/* Google Ads / Analytics placeholder - Replace YOUR_GTAG_ID with your actual Google Tag ID */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GTAG_ID"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GTAG_ID');
        `}} />
        */}

        {/* JSON-LD Structured Data for rich results & Google Ads */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
