import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import StaggeredMenu from "./components/StaggeredMenu/StaggeredMenu"

const menuItems = [
  { label: "Inicio", link: "#hero" },
  { label: "Skills", link: "#skills" },
  { label: "Proyectos", link: "#projects" },
  { label: "Contacto", link: "#contact" },
]

const socialItems = [
  { label: "GitHub", link: "https://github.com/MatiasCur91" },
  { label: "LinkedIn", link: "https://linkedin.com/in/matias-curbelo-2b118a136" },
]

function App() {
  return (
    <>
      <StaggeredMenu
        items={menuItems}
        socialItems={socialItems}
      />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
