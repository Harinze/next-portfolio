import React from "react";
import About from "../components/About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Footer from "./Footer";


const App: React.FC = () => {
  return (
    <>
     <div className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
export default App;
