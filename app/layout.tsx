import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'Main peaces to travel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      </head>
      <body className="font-Inter">{children}</body>
    </html>
  )
}
