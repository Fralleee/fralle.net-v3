import Header from '@/components/header'
import Image from 'next/image'
import About from './about'
import Experience from './experience'
import Projects from './projects'

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}
