import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Cursor from './components/Cursor'
import Hero from './components/Hero'
import VideoShowcase from './components/VideoShowcase'
import About from './components/About'
import ContactLinks from './components/ContactLinks'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [loading, setLoading] = useState(true)
  const appRef = useRef(null)

  useEffect(() => {
    const loaderTimer = setTimeout(() => setLoading(false), 900)

    const lenis = new Lenis({
      duration: 1.3,
      smoothWheel: true,
      lerp: 0.08,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      clearTimeout(loaderTimer)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (!appRef.current || loading) return

    const sections = gsap.utils.toArray('.reveal')
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60, filter: 'blur(16px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            once: true,
          },
        },
      )
    })

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }, [loading])

  return (
    <div className="app" ref={appRef}>
      <Cursor />
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <motion.span
              initial={{ letterSpacing: '0.2em', opacity: 0 }}
              animate={{ letterSpacing: '0.6em', opacity: 1 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            >
              GHUFRAN
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <main aria-hidden={loading}>
        <Hero />
        <About />
        <VideoShowcase />
        <ContactLinks />
      </main>
    </div>
  )
}

export default App
