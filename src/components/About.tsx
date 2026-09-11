import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Bio */}
            <div className="space-y-5 text-light-muted dark:text-dark-muted leading-relaxed">
              <p>
                Hey! I'm <span className="text-light-text dark:text-dark-text font-medium">Ashutosh Palhare</span> (you can call me <span className="text-primary-500 font-medium">AP</span>) — a Frontend-first Full Stack Developer from Maharashtra, India with 2+ years of hands-on experience building real products.
              </p>
              
              <p>
                Ever since I was a kid, computers and mobiles have been more than just gadgets — they've been my passion. I love turning ideas into clean, modern, and functional web applications.
              </p>

              <p>
                My strongest ability isn't memorizing every framework or syntax. It's this:
              </p>

              <blockquote className="border-l-4 border-primary-500 pl-4 italic text-light-text dark:text-dark-text">
                "Give me a problem, requirement, or unfamiliar technology → I'll figure out how to build and ship the solution."
              </blockquote>

              <p>
                I work extremely well with modern AI tools as an engineering multiplier. AI increases my speed, but I remain fully responsible for architecture, decisions, debugging, and final product quality.
              </p>
            </div>

            {/* Right - Quick Info Cards */}
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6">
                <h3 className="font-heading font-semibold mb-3 text-primary-500">What I Do</h3>
                <ul className="space-y-2 text-sm text-light-muted dark:text-dark-muted">
                  <li>• Modern Web Applications</li>
                  <li>• Clean UI / UX Implementation</li>
                  <li>• Full-Stack Product Development</li>
                  <li>• Cybersecurity Enthusiast</li>
                </ul>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="font-heading font-semibold mb-3 text-primary-500">Currently</h3>
                <ul className="space-y-2 text-sm text-light-muted dark:text-dark-muted">
                  <li>• Building modern web products</li>
                  <li>• Exploring AI-assisted applications</li>
                  <li>• Improving frontend craft</li>
                  <li>• Open to collaboration</li>
                </ul>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="font-heading font-semibold mb-3 text-primary-500">Fun Fact</h3>
                <p className="text-sm text-light-muted dark:text-dark-muted">
                  AI does the typing. I do the thinking. ⚡
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About