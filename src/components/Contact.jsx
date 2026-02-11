import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      details: 'ayushawijerathna@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      link: 'mailto:ayushawijerathna@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      details: '+94 70 309 8337',
      color: 'from-purple-500 to-pink-500',
      link: 'tel:+94 70 309 8337'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      details: 'Panadura, Sri Lanka',
      color: 'from-green-500 to-emerald-500',
      link: 'https://maps.google.com/maps?q=Panadura+Sri+Lanka'
    },
  ];

  const socialLinks = [
    { 
      icon: <FiGithub />, 
      name: 'GitHub', 
      color: 'from-gray-700 to-gray-900', 
      link: 'https://github.com/Ayusha200333' 
    },
    { 
      icon: <FiLinkedin />, 
      name: 'LinkedIn', 
      color: 'from-blue-700 to-blue-900', 
      link: 'https://www.linkedin.com/in/ayusha-wijerathna-731649361' 
    },
    { 
      icon: <FiMail />, 
      name: 'Email', 
      color: 'from-blue-500 to-cyan-500', 
      link: 'mailto:ayushawijerathna@gmail.com' 
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-text mb-3 md:mb-4">Get In Touch</h2>
          <p className="subheading-text max-w-2xl mx-auto text-sm md:text-base">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="block group"
                >
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-3 md:p-4 border border-white/20 overflow-hidden hover:shadow-lg md:hover:shadow-xl transition-all duration-300">
                    <motion.div 
                      className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)`,
                      }}
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.3
                      }}
                    />
                    
                    <div className="relative z-10 flex items-center gap-3 md:gap-4">
                      <motion.div 
                        className={`p-2 md:p-2.5 rounded-lg md:rounded-xl bg-gradient-to-br ${info.color} shadow-md md:shadow-lg`}
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-base md:text-lg text-white">{info.icon}</div>
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm md:text-base font-bold text-gray-800 mb-1 md:mb-2 truncate">{info.title}</h4>
                        <p className="text-xs text-gray-600 truncate">{info.details}</p>
                      </div>
                      
                      <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-xl md:rounded-2xl p-4 md:p-5 border border-blue-200/50"
            >
              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-800">Connect With Me</h4>
              
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="group"
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 text-center shadow-sm hover:shadow-md transition-all duration-300">
                      <motion.div 
                        className={`p-1.5 md:p-2 rounded-lg bg-gradient-to-br ${social.color} inline-flex mb-2 md:mb-3`}
                        whileHover={{ rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-sm md:text-base text-white">{social.icon}</div>
                      </motion.div>
                      <p className="text-xs font-medium text-gray-700">{social.name}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 md:mt-5 text-center text-gray-600 text-xs"
              >
                Let's connect and build something amazing together!
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-2 md:gap-3 p-2 md:p-3 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl md:rounded-2xl border border-blue-200/30"
            >
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-gray-700">Active Status</span>
              </div>
              <span className="text-gray-400 text-xs">•</span>
              <span className="text-xs text-gray-600">Response within 24 hours</span>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl md:rounded-3xl blur-lg md:blur-xl group-hover:blur-xl md:group-hover:blur-2xl transition-all duration-500"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 md:p-6 border border-white/20 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
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
                  <h3 className="text-lg md:text-xl font-bold mb-5 md:mb-6 text-gray-800">Send a Message</h3>
                  
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 md:py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="inline-block mb-4 md:mb-6"
                      >
                        <FiCheckCircle className="text-5xl md:text-6xl text-green-500" />
                      </motion.div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Message Sent Successfully!</h4>
                      <p className="text-gray-600 max-w-md mx-auto text-sm md:text-base">
                        Thank you for your message. I'll get back to you as soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <label className="block text-gray-700 mb-1 md:mb-1.5 text-sm font-medium" htmlFor="name">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 md:py-2.5 rounded-lg md:rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition placeholder-gray-400 text-sm"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 mb-1 md:mb-1.5 text-sm font-medium" htmlFor="email">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 md:py-2.5 rounded-lg md:rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition placeholder-gray-400 text-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 mb-1 md:mb-1.5 text-sm font-medium" htmlFor="subject">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 md:py-2.5 rounded-lg md:rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition placeholder-gray-400 text-sm"
                            placeholder="Project Inquiry"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 mb-1 md:mb-1.5 text-sm font-medium" htmlFor="message">
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full px-3 py-2 md:py-2.5 rounded-lg md:rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none placeholder-gray-400 text-sm"
                            placeholder="Tell me about your project..."
                          />
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 md:gap-3 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg md:rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group relative overflow-hidden text-sm md:text-base"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <div className="relative z-10 flex items-center gap-2 md:gap-3">
                            <FiSend className="group-hover:translate-x-1 transition-transform duration-300 text-sm md:text-base" />
                            <span>Send Message</span>
                          </div>
                        </motion.button>
                      </div>
                    </form>
                  )}
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-5 md:mt-6 text-center text-gray-500 text-xs"
                  >
                    Your information is secure and will only be used to respond to your inquiry.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;