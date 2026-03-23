import { useState } from 'react'
import { Navbar } from './components/Navbar.tsx'
import { Hero } from './components/Hero.tsx'
import './App.css'

const App: React.FC = () => {

  const [activeSection, setActiveSection] = useState('home')

  return (
    <div>
      <Navbar onNavigate={setActiveSection} active={activeSection}/>
      <Hero />
    </div>
  )
}

export default App
