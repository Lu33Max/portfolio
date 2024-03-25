import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='hero-container max-md:flex-col md:flex items-center relative md:after:content-[" "] md:before:content-[" "] md:after:w-[28.125rem] md:before:w-[28.125rem] md:after:h-[28.125rem] md:before:h-[28.125rem] after:rounded-full before:rounded-full after:bg-[#7c66e3] before:bg-[#7c66e3] after:absolute before:absolute after:-z-10 before:-z-10 md:after:-top-12 md:after:-left-20 md:before:bottom-8 md:before:right-0 after:blur-[225px] before:blur-[225px] after:content-[" "] before:content-[" "] before:w-72 after:w-72 before:h-72 after:h-72 after:top-0 after:left-0 before:bottom-8 before:right-0'>
      <div className='hero-content flex-1'>
        <h2 className='text-center md:text-left 2xl:text-8xl sm:text-5xl text-4xl lg:text-6xl font-semibold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] mt-12 md:mt-0 md:mb-[1rem]'>Creating Worlds That Inspire</h2>
        <p className='w-auto md:w-[80%] text-center md:text-left 2xl:text-2xl text-xs sm:text-sm lg:text-lg font-normal leading-5 sm:leading-6 lg:leading-8'>
          Game Design and Development | Bringing beautiful stories and ideas to life
        </p>
      </div>
      <div className='hero-img flex-1 flex-col items-center gap-4 sm:gap-8 my-8 mx-0 lg:relative lg:left-12'>
        <div id='home' className='relative -top-28'/>
        <div className='flex items-end gap-4 sm:gap-8 mb-4 max-md:justify-center'>
          <div className='tech-icon w-[3.3rem] sm:w-16 lg:w-20 h-[3.3rem] sm:h-16 lg:h-20 flex items-center justify-center text-center rounded-xl border border-solid border-[#6852ba]'>
            <Image src={"/assets/images/unity_logo.png"} alt="" width={50} height={50} className='w-8 sm:w-10 lg:w-12 h-auto transition-all ease-in-out hover:translate-y-[-0.5rem]'/>
          </div>
          <Image src={"/assets/hero/hero.jpg"} alt='' width={600} height={800} className='w-48 min-[450px]:w-72 rounded-3xl lg:w-[25rem] transition-all ease-in-out hover:translate-y-[-0.5rem]'/>
        </div>
        <div className='flex items-end gap-4 sm:gap-8 ml-8 max-md:justify-center'>
          <div className='tech-icon w-[3.3rem] sm:w-16 lg:w-20 h-[3.3rem] sm:h-16 lg:h-20 flex items-center justify-center text-center rounded-xl border border-solid border-[#6852ba]'>
            <Image src={"/assets/images/unreal_engine_logo.png"} alt="" width={50} height={50} className='w-10 lg:w-12 h-auto transition-all ease-in-out hover:translate-y-[-0.5rem]'/>
          </div>
          <div className='tech-icon w-[3.3rem] sm:w-16 lg:w-20 h-[3.3rem] sm:h-16 lg:h-20 flex items-center justify-center text-center rounded-xl border border-solid border-[#6852ba]'>
            <Image src={"/assets/images/CSharp_logo.png"} alt="" width={50} height={50} className='w-10 lg:w-12 h-auto transition-all ease-in-out hover:translate-y-[-0.5rem]'/>
          </div>
          <div className='tech-icon w-[3.3rem] sm:w-16 lg:w-20 h-[3.3rem] sm:h-16 lg:h-20 flex items-center justify-center text-center rounded-xl border border-solid border-[#6852ba]'>
            <Image src={"/assets/images/TypeScript_logo.png"} alt="" width={50} height={50} className='w-10 lg:w-12 h-auto transition-all ease-in-out hover:translate-y-[-0.5rem]'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
