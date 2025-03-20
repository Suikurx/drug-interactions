import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import start from './components/start'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <start />
    </>
  )
}

export default App
