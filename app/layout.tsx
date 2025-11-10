// This file is a Server Component
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'GlobaSend Prototype',
  description: 'The future of cross-border payments.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}