'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageSquare, Workflow, BarChart3, Wand2, Settings, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    icon: MessageSquare,
    title: 'Chatbots & Assistentes Virtuais',
    description: 'Atendimento 24/7 automatizado com IA conversacional.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Workflow,
    title: 'Automação de Processos',
    description: 'Otimize workflows e elimine tarefas repetitivas.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados & BI',
    description: 'Dashboards inteligentes com insights acionáveis.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wand2,
    title: 'Ferramentas de Marketing',
    description: 'IA personalizada para vendas e marketing digital.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Settings,
    title: 'Integração de Sistemas',
    description: 'Conecte sua IA com ferramentas existentes.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Consultoria em IA',
    description: 'Estratégias personalizadas para seu negócio.',
    color: 'from-teal-500 to-blue-500',
  },
]

export default function ServicesShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Nossas Soluções
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tecnologia de ponta adaptada para as necessidades do mercado brasileiro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-all card-hover"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            <span>Ver Todos os Serviços</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

