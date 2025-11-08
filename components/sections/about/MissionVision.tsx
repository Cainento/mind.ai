'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, Heart, Zap } from 'lucide-react'

const values = [
  {
    icon: Eye,
    title: 'Missão',
    content: 'Democratizar o acesso à inteligência artificial para pequenas e médias empresas brasileiras, oferecendo soluções práticas, acessíveis e transformadoras.',
  },
  {
    icon: Zap,
    title: 'Visão',
    content: 'Ser a principal referência em IA para PMEs no Brasil, reconhecida pela inovação, qualidade e impacto positivo nos negócios de nossos clientes.',
  },
  {
    icon: Heart,
    title: 'Valores',
    content: 'Inovação constante, acessibilidade, eficiência, criatividade e tecnologia com propósito. Acreditamos que a IA deve servir pessoas e transformar negócios.',
  },
]

export default function MissionVision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient text-center">
            Missão, Visão e Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all card-hover"
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.content}
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

