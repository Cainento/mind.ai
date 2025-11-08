'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    id: 1,
    title: 'Como a IA está transformando pequenas empresas no Brasil',
    excerpt: 'Descubra como pequenas e médias empresas estão usando inteligência artificial para competir com grandes corporações.',
    category: 'IA',
    readTime: '5 min',
    date: '15 Jan 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: '10 formas de automatizar seu negócio com IA',
    excerpt: 'Guia prático com exemplos reais de automação que você pode implementar hoje mesmo na sua empresa.',
    category: 'Automação',
    readTime: '8 min',
    date: '10 Jan 2024',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Chatbots: o futuro do atendimento ao cliente',
    excerpt: 'Entenda por que chatbots inteligentes são essenciais para empresas que querem escalar seu atendimento.',
    category: 'Chatbot',
    readTime: '6 min',
    date: '5 Jan 2024',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65c?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Business Intelligence para PMEs: por onde começar',
    excerpt: 'Aprenda os fundamentos de BI e como começar a usar dados para tomar decisões melhores no seu negócio.',
    category: 'BI',
    readTime: '7 min',
    date: '28 Dez 2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Tendências de IA para 2024: o que esperar',
    excerpt: 'As principais tendências de inteligência artificial que vão impactar negócios este ano.',
    category: 'IA',
    readTime: '10 min',
    date: '20 Dez 2023',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'ROI de projetos de IA: como medir o sucesso',
    excerpt: 'Métricas e KPIs essenciais para avaliar o retorno sobre investimento em projetos de inteligência artificial.',
    category: 'Negócios',
    readTime: '6 min',
    date: '15 Dez 2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
]

export default function BlogGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="space-y-8">
      {articles.map((article, index) => (
        <motion.article
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all card-hover"
        >
          <div className="md:flex">
            <div className="md:w-1/3 h-48 md:h-auto">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="flex items-center space-x-4 mb-3">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium">
                  {article.category}
                </span>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                {article.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <Link
                href={`/blog/${article.id}`}
                className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold group"
              >
                <span>Ler artigo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

