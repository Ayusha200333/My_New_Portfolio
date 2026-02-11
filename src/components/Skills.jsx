import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '💻',
      skills: [
        'React.js & TypeScript',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Responsive Design',
        'State Management',
        'Performance Optimization'
      ]
    },
    {
      title: 'Backend & Database',
      icon: '⚙️',
      skills: [
        'Java & Spring Boot',
        'RESTful APIs',
        'MongoDB',
        'MySQL',
        'Python',
        'API Integration'
      ]
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      skills: [
        'React Native',
        'Expo Framework',
        'Mobile UI/UX',
        'Cross-Platform',
        'App Deployment',
        'Performance Tuning'
      ]
    },
    {
      title: 'Design & Tools',
      icon: '🎨',
      skills: [
        'UI/UX Design',
        'Figma & Prototyping',
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
          className="text-center mb-16"
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
              className="group relative h-full"
            >
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
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl h-full overflow-hidden border border-white/20">
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
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
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-5 shadow-lg"
                  >
                    <span className="text-2xl text-white">{category.icon}</span>
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="text-xl font-bold text-center mb-6 text-gray-800"
                  >
                    {category.title}
                  </motion.h3>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.15 + idx * 0.05,
                          ease: "backOut"
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          x: 5,
                          boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2)'
                        }}
                        className="relative group/skill"
                      >
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover/skill:from-blue-500/10 group-hover/skill:to-purple-500/10 transition-all duration-300" />
                        
                        <div className="relative flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-md transition-shadow border border-white/20">
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-gray-600 text-sm">{skill}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills - Same styling as About section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Additional Skills</h3>
            <p className="text-gray-600">Tools and technologies that support my development workflow</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Docker', 'GitHub Actions', 'Postman', 'Jest', 'Webpack', 'VS Code', 'Figma', 'Adobe XD'].map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 + 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)'
                }}
                className="relative group/tag"
              >
                {/* Tag background effect - Same as About section */}
                {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover/tag:from-blue-500/10 group-hover/tag:to-purple-500/10 transition-all duration-300" />
                
                <div className="relative px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 text-gray-700 font-medium hover:shadow-md transition-all duration-300">
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */} 

        {/* Stats Section - Same styling as About section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '5+', label: 'Years Learning', color: 'from-blue-600 to-purple-600' },
            { number: '50+', label: 'Projects Built', color: 'from-blue-600 to-purple-600' },
            { number: '15+', label: 'Technologies', color: 'from-blue-600 to-purple-600' },
            { number: '100%', label: 'Dedication', color: 'from-blue-600 to-purple-600' }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.7 }}
              whileHover={{ y: -5 }}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/30"
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;