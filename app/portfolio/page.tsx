import { Metadata } from 'next'
import PortfolioGrid from '@/components/sections/portfolio/PortfolioGrid'

export const metadata: Metadata = {
  title: 'Portfólio — mind.ia',
  description: 'Conheça nossos projetos de sucesso e veja como ajudamos empresas a transformar seus negócios com IA.',
}

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Nossos Projetos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Cases de sucesso que demonstram o poder da inteligência artificial
          </p>
        </div>
      </div>
      <PortfolioGrid />
    </div>
  )
}

