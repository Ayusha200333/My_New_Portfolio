


// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';

// const Projects = () => {
//   const [activeCategory, setActiveCategory] = useState('all');
  
//   const projects = [
//     {
//       id: 1,
//       title: 'BagVibe E-Commerce Platform',
//       category: 'fullstack',
//       description: 'Complete e-commerce solution for bag shopping with cart, wishlist, payment integration, and admin dashboard.',
//       tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
//       imageColor: 'from-blue-400 to-cyan-400',
//       liveLink: '#',
//       githubLinks: [
//         { label: 'Frontend', url: 'https://github.com/Ayusha200333/React_Final-BagVibe-Frontend' },
//         { label: 'Backend', url: 'https://github.com/Ayusha200333/React_final-BagVibe-Backend' }
//       ]
//     },
//     {
//       id: 2,
//       title: 'AMD Food Delivery App',
//       category: 'web',
//       description: 'Food delivery web application with restaurant listings, order tracking, and user reviews.',
//       tags: ['React', 'Firebase', 'Tailwind', 'Context API'],
//       imageColor: 'from-purple-400 to-pink-400',
//       liveLink: '#',
//       githubLink: 'https://github.com/Ayusha200333/AMD_Food_Delivery_App'
//     },
//     {
//       id: 3,
//       title: 'GymNest Fitness Platform',
//       category: 'web',
//       description: 'Comprehensive gym management system with workout tracking, membership plans, and trainer booking.',
//       tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
//       imageColor: 'from-green-400 to-emerald-400',
//       liveLink: '#',
//       githubLink: 'https://github.com/Ayusha200333/AAD_GymNest_Project'
//     },
//     {
//       id: 4,
//       title: 'Personal Portfolio Website',
//       category: 'web',
//       description: 'Modern responsive portfolio website showcasing projects, skills, and contact information.',
//       tags: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
//       imageColor: 'from-orange-400 to-red-400',
//       liveLink: '#',
//       githubLink: 'https://github.com/Ayusha200333/my-website'
//     },
//     {
//       id: 5,
//       title: 'POS System',
//       category: 'web',
//       description: 'Point of Sale system for retail management with inventory tracking, billing, and sales reports.',
//       tags: ['Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
//       imageColor: 'from-indigo-400 to-blue-400',
//       liveLink: '#',
//       githubLink: 'https://github.com/Ayusha200333/New_Bootstrap_POS_System'
//     },
//     {
//       id: 6,
//       title: 'Tic-Tac-Toe Game',
//       category: 'web',
//       description: 'Interactive Tic-Tac-Toe game with score tracking, player modes, and responsive design.',
//       tags: ['HTML', 'CSS', 'JavaScript', 'Game Logic'],
//       imageColor: 'from-pink-400 to-rose-400',
//       liveLink: '#',
//       githubLink: 'https://github.com/Ayusha200333/Tic-Tac-Toe'
//     },
//     {
//       id: 7,
//       title: 'FreshMoo Dairy Management',
//       category: 'web',
//       description: 'Dairy farm management system for tracking milk production, sales, and inventory.',
//       tags: ['Java', 'MySQL', 'Swing', 'Layered Architecture'],
//       imageColor: 'from-yellow-400 to-amber-400',
//       liveLink: '#',
//       githubLink: 'https://github.com/Ayusha200333/layered-fresh-Moo-dairy-project'
//     },
//   ];

//   const categories = [
//     { id: 'all', name: 'All Projects' },
//     { id: 'fullstack', name: 'Full Stack' },
//     { id: 'web', name: 'Web Apps' },
//     { id: 'mobile', name: 'Mobile Apps' },
//   ];

//   const filteredProjects = activeCategory === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             My Projects
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             A collection of my recent work and creative solutions
//           </p>
//         </motion.div>
        
