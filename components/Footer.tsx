import Link from 'next/link'
import { Linkedin, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    empresa: [
      { href: '/about', label: 'Sobre Nós' },
      { href: '/services', label: 'Serviços' },
      { href: '/portfolio', label: 'Portfólio' },
      { href: '/contact', label: 'Contato' },
    ],
    recursos: [
      { href: '/blog', label: 'Blog' },
      { href: '/blog?category=ia', label: 'Tendências de IA' },
      { href: '/blog?category=automacao', label: 'Automação' },
      { href: '/contact', label: 'Suporte' },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/mind-ia', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/mind.ia', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@GlobalLearner', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">m</span>
              </div>
              <span className="text-2xl font-bold font-display text-gradient">mind.ia</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Inteligência que impulsiona o futuro. Empoderando pequenas e médias empresas através de soluções acessíveis de inteligência artificial.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} mind.ia — Inteligência que impulsiona o futuro.
          </p>
        </div>
      </div>
    </footer>
  )
}

