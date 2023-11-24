import "./globals.scss";

import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';

import Header from "@/app/sections/Header";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: "The most beutiful places of rest",
  icons: [
    {
      url: 'icons/favicon-dark.svg',
      media: '(prefers-color-scheme: dark)',
      rel: 'icon',
      type: 'image/svg',
    },
    {
      url: '/icons/favicon-light.svg',
      media: '(prefers-color-scheme: light)',
      rel: 'icon',
      type: 'image/svg',
    },
  ],
  openGraph: {
    type: 'website',
    url: 'https://travel-6bdg1e2ow-ira-bughaichuks-projects.vercel.app/',
    title: 'CarpTravel',
    description: 'The most beutiful places of rest',
    siteName: 'CarpTravel',
    images: [{ url: '/ogp/Logo.jpg' }, { url: '/ogp/Logo.png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: '10px',
              background: 'rgba(2, 15, 8, 0.75)',
              color: '#fff'
            },
            duration: 2500,
          }}
        />
      </body>
    </html>
  );
}
