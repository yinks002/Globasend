
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
      
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      
      <body>
        {children}
      </body>
    </html>
  );
}