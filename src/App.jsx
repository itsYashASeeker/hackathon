import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import InfoHome from './components/InfoHome'
import IAbout from './components/IAbout'
import AppProvider from './context/AppContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/info" element={<InfoHome />} />
          <Route path="/info/about" element={<IAbout />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
    // </>
  )
}

export default App
