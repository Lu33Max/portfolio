import Head from 'next/head'
import React from 'react'
import Highlight from '~/components/highlight'

export default function SuperPong()  {
  return (
    <>
      <Head>
        <title>Ernst</title>
        <meta name="description" content="Super Pong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>  
        <h2 className='text-center md:text-left sm:text-5xl text-4xl lg:text-6xl font-semibold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] mt-12 md:mt-0 md:mb-[1rem]'>Super Pong</h2>
        <h5 className='text-2xl font-semibold mb-12 max-md:text-xl max-md:mb-8'>The Project</h5>
        <Highlight/>
        <div className='mx-8'>
          <p className='mb-4'>
            The original Pong game is now over 50 years old and has remained ingrained in people&apos;s minds through its simple concept up to the present day. The goal was to revive this 
            design ideology by adding some simple enhancements to bring the game concept into the modern era. Thus, Super Pong was born, which challenges players not only in their 
            reaction time but also with its strategic components. Collect different balls during a match and try to knock out your opponent through tactical deployment. Each ball comes 
            with its own unique behavior pattern and values, providing the right solution for every situation.
          </p>
          <p>
            This concept was designed and implemented during the fourth semester at Mittweida University in the Game Programming module. The aim here was the individual creation of a simple 
            game concept within the Unity Game Engine.
          </p>
        </div>
        <h5 className='text-2xl font-semibold my-12 max-md:text-xl max-md:my-8'>Learned Skills</h5>
        <div className='mx-8'>
          <ul className='list-disc list-inside mb-8'>
            <li className='mb-1'>Basics of 2D game development in Unity</li>
            <li className='mb-1'>Advanced development paradigms in C#/Unity</li>
            <li className='mb-1'>Independent organization and structured work</li>
            <li className='mb-1'>Creation of time and task schedules</li>
          </ul>
        </div>
        <hr/>
        <p className='mt-2 mb-4'>
          <b>Access the source code over on <a href='https://github.com/Lu33Max/super-pong' title='Super Pong on GitHub' target='_blank' className='text-[#9678ff] hover:text-[#b7a3ff] transition-colors duration-300'><u>GitHub</u></a>.</b>
        </p>
      </>
    </>
  )
}
