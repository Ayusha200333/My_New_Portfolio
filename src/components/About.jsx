


// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="section-container">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             About Me
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Passionate developer creating digital experiences that make a difference
//           </p>
//         </motion.div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Left Column - Introduction */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             {/* Introduction Card */}
//             <div className="bg-white rounded-2xl p-8 shadow-xl">
//               <h3 className="text-2xl font-bold mb-6 text-gray-800">My Journey</h3>
              
//               <div className="space-y-4 text-gray-600">
//                 <p className="leading-relaxed">
//                   <span className="font-semibold text-gray-800">I'm Ayusha Wijerathna 👋</span> 
//                   A passionate <span className="text-blue-600 font-medium">Frontend & Mobile Developer</span> with a strong interest in UI/UX and AI-driven development.
//                 </p>
                
//                 <p className="leading-relaxed">
//                   I love learning new and challenging things in programming and turning ideas into simple, intuitive, and user-focused applications. During the past year, I've spent most of my time building projects, experimenting with modern tools, and improving my problem-solving mindset.
//                 </p>
                
//                 <p className="leading-relaxed">
//                   I believe great products are built at the intersection of design, technology, and user empathy. That's why I focus not only on writing code, but also on how users feel when they interact with an application.
//                 </p>
                
//                 <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl mt-6">
//                   <p className="text-gray-700 font-medium">
//                     <span className="text-blue-600 font-bold">Currently:</span> Looking for an internship where I can grow, contribute, and build impactful digital experiences.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Skills Grid */}
//             <div className="bg-white rounded-2xl p-8 shadow-xl">
//               <h3 className="text-2xl font-bold mb-8 text-gray-800">My Skills</h3>
              
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                 {['Frontend Development', 'UI/UX Design', 'Mobile Development', 'Backend Development', 'Database Design', 'Problem Solving'].map((skill, index) => (
//                   <motion.div
//                     key={skill}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                     whileHover={{ scale: 1.05, y: -5 }}
//                     className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
//                   >
//                     <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mb-3">
//                       <div className="text-white text-2xl">
//                         {index % 6 === 0 ? '💻' : 
//                          index % 6 === 1 ? '🎨' : 
//                          index % 6 === 2 ? '📱' : 
//                          index % 6 === 3 ? '⚙️' : 
//                          index % 6 === 4 ? '🗃️' : '🧩'}
//                       </div>
//                     </div>
//                     <p className="text-center font-medium text-gray-700">{skill}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Column - Technologies */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             {/* Technologies Grid */}
//             <div className="bg-white rounded-2xl p-8 shadow-xl">
//               <h3 className="text-2xl font-bold mb-8 text-gray-800">Technologies & Tools</h3>

//               <div className="space-y-6">
//                 {/* Frontend Technologies */}
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-700 mb-4">Frontend</h4>
//                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                     {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'].map((tech, index) => (
//                       <motion.div
//                         key={tech}
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.4, delay: index * 0.1 }}
//                         whileHover={{ scale: 1.05, y: -3 }}
//                         className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
//                       >
//                         <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
//                           <span className="text-white text-lg">
//                             {tech === 'React' ? '⚛️' : 
//                              tech === 'TypeScript' ? '📘' : 
//                              tech === 'JavaScript' ? '📜' : 
//                              tech === 'HTML5' ? '🌐' : '🎨'}
//                           </span>
//                         </div>
//                         <span className="font-medium text-gray-700">{tech}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Backend Technologies */}
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-700 mb-4">Backend</h4>
//                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                     {['Java', 'Spring Boot', 'Python'].map((tech, index) => (
//                       <motion.div
//                         key={tech}
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.4, delay: index * 0.1 }}
//                         whileHover={{ scale: 1.05, y: -3 }}
//                         className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
//                       >
//                         <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
//                           <span className="text-white text-lg">
//                             {tech === 'Java' ? '☕' : 
//                              tech === 'Spring Boot' ? '🌱' : '🐍'}
//                           </span>
//                         </div>
//                         <span className="font-medium text-gray-700">{tech}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Database & Design */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-700 mb-4">Database</h4>
//                     <div className="space-y-3">
//                       {['MongoDB', 'MySQL'].map((tech, index) => (
//                         <motion.div
//                           key={tech}
//                           initial={{ opacity: 0, y: 10 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 0.4, delay: index * 0.1 }}
//                           whileHover={{ scale: 1.05, x: 5 }}
//                           className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
//                         >
//                           <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
//                             <span className="text-white text-lg">
//                               {tech === 'MongoDB' ? '🍃' : '🐬'}
//                             </span>
//                           </div>
//                           <span className="font-medium text-gray-700">{tech}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-700 mb-4">Design Tools</h4>
//                     <div className="space-y-3">
//                       {['Figma', 'Draw.io'].map((tech, index) => (
//                         <motion.div
//                           key={tech}
//                           initial={{ opacity: 0, y: 10 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 0.4, delay: index * 0.1 }}
//                           whileHover={{ scale: 1.05, x: 5 }}
//                           className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
//                         >
//                           <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
//                             <span className="text-white text-lg">
//                               {tech === 'Figma' ? '🎨' : '📐'}
//                             </span>
//                           </div>
//                           <span className="font-medium text-gray-700">{tech}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Currently Learning */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white"
//             >
//               <h3 className="text-2xl font-bold mb-6">Currently Learning</h3>
              
