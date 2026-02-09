import { motion } from 'framer-motion';
import { FiHeart, FiCoffee } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h3>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
          </p>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            Start a Conversation
          </a>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-gray-400">
                &copy; {currentYear} Portfolio. All rights reserved.
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                Made with 
                <FiHeart className="text-red-500 animate-pulse" />
                and
                <FiCoffee className="text-yellow-500" />
                in Sri Lanka
              </div>
              
              <div className="text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                {' · '}
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;