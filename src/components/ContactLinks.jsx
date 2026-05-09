import { motion } from 'framer-motion'

const socials = [
  { label: 'Fiverr', href: 'https://www.fiverr.com/s/2KV20gq' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ghufranhafeez07' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCjn3xJVCLrXiFxuhrvb_etw' },
]

function ContactLinks() {
  return (
    <section className="contact reveal" id="contact">
      <div className="glass-panel">
        <h2>Let&apos;s Create Something Cinematic</h2>
        <p>Available for branded campaigns, social edits, and long-form storytelling.</p>
        <div className="social-grid">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              className="social-link magnetic"
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
            >
              {social.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactLinks
