'use client'

import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Programs } from '@/components/programs'
import { About } from '@/components/about'
import { ImpactStory } from '@/components/impact-story'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Programs />
      <About />
      <ImpactStory />
      <Contact />
      <Footer />
    </main>
  )
}
