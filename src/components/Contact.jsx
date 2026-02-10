import { useState } from "react"
import styles from "./Contact.module.css"


const initialForm = {
  name: "",
  email: "",
  message: ""
}

function Contact() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email) {
      alert("Nombre y email son obligatorios")
      return
    }

    console.log(form)
    alert("Mensaje enviado (simulado)")

    setForm(initialForm)
  }

  return (
     <section className={styles.section} id="contact"> 
    <h2>Contacto</h2>

    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label><br />
        <input
          className={styles.input}
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email</label><br />
        <input
          className={styles.input}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Mensaje</label><br />
        <textarea
          className={styles.textarea}
          name="message"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button
        className={styles.button}
        type="submit"
        disabled={!form.name || !form.email}
      >
        Enviar
      </button>
    </form>
  </section>
)
}

export default Contact
