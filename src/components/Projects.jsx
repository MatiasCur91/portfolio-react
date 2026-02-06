import ProjectCard from "./ProjectCard"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sistema de reservas",
      description: "Aplicación web para gestión de turnos",
      tech: ["React", "C#", "SQL"],
      url: "https://www.youtube.com/watch?v=0fexIOD9YVg",
    },
    {
      id: 2,
      title: "Portfolio personal",
      description: "Web personal desarrollada con React",
      tech: ["React", "CSS"],
        url: "https://www.youtube.com/watch?v=0fexIOD9YVg",
    }
  ]

  return (
    <section>
      <h2>Proyectos</h2>

      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            url={project.url}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
