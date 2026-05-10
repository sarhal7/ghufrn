"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const projects = [
  {
    title: "Noir Campaign Cut",
    category: "Fashion Film",
    video:
      "https://cdn.coverr.co/videos/coverr-a-videographer-editing-footage-1570/1080p.mp4",
  },
  {
    title: "Midnight Automotive Reel",
    category: "Commercial Edit",
    video:
      "https://cdn.coverr.co/videos/coverr-cinematic-drive-in-the-city-1579/1080p.mp4",
  },
  {
    title: "Afterlight Story Edit",
    category: "Brand Documentary",
    video:
      "https://cdn.coverr.co/videos/coverr-filmmaker-working-on-set-9713/1080p.mp4",
  },
];

const services = [
  "Cinematic Story Editing",
  "High-End Color Grading",
  "Social Reels & Trailers",
  "Sound Design & Atmospheres",
];

const workflow = [
  "Discovery & Narrative Mapping",
  "Rough Cut + Creative Direction",
  "Fine Cut, Color & Sound Sculpting",
  "Final Delivery in Multi-Platform Formats",
];

const testimonials = [
  {
    quote:
      "The final film felt like a premium trailer — emotional, sleek, and unforgettable.",
    name: "Ayla Voss",
    role: "Creative Producer",
  },
  {
    quote:
      "A stunning editorial eye. Every transition carried intention and rhythm.",
    name: "Leon Mercer",
    role: "Brand Director",
  },
];

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs tracking-[0.35em] text-white/50 uppercase">{subtitle}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const cursorX = useSpring(0, { damping: 35, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 35, stiffness: 350 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX - 40);
      cursorY.set(event.clientY - 40);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div className="cinematic-cursor" style={{ x: cursorX, y: cursorY }} />
      <main className="relative overflow-hidden bg-[#050507] text-white">
        <div className="noise-layer" />

        <section className="relative min-h-screen px-6 pt-28 pb-20 md:px-14">
          <motion.div
            style={{ y: heroY }}
            className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="space-y-8">
              <p className="text-xs tracking-[0.4em] text-white/60 uppercase">
                Video Editor • Creative Director
              </p>
              <h1 className="font-serif text-5xl leading-tight md:text-7xl xl:text-8xl">
                Crafting cinematic stories that feel alive.
              </h1>
              <p className="max-w-xl text-base text-white/70 md:text-lg">
                Premium edit suites, immersive pacing, and emotional storytelling for brands,
                filmmakers, and artists.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="pill-btn">
                  View Reels
                </a>
                <a href="#contact" className="pill-btn pill-btn-alt">
                  Start a Project
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="glass-card relative min-h-[440px] overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover opacity-80"
                src="https://cdn.coverr.co/videos/coverr-editing-a-video-in-a-dark-office-1572/1080p.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute right-6 bottom-6 left-6">
                <p className="text-xs tracking-[0.28em] text-white/70 uppercase">Showreel 2026</p>
                <p className="mt-2 font-serif text-2xl">Luxury visuals. Precise emotion.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="px-6 py-20 md:px-14">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
            <div>
              <SectionTitle title="About Me" subtitle="Profile" />
              <p className="leading-relaxed text-white/70">
                I shape raw footage into emotionally charged narratives through cinematic rhythm,
                intentional transitions, and modern post-production aesthetics.
              </p>
            </div>
            <div className="glass-card p-8">
              <p className="text-sm tracking-[0.2em] text-white/60 uppercase">Focus</p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li>• Story-first editing with premium pacing</li>
                <li>• Motion graphics accents and seamless transitions</li>
                <li>• Color pipelines tailored for cinematic delivery</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-20 md:px-14">
          <div className="mx-auto max-w-7xl">
            <SectionTitle title="Featured Projects" subtitle="Portfolio" />
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project, i) => (
                <motion.article
                  whileHover={{ y: -8, rotateX: 2, rotateY: i % 2 === 0 ? 2 : -2 }}
                  key={project.title}
                  className="project-card"
                >
                  <video autoPlay loop muted playsInline className="h-72 w-full object-cover" src={project.video} />
                  <div className="p-5">
                    <p className="text-xs tracking-[0.24em] text-white/60 uppercase">{project.category}</p>
                    <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-14">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <SectionTitle title="Editing Services" subtitle="Capabilities" />
              <ul className="space-y-3 text-white/80">
                {services.map((service) => (
                  <li className="glass-card p-4" key={service}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <SectionTitle title="Client Testimonials" subtitle="Social Proof" />
              <div className="grid gap-5 md:grid-cols-2">
                {testimonials.map((item) => (
                  <blockquote key={item.name} className="glass-card p-6">
                    <p className="text-white/80">“{item.quote}”</p>
                    <footer className="mt-6 text-sm text-white/60">
                      {item.name} • {item.role}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-14">
          <div className="mx-auto max-w-6xl">
            <SectionTitle title="Workflow Process" subtitle="Method" />
            <div className="grid gap-4 md:grid-cols-2">
              {workflow.map((step, index) => (
                <div key={step} className="glass-card flex items-center gap-4 p-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pt-12 pb-24 text-center md:px-14">
          <motion.div whileInView={{ opacity: [0.5, 1], y: [20, 0] }} className="glass-card mx-auto max-w-3xl p-10">
            <p className="text-xs tracking-[0.32em] text-white/60 uppercase">Contact</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Let&apos;s cut something unforgettable.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Available for film trailers, luxury campaigns, branded documentaries, and social-first cinematic reels.
            </p>
            <a href="mailto:hello@ghufrn.studio" className="pill-btn mt-8 inline-flex">
              hello@ghufrn.studio
            </a>
          </motion.div>
        </section>
      </main>
    </>
  );
}
