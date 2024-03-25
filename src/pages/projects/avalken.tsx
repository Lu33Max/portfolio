import Head from 'next/head'
import React from 'react'
import ListItem from '~/components/Utilities/ListItem'
import Highlight from '~/components/Utilities/highlight'

export default function Avalken()  {
  return (
    <>
      <Head>
        <title>Ernst</title>
        <meta name="description" content="Avalken" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>  
        <h2 className='text-center md:text-left 2xl:text-8xl sm:text-5xl text-4xl lg:text-6xl font-semibold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] mt-12 md:mt-0 md:mb-[1rem]'>Avalken</h2>
        <h5 className='text-2xl font-semibold mb-12 max-md:text-xl max-md:mb-8 2xl:text-4xl'>The Project</h5>
        <Highlight/>
        <div className='mx-8 max-sm:mx-0 text-justify 2xl:text-[1.5rem]'>
          <p className='mb-4'>
            The game is a 2D action-adventure in a top-down perspective with real-time combat system like the older 2D &quot;The Legend of Zelda&quot; games, with additional role-playing 
            elements such as a levelling system and stats. The world is set in a medieval fantasy era and designed in a pixel art style.
          </p>
          <p className='mb-4'>
            In the game world, players encounter NPCs who assist them on their journey, monsters that must be defeated, and discover new items (such as a shield, bombs, a bow, a lamp, etc.) 
            to interact with their environment. Players primarily use a sword for combat, but the use of items is also possible. By defeating monsters, players can level up their character 
            and increase their own stats (health, attack, defence, etc.). With the newly acquired items and increased stats, players can attempt the temples scattered throughout the world. 
            These temples contain puzzles that can only be solved through the correct use of items, as well as battles against difficult enemies. The game is considered completed when all 
            dungeons have been cleared.
          </p>
          <p>
            In the two-player mode, players can choose from a selection of temples specifically created for this mode. These temples include new puzzles that can only be solved through 
            cooperation between both players. The levelling system is disabled for this mode. The time taken to complete a temple is saved and is intended to encourage players to 
            continually surpass their best time.
          </p>
        </div>
        <h5 className='text-2xl font-semibold my-12 max-md:text-xl max-md:my-8 2xl:text-4xl'>Learned Skills</h5>
        <div className='mx-8 max-sm:mx-0 2xl:text-[1.5rem]'>
          <ul className='list-none mb-8 ml-5'>
            <ListItem style='mb-1'>General fundamentals of programming with Java</ListItem>
            <ListItem style='mb-1'>Basics of game development with Java</ListItem>
            <ListItem style='mb-1'>Expansion of knowledge on basic programming paradigms (inheritance, polymorphism, streams, etc.)</ListItem>
          </ul>
        </div>
        <hr/>
        <p className='mt-2 mb-4 2xl:text-[1.5rem]'>
          <b>Access the source code over on <a href='https://github.com/Lu33Max/avalken' title='Avalken on GitHub' target='_blank' className='text-[#9678ff] hover:text-[#b7a3ff] transition-colors duration-300'><u>GitHub</u></a>.</b>
        </p>
      </>
    </>
  )
}
