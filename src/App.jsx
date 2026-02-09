// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Education from './components/Education';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="overflow-hidden">
//       <Navbar />
//       <Home />
//       <About />
//       <Projects />
//       <Education />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills'; // Import Skills component
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills /> {/* Add Skills section here */}
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;