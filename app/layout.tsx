import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const displaySerif = Instrument_Serif({
  variable: '--font-display-serif',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Travel & Venue · ETHConf 2027',
  description:
    'Plan your ETHConf 2027 stay, explore Javits Center, and compare partner hotels by distance and price.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Travel & Venue · ETHConf 2027',
    description:
      'Compare ETHConf partner hotels by walk time to the Javits Center and nightly rate.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} antialiased`}
      >
        <a
          href="#stays"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to hotel results
        </a>
        {children}
      </body>
    </html>
  );
}
