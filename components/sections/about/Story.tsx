'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, Target, Users } from 'lucide-react'

export default function Story() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timeline = [
    {
      year: '2023',
      title: 'A Visão',
      description: 'Nasceu a ideia de democratizar a IA para pequenas e médias empresas brasileiras.',
      icon: Lightbulb,
    },
    {
      year: '2024',
      title: 'O Começo',
      description: 'Primeiros projetos entregues, transformando processos e resultados de clientes.',
      icon: Target,
    },
    {
      year: 'Hoje',
      title: 'Crescimento',
      description: 'Mais de 50 empresas confiam na mind.ia para impulsionar seus negócios com IA.',
      icon: Users,
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient text-center">
            Nossa História
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              A <strong>mind.ia</strong> nasceu em Goianésia, Goiás, da visão de tornar a inteligência artificial acessível para empreendedores locais. Observamos que grandes empresas já utilizavam IA para otimizar processos, mas pequenas e médias empresas ficavam de fora por falta de acesso e conhecimento.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Decidimos mudar isso. Criamos soluções de IA descomplicadas, práticas e acessíveis, focadas nas necessidades reais do mercado brasileiro. Cada projeto é uma oportunidade de transformar um negócio e impulsionar o futuro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

