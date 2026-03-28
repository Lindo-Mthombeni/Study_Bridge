import { useState, useRef, useEffect } from 'react'
import Logo from '/logo.png'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  onNavigate: (section: string) => void
  active: string
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, active }) => {
  //   const [activeLink, setActiveLink] = useState(false)

  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)

  const navLinks = [
    { id: 'home', label: 'Home', },
    { id: 'services', label: 'Services', },
    { id: 'about_us', label: 'About Us', }
  ]

  useEffect(() => {
    const updateSlider = () => {
      const activeElement = navRef.current?.querySelector(
        `[data-id="${active}"]`
      ) as HTMLElement
      if (activeElement) {
        setSliderStyle({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth
        })
      }
    }

    updateSlider()
    window.addEventListener('resize', updateSlider)
    return () => window.removeEventListener('resize', updateSlider)
  }, [active])

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='nav-bar'>
      <div onClick={toggleMenu} className='nav-menu'>
        <div className='relative w-6 h-6 flex items-center justify-center'>
          <X
            className={`nav-menu-btn ${
              isOpen
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-50'
            }`}
          />
          <Menu
            className={`nav-menu-btn ${
              !isOpen
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 rotate-90 scale-50'
            }`}
          />
        </div>
      </div>
      <div onClick={() => onNavigate('home')} className='m-sm grow'>
        <button className='flex items-center gap-1 text-sm font-black'>
          <img src={Logo} alt='StudyBridge' className='h-7 rounded-full' />
          StudyBridge
        </button>
      </div>
      <div ref={navRef} className='nav-links'>
        <span
          className='link-active-slide'
          style={{
            left: `${sliderStyle.left + sliderStyle.width / 2}px`,
            width: `${Math.round(sliderStyle.width * (80 / 100))}px`
          }}
        />

        {navLinks.map(link => (
          <button
            key={link.id}
            data-id={link.id}
            onClick={() => onNavigate(link.id)}
            className='cursor-pointer'
          >
            <p>{link.label}</p>
          </button>
        ))}
      </div>
      <div className='flex mx-5'>
        <button className='start-study-btn'>START STUDYING</button>
      </div>
    </nav>
  )
}
