import './globals.css';

import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import {Karantina} from 'next/font/google';

// const inter = Inter({ subsets: ['latin'], weight:['100', '200', '300', '400', '500', '700'] });
// const karantina = Karantina({ subsets: ['latin'], weight:['400'] });

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
      {/* <body className={inter.className}>{children}</body> */}
      <body className="font-Inter">{children}</body>
    </html>
  )
}
