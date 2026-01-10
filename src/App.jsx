import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import FeaturedProjects from "./components/Projects/FeaturedProjects";
import OtherProjects from "./components/Projects/OtherProjects";
import Skills from "./components/Skills/Skills";
import SocialRail from "./components/Social/SocialRail";

function App() {
  return (
    <div className="app">
      <div className="siteBg" aria-hidden="true"></div>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <OtherProjects />
        <Skills />
        <About />
        <Contact />
        <SocialRail />
      </main>
    </div>
  );
}

export default App;
