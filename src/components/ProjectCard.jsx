import styles from "./Projects.module.css"


function ProjectCard({ title, description, tech, url }) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><a href={url} target="_blank" rel="noopener noreferrer">Ver proyecto</a></p>
            <strong>Tecnologías:</strong>
            <ul>
                {tech.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectCard
