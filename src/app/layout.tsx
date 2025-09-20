import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';
import "./globals.css";

// Optimize font loading
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true
});

// Create a combined font class variable for Inter
const interVariable = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true
});

// Dynamic imports for layout components
const Navbar = dynamic(() => import('../components/Navbar'), {
  ssr: true,
  loading: () => <div className="h-20 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg"></div>
});

const Footer = dynamic(() => import('../components/Footer'), {
  ssr: true,
  loading: () => <div className="h-24 bg-slate-900"></div>
});

export const metadata: Metadata = {
  title: "The Ascend Network - Transform. Aspire. Network.",
  description: "TAN is a Pan-African network empowering youth through strategic programs, mentorship, and sustainable development initiatives across Africa.",
  keywords: "TAN, The Ascend Network, Africa, youth empowerment, networking, development, Pan-African",
  icons: {
    icon: [
      {
        url: '/tanlogo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/tanlogo.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: "The Ascend Network - Transform. Aspire. Network.",
    description: "TAN is a Pan-African network empowering youth through strategic programs, mentorship, and sustainable development initiatives across Africa.",
    type: "website",
    images: [
      {
        url: '/tanlogo.png',
        width: 1200,
        height: 630,
        alt: 'The Ascend Network Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interVariable.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />
      </head>
      <body className="bg-brand-blue-50 text-brand-black min-h-screen flex flex-col antialiased font-inter">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
