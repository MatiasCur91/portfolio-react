import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor actual: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Sumar
      </button>

      <button onClick={() => setCount(count - 1)}>
        Restar
      </button>
    </div>
  )
}

export default Counter
