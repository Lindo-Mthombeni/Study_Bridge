import { useState } from 'react'
// import { Background } from './components/Background.tsx'
import { Navbar } from './components/Navbar.tsx'
import { Hero } from './components/Hero.tsx'
import { Features } from './components/Features.tsx'
import './App.css'

const App: React.FC = () => {

  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className='flex flex-col min-h-screen max-w-screen overflow-clip'>
      {/* <Background /> */}
      <Navbar onNavigate={setActiveSection} active={activeSection}/>
      <Hero />
      <Features />
    </div>
  )
}

export default App
