import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary-500 font-medium mb-4"
          >
            Hi, I'm Ashutosh Palhare 👋
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Full-Stack Developer
            <br />
            <span className="text-primary-500">& Cybersecurity</span> Enthusiast
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-light-muted dark:text-dark-muted max-w-2xl mb-10 leading-relaxed"
          >
            I build clean, modern, and functional web applications. 
            Give me a problem — I'll figure out how to ship the solution.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#work" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-5"
          >
            <a
              href="https://github.com/ashutoshpalhare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-light-muted dark:text-dark-muted hover:text-primary-500 transition-colors"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://in.linkedin.com/in/ashutoshpalhare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-light-muted dark:text-dark-muted hover:text-primary-500 transition-colors"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="https://twitter.com/AshutoshPalhare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-light-muted dark:text-dark-muted hover:text-primary-500 transition-colors"
            >
              <FiTwitter size={22} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-light-muted dark:text-dark-muted hover:text-primary-500 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <FiArrowDown className="animate-bounce" size={18} />
      </motion.a>
    </section>
  )
}

export default Hero