//               <div className="space-y-4">
//                 <p className="text-blue-100">
//                   Continuously expanding my skill set and exploring new technologies to stay updated with industry trends.
//                 </p>
                
//                 <div className="flex flex-wrap gap-3">
//                   {['AI/ML Basics', 'GraphQL', 'Docker', 'Next.js', 'React Native', 'AWS'].map((tech, index) => (
//                     <motion.span
//                       key={tech}
//                       initial={{ opacity: 0, scale: 0 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.3, delay: index * 0.1 }}
//                       whileHover={{ scale: 1.1 }}
//                       className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer"
//                     >
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        {/* Header Section */}
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

        {/* Main Content Grid - Now with equal height */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Introduction - Now with full height */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            {/* Introduction Card - Now with full height */}
            <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">My Journey</h3>
              
              <div className="space-y-4 text-gray-600 flex-grow">
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
                
                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl mt-6">
                  <p className="text-gray-700 font-medium">
                    <span className="text-blue-600 font-bold">Currently:</span> Looking for an internship where I can grow, contribute, and build impactful digital experiences.
                  </p>
                </div>
              </div>

              {/* Navigation Button to Skills Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6 mt-6 border-t border-gray-200"
              >
                <a 
                  href="#skills"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
                >
                  <span>View My Skills</span>
                  <span className="text-xl">→</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Technologies Only - Also full height */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            {/* Technologies Grid - Now with full height */}
            <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Technologies & Tools</h3>

              <div className="space-y-6 flex-grow">
                {/* Frontend Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Frontend</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0">
                          <span className="text-white text-sm">
                            {tech === 'React' ? '⚛️' : 
                             tech === 'TypeScript' ? '📘' : 
                             tech === 'JavaScript' ? '📜' : 
                             tech === 'HTML5' ? '🌐' : '🎨'}
                          </span>
                        </div>
                        <span className="font-medium text-gray-700 text-sm">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Backend Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">Backend</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['Java', 'Spring Boot', 'Python'].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="p-1.5 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex-shrink-0">
                          <span className="text-white text-sm">
                            {tech === 'Java' ? '☕' : 
                             tech === 'Spring Boot' ? '🌱' : '🐍'}
                          </span>
                        </div>
                        <span className="font-medium text-gray-700 text-sm">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Database & Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Database</h4>
                    <div className="space-y-3">
                      {['MongoDB', 'MySQL'].map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0">
                            <span className="text-white text-sm">
                              {tech === 'MongoDB' ? '🍃' : '🐬'}
                            </span>
                          </div>
                          <span className="font-medium text-gray-700 text-sm">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Development Tools</h4>
                    <div className="space-y-3">
                      {['Figma', 'Draw.io', 'Expo'].map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className="p-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex-shrink-0">
                            <span className="text-white text-sm">
                              {tech === 'Figma' ? '🎨' : 
                               tech === 'Draw.io' ? '📐' : 
                               '📱'}
                            </span>
                          </div>
                          <span className="font-medium text-gray-700 text-sm">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;