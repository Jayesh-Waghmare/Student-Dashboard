import type { Metadata } from "next"
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Learning Dashboard",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}

