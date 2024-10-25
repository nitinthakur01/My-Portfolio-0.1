import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/WebTechnology";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-white selection:text-black ">
      <div className="fixed top-0 w-full h-full -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-zinc-950"></div>
      </div>
      <div className="container px-8 mx-auto lg:px-16">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
