'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageSquare, Workflow, BarChart3, Wand2, Settings, TrendingUp, Check } from 'lucide-react'

const services = [
  {
    icon: MessageSquare,
    title: 'Chatbots e Assistentes Virtuais',
    description: 'Atendimento automatizado 24/7 com IA conversacional natural.',
    features: [
      'Integração com WhatsApp, site e redes sociais',
      'Respostas inteligentes e contextualizadas',
      'Análise de sentimento e escalação humana quando necessário',
      'Métricas detalhadas de performance',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Workflow,
    title: 'Automação de Processos',
    description: 'Otimize workflows e elimine tarefas repetitivas com automação inteligente.',
    features: [
      'Automação de processos internos',
      'Integração entre sistemas e plataformas',
      'Workflows personalizados para seu negócio',
      'Redução de erros e aumento de produtividade',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados e Business Intelligence',
    description: 'Dashboards inteligentes com insights acionáveis para tomada de decisão.',
    features: [
      'Visualização de dados em tempo real',
      'Análise preditiva e tendências',
      'Relatórios automatizados personalizados',
      'Integração com múltiplas fontes de dados',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wand2,
    title: 'Ferramentas Personalizadas de Marketing e Vendas',
    description: 'IA customizada para otimizar suas estratégias de marketing e vendas.',
    features: [
      'Geração automática de conteúdo',
      'Segmentação inteligente de público',
      'Otimização de campanhas em tempo real',
      'Análise de comportamento do cliente',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Settings,
    title: 'Integração e Consultoria',
    description: 'Conecte sua IA com sistemas existentes e receba consultoria especializada.',
    features: [
      'Integração com ERPs e CRMs',
      'Consultoria estratégica em IA',
      'Treinamento de equipes',
      'Suporte contínuo e manutenção',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Soluções Customizadas',
    description: 'Desenvolvimento de ferramentas de IA sob medida para necessidades específicas.',
    features: [
      'Análise de necessidades do negócio',
      'Desenvolvimento de soluções exclusivas',
      'Testes e validação',
      'Implementação e acompanhamento',
    ],
    color: 'from-teal-500 to-blue-500',
  },
]

export default function ServicesList() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