//         {/* Category Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-4 mb-12"
//         >
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`px-6 py-3 rounded-full font-medium transition-all ${
//                 activeCategory === category.id
//                   ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </motion.div>
        
//         {/* Horizontal Scroll Container */}
//         <div className="relative">
//           {/* Scroll Container */}
//           <div className="flex overflow-x-auto pb-8 space-x-8 scrollbar-hide">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeCategory}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex space-x-8 min-w-full"
//               >
//                 {filteredProjects.map((project, index) => (
//                   <motion.div
//                     key={project.id}
//                     initial={{ opacity: 0, x: 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     whileHover={{ y: -10 }}
//                     className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex-shrink-0 w-80 lg:w-96"
//                   >
//                     {/* Project Image */}
//                     <div className="relative h-48 overflow-hidden">
//                       <div className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} opacity-90`}>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <FiCode className="text-white text-6xl opacity-50" />
//                         </div>
//                       </div>
                      
//                       {/* Project Tags */}
//                       <div className="absolute top-4 left-4 flex flex-wrap gap-2">
//                         {project.tags.slice(0, 3).map((tag) => (
//                           <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold">
//                             {tag}
//                           </span>
//                         ))}
//                         {project.tags.length > 3 && (
//                           <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold">
//                             +{project.tags.length - 3}
//                           </span>
//                         )}
//                       </div>
//                     </div>
                    
//                     {/* Project Content */}
//                     <div className="p-6">
//                       <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
//                         {project.title}
//                       </h3>
//                       <p className="text-gray-600 mb-4 text-sm">
//                         {project.description}
//                       </p>
                      
//                       {/* All Tags */}
//                       <div className="flex flex-wrap gap-2 mb-6">
//                         {project.tags.map((tag) => (
//                           <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
                      
//                       {/* Action Buttons */}
//                       <div className="flex flex-wrap gap-4">
//                         <a
//                           href={project.liveLink}
//                           className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <FiExternalLink />
//                           Live Demo
//                         </a>
                        
//                         {/* Multiple GitHub links for BagVibe */}
//                         {project.githubLinks ? (
//                           <div className="flex gap-4">
//                             {project.githubLinks.map((link, idx) => (
//                               <a
//                                 key={idx}
//                                 href={link.url}
//                                 className="flex items-center gap-2 text-gray-700 hover:text-black font-medium"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 <FiGithub />
//                                 {link.label}
//                               </a>
//                             ))}
//                           </div>
//                         ) : (
//                           <a
//                             href={project.githubLink}
//                             className="flex items-center gap-2 text-gray-700 hover:text-black font-medium"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             <FiGithub />
//                             View Code
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>
          
//           {/* Scroll Indicator */}
//           <div className="flex justify-center mt-6 space-x-2">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   activeCategory === category.id
//                     ? 'bg-gradient-to-r from-blue-600 to-purple-600'
//                     : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
        
//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-16"
//         >
//           <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
//             <div className="bg-white px-8 py-4 rounded-full">
//               <p className="text-gray-700">
//                 Want to see more?{' '}
//                 <a href="#contact" className="font-bold text-blue-600 hover:underline">
//                   Let's discuss your project!
//                 </a>
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Custom CSS for hiding scrollbar */}
//       <style jsx>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'BagVibe E-Commerce Platform',
      category: 'fullstack',
      description: 'Complete e-commerce solution for bag shopping with cart, wishlist, payment integration, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
      imageUrl: 'https://w3layouts.b-cdn.net//wp-content/uploads/2019/05/baggage-w3layouts-featured.jpg',
      liveLink: '#',
      githubLinks: [
        { label: 'Frontend', url: 'https://github.com/Ayusha200333/React_Final-BagVibe-Frontend' },
        { label: 'Backend', url: 'https://github.com/Ayusha200333/React_final-BagVibe-Backend' }
      ],
      fallbackGradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'AMD Food Delivery App',
      category: 'web',
      description: 'Food delivery web application with restaurant listings, order tracking, and user reviews.',
      tags: ['React', 'Firebase', 'Tailwind', 'Context API'],
      imageUrl: 'https://cdn.dribbble.com/userupload/10480140/file/original-e9c98fcadb300252ed7f0349162cc26a.png',
      liveLink: '#',
      githubLink: 'https://github.com/Ayusha200333/AMD_Food_Delivery_App',
      fallbackGradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'GymNest Fitness Platform',
      category: 'web',
      description: 'Comprehensive gym management system with workout tracking, membership plans, and trainer booking.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      imageUrl: 'https://wod.guru/wp-content/uploads/2024/07/dashboardgymdesk.webp',
      liveLink: '#',
      githubLink: 'https://github.com/Ayusha200333/AAD_GymNest_Project',
      fallbackGradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      category: 'web',
      description: 'Modern responsive portfolio website showcasing projects, skills, and contact information.',
      tags: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
      imageUrl: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/334/164/datas/original.png',
      liveLink: '#',
      githubLink: 'https://github.com/Ayusha200333/my-website',
      fallbackGradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'POS System',
      category: 'web',
      description: 'Point of Sale system for retail management with inventory tracking, billing, and sales reports.',
      tags: ['Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
      imageUrl: 'https://www.accupos.co.uk/wp-content/uploads/2015/11/pos-management-screen-RETAIL-05-COLUMNS-1.jpg',
      liveLink: '#',
      githubLink: 'https://github.com/Ayusha200333/New_Bootstrap_POS_System',
      fallbackGradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      title: 'Tic-Tac-Toe Game',
      category: 'web',
      description: 'Interactive Tic-Tac-Toe game with score tracking, player modes, and responsive design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Game Logic'],
      imageUrl: 'https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd7qms6nd37gxfe303v8t.png',
      liveLink: '#',
      githubLink: 'https://github.com/Ayusha200333/Tic-Tac-Toe',
      fallbackGradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 7,
      title: 'FreshMoo Dairy Management',
      category: 'web',
      description: 'Dairy farm management system for tracking milk production, sales, and inventory.',
      tags: ['Java', 'MySQL', 'Swing', 'Layered Architecture'],
      imageUrl: 'https://s3.envato.com/files/289058382/preview/settings-page.png?client_id=1252708392.1770336002&session_id=1770336002',
      liveLink: '#',
      githubLink: 'https://github.com/Ayusha200333/layered-fresh-Moo-dairy-project',
      fallbackGradient: 'from-yellow-500 to-amber-500'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work and creative solutions
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid with Horizontal Scroll */}
        <div className="relative">
          {/* Scroll Container */}
          <div className="flex overflow-x-auto pb-8 gap-8" style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-8 min-w-full"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex-shrink-0 w-80 lg:w-96"
                  >
                    {/* Project Image with Fallback */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gray-200">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = `absolute inset-0 bg-gradient-to-br ${project.fallbackGradient} flex items-center justify-center`;
                            fallback.innerHTML = `
                              <div class="text-white text-4xl opacity-80">
                                ${project.category === 'fullstack' ? '🛍️' : 
                                  project.category === 'web' ? '🌐' : 
                                  project.category === 'mobile' ? '📱' : '💻'}
                              </div>
                            `;
                            e.target.parentNode.appendChild(fallback);
                          }}
                        />
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.fallbackGradient} opacity-40`} />
                      
                      {/* Project Tags */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {project.description}
                      </p>
                      
                      {/* All Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.liveLink}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink />
                          Live Demo
                        </a>
                        
                        {/* Multiple GitHub links for BagVibe */}
                        {project.githubLinks ? (
                          <div className="flex gap-4">
                            {project.githubLinks.map((link, idx) => (
                              <a
                                key={idx}
                                href={link.url}
                                className="flex items-center gap-2 text-gray-700 hover:text-black font-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FiGithub />
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <a
                            href={project.githubLink}
                            className="flex items-center gap-2 text-gray-700 hover:text-black font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FiGithub />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
            <div className="bg-white px-8 py-4 rounded-full">
              <p className="text-gray-700">
                Want to see more?{' '}
                <a href="#contact" className="font-bold text-blue-600 hover:underline">
                  Let's discuss your project!
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;