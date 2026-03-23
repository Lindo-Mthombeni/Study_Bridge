import { useState, useRef, useEffect } from 'react'
import Logo from '/logo.png'

interface NavbarProps {
  onNavigate: (section: string) => void
  active: string
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, active }) => {
  const [activeLink, setActiveLink] = useState(false)

  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about_us', label: 'About Us' }
  ]

  useEffect(() => {
    const activeElement = navRef.current?.querySelector(`[data-id="${active}"]`) as HTMLElement;
    if (activeElement) {
      setSliderStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth
      });
    }
  }, [active]);

  return (
    <nav className='uppercase text-[.9rem] flex h-20 items-center justify-evenly'>
      <div onClick={() => onNavigate('home')}>
        <button className='flex items-center gap-1 text-[.65rem] font-black'>
          <img src={Logo} alt='StudyBridge' className='h-7 rounded-full' />
          StudyBridge
        </button>
      </div>
      <div ref={navRef} className='nav-links '>

        <span 
          className="link-active-slide"
          style={{
            left: `${sliderStyle.left + (sliderStyle.width * 0.1)}px`,
            width: `${(sliderStyle.width) * (80/100) }px` 
          }}/>

        {navLinks.map(link => (
          <button
            key={link.id}
            data-id={link.id}
            onClick={() => onNavigate(link.id)}
          >
            <p>{link.label}</p>
          </button>
        ))}
      </div>
      <button className='start-study-btn'>START STUDYING</button>
    </nav>
  )
}

{
  /* <a href='home'>Home</a>
        <a href='services'>Services</a>
        <a href='about us'>About Us</a> */
}
