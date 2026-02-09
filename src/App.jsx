

// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Skills from './components/Skills'; // Import Skills component
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
//       <Skills /> {/* Add Skills section here */}
//       <Projects />
//       <Education />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }
// App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-hidden">
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />
        
        {/* Education Page Route */}
        <Route path="/education" element={
          <>
            <Navbar /> {/* showHomeButton prop එක remove කරන්න */}
            <Education />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;