import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'craftc',
    description: 'Free, structured C and C++ learning platform with interactive lessons, roadmaps, coding projects, interview questions, and practical resources.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/ashutoshpalhare/craftc',
    live: 'https://github.com/ashutoshpalhare/craftc',
  },
  {
    title: 'CodeMuseum',
    description: 'Premium museum-themed developer portfolio built with pure HTML, CSS, and JavaScript. Elegant animations, project exhibits, and fully responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ashutoshpalhare/CodeMuseum',
    live: 'https://github.com/ashutoshpalhare/CodeMuseum',
  },
  {
    title: 'VibeHai',
    description: 'Modern music streaming platform inspired by Spotify, featuring sleek UI, immersive playback, and personalized vibes.',
    tech: ['React', 'Vite', 'Tailwind'],
    github: 'https://github.com/ashutoshpalhare/VibeHai',
    live: 'https://github.com/ashutoshpalhare/VibeHai',
  },
  {
    title: 'CommandKit',
    description: 'A curated, searchable library of 100+ powerful ChatGPT slash commands to discover, organize, and copy prompt shortcuts.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ashutoshpalhare/CommandKit',
    live: 'https://github.com/ashutoshpalhare/CommandKit',
  },
  {
    title: 'BioLinks',
    description: 'Customizable Linktree-style landing page for social profiles and online content with modern glassmorphism UI.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ashutoshpalhare/BioLinks',
    live: 'https://github.com/ashutoshpalhare/BioLinks',
  },
  {
    title: 'verse',
    description: 'AP VERSE — Premium cinematic personal portrait archive built with modern React stack for high-performance visual showcase.',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/ashutoshpalhare/verse',
    live: 'https://github.com/ashutoshpalhare/verse',
  },
]

const Work = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Selected <span className="text-primary-500">Work</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading text-xl font-semibold group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-primary-500/10 text-light-muted dark:text-dark-muted hover:text-primary-500 transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-primary-500/10 text-light-muted dark:text-dark-muted hover:text-primary-500 transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-light-muted dark:text-dark-muted mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md bg-primary-500/10 text-primary-600 dark:text-primary-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/ashutoshpalhare"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              See more on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Work