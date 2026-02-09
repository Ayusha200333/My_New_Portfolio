// import { motion } from 'framer-motion';
// import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

// const Home = () => {
//   const socialLinks = [
//     { icon: <FiGithub />, href: '#', color: 'hover:text-gray-800' },
//     { icon: <FiLinkedin />, href: '#', color: 'hover:text-blue-700' },
//     { icon: <FiTwitter />, href: '#', color: 'hover:text-blue-400' },
//   ];

//   return (
//     <section id="home" className="min-h-screen flex items-center pt-16">
//       <div className="section-container">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6"
//             >
//               Welcome to My Portfolio
//             </motion.div>
            
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-5xl md:text-7xl font-bold mb-6"
//             >
//               Hi, I'm{' '}
//               <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Ayusha Wijerathna
//               </span>
//             </motion.h1>
            
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-xl text-gray-600 mb-8"
//             >
//               I create modern, responsive web applications with cutting-edge technologies. 
//               Passionate about UI/UX and innovative solutions.
//             </motion.p>
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="flex flex-wrap gap-4"
//             >
//               <a
//                 href="#projects"
//                 className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
//               >
//                 View My Work
//                 <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
//               </a>
              
//               <a
//                 href="#contact"
//                 className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
//               >
//                 Contact Me
//               </a>
//             </motion.div>
            
//             {/* Social Links */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               className="flex gap-6 mt-12"
//             >
//               {socialLinks.map((link, index) => (
//                 <motion.a
//                   key={index}
//                   href={link.href}
//                   whileHover={{ scale: 1.2, rotate: 5 }}
//                   whileTap={{ scale: 0.9 }}
//                   className={`text-2xl text-gray-600 ${link.color} transition-colors`}
//                 >
//                   {link.icon}
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>
          
//           {/* Right Column - Profile Image Only with Enhanced Animations */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative flex justify-center items-center"
//           >
//             <div className="relative w-96 h-96">
//               {/* Animated Background Blobs */}
//               <motion.div
//                 animate={{ 
//                   x: [0, 30, 0],
//                   y: [0, -30, 0],
//                   scale: [1, 1.1, 1]
//                 }}
//                 transition={{ 
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//               />
              
//               <motion.div
//                 animate={{ 
//                   x: [0, -30, 0],
//                   y: [0, 30, 0],
//                   scale: [1, 1.1, 1]
//                 }}
//                 transition={{ 
//                   duration: 10,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.5
//                 }}
//                 className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
//               />
              
//               {/* Animated Rings Around the Image */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ 
//                   duration: 25, 
//                   repeat: Infinity, 
//                   ease: "linear" 
//                 }}
//                 className="absolute -inset-8 border-4 border-dashed border-blue-300/50 rounded-full"
//               />
              
//               <motion.div
//                 animate={{ rotate: -360 }}
//                 transition={{ 
//                   duration: 30, 
//                   repeat: Infinity, 
//                   ease: "linear" 
//                 }}
//                 className="absolute -ins-12 border-2 border-dotted border-purple-300/50 rounded-full"
//               />
              
//               {/* Floating Dots Animation */}
//               <motion.div
//                 animate={{ 
//                   y: [0, -40, 0],
//                   rotate: [0, 180, 360]
//                 }}
//                 transition={{ 
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg"
//               />
              
//               <motion.div
//                 animate={{ 
//                   y: [0, 40, 0],
//                   rotate: [0, -180, -360]
//                 }}
//                 transition={{ 
//                   duration: 7,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.3
//                 }}
//                 className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
//               />
              
//               <motion.div
//                 animate={{ 
//                   x: [0, 40, 0],
//                   scale: [1, 1.2, 1]
//                 }}
//                 transition={{ 
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.6
//                 }}
//                 className="absolute top-1/2 -right-6 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"
//               />
              
//               <motion.div
//                 animate={{ 
//                   x: [0, -40, 0],
//                   scale: [1, 1.2, 1]
//                 }}
//                 transition={{ 
//                   duration: 5.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.9
//                 }}
//                 className="absolute top-1/2 -left-6 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg"
//               />
              
//               {/* Main Profile Image Container with Glow Effect */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="relative w-full h-full"
//               >
//                 {/* Glow Effect Behind Image */}
//                 <motion.div
//                   animate={{ 
//                     opacity: [0.3, 0.6, 0.3],
//                     scale: [1, 1.05, 1]
//                   }}
//                   transition={{ 
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                   className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl"
//                 />
                
//                 {/* Profile Image with Floating Animation */}
//                 <motion.div
//                   animate={{ y: [0, -15, 0] }}
//                   transition={{ 
//                     duration: 4, 
//                     repeat: Infinity, 
//                     ease: "easeInOut" 
//                   }}
//                   className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl"
//                 >
//                   <img
//                     src="/profile.png" 
//                     alt="Ayusha Wijerathna"
//                     className="w-full h-full object-cover"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
//                     }}
//                   />
                  
//                   {/* Gradient Overlay for Depth */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
//                   {/* Animated Border Effect */}
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ 
//                       duration: 20, 
//                       repeat: Infinity, 
//                       ease: "linear" 
//                     }}
//                     className="absolute inset-0 border-4 border-transparent rounded-full"
//                     style={{
//                       borderImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899) 1",
//                     }}
//                   />
//                 </motion.div>
                
//                 {/* Pulse Effect */}
//                 <motion.div
//                   animate={{ 
//                     scale: [1, 1.2, 1],
//                     opacity: [0, 0.5, 0]
//                   }}
//                   transition={{ 
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeOut"
//                   }}
//                   className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -z-10"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;


import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Home = () => {
  const socialLinks = [
    { 
      icon: <FiGithub />, 
      href: 'https://github.com/Ayusha200333', 
      color: 'hover:text-gray-800',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    { 
      icon: <FiLinkedin />, 
      href: 'https://www.linkedin.com/in/ayusha-wijerathna-731649361', 
      color: 'hover:text-blue-700',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    { 
      icon: <FiMail />, 
      href: 'mailto:ayushawijerathna@gmail.com', 
      color: 'hover:text-red-500',
      target: '_self',
      rel: ''
    },
  ];

  const roles = ['Frontend Developer', 'Mobile App Developer', 'UI/UX Designer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (!isDeleting && currentText === currentRole) {
        // Wait for 2 seconds after typing complete
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      
      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setTypingSpeed(150);
        return;
      }
      
      const timeout = setTimeout(() => {
        if (isDeleting) {
          setCurrentText(currentRole.substring(0, currentText.length - 1));
          setTypingSpeed(100); // Faster when deleting
        } else {
          setCurrentText(currentRole.substring(0, currentText.length + 1));
          setTypingSpeed(150); // Normal speed when typing
        }
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    };
    
    handleTyping();
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6"
            >
              Welcome to My Portfolio
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ayusha Wijerathna
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-gray-600 mb-8 h-16 flex items-center"
            >
              <div className="flex items-center">
                <span>I'm a </span>
                <span className="ml-2 text-blue-600 font-semibold min-w-[300px]">
                  {currentText}
                  <span className="inline-block w-1 h-8 bg-blue-600 ml-1 animate-pulse"></span>
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
            
            {/* Social Links with Updated Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 mt-12"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.target}
                  rel={link.rel}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl text-gray-600 ${link.color} transition-colors`}
                  aria-label={
                    link.href.includes('github') ? 'GitHub Profile' : 
                    link.href.includes('linkedin') ? 'LinkedIn Profile' : 
                    'Send Email'
                  }
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Profile Image Only with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-96 h-96">
              {/* Animated Background Blobs */}
              <motion.div
                animate={{ 
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              />
              
              <motion.div
                animate={{ 
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              />
              
              {/* Animated Rings Around the Image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute -inset-8 border-4 border-dashed border-blue-300/50 rounded-full"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute -ins-12 border-2 border-dotted border-purple-300/50 rounded-full"
              />
              
              {/* Floating Dots Animation */}
              <motion.div
                animate={{ 
                  y: [0, -40, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 40, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
                className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
              />
              
              <motion.div
                animate={{ 
                  x: [0, 40, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
                className="absolute top-1/2 -right-6 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"
              />
              
              <motion.div
                animate={{ 
                  x: [0, -40, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.9
                }}
                className="absolute top-1/2 -left-6 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg"
              />
              
              {/* Main Profile Image Container with Glow Effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full"
              >
                {/* Glow Effect Behind Image */}
                <motion.div
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl"
                />
                
                {/* Profile Image with Floating Animation */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl"
                >
                  <img
                    src="/profile.png" 
                    alt="Ayusha Wijerathna"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  
                  {/* Gradient Overlay for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Animated Border Effect */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute inset-0 border-4 border-transparent rounded-full"
                    style={{
                      borderImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899) 1",
                    }}
                  />
                </motion.div>
                
                {/* Pulse Effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -z-10"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;