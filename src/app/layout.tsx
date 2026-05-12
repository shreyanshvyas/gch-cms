import './globals.css'
import { Hanken_Grotesk, Space_Grotesk } from 'next/font/google'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
})

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${hanken.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  )
}