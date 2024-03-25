import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ListItem from '~/components/Utilities/ListItem'
import Highlight from '~/components/Utilities/highlight'

export default function Slidescape()  {
  return (
    <>
      <Head>
        <title>Ernst</title>
        <meta name="description" content="Slidescape" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <h2 className='text-center md:text-left 2xl:text-8xl sm:text-5xl text-4xl lg:text-6xl font-semibold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] mt-12 md:mt-0 md:mb-[1rem]'>Slidescape</h2>
        <h5 className='text-2xl font-semibold mb-12 max-md:text-xl max-md:mb-8 2xl:text-4xl'>The Project</h5>
        <Highlight/>
        <div className='mx-8 max-sm:mx-0 text-justify'>
          <p className='mb-4 2xl:text-[1.5rem]'>
            Slidescape is a puzzle labyrinth like no other. Trapped in a sliding puzzle, you must cleverly arrange the various rooms to find your way to the exit. But there&apos;s a twist: 
            each area also represents a different video game genre. Now it&apos;s up to you to skillfully combine the nuances of these games to break out of the labyrinth. 
          </p>
          <p className='2xl:text-[1.5rem]'>
            The game concept originated from a Game Jam during the third semester at Mittweida University. Students were tasked with individually creating a concept over a two-week period 
            with the theme &quot;Push and Pull&quot;, which theoretically could be implemented by a small group of developers within a year. The results of the Game Jam were later used 
            as admission criteria for the Game Design Team of the &quot;Echolight&quot; project, of which I became a part.
          </p>
        </div>
        <h5 className='text-2xl font-semibold my-12 max-md:text-xl max-md:my-8 2xl:text-4xl'>My Process</h5>
        <div className='mx-8 max-sm:mx-0 text-justify'>
          <p className='mb-4 2xl:text-[1.5rem]'>
            Since the entire project was to be done individually, I handled the entire conception from ideation to final elaboration myself. Due to the theme &quot;Push and Pull&quot;, 
            the options for a concept were already limited, so I followed through with my initial idea of a sliding puzzle. 
          </p>
          <p className='mb-4 2xl:text-[1.5rem]'>
            A special focus during this task was on the analysis of reference games or mechanics. Simplifying and abstracting complex systems, breaking them down to their essential 
            components, understanding, evaluating, and ultimately developing my own mechanics based on the acquired knowledge from the references was a relatively new way of working for 
            me. Analysing other systems and understanding why they work well, but also identifying potential weaknesses, made developing my own mechanics much more enjoyable, as it allowed 
            me not to develop my ideas in a vacuum, but to observe an existing and functioning example within a complete system.
          </p>
          <div className='flex items-center max-md:flex-col gap-4'>
            <p className='2xl:text-[1.5rem]'>
              Creating a high level of replayability was also a goal of the project. Therefore, I first had to consider what aspects of a game lead players to repeatedly engage with it. 
              Through observations of myself, I realized that giving players a variety of freedoms can lead to constantly new experiences and make each playthrough unique based on the 
              players&apos; decisions. Thus, the idea of a labyrinth that players can freely manipulate was born. While there is one intended path to the goal, all the tools are there for 
              players to create their own route. Rooms can be entered and mostly completed in any order, and the existing puzzles offer opportunities for completion with different abilities.
            </p>
            <div className='p-2 border-2 border-[#6751b9] rounded-2xl w-[33%] max-md:w-[90%] max-sm:w-full h-fit flex-none'>
              <Image src={'/assets/projects/Slidescape1.png'} alt='Slidescape' width={600} height={350} className='rounded-lg'/>
            </div>
          </div>
        </div>
        <h5 className='text-2xl font-semibold my-12 max-md:text-xl max-md:my-8 2xl:text-4xl'>Learned Skills</h5>
        <div className='mx-8 max-sm:mx-0'>
          <ul className='list-none mb-8 ml-5 2xl:text-[1.5rem]'>
            <ListItem style='mb-1'>Creating a Game Design Document</ListItem>
            <ListItem style='mb-1'>Developing game mechanics and justifying decisions based on the essence of games</ListItem>
            <ListItem style='mb-1'>Analysing reference materials and drawing lessons for one&apos;s own concept from similar concepts</ListItem>
            <ListItem style='mb-1'>Breaking down complex mechanics to their essentials and explaining them simply</ListItem>
            <ListItem style='mb-1'>Choosing setting and aesthetics based on essence and mechanics</ListItem>
          </ul>
        </div>
        <hr/>
        <p className='mt-2 mb-4 2xl:text-[1.5rem]'>
          <b>Download the Game Design Document <a title="Game Design Document" download href="\assets\documents\Slidescape_GDD.pdf" className='text-[#9678ff] hover:text-[#b7a3ff] transition-colors duration-300'><u>here</u></a>.</b> &#40;German only&#41;
        </p>
      </>
    </>
  )
}
