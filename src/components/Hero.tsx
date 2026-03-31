import { Button } from './build/Buttons'
import { useState, useEffect } from 'react'
import Logo from '/logo.png'

export const Hero: React.FC = () => {

  const delay = 1200;
  const [animate, setAnimate] = useState(() => {
    // if (typeof window !== 'undefined') {
    //   return !!sessionStorage.getItem('animated')
    // }
    return false
  })

  useEffect(() => {
    // const animated = sessionStorage.getItem('animated')

    // if (!animated) {
    //   // sessionStorage.setItem('animated', 'true')
    //   setTimeout(() => {
    //     setAnimate(true)
    //   }, 300)
    // }

    setTimeout(() => {
        setAnimate(true)
      }, delay)
  }, [])

  return (
    <section className='h-225 relative'>
      <div
        className={`banner ${
          animate ? 'h-[clamp(1250px,155vw,1300px)]' : 'h-[min(170vw,1200px)]'
        }`}
      >
        <img
          src={Logo}
          alt='StudyBridge'
          className='absolute inset-[auto_auto_clamp(25px,3vw,50%)_auto] 
                     w-[clamp(200px,30vw,400px)] rounded-full'
        />
      </div>
      <aside
        className={`aside-content ${
          animate ? 'aside-config' : 'translate-x-30'
        }`}
      >
        <div className='flex flex-col mb-7'>
          <h3 className='aside-heading'>
            <span className='font-hollow shrink-0 mr-2 text-highlight'>
              Free
            </span>{' '}
            <span className='shrink-0'>CAPS LEARNING</span>
          </h3>
          <p className='font-extrabold text-related'>
            Platform for SA Students
          </p>
        </div>
        <div className='text-main text-content pt-0 font-semibold'>
          Access study notes, practice quizzes, and past exam papers aligned
          with the South African curriculum. Bridging students to success, for
          free.{delay}
        </div>
        <div className='call-to-action'>
          <Button
            variant='primary'
            text='Register'
            additionalStyles='register-btn'
          />
          <Button
            variant='secondary'
            text='Discover'
            additionalStyles='discover-btn'
          />
        </div>
      </aside>
    </section>
  )
}
