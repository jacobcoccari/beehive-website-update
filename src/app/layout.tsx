import type { Metadata } from "next";
import { GeistSans } from 'geist/font'
import "./globals.css";

export const metadata: Metadata = {
  title: "Beehive Advisors - AI-Powered Learning Solutions",
  description: "Transform your business with AI-powered learning and development strategies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="container-custom">{children}</body>
    </html>
  )
}
