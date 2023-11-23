import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import InfoHome from './components/InfoHome'
import IAbout from './components/IAbout'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<InfoHome />} />
        <Route path="/info/about" element={<IAbout />} />
      </Routes>
    </BrowserRouter>
    // </>
  )
}

export default App
