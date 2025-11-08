'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'CEO, TechStart Goiás',
    content: 'A mind.ia transformou nosso atendimento ao cliente. O chatbot reduziu nosso tempo de resposta em 80% e aumentou a satisfação dos clientes.',
    rating: 5,
  },
  {
    name: 'João Santos',
    role: 'Diretor, Comércio Digital',
    content: 'A automação implementada pela mind.ia economizou mais de 20 horas semanais em tarefas repetitivas. ROI incrível!',
    rating: 5,
  },
  {
    name: 'Ana Costa',
    role: 'Fundadora, Inovação Local',
    content: 'Os dashboards de BI criados pela equipe são intuitivos e nos dão insights valiosos. Recomendo muito!',
    rating: 5,
  },
]

export default function Testimonials() {
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Resultados reais de empresas que confiaram na mind.ia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all card-hover relative"
            >
              <Quote className="w-12 h-12 text-primary-500/20 absolute top-4 right-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

