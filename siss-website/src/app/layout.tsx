import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shivay India Securitas Services (SISS) | Professional Security & Manpower Solutions',
  description:
    'Shivay India Securitas Services (SISS) provides professional security guards, ex-servicemen personnel, armed guards, corporate housekeeping, and facility manpower solutions across India.',
  keywords: [
    'SISS',
    'Shivay India Securitas Services',
    'Security Guards Greater Noida',
    'Manpower solutions Noida',
    'Ex-Servicemen Security',
    'Facility management services',
    'Armed guards Delhi NCR',
    'Housekeeping manpower India',
    'Bouncers for events',
  ],
  authors: [{ name: 'Shivay India Securitas Services' }],
  creator: 'SISS Group',
  metadataBase: new URL('https://shivaysecuritas.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shivaysecuritas.com',
    siteName: 'Shivay India Securitas Services',
    title: 'Shivay India Securitas Services (SISS) | Professional Security for a Safer Tomorrow',
    description:
      'Premier security and manpower solutions for residential societies, commercial facilities, and industries. Verified staff, site supervision, and 24/7 client support.',
    images: [
      {
        url: '/assets/logo.png',
        width: 800,
        height: 800,
        alt: 'SISS Group Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivay India Securitas Services (SISS)',
    description: 'Professional Security and Manpower Solutions PAN India.',
    images: ['/assets/logo.png'],
  },
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
