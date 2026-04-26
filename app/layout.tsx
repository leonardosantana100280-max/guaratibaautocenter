import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Guaratiba Auto Center | Mais de 30 Anos de Experiência',
  description: 'Oficina mecânica com mais de 30 anos de experiência em Guaratiba. Serviços de suspensão, freios, troca de óleo, revisão completa e muito mais. Atendimento de qualidade e confiança.',
  keywords: ['oficina mecânica', 'auto center', 'guaratiba', 'suspensão', 'freios', 'troca de óleo', 'revisão', 'mecânico'],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Guaratiba Auto Center | Mais de 30 Anos de Experiência',
    description: 'Oficina mecânica com mais de 30 anos de experiência. Serviços de qualidade e confiança.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
