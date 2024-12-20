import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "OTI Chile - Dashboard",
  description: "Dashboard for data visualization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-tr from-pink-50 to-indigo-100 flex flex-col`}
      >
          {/* <Navbar /> */}
          {children}
          <Footer />
      </body>
    </html>
  );
}
