import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata = {
  metadataBase: new URL('https://sch.gitno.de'),
  title: {
    default: "SCHost - Premium Dedicated Servers | High Performance Hosting Solutions",
    template: "SCHOST - Premium Cloud Hosting Services"
  },
  description: "Experience unparalleled performance with SCHost's dedicated servers. Enterprise-grade hardware, 24/7 support, and global infrastructure for your hosting needs.",
  keywords: "dedicated servers, web hosting, bare metal servers, high performance hosting, enterprise hosting, SCHost",
  author: "SCHost",
  viewport: "width=device-width, initial-scale=1.0",
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
  themeColor: "#7964e4"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
