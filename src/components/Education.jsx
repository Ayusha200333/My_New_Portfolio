// import { motion } from 'framer-motion';
// import { FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

// const Education = () => {
//   const education = [
//     {
//       degree: 'Bachelor of Computer Science',
//       institution: 'University of Technology',
//       year: '2018 - 2022',
//       location: 'Colombo, Sri Lanka',
//       description: 'Specialized in Software Engineering and Web Technologies. Graduated with First Class Honors.',
//       gpa: '3.8/4.0'
//     },
//     {
//       degree: 'Web Development Bootcamp',
//       institution: 'Tech Academy',
//       year: '2021',
//       location: 'Online',
//       description: 'Intensive full-stack development program focusing on modern web technologies.',
//       gpa: 'Top 5%'
//     },
//     {
//       degree: 'High School Diploma',
//       institution: 'National School',
//       year: '2014 - 2017',
//       location: 'Kandy, Sri Lanka',
//       description: 'Focus on Mathematics and Science. President of Computer Club.',
//       gpa: 'A-Level: 3A'
//     },
//   ];

//   const certifications = [
//     { name: 'React Developer Certification', issuer: 'Meta', year: '2023' },
//     { name: 'AWS Solutions Architect', issuer: 'Amazon', year: '2022' },
//     { name: 'JavaScript Algorithms', issuer: 'freeCodeCamp', year: '2021' },
//     { name: 'UI/UX Design Specialization', issuer: 'Google', year: '2020' },
//   ];

//   return (
//     <section id="education" className="py-20 bg-gradient-to-b from-white to-blue-50">
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="heading-text mb-4">Education & Certifications</h2>
//           <p className="subheading-text">
//             My academic journey and professional certifications
//           </p>
//         </motion.div>
        
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Education Timeline */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-3">
//               <FiBook className="text-blue-600" />
//               Academic Background
//             </h3>
            
//             <div className="relative">
//               {/* Timeline line */}
//               <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400" />
              
//               {education.map((edu, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="relative mb-10 pl-16"
//                 >
//                   {/* Timeline dot */}
//                   <div className="absolute left-4 top-4 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                  
//                   <div className="bg-white p-6 rounded-xl shadow-lg">
//                     <div className="flex flex-wrap justify-between items-start mb-4">
//                       <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
//                       <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
//                         {edu.gpa}
//                       </span>
//                     </div>
                    
//                     <div className="space-y-3 mb-4">
//                       <div className="flex items-center gap-2 text-gray-600">
//                         <FiBook className="text-blue-500" />
//                         <span className="font-medium">{edu.institution}</span>
//                       </div>
                      
//                       <div className="flex flex-wrap gap-4">
//                         <div className="flex items-center gap-2 text-gray-600">
//                           <FiCalendar className="text-blue-500" />
//                           <span>{edu.year}</span>
//                         </div>
                        
//                         <div className="flex items-center gap-2 text-gray-600">
//                           <FiMapPin className="text-blue-500" />
//                           <span>{edu.location}</span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <p className="text-gray-600">
//                       {edu.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
          
//           {/* Certifications */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-3">
//               <FiAward className="text-purple-600" />
//               Certifications & Awards
//             </h3>
            
//             <div className="grid gap-6">
//               {certifications.map((cert, index) => (
//                 <motion.div
//                   key={cert.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.02 }}
//                   className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500"
//                 >
//                   <div className="flex justify-between items-start mb-3">
//                     <h4 className="text-lg font-bold text-gray-800">{cert.name}</h4>
//                     <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
//                       {cert.year}
//                     </span>
//                   </div>
                  
//                   <div className="flex items-center gap-2 text-gray-600 mb-4">
//                     <FiAward className="text-purple-500" />
//                     <span className="font-medium">Issued by {cert.issuer}</span>
//                   </div>
                  
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-500 text-sm">Credential ID: {cert.issuer.substring(0, 3)}-{Math.floor(Math.random() * 10000)}</span>
//                     <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
//                       View Certificate
//                     </button>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* Skills Summary */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.5 }}
//               className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white"
//             >
//               <h4 className="text-xl font-bold mb-6">Continuous Learning</h4>
              
//               <div className="space-y-4">
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span>Technical Skills</span>
//                     <span>95%</span>
//                   </div>
//                   <div className="h-2 bg-white/30 rounded-full">
//                     <div className="h-full w-11/12 bg-white rounded-full" />
//                   </div>
//                 </div>
                
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span>Problem Solving</span>
//                     <span>92%</span>
//                   </div>
//                   <div className="h-2 bg-white/30 rounded-full">
//                     <div className="h-full w-[92%] bg-white rounded-full" />
//                   </div>
//                 </div>
                
//                 <div>
//                   <div className="flex justify-between mb-2">
//                     <span>Team Collaboration</span>
//                     <span>88%</span>
//                   </div>
//                   <div className="h-2 bg-white/30 rounded-full">
//                     <div className="h-full w-[88%] bg-white rounded-full" />
//                   </div>
//                 </div>
//               </div>
              
//               <p className="mt-6 text-blue-100">
//                 Committed to lifelong learning and staying updated with the latest technologies.
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;


import { motion } from 'framer-motion';
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      year: '2018 - 2022',
      location: 'Colombo, Sri Lanka',
      description: 'Specialized in Software Engineering and Web Technologies. Graduated with First Class Honors.',
      gpa: '3.8/4.0'
    },
    {
      degree: 'Web Development Bootcamp',
      institution: 'Tech Academy',
      year: '2021',
      location: 'Online',
      description: 'Intensive full-stack development program focusing on modern web technologies.',
      gpa: 'Top 5%'
    },
    {
      degree: 'High School Diploma',
      institution: 'National School',
      year: '2014 - 2017',
      location: 'Kandy, Sri Lanka',
      description: 'Focus on Mathematics and Science. President of Computer Club.',
      gpa: 'A-Level: 3A'
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-text mb-4">Education</h2>
          <p className="subheading-text">
            My academic journey
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-3 justify-center">
              <FiBook className="text-blue-600" />
              Academic Background
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400" />
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative mb-10 pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-4 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                        {edu.gpa}
                      </span>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FiBook className="text-blue-500" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiCalendar className="text-blue-500" />
                          <span>{edu.year}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiMapPin className="text-blue-500" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;