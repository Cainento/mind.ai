'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Clock, Linkedin, Instagram, Youtube } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Localização',
    content: 'Goianésia, GO - Brasil',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'contato@mind.ia',
    link: 'mailto:contato@mind.ia',
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '+55 (62) 99999-9999',
    link: 'tel:+5562999999999',
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    content: 'Segunda a Sexta, 9h às 18h',
  },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/mind-ia', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/mind.ia', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@GlobalLearner', label: 'YouTube' },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Informações de Contato
        </h2>
        <div className="space-y-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            const content = info.link ? (
              <a
                href={info.link}
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                {info.content}
              </a>
            ) : (
              <span className="text-gray-700 dark:text-gray-300">{info.content}</span>
            )

            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {info.title}
                  </h3>
                  {content}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          Siga-nos
        </h3>
        <div className="flex space-x-4">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <Icon className="w-6 h-6" />
              </a>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

