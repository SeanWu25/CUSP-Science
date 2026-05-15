import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import MainResult from './sections/MainResult'
import Benchmark from './sections/Benchmark'
import FourTasks from './sections/FourTasks'
import Examples from './sections/Examples'
import Architecture from './sections/Architecture'
import Results from './sections/Results'
import KeyFindings from './sections/KeyFindings'
import KnowledgeVsForesight from './sections/KnowledgeVsForesight'
import Comparison from './sections/Comparison'
import TimeCapsule from './sections/TimeCapsule'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      <Navigation />
      <Hero />
      <MainResult />
      <Benchmark />
      <FourTasks />
      <Examples />
      <Architecture />
      <Results />
      <KeyFindings />
      <KnowledgeVsForesight />
      <Comparison />
      <TimeCapsule />
      <Footer />
    </div>
  )
}
