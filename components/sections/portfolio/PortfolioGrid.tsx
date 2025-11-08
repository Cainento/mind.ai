'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, X, TrendingUp, Clock, Users } from 'lucide-react'
import PortfolioModal from './PortfolioModal'

const projects = [
  {
    id: 1,
    title: 'Chatbot para E-commerce',
    category: 'Chatbot',
    client: 'TechStart Goiás',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    problem: 'Atendimento ao cliente sobrecarregado com perguntas repetitivas, resultando em longos tempos de espera e perda de vendas.',
    solution: 'Desenvolvemos um chatbot inteligente integrado ao WhatsApp e site, capaz de responder perguntas frequentes, processar pedidos e escalar para atendimento humano quando necessário.',
    results: [
      { metric: '80%', label: 'Redução no tempo de resposta' },
      { metric: '45%', label: 'Aumento em conversões' },
      { metric: '24/7', label: 'Atendimento disponível' },
    ],
    technologies: ['IA Conversacional', 'WhatsApp API', 'NLP'],
  },
  {
    id: 2,
    title: 'Automação de Processos Financeiros',
    category: 'Automação',
    client: 'Comércio Digital',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    problem: 'Processo manual de conciliação bancária e geração de relatórios consumindo mais de 20 horas semanais da equipe financeira.',
    solution: 'Sistema automatizado que integra bancos, ERPs e planilhas, realizando conciliação automática, geração de relatórios e alertas inteligentes.',
    results: [
      { metric: '20h', label: 'Economia semanal' },
      { metric: '95%', label: 'Precisão na conciliação' },
      { metric: 'R$ 50k', label: 'Economia anual' },
    ],
    technologies: ['RPA', 'API Integration', 'Business Intelligence'],
  },
  {
    id: 3,
    title: 'Dashboard de Business Intelligence',
    category: 'BI',
    client: 'Inovação Local',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    problem: 'Dificuldade em visualizar e analisar dados de vendas, marketing e operações de forma integrada e em tempo real.',
    solution: 'Dashboard personalizado com visualizações interativas, análise preditiva e relatórios automatizados, integrando múltiplas fontes de dados.',
    results: [
      { metric: '30%', label: 'Melhoria na tomada de decisão' },
      { metric: '50%', label: 'Redução no tempo de análise' },
      { metric: 'Real-time', label: 'Dados em tempo real' },
    ],
    technologies: ['Power BI', 'Python', 'Machine Learning'],
  },
  {
    id: 4,
    title: 'Assistente Virtual para RH',
    category: 'Chatbot',
    client: 'Empresa Confidencial',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
    problem: 'Departamento de RH sobrecarregado com perguntas frequentes sobre benefícios, políticas e processos internos.',
    solution: 'Assistente virtual inteligente que responde perguntas sobre RH, agenda reuniões e direciona funcionários para os recursos corretos.',
    results: [
      { metric: '60%', label: 'Redução em tickets de suporte' },
      { metric: '90%', label: 'Satisfação dos funcionários' },
      { metric: 'Instant', label: 'Respostas instantâneas' },
    ],
    technologies: ['NLP', 'Knowledge Base', 'HRIS Integration'],
  },
  {
    id: 5,
    title: 'Otimização de Campanhas de Marketing',
    category: 'Marketing',
    client: 'Startup Local',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    problem: 'Campanhas de marketing com baixo ROI e dificuldade em identificar o público-alvo ideal e o melhor momento para contato.',
    solution: 'Sistema de IA que analisa comportamento do cliente, otimiza segmentação, personaliza mensagens e determina o melhor momento para contato.',
    results: [
      { metric: '3x', label: 'Aumento no ROI' },
      { metric: '40%', label: 'Melhoria em conversões' },
      { metric: 'Automático', label: 'Otimização contínua' },
    ],
    technologies: ['Machine Learning', 'Marketing Automation', 'Analytics'],
  },
  {
    id: 6,
    title: 'Sistema de Previsão de Demanda',
    category: 'BI',
    client: 'Distribuidora Regional',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
    problem: 'Dificuldade em prever demanda de produtos, resultando em excesso de estoque ou falta de produtos.',
    solution: 'Modelo de machine learning que analisa histórico de vendas, sazonalidade e tendências para prever demanda futura com alta precisão.',
    results: [
      { metric: '25%', label: 'Redução em estoque' },
      { metric: '15%', label: 'Aumento em vendas' },
      { metric: '85%', label: 'Precisão nas previsões' },
    ],
    technologies: ['Time Series Analysis', 'ML Models', 'Forecasting'],
  },
]

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <>
      <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer card-hover group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {project.client}
                    </span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                    {project.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <PortfolioModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

