'use client'

import { motion } from 'framer-motion'
import { Mail, Tag, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const categories = [
  { name: 'IA', count: 12 },
  { name: 'Automação', count: 8 },
  { name: 'Chatbot', count: 6 },
  { name: 'BI', count: 5 },
  { name: 'Negócios', count: 10 },
]

const popularPosts = [
  { title: 'Como a IA está transformando pequenas empresas', views: '1.2k' },
  { title: '10 formas de automatizar seu negócio', views: '980' },
  { title: 'Chatbots: o futuro do atendimento', views: '850' },
]

export default function BlogSidebar() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <div className="space-y-8">
      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-primary-600 to-purple-600 p-6 rounded-xl text-white"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Mail className="w-5 h-5" />
          <h3 className="text-xl font-bold">Newsletter</h3>
        </div>
        <p className="text-white/90 mb-4 text-sm">
          Receba nossos melhores conteúdos sobre IA e automação.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
          >
            {submitted ? '✓ Inscrito!' : 'Inscrever-se'}
          </button>
        </form>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Tag className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Categorias</h3>
        </div>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href={`/blog?category=${category.name.toLowerCase()}`}
                className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <span>{category.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Popular Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mais Lidos</h3>
        </div>
        <ul className="space-y-4">
          {popularPosts.map((post, index) => (
            <li key={index}>
              <a
                href="#"
                className="block group"
              >
                <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1 line-clamp-2">
                  {post.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {post.views} visualizações
                </p>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

