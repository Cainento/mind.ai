import Hero from '@/components/sections/Hero'
import ServicesShowcase from '@/components/sections/ServicesShowcase'
import AboutPreview from '@/components/sections/AboutPreview'
import Testimonials from '@/components/sections/Testimonials'
import Newsletter from '@/components/sections/Newsletter'
import Stats from '@/components/sections/Stats'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesShowcase />
      <Testimonials />
      <Newsletter />
    </>
  )
}

