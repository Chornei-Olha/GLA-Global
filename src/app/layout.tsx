import React from 'react';
import '../styles/index.css';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'GLA',
  description: 'GLA',
  icons: {
    icon: [{ url: '/favicon-v2.ico' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body>
        {children}
        <script
          type="module"
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbuddhasa1071back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.7"
        ></script>
      </body>
    </html>
  );
}
