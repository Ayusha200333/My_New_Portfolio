import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiFolder, FiMail, FiDownload } from 'react-icons/fi';

const Navbar = ({ showHomeButton = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/', icon: <FiHome /> },
    { name: 'About', href: '#about', icon: <FiUser /> },
    { name: 'Skills', href: '#skills', icon: <FiCode /> },
    { name: 'Projects', href: '#projects', icon: <FiFolder /> },
    { name: 'Contact', href: '#contact', icon: <FiMail /> },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const handleNavClick = (href, e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100/30'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-3 md:py-4">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="relative p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white font-bold text-xl block">AW</span>
                </motion.div>
              </div>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="relative group"
                >
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    whileHover={{ scaleX: 1 }}
                  />
                  <div className="flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group">
                    <span className="text-gray-500 group-hover:text-blue-500 transition-colors duration-300">{link.icon}</span>
                    <span>{link.name}</span>
                  </div>
                </a>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href="/Ayusha Wijerathna.pdf" 
                download
                className="ml-4 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10 flex items-center gap-2">
                  <FiDownload className="group-hover:-translate-x-1 transition-transform duration-300" />
                  <span>Download CV</span>
                </span>
              </a>
            </motion.div>

            {showHomeButton && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/"
                  className="ml-4 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group relative overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <FiHome className="group-hover:-translate-x-1 transition-transform duration-300" />
                    <span>Back to Home</span>
                  </span>
                </Link>
              </motion.div>
            )}
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 relative"
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative w-6 h-6">
              <motion.div
                animate={isOpen ? { rotate: 90, opacity: 0 } : { rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <FiMenu className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={isOpen ? { rotate: 0, opacity: 1 } : { rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <FiX className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 border-t border-gray-200/30 backdrop-blur-xl bg-white/95">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                    <span className="text-blue-600">{link.icon}</span>
                  </div>
                  <span>{link.name}</span>
                  <motion.div 
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="pt-4 mt-2 border-t border-gray-200/30"
              >
                <a
                  href="/AW_CV.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  <FiDownload className="group-hover:-translate-x-1 transition-transform duration-300" />
                  <span>Download CV</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        <motion.div 
          className="absolute top-0 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-0 right-10 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
          animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;

