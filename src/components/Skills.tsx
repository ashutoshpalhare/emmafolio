import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'C', 'C++', 'Dart']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Next.js']
  },
  {
    title: 'Backend & Tools',
    skills: ['Node.js', 'Django', 'Flask', 'Git', 'Docker', 'MySQL']
  },
  {
    title: 'Others',
    skills: ['Flutter', 'Cybersecurity', 'Linux', 'Figma', 'AI Tools']
  }
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-light-card dark:bg-dark-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-primary-500">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:shadow-glow transition-shadow duration-300"
              >
                <h3 className="font-heading font-semibold text-lg mb-4 text-primary-500">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills