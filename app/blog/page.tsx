import { Metadata } from 'next'
import BlogGrid from '@/components/sections/blog/BlogGrid'
import BlogSidebar from '@/components/sections/blog/BlogSidebar'

export const metadata: Metadata = {
  title: 'Blog — mind.ia',
  description: 'Artigos sobre tendências de IA, automação para pequenas empresas e inovação tecnológica no Brasil.',
}

export default function BlogPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conteúdo sobre IA, automação e inovação para seu negócio
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogGrid />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

