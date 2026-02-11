import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiDatabase, FiPenTool, FiCloud, FiShield } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: <FiCode />,
      description: 'Custom, responsive websites and web applications using modern technologies like React, TypeScript, and Tailwind CSS.',
      features: ['Frontend Development', 'Backend Integration', 'Responsive Design', 'Performance Optimization']
    },
    {
      title: 'Mobile App Development',
      icon: <FiSmartphone />,
      description: 'Cross-platform mobile applications for iOS and Android using React Native and Expo framework.',
      features: ['iOS & Android Apps', 'React Native', 'UI/UX Design', 'App Store Deployment']
    },
    {
      title: 'Backend Solutions',
      icon: <FiDatabase />,
      description: 'Robust server-side solutions, RESTful APIs, and database management systems for scalable applications.',
      features: ['API Development', 'Database Design', 'Server Management', 'Cloud Integration']
    },
    {
      title: 'UI/UX Design',
      icon: <FiPenTool />,
      description: 'User-centered design solutions that combine aesthetics with functionality for optimal user experience.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      title: 'Cloud Solutions',
      icon: <FiCloud />,
      description: 'Cloud infrastructure setup, deployment, and management for scalable and reliable applications.',
      features: ['Cloud Deployment', 'Server Configuration', 'CI/CD Pipelines', 'Monitoring']
    },
    {
      title: 'Technical Consulting',
      icon: <FiShield />,
      description: 'Expert guidance on technology stack selection, architecture planning, and development best practices.',
      features: ['Tech Stack Advice', 'Architecture Design', 'Code Review', 'Performance Audit']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your ideas to life with precision and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                    <div className="text-2xl text-white">
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="text-xl font-bold text-center mb-4 text-gray-800"
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">What I offer:</h4>
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
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
                        className="relative group/feature"
                      >
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover/feature:from-blue-500/10 group-hover/feature:to-purple-500/10 transition-all duration-300" />
                        
                        <div className="relative flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-md transition-shadow border border-white/20">
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Learn More</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="relative group inline-block max-w-2xl mx-auto">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss how I can help bring your vision to life with cutting-edge solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Get in Touch
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-gray-700 rounded-full font-semibold border border-gray-300 hover:bg-gray-50 transition-all duration-300"
                  >
                    View Portfolio
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;