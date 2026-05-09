import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const textVariants = {
  hidden: { opacity: 0, y: 34 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const particlesInit = async (engine) => {
    await loadSlim(engine)
  }

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        number: { value: 55, density: { enable: true } },
        color: { value: '#6ed2ff' },
        links: { enable: true, color: '#5dbbf8', opacity: 0.2, distance: 120 },
        move: { enable: true, speed: 0.35 },
        opacity: { value: { min: 0.08, max: 0.25 } },
        size: { value: { min: 1, max: 3 } },
      },
    }),
    [],
  )

  const onMove = (event) => {
    const { innerWidth, innerHeight } = window
    const x = (event.clientX / innerWidth - 0.5) * 18
    const y = (event.clientY / innerHeight - 0.5) * 18
    setOffset({ x, y })
  }

  return (
    <section className="hero" onMouseMove={onMove}>
      <Particles className="hero-particles" id="hero-particles" init={particlesInit} options={options} />
      <div
        className="hero-light"
        style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
        aria-hidden="true"
      />
      <motion.p className="hero-kicker" variants={textVariants} initial="hidden" animate="show" custom={0.2}>
        Video Editor • Motion Storyteller
      </motion.p>
      <motion.h1 variants={textVariants} initial="hidden" animate="show" custom={0.35}>
        Crafting cinematic edits that feel like worlds you can step into.
      </motion.h1>
      <motion.p className="hero-description" variants={textVariants} initial="hidden" animate="show" custom={0.5}>
        Premium post-production for brands, creators, and campaigns that demand emotion, rhythm, and impact.
      </motion.p>
      <motion.a
        href="#work"
        className="cta magnetic"
        whileHover={{ scale: 1.05, boxShadow: '0 0 26px rgba(110, 210, 255, 0.55)' }}
        whileTap={{ scale: 0.98 }}
      >
        Enter Portfolio
      </motion.a>
    </section>
  )
}

export default Hero
