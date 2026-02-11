import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Services /> 
            <Contact />
            <Footer />
          </>
        } />
        
        <Route path="/education" element={
          <>
            <Navbar /> 
            <Education />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;