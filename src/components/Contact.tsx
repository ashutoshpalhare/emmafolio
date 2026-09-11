import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-light-card dark:bg-dark-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mb-8" />

          <p className="text-light-muted dark:text-dark-muted text-lg mb-10 leading-relaxed">
            I'm currently open to new opportunities, collaborations, and interesting projects.
            Whether you have a question or just want to say hi — my inbox is always open.
          </p>

          <a
            href="mailto:ap4all@aol.com"
            className="btn-primary text-lg px-8 py-4 mb-12 inline-flex"
          >
            <FiMail size={20} />
            Say Hello
          </a>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/ashutoshpalhare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:shadow-glow text-light-muted dark:text-dark-muted hover:text-primary-500 transition-all"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://in.linkedin.com/in/ashutoshpalhare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:shadow-glow text-light-muted dark:text-dark-muted hover:text-primary-500 transition-all"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="https://twitter.com/AshutoshPalhare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:shadow-glow text-light-muted dark:text-dark-muted hover:text-primary-500 transition-all"
            >
              <FiTwitter size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact