// import { motion } from 'framer-motion';
// import { FiBook, FiCalendar, FiMapPin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import { useState, useRef } from 'react';

// const Education = () => {
//   const education = [
//     {
//       degree: 'BSC(Hons) in Computer Science',
//       institution: 'Institute of Java and Software Engineering (IJSE)',
//       year: '2024 - Present',
//       location: 'Panadura, Sri Lanka',
//       description: 'Currently pursuing a comprehensive Computer Science Higher Diploma with focus on software development, web technologies, mobile development, and database management. Specialized areas include Software Development, Web Technologies, Mobile Development, Database Management, and Networking.',
//     },
//     {
//       degree: 'G.C.E Advance Level in Commerce Stream with IT',
//       institution: 'Galewela National School',
//       year: '2020 - 2022',
//       location: 'Galewela, Sri Lanka',
//       description: 'Completed Advanced Level Examination in Commerce Stream with ICT as a main subject. Developed strong foundation in Information Technology, Accounting, and Business Management. Actively participated in IT-related extracurricular activities and projects.',
//     },
//     {
//       degree: 'Diploma in English Language',
//       institution: 'Online Certification Program',
//       year: '2023',
//       location: 'Online',
//       description: 'Completed an advanced English language proficiency diploma focusing on professional communication and academic writing. Enhanced skills in professional correspondence, report writing, and language teaching methodologies for effective communication in technical environments.',
//     },
//     {
//       degree: 'Certificate Course in IT and Computer Applications',
//       institution: 'PSD Academy, Sri Lanka',
//       year: '2023',
//       location: 'Online',
//       description: 'Comprehensive IT certification program covering essential Microsoft Office applications. Gained proficiency in MS Word for document processing, MS Excel for data analysis and visualization, MS Access for database management, and MS PowerPoint for professional presentations. Certified as Microsoft Office Specialist.',
//     },
//   ];

//   const scrollContainerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const scrollToCard = (index) => {
//     setCurrentIndex(index);
//     if (scrollContainerRef.current) {
//       const cards = scrollContainerRef.current.children;
//       if (cards[index]) {
//         cards[index].scrollIntoView({
//           behavior: 'smooth',
//           block: 'nearest',
//           inline: 'center'
//         });
//       }
//     }
//   };

//   const handlePrev = () => {
//     const newIndex = currentIndex > 0 ? currentIndex - 1 : education.length - 1;
//     scrollToCard(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = currentIndex < education.length - 1 ? currentIndex + 1 : 0;
//     scrollToCard(newIndex);
//   };

//   return (
//     <section id="education" className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="heading-text mb-4">Education</h2>
//           <p className="subheading-text">
//             My academic journey and qualifications
//           </p>
//         </motion.div>

//         {/* Desktop Grid View */}
//         <div className="hidden md:block max-w-6xl mx-auto">
//           <div className="grid grid-cols-2 gap-8">
//             {education.map((edu, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ 
//                   y: -10,
//                   scale: 1.02,
//                   transition: { duration: 0.2 }
//                 }}
//                 className="relative group"
//               >
//                 {/* Floating animation background */}
//                 <motion.div 
//                   className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"
//                   animate={{
//                     y: [0, -5, 0],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                 />
                
//                 <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden">
//                   {/* Animated gradient border effect */}
//                   <motion.div 
//                     className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                     style={{
//                       background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
//                     }}
//                     animate={{
//                       x: ['-100%', '100%'],
//                     }}
//                     transition={{
//                       duration: 1.5,
//                       repeat: Infinity,
//                       ease: "linear"
//                     }}
//                   />
                  
//                   <div className="relative z-10">
//                     <div className="flex items-start justify-between mb-6">
//                       <div className="flex items-center gap-4">
//                         <motion.div 
//                           className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl"
//                           whileHover={{ rotate: 5, scale: 1.1 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <FiBook className="text-white text-xl" />
//                         </motion.div>
//                         <div>
//                           <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
//                           <p className="text-sm text-gray-600 mt-1">{edu.institution}</p>
//                         </div>
//                       </div>
                      
//                       <motion.span 
//                         className="px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full"
//                         whileHover={{ scale: 1.1 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                           {edu.year}
//                         </span>
//                       </motion.span>
//                     </div>
                    
//                     <div className="space-y-3 mb-6">
//                       <div className="flex items-center gap-3 text-gray-600">
//                         <FiCalendar className="text-blue-500 flex-shrink-0" />
//                         <span className="font-medium">{edu.year}</span>
//                         {edu.year.includes('Present') && (
//                           <motion.span 
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             className="px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-medium"
//                           >
//                             In Progress
//                           </motion.span>
//                         )}
//                       </div>
                      
//                       <div className="flex items-center gap-3 text-gray-600">
//                         <FiMapPin className="text-blue-500 flex-shrink-0" />
//                         <span className="font-medium">{edu.location}</span>
//                       </div>
//                     </div>
                    
//                     <motion.p 
//                       className="text-gray-700 leading-relaxed"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.2 }}
//                     >
//                       {edu.description}
//                     </motion.p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile Carousel View */}
//         <div className="md:hidden relative">
//           {/* Navigation Buttons */}
//           <motion.button
//             onClick={handlePrev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FiChevronLeft className="text-blue-600 text-xl" />
//           </motion.button>
          
//           <motion.button
//             onClick={handleNext}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FiChevronRight className="text-blue-600 text-xl" />
//           </motion.button>
          
//           {/* Carousel Container */}
//           <div 
//             ref={scrollContainerRef}
//             className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-4 gap-6"
//             style={{ scrollBehavior: 'smooth' }}
//           >
//             {education.map((edu, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className="flex-shrink-0 w-[85vw] snap-center"
//                 onClick={() => scrollToCard(index)}
//               >
//                 <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//                   <div className="flex items-center gap-4 mb-6">
//                     <motion.div 
//                       className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl"
//                       whileHover={{ rotate: 10 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <FiBook className="text-white text-xl" />
//                     </motion.div>
//                     <div>
//                       <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
//                       <p className="text-sm text-gray-600 mt-1">{edu.institution}</p>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-3 mb-6">
//                     <div className="flex items-center gap-3 text-gray-600 flex-wrap">
//                       <div className="flex items-center gap-2">
//                         <FiCalendar className="text-blue-500 flex-shrink-0" />
//                         <span className="font-medium">{edu.year}</span>
//                       </div>
//                       {edu.year.includes('Present') && (
//                         <motion.span 
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           className="px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-medium"
//                         >
//                           In Progress
//                         </motion.span>
//                       )}
//                     </div>
                    
//                     <div className="flex items-center gap-3 text-gray-600">
//                       <FiMapPin className="text-blue-500 flex-shrink-0" />
//                       <span className="font-medium">{edu.location}</span>
//                     </div>
//                   </div>
                  
//                   <p className="text-gray-700 leading-relaxed text-sm">
//                     {edu.description}
//                   </p>
                  
//                   {/* Mobile indicator dots */}
//                   <div className="flex justify-center gap-2 mt-8">
//                     {education.map((_, dotIndex) => (
//                       <button
//                         key={dotIndex}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           scrollToCard(dotIndex);
//                         }}
//                         className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                           dotIndex === currentIndex 
//                             ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8' 
//                             : 'bg-gray-300'
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Continuous Learning Journey */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="mt-12 max-w-4xl mx-auto"
//         >
//           <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-200/50">
//             <div className="flex flex-col md:flex-row items-center gap-6">
//               <motion.div 
//                 className="flex-shrink-0"
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
//                   <FiBook className="text-white text-3xl" />
//                 </div>
//               </motion.div>
//               <div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">Continuous Learning Journey</h3>
//                 <p className="text-gray-700 mb-6">
//                   Committed to continuous education and skill development in the rapidly evolving field of technology. 
//                   Currently expanding expertise in modern web frameworks, cloud computing, and software architecture principles.
//                 </p>
//                 <div className="flex flex-wrap gap-3">
//                   <motion.span 
//                     className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm"
//                     whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)' }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//                       Ongoing Education
//                     </span>
//                   </motion.span>
//                   <motion.span 
//                     className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm"
//                     whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.3)' }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
//                       Technical Certifications
//                     </span>
//                   </motion.span>
//                   <motion.span 
//                     className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm"
//                     whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)' }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//                       Skill Development
//                     </span>
//                   </motion.span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Education;

