import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const fetchCount = async () => {
    // Fíjate que llamamos a /api/counter. Nginx redirigirá esto al backend.
    const res = await fetch('/api/counter');
    const data = await res.json();
    setCount(data.value);
  }

  useEffect(() => {
    fetchCount();
  },[])

  const increment = async () => {
    await fetch('/api/counter/increment', { method: 'POST' });
    fetchCount();
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Ya me canse de esto, no funciona :c</h1>
      <h2>{count}</h2>
      <button onClick={increment} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Incrementar Contador
      </button>
    </div>
  )
}

export default App
