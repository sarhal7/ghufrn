import { motion } from 'framer-motion'

function About() {
  return (
    <section className="about reveal" id="about">
      <motion.div
        className="glass-panel"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About</h2>
        <p>
          I am Ghufran Hafeez, a professional video editor focused on atmospheric pacing, storytelling, and clean
          cinematic finishing. Every frame is tuned for mood, momentum, and memory.
        </p>
      </motion.div>
    </section>
  )
}

export default About
