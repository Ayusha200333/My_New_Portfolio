// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiMenu, FiX, FiHome, FiUser, FiBriefcase, FiMail, FiBookOpen, FiTool } from 'react-icons/fi';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
  
//   const navItems = [
//     { name: 'Home', icon: <FiHome />, href: '#home' },
//     { name: 'About', icon: <FiUser />, href: '#about' },
//     { name: 'Skills', icon: <FiTool />, href: '#skills' }, // New Skills link
//     { name: 'Projects', icon: <FiBriefcase />, href: '#projects' },
//     { name: 'Education', icon: <FiBookOpen />, href: '#education' },
//     { name: 'Contact', icon: <FiMail />, href: '#contact' },
//   ];

//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed w-full z-50 glass-effect py-4"
//     >
//       <div className="section-container flex justify-between items-center">
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//         >
//           Portfolio
//         </motion.div>
        
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item, index) => (
//             <motion.a
//               key={item.name}
//               href={item.href}
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               <span>{item.icon}</span>
//               <span>{item.name}</span>
//             </motion.a>
//           ))}
//         </div>
        
//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>
      
//       {/* Mobile Navigation */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           exit={{ opacity: 0, height: 0 }}
//           className="md:hidden bg-white/95 backdrop-blur-lg border-t"
//         >
//           <div className="section-container py-4 flex flex-col space-y-4">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className="flex items-center space-x-3 py-2 text-gray-700 hover:text-blue-600"
//               >
//                 <span className="text-xl">{item.icon}</span>
//                 <span className="text-lg">{item.name}</span>
//               </a>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;

// components/Navbar.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ showHomeButton = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <span className="text-white font-bold text-xl">AW</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Home button for education page */}
            {showHomeButton && (
              <Link
                to="/"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Back to Home
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Home button */}
              {showHomeButton && (
                <Link
                  to="/"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Back to Home
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;