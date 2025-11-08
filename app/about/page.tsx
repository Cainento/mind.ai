import { Metadata } from 'next'
import Story from '@/components/sections/about/Story'
import Team from '@/components/sections/about/Team'
import MissionVision from '@/components/sections/about/MissionVision'

export const metadata: Metadata = {
  title: 'Sobre Nós — mind.ia',
  description: 'Conheça a história da mind.ia e nossa missão de democratizar a IA para empreendedores brasileiros.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Story />
      <MissionVision />
      <Team />
    </div>
  )
}

