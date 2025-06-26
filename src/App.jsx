import About from "./components/About"
import BlurBackground from "./components/BlurBackground"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <>
      <BlurBackground />
      <div className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Testimonials />
      <Contact />
      </div>
    </>
  )
}

export default App
