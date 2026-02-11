import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '💻',
      skills: [
        'React.js',
        'JavaScript',
        'HTML5',
        'CSS',
        'Tailwind CSS',
        'TypeScript',
        'React Native',
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        'Java',
        'Spring Boot',
        'Python',
        'Node.js',
        'Express.js',
      ]
    },
    {
      title: 'Mobile Dev & Database',
      icon: '📱',
      skills: [
        'MERN Stack',
        'Expo Framework',
        'firebase',
        'MongoDB',
        'MySQL',
      ]
    },
    {
      title: 'UI/UX Design & Tools',
      icon: '🎨',
      skills: [
        'Figma',
        'Prototyping',
        'Wireframing',
        'VS Code',
        'Git & GitHub',
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="section-container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of skills that I've developed through hands-on experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative"
            >

              <div className="relative bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-500 h-full overflow-hidden">

                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.1 
                  }}
                />

                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-sm"
                    >
                      <span className="text-lg text-white">{category.icon}</span>
                    </motion.div>
                    <h3 className="text-base font-bold text-gray-800">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;