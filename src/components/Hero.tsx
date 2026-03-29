import { useState, useEffect } from 'react'
import Logo from '/logo.png'

export const Hero: React.FC = () => {
  const [animate, setAnimate] = useState(() => {
    if (typeof window !== 'undefined') {
      return !!sessionStorage.getItem('animated')
    }
    return false
  })

  useEffect(() => {
    const animated = sessionStorage.getItem('animated')

    if (!animated) {
      sessionStorage.setItem('animated', 'true')
      setTimeout(() => {
        setAnimate(true)
      }, 300)
    }
  }, [])
/** 1150px  140vw*/
  return (
    <section className='overflow-clip'>
      <div
        className={`banner ${
          animate ? 'h-[clamp(1150px,145vw,1300px)]' : 'h-[min(170vw,1200px)]'
        }`}
      >
        <img
          src={Logo}
          alt='StudyBridge'
          className='absolute bottom-[clamp(30px,7vw,50%)] w-[min(40vw,400px)]
                     rounded-full'
        />
      </div>
      <aside
        className={`aside-content ${
          animate
            ? 'opacity-100 -translate-x-[125vw] sm:-translate-x-[95vw] sm:bg-blue-500 md:-translate-x-[80vw] md:bg-green-300 lg:-translate-x-[55vw] lg:bg-red-700 xl:-translate-x-[45vw] xl:bg-amber-600'
            : 'translate-x-30'
        }`}
      >
        <div className='flex flex-col mb-7'>
          <h3
            className='p-[24px_24px_0_24px] text-head font-black
                       text-accent'
          >
            <span className='font-hollow text-highlight'>Free</span> CAPS
            LEARNING
          </h3>
          <p className='font-extrabold text-related  pl-6'>
            Platform for SA Students
          </p>
        </div>
        <div className='text-main p-6 pt-0 font-semibold'>
          Access study notes, practice quizzes, and past exam papers aligned
          with the South African curriculum. Bridging students to success, for
          free.
        </div>
      </aside>
    </section>
  )
}
