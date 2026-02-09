import { motion } from 'framer-motion';

const Skills = () => {
  // Categories for skills - Modern design with fewer items
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-purple-500 to-pink-500',
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
      color: 'from-green-500 to-emerald-500',
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
      color: 'from-orange-500 to-red-500',
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
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Updated with About section style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combining technical expertise with design thinking to create exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ 
                opacity: 0, 
                y: 50
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-6 h-full shadow-lg border border-gray-100 overflow-hidden">
                {/* Icon with Floating Animation */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-5`}
                >
                  <span className="text-2xl">{category.icon}</span>
                </motion.div>
                
                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="text-xl font-bold text-center mb-6 text-gray-800"
                >
                  {category.title}
                </motion.h3>
                
                {/* Skills List with Stagger Animation */}
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.15 + idx * 0.05,
                        ease: "backOut"
                      }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-gray-600 text-sm">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;