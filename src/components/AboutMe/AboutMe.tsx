import React from 'react'

const AboutMe = () => {
  return (
    <section className='my-16'>
      <div id='about' className='relative -top-28'></div>
      <h5 className='text-2xl font-semibold mb-12 max-md:text-xl max-md:mb-8 min-[2000px]:text-4xl'>About Me</h5>
      <p className='mx-8 leading-6 text-justify min-[2000px]:text-2xl'>
        Hi, my name is Lucas Maximilian Ernst, 20 years old and an enthusiast for games and the workings behind them. 
        What originally only started out as a hobby about 10 years ago with hacks for Super Mario 64 has long since become part of my everyday life. With my studies of Media Informatics 
        and Interactive Entertainment at the University Mittweida, I am working towards a future in which I can turn this passion into a career. After acquiring all the necessary 
        theoretical knowledge about the process behind creating a game, I am now looking for more opportunities to bring this knowledge into practice. Following this goal, two 
        university colleagues and I are currently working on a digital board game experience which we hope to present to the public later this year.
      </p>
    </section>
  )
}

export default AboutMe