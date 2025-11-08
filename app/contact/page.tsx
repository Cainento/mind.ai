import { Metadata } from 'next'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import Map from '@/components/sections/contact/Map'

export const metadata: Metadata = {
  title: 'Contato — mind.ia',
  description: 'Entre em contato com a mind.ia. Estamos em Goianésia, GO, prontos para transformar seu negócio com IA.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Vamos conversar sobre como a IA pode transformar seu negócio
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ContactForm />
          <ContactInfo />
        </div>
        <Map />
      </div>
    </div>
  )
}

