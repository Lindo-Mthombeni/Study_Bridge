import { Button } from '../build/Buttons';
import { Card } from '../build/Card';
import { useState, useEffect } from 'react';
import Logo from '/logo.png';

export const Hero: React.FC = () => {
  
  const [animate, setAnimate] = useState(() => {
    const animationStatusCheck = sessionStorage.getItem("slideIn")
    return animationStatusCheck === "slided" ? true : false
  })
  const [slideBtn, setSlideBtn] = useState(() => {
    const btnStatusCheck = sessionStorage.getItem("slideIn")
    return btnStatusCheck === "slided" ? true : false
  })

  useEffect(() => {
    const animationStatus = sessionStorage.getItem("slideIn")
    const delay = 500
    let heroSlideDelay: number
    let btnSlideDelay: number

    if (animationStatus !== "slided") {
       heroSlideDelay = setTimeout(() => {
         setAnimate(true)
        sessionStorage.setItem("slideIn", "slided")
      }, delay)

      btnSlideDelay = setTimeout(() => {
        setSlideBtn(true)
      }, delay + 400)
    }


    return () => {
      clearTimeout(heroSlideDelay);
      clearTimeout(btnSlideDelay);
    };
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
      <aside>
        <Card variant='primary'
          additionalStyles={`aside-content ${
            animate ? 'opacity-100 right-[clamp(30px,6vw,2200px)]' : ''
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
            free
          </div>
          <div className='call-to-action'>
            {/** Children looks weird but its meant to take any text or html element */}
            <Button
              variant='primary'
              children='Register'
              additionalStyles={`register-btn ${slideBtn ? 'right-0' : ''}`}
            />
            <Button
              variant='secondary'
              children='Discover'
              additionalStyles={`discover-btn ${slideBtn ? 'right-0' : ''}`}
            />
          </div>
        </Card>
      </aside>
    </section>
  );
};
