import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";
function App() {
  return (
    <div className="bg-[#eef7ff] dark:bg-[#081b29] text-[#082f49] dark:text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Services />
      <Contact />
       <FloatingChat />
      <Footer />
    </div>
  );
}

export default App;
