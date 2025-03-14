import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://sch.gitno.de"),
  title: "SCHOST",
  description: "High performance hosting solutions",
  keywords:
    "dedicated servers, web hosting, bare metal servers, high performance hosting, enterprise hosting, SCHost",
  author: "SCHost",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sch.gitno.de",
    site_name: "SCHost",
    title: "SCHost - Premium Dedicated Servers",
    description: "High-performance dedicated servers with enterprise-grade hardware",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SCHost Dedicated Servers",
      },
    ],
  },
};

export const viewport = {
  themeColor: '#7964e4',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  viewportFit: 'cover'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-zinc-900">
      <head>
        <meta name="theme-color" content="#7964e4" />
        <meta name="color-scheme" content="dark" />
        <style>{`
          :root {
            --primary-color: #7964e4;
          }
          .text-primary { color: var(--primary-color); }
          .bg-primary { background-color: var(--primary-color); }
          .border-primary { border-color: var(--primary-color); }
        `}</style>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#7964e4" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased bg-zinc-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
