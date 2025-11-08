import { Metadata } from 'next'
import ServicesList from '@/components/sections/services/ServicesList'
import Pricing from '@/components/sections/services/Pricing'
import CTA from '@/components/sections/services/CTA'

export const metadata: Metadata = {
  title: 'Serviços — mind.ia',
  description: 'Soluções de IA para automação, chatbots, análise de dados e ferramentas personalizadas para seu negócio.',
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluções inteligentes de IA projetadas para transformar seu negócio
          </p>
        </div>
      </div>
      <ServicesList />
      <Pricing />
      <CTA />
    </div>
  )
}