// Education.jsx
import { motion } from 'framer-motion';
import { FiBook, FiCalendar, FiMapPin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Education = () => {
  const education = [
    {
      degree: 'BSC(Hons) in Computer Science',
      institution: 'Institute of Java and Software Engineering (IJSE)',
      year: '2024 - Present',
      location: 'Panadura, Sri Lanka',
      description: 'Currently pursuing a comprehensive Computer Science Higher Diploma with focus on software development, web technologies, mobile development, and database management. Specialized areas include Software Development, Web Technologies, Mobile Development, Database Management, and Networking.',
    },
    {
      degree: 'G.C.E Advance Level in Commerce Stream with IT',
      institution: 'Galewela National School',
      year: '2020 - 2022',
      location: 'Galewela, Sri Lanka',
      description: 'Completed Advanced Level Examination in Commerce Stream with ICT as a main subject. Developed strong foundation in Information Technology, Accounting, and Business Management. Actively participated in IT-related extracurricular activities and projects.',
    },
    {
      degree: 'Diploma in English Language',
      institution: 'Online Certification Program',
      year: '2023',
      location: 'Online',
      description: 'Completed an advanced English language proficiency diploma focusing on professional communication and academic writing. Enhanced skills in professional correspondence, report writing, and language teaching methodologies for effective communication in technical environments.',
    },
    {
      degree: 'Certificate Course in IT and Computer Applications',
      institution: 'PSD Academy, Sri Lanka',
      year: '2023',
      location: 'Online',
      description: 'Comprehensive IT certification program covering essential Microsoft Office applications. Gained proficiency in MS Word for document processing, MS Excel for data analysis and visualization, MS Access for database management, and MS PowerPoint for professional presentations. Certified as Microsoft Office Specialist.',
    },
  ];

  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToCard = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const cards = scrollContainerRef.current.children;
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : education.length - 1;
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < education.length - 1 ? currentIndex + 1 : 0;
    scrollToCard(newIndex);
  };

  return (
    <section id="education" className="pt-32 pb-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden min-h-screen">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My complete academic journey and qualifications
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Floating animation background */}
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
                
                <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden">
                  {/* Animated gradient border effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                    }}
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiBook className="text-white text-xl" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                          <p className="text-sm text-gray-600 mt-1">{edu.institution}</p>
                        </div>
                      </div>
                      
                      <motion.span 
                        className="px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {edu.year}
                        </span>
                      </motion.span>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <FiCalendar className="text-blue-500 flex-shrink-0" />
                        <span className="font-medium">{edu.year}</span>
                        {edu.year.includes('Present') && (
                          <motion.span 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-medium"
                          >
                            In Progress
                          </motion.span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3 text-gray-600">
                        <FiMapPin className="text-blue-500 flex-shrink-0" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                    </div>
                    
                    <motion.p 
                      className="text-gray-700 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {edu.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft className="text-blue-600 text-xl" />
          </motion.button>
          
          <motion.button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight className="text-blue-600 text-xl" />
          </motion.button>
          
          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-4 gap-6"
            style={{ scrollBehavior: 'smooth' }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex-shrink-0 w-[85vw] snap-center"
                onClick={() => scrollToCard(index)}
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl"
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiBook className="text-white text-xl" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-sm text-gray-600 mt-1">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600 flex-wrap">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="text-blue-500 flex-shrink-0" />
                        <span className="font-medium">{edu.year}</span>
                      </div>
                      {edu.year.includes('Present') && (
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-medium"
                        >
                          In Progress
                        </motion.span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-600">
                      <FiMapPin className="text-blue-500 flex-shrink-0" />
                      <span className="font-medium">{edu.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                  
                  {/* Mobile indicator dots */}
                  <div className="flex justify-center gap-2 mt-8">
                    {education.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToCard(dotIndex);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          dotIndex === currentIndex 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8' 
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continuous Learning Journey */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-200/50">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
                  <FiBook className="text-white text-3xl" />
                </div>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Continuous Learning Journey</h3>
                <p className="text-gray-700 mb-6">
                  Committed to continuous education and skill development in the rapidly evolving field of technology. 
                  Currently expanding expertise in modern web frameworks, cloud computing, and software architecture principles.
                </p>
                <div className="flex flex-wrap gap-3">
                  <motion.span 
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm"
                    whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Ongoing Education
                    </span>
                  </motion.span>
                  <motion.span 
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm"
                    whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.3)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                      Technical Certifications
                    </span>
                  </motion.span>
                  <motion.span 
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm"
                    whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Skill Development
                    </span>
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back to Home Button - පහලට දාලා */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;