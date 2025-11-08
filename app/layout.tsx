import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'mind.ia — Inteligência que impulsiona o futuro',
  description: 'Agência brasileira de IA focada em automação, business intelligence e inovação local. Empoderamos pequenas e médias empresas através de soluções acessíveis de inteligência artificial.',
  keywords: 'IA, inteligência artificial, automação, business intelligence, chatbots, Brasil, Goianésia',
  authors: [{ name: 'mind.ia' }],
  openGraph: {
    title: 'mind.ia — Inteligência que impulsiona o futuro',
    description: 'Agência brasileira de IA focada em automação e inovação para pequenas e médias empresas.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'mind.ia',
              description: 'Agência brasileira de IA focada em automação e business intelligence',
              url: 'https://mind.ia',
              logo: 'https://mind.ia/logo.png',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Goianésia',
                addressRegion: 'GO',
                addressCountry: 'BR',
              },
              sameAs: [
                'https://linkedin.com/company/mind-ia',
                'https://instagram.com/mind.ia',
                'https://youtube.com/@GlobalLearner',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}

