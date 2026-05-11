import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import Benchmark from './sections/Benchmark'
import Comparison from './sections/Comparison'
import FourTasks from './sections/FourTasks'
import KeyFindings from './sections/KeyFindings'
import Architecture from './sections/Architecture'
import Results from './sections/Results'
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
      <Benchmark />
      <Comparison />
      <FourTasks />
      <KeyFindings />
      <Architecture />
      <Results />
      <Footer />
    </div>
  )
}
