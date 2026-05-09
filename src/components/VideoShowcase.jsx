import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Brand Film — Midnight Pulse',
    category: 'Commercial Edit',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
  {
    title: 'Creator Reel — Velocity Cuts',
    category: 'Social Campaign',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
  },
  {
    title: 'Event Trailer — Neon Skyline',
    category: 'Trailer',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  },
]

function VideoShowcase() {
  return (
    <section className="showcase reveal" id="work">
      <header>
        <h2>Featured Work</h2>
        <p>Hover each card to preview motion and transitions.</p>
      </header>
      <div className="showcase-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card glass-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            whileHover={{ y: -8 }}
          >
            <div className="video-wrap">
              <video
                src={project.video}
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(event) => event.currentTarget.play()}
                onMouseLeave={(event) => {
                  event.currentTarget.pause()
                  event.currentTarget.currentTime = 0
                }}
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default VideoShowcase
