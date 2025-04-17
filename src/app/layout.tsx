import { GeistSans } from "geist/font/sans"
import "./globals.css"

export const metadata = {
  title: "Beehive Advisors",
  description: "Beehive Advisors is a boutique consulting firm specializing in strategic advisory services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
