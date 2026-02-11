import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate developer creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="relative group h-full">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl h-full overflow-hidden border border-white/20">
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
                    ease: "linear"
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">My Journey</h3>
                  
                  <div className="space-y-6 text-gray-600">
                    <p className="leading-relaxed">
                      <span className="font-semibold text-gray-800">I'm Ayusha Wijerathna 👋</span> 
                      A passionate{' '}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                        Frontend
                      </span>{' '}
                      &{' '}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                        Mobile Developer
                      </span>{' '}
                      with a strong interest in{' '}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                        UI/UX
                      </span>{' '}
                      and AI-driven development.
                    </p>
                    
                    <p className="leading-relaxed">
                      I love learning new and challenging things in programming and turning ideas into simple, intuitive, and user-focused applications. During the past year, I've spent most of my time building projects, experimenting with modern tools, and improving my problem-solving mindset.
                    </p>
                    
                    <p className="leading-relaxed">
                      I believe great products are built at the intersection of design, technology, and user empathy. That's why I focus not only on writing code, but also on how users feel when they interact with an application.
                    </p>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl border border-blue-100/50 backdrop-blur-sm"
                    >
                      <p className="text-gray-700 font-medium">
                        <span className="text-blue-600 font-bold">Currently:</span> Looking for an internship where I can grow, contribute, and build impactful digital experiences.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="relative group h-full">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl h-full overflow-hidden border border-white/20">
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
                    delay: 0.3
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">Technologies & Tools</h3>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-4">Frontend</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'].map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ 
                              scale: 1.05, 
                              y: -3,
                              boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)'
                            }}
                            className="relative group/tech"
                          >
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover/tech:from-blue-500/10 group-hover/tech:to-purple-500/10 transition-all duration-300" />
                            
                            <div className="relative flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-md transition-shadow border border-white/20">
                              <motion.div 
                                className={`p-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0`}
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <span className="text-white text-sm">
                                  {tech === 'React' ? '⚛️' : 
                                   tech === 'TypeScript' ? '📘' : 
                                   tech === 'JavaScript' ? '📜' : 
                                   tech === 'HTML5' ? '🌐' : '🎨'}
                                </span>
                              </motion.div>
                              <span className="font-medium text-gray-700 text-sm">{tech}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-700 mb-4">Backend</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {['Java', 'Spring Boot', 'Python'].map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ 
                              scale: 1.05, 
                              y: -3,
                              boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.3)'
                            }}
                            className="relative group/tech"
                          >
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover/tech:from-green-500/10 group-hover/tech:to-emerald-500/10 transition-all duration-300" />
                            
                            <div className="relative flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-md transition-shadow border border-white/20">
                              <motion.div 
                                className="p-1.5 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex-shrink-0"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <span className="text-white text-sm">
                                  {tech === 'Java' ? '☕' : 
                                   tech === 'Spring Boot' ? '🌱' : '🐍'}
                                </span>
                              </motion.div>
                              <span className="font-medium text-gray-700 text-sm">{tech}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Database</h4>
                        <div className="space-y-3">
                          {['MongoDB', 'MySQL'].map((tech, index) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              whileHover={{ 
                                scale: 1.05, 
                                x: 5,
                                boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.3)'
                              }}
                              className="relative group/tech"
                            >
                              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover/tech:from-purple-500/10 group-hover/tech:to-pink-500/10 transition-all duration-300" />
                              
                              <div className="relative flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-md transition-shadow border border-white/20">
                                <motion.div 
                                  className="p-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0"
                                  whileHover={{ rotate: 10, scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <span className="text-white text-sm">
                                    {tech === 'MongoDB' ? '🍃' : '🐬'}
                                  </span>
                                </motion.div>
                                <span className="font-medium text-gray-700 text-sm">{tech}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Development Tools</h4>
                        <div className="space-y-3">
                          {['Figma', 'Draw.io', 'Expo'].map((tech, index) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              whileHover={{ 
                                scale: 1.05, 
                                x: 5,
                                boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.3)'
                              }}
                              className="relative group/tech"
                            >
                              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover/tech:from-orange-500/10 group-hover/tech:to-red-500/10 transition-all duration-300" />
                              
                              <div className="relative flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-md transition-shadow border border-white/20">
                                <motion.div 
                                  className="p-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex-shrink-0"
                                  whileHover={{ rotate: 10, scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <span className="text-white text-sm">
                                    {tech === 'Figma' ? '🎨' : 
                                     tech === 'Draw.io' ? '📐' : 
                                     '📱'}
                                  </span>
                                </motion.div>
                                <span className="font-medium text-gray-700 text-sm">{tech}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
        <Link 
          to="/education"  
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10 flex items-center gap-2">
            <span>View My Education</span>
            <motion.span 
              className="text-xl"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </Link>
      </motion.div>
            </div>
          </section>
        );
      };

export default About;