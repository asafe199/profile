import type { Metadata } from 'next';
import './globals.css';
import { profile } from '@/lib/data';

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary.slice(0, 155),
  keywords: [
    'Asafe Oliveira',
    'Software Engineer',
    'Java',
    'Spring',
    'TypeScript',
    'NodeJS',
    'Full Stack',
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
    type: 'website',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0a0e12" />
      </head>
      <body>{children}</body>
    </html>
  );
}
