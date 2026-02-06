import SkillItem from "./SkillItem"

function Skills() {
    const skills = [
        {
            id: 1,
            name: "React",
            level: "Intermedio"
        },
        {
            id: 2,
            name: "JavaScript",
            level: "Avanzado"
        },
        {
            id: 3,
            name: "HTML",
            level: "Básico"
        },
        {
            id: 4,
            name: "CSS",
            level: "Intermedio"
        },
        {
            id: 5,
            name: "C#",
            level: "Básico"
        },
        {
            id: 6,
            name: "SQL",
            level: "Básico"
        },
        {
            id: 7,
            name: "MongoDB",
            level: "Básico"
        }
    ]

    return (
        <section>
            <h2>Skills</h2>

            <ul>
                {skills.map((skill) => (
                    <SkillItem
                        key={skill.id}
                        name={skill.name}
                        level={skill.level}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Skills
