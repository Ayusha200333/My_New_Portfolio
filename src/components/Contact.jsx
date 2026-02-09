import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

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
      details: 'hello@portfolio.dev',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      details: '+94 77 123 4567',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      details: 'Colombo, Sri Lanka',
      color: 'from-green-500 to-emerald-500'
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
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
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
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-text mb-4">Get In Touch</h2>
          <p className="subheading-text">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Contact Information</h3>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${info.color} text-white`}>
                    <div className="text-2xl">{info.icon}</div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h4>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl"
            >
              <h4 className="text-xl font-bold mb-4 text-gray-800">Working Hours</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-800">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-800">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-800">Not Available</span>
                </div>
              </div>
              
              <p className="mt-6 text-gray-600">
                Response time: Usually within 24 hours during working days
              </p>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <FiCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h4>
                  <p className="text-gray-600">
                    Thank you for your message. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
                    >
                      <FiSend />
                      Send Message
                    </motion.button>
                  </div>
                </form>
              )}
              
              <p className="mt-8 text-center text-gray-500 text-sm">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </div>
            
            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <h4 className="text-lg font-semibold text-gray-700 mb-6">Or connect with me on social media</h4>
              
              <div className="flex justify-center gap-6">
                {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;