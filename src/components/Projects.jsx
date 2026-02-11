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
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JWT'],
      imageUrl: 'https://thumbs.dreamstime.com/b/bags-store-landing-page-fashion-collection-online-shopping-trendy-handbag-leather-backpack-tote-stylish-luxury-shopper-304224904.jpg',
      liveLink: '#',
      githubLinks: [
        { label: 'Frontend', url: 'https://github.com/Ayusha200333/React_Final-BagVibe-Frontend' },
        { label: 'Backend', url: 'https://github.com/Ayusha200333/React_final-BagVibe-Backend' }
      ]
    },
    {
      id: 2,
      title: 'Food Delivery Mobile App',
      category: 'mobile',
      description: 'Mobile food delivery application with Register and log in securely , Browse food items , Place and manage food orders , View order history',
      tags: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
      imageUrl: 'https://cdn.dribbble.com/userupload/45455861/file/c975fa3803bf0def87b17b75798ae5d6.png?resize=752x&vertical=center',
      liveLink: '#',
      githubLink: 'https://github.com/Ayusha200333/AMD_Food_Delivery_App'
    },
    {
      id: 3,
      title: 'GymNest Fitness Platform',
      category: 'web',
      description: 'Comprehensive gym management system with workout tracking, membership plans, and trainer booking.',
      tags: ['Spring Boot', 'Java', 'Html', 'CSS', 'MySQL'],
      imageUrl: 'https://thumbs.dreamstime.com/b/abstract-gym-background-strong-arm-chest-bodybuilder-91838676.jpg',
      liveLink: 'https://youtu.be/VAFk0TCbCWk?si=XXYkJM159gPdJypX',
      githubLink: 'https://github.com/Ayusha200333/AAD_GymNest_Project'
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      category: 'web',
      description: 'Modern responsive portfolio website showcasing projects, skills, and contact information.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'https://marketplace.canva.com/EAFwckKNjDE/2/0/1600w/canva-black-white-grayscale-portfolio-presentation-vzScEqAI__M.jpg',
      liveLink: 'https://youtu.be/Djzj_bYuk6Q?si=UJHzIGZMGVm1HvzJ',
      githubLink: 'https://github.com/Ayusha200333/my-website'
    },
    {
      id: 5,
      title: 'Complaint Management System',
      category: 'web',
      description: 'Point of Sale system for retail management with inventory tracking, billing, and sales reports.',
      tags: ['JSP', 'MySQL', 'Servlets', 'JDBC', 'Apache Tomcat', 'Jakarta EE', 'DBCP'],
      imageUrl: 'https://www.questionpro.com/blog/wp-content/uploads/2023/08/complaint-management-software.jpg',
      liveLink: 'https://youtu.be/kiX-a5uEiws?si=Y19dAKaA983ejble',
      githubLink: 'https://github.com/Ayusha200333/New_Bootstrap_POS_System'
    },
    {
      id: 6,
      title: 'Tic-Tac-Toe Game',
      category: 'web',
      description: 'Interactive Tic-Tac-Toe game with score tracking, player modes, and responsive design.',
      tags: ['java', 'javaFX', 'Maven', 'OOP Concepts'],
      imageUrl: 'https://c8.alamy.com/comp/2J7C59G/tic-tac-toe-wood-made-home-game-2J7C59G.jpg',
      liveLink: '#',
      githubLink: 'https://github.com/Ayusha200333/Tic-Tac-Toe'
    },
    {
      id: 7,
      title: 'FreshMoo Dairy Management',
      category: 'web',
      description: 'Dairy farm management system for tracking milk production, sales, and inventory.',
      tags: ['Java', 'MySQL', 'JavaFX', 'Layered Architecture','JasperReports'],
      imageUrl: 'https://i.pinimg.com/736x/c6/e3/8a/c6e38aef18af0daf4c81b6142ba84c23.jpg',
      liveLink: '#',
      githubLink: 'https://github.com/Ayusha200333/layered-fresh-Moo-dairy-project'
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
        
        <div className="relative">
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
                    className="group relative flex-shrink-0 w-80 lg:w-96 h-full"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                    
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl h-full border border-white/20">
                      <motion.div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                        }}
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.1
                        }}
                      />
                      
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <div className="p-6 relative z-20">
                        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <motion.span 
                              key={tag} 
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border hover:border-blue-500/20 transition-all duration-300"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-4">
                          <a
                            href={project.liveLink}
                            className="relative group/btn flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover/btn:from-blue-500/10 group-hover/btn:to-purple-500/10 transition-all duration-300" />
                            
                            <div className="relative z-10 flex items-center gap-2 p-2">
                              <FiExternalLink />
                              Live Demo
                            </div>
                          </a>
                          
                          {project.githubLinks ? (
                            <div className="flex gap-4">
                              {project.githubLinks.map((link, idx) => (
                                <a
                                  key={idx}
                                  href={link.url}
                                  className="relative group/btn flex items-center gap-2 text-gray-700 hover:text-black font-medium"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover/btn:from-blue-500/10 group-hover/btn:to-purple-500/10 transition-all duration-300" />
                                  
                                  <div className="relative z-10 flex items-center gap-2 p-2">
                                    <FiGithub />
                                    {link.label}
                                  </div>
                                </a>
                              ))}
                            </div>
                          ) : (
                            <a
                              href={project.githubLink}
                              className="relative group/btn flex items-center gap-2 text-gray-700 hover:text-black font-medium"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover/btn:from-blue-500/10 group-hover/btn:to-purple-500/10 transition-all duration-300" />
                              
                              <div className="relative z-10 flex items-center gap-2 p-2">
                                <FiGithub />
                                View Code
                              </div>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="relative group inline-block">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1">
              <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
                <p className="text-gray-700">
                  Want to see more?{' '}
                  <a href="#contact" className="font-bold text-blue-600 hover:underline">
                    Let's discuss your project!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;