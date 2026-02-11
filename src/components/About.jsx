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
        <h3 className="text-2xl font-bold mb-8 text-gray-800">My Services</h3>

        <div className="space-y-6">

          {[
            {
              title: "Frontend Development",
              description: "Building responsive, modern and user-friendly web applications using React, TypeScript and modern UI principles.",
              icon: "💻"
            },
            {
              title: "Mobile App Development",
              description: "Developing cross-platform mobile applications using React Native and Expo with clean UI and smooth performance.",
              icon: "📱"
            },
            {
              title: "UI/UX Design",
              description: "Designing intuitive user interfaces, wireframes and prototypes focused on usability and user experience.",
              icon: "🎨"
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)'
              }}
              className="relative group/service"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover/service:from-blue-500/10 group-hover/service:to-purple-500/10 transition-all duration-300" />
              
              <div className="relative flex gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-md transition-shadow border border-white/20">
                
                <motion.div 
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl flex-shrink-0"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.icon}
                </motion.div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

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