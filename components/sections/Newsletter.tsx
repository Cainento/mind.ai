'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Newsletter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your email service
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Receba insights sobre IA, automação e inovação diretamente no seu e-mail
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              {submitted ? (
                <>
                  <span>✓</span>
                  <span>Inscrito!</span>
                </>
              ) : (
                <>
                  <span>Inscrever-se</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
          <p className="text-sm text-white/80 mt-4">
            Sem spam. Cancele a qualquer momento.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

