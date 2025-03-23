import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Medicines from './components/medicines'
import Home from './components/home'
import Bot from './components/bot'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/chatbot" element={<Bot />} />
      </Routes>
    </BrowserRouter>
  )
}


