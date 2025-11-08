'use client'

import { motion } from 'framer-motion'
import { X, TrendingUp, CheckCircle } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  client: string
  image: string
  problem: string
  solution: string
  results: Array<{ metric: string; label: string }>
  technologies: string[]
}

interface PortfolioModalProps {
  project: Project
  onClose: () => void
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative h-64 md:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
              {project.category}
            </span>
            <span className="text-gray-600 dark:text-gray-400">•</span>
            <span className="text-gray-600 dark:text-gray-400">{project.client}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {project.title}
          </h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                Desafio
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{project.problem}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                Solução
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{project.solution}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Resultados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center"
                  >
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                      {result.metric}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                Tecnologias Utilizadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

