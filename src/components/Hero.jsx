import styles from "./Hero.module.css"

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <h1>
        Hola, soy <span>Matias</span>
      </h1>

      <h2>Frontend Developer · React</h2>

      <p>
        Construyo interfaces modernas, accesibles y bien estructuradas.
        Con experiencia también en backend con C# y bases de datos.
      </p>

      <div className={styles.actions}>
        <a href="#projects" className={styles.primary}>
          Ver proyectos
        </a>

        <a href="#contact" className={styles.secondary}>
          Contacto
        </a>
      </div>
    </section>
  )
}

export default Hero
