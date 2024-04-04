import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ListItem from '~/components/Utilities/ListItem'
import Highlight from '~/components/Utilities/highlight'

export default function TwistedRealms()  {
  return (
    <>
      <Head>
        <title>Ernst</title>
        <meta name="description" content="Twisted Realms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <h2 className='text-center md:text-left min-[2000px]:text-8xl sm:text-5xl text-4xl lg:text-6xl font-semibold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] mt-12 md:mt-0 mb-4'>Twisted Realms</h2>
        <h5 className='text-2xl font-semibold mb-12 max-md:text-xl max-md:mb-8 min-[2000px]:text-4xl'>The Project</h5>
        <Highlight/>
        <div className='mx-8 max-sm:mx-0 text-justify min-[2000px]:text-[1.5rem]'>
          <p className='mb-4 xl:hidden min-[2000px]:block'>
            Defeat monsters, collect items, and strengthen your characters to prevail in a battle for the future of the world against the Omen and its followers. Each player takes on the 
            role of a hunter to infiltrate the castle at the centre of the game and defeat the Omen once and for all. Fight your way through procedurally generated battlegrounds against 
            both evil forces and your competitors, claiming all the glory (and gold) for yourself. But beware: if your internal power struggle lasts too long, it could mean the end for 
            this world. 
          </p>
          <div className='flex items-center max-md:flex-col gap-4'>
            <div>
              <p className='mb-4 max-xl:hidden min-[2000px]:hidden'>
                Defeat monsters, collect items, and strengthen your characters to prevail in a battle for the future of the world against the Omen and its followers. Each player takes on the 
                role of a hunter to infiltrate the castle at the centre of the game and defeat the Omen once and for all. Fight your way through procedurally generated battlegrounds against 
                both evil forces and your competitors, claiming all the glory (and gold) for yourself. But beware: if your internal power struggle lasts too long, it could mean the end for 
                this world. 
              </p>
              <p>
                Originally developed as a classic board game during the first semester of the Media Informatics program, three of the original members have now come together to digitize the 
                project, adding revisions and previously unimplemented mechanics to the original concept with their newly acquired skills. Development and conceptualization have been ongoing 
                for four months now, with a planned release on Steam and other platforms.
              </p>
            </div>
            <div className='p-2 border-2 border-[#6751b9] rounded-2xl w-[33%] max-md:w-[90%] h-fit flex-none'>
              <Image src={'/assets/projects/TwistedRealms1.png'} alt='TwistedRealms1' width={600} height={350} className='rounded-lg'/>
            </div>
          </div>
        </div>
        <h5 className='text-2xl font-semibold my-12 max-md:text-xl max-md:my-8 min-[2000px]:text-4xl'>My Role</h5>
        <div className='mx-8 max-sm:mx-0 text-justify min-[2000px]:text-[1.5rem]'>
          <p className='mb-4'>
            My roles within the team primarily consist of game design and the role of Technical Lead. As a game designer, my initial task was to update the outdated game design document 
            to our current knowledge in the game development process. Even in the original version of the game concept, some weaknesses were identified through playtests and feedback 
            from our supervisors, but due to time constraints or lack of know-how, they were never addressed until completion. Using old notes and records, numerous mechanics, 
            particularly related to the combat system, were overhauled to create a much more cohesive overall picture.
          </p>
          <p className='mb-4 xl:hidden min-[2000px]:block'>
            In the second step, as Technical Lead, it is now my responsibility to implement previously defined game mechanics in the engine. Since this project is an opportunity for all 
            of us on the team to learn and expand our skills, we chose the Unreal Engine for implementation, with which I personally had limited experience until then.
          </p>
          <div className='flex items-center max-md:flex-col gap-4'>
            <div className='p-2 border-2 border-[#6751b9] rounded-2xl w-[33%] max-md:w-[90%] h-fit flex-none'>
              <Image src={'/assets/projects/TwistedRealmsGif.gif'} alt='TwistedRealms2' width={600} height={350} className='rounded-lg'/>
            </div>
            <div>
              <p className='mb-4 max-xl:hidden min-[2000px]:hidden'>
                In the second step, as Technical Lead, it is now my responsibility to implement previously defined game mechanics in the engine. Since this project is an opportunity for all 
                of us on the team to learn and expand our skills, we chose the Unreal Engine for implementation, with which I personally had limited experience until then.
              </p>
              <p>
                The majority of my technical work involves grid-based character movements and procedural generation of the game field. While square game fields are much more intuitive in 
                their handling, hexagons bring a new depth with a variety of mathematical peculiarities, all of which add a new layer of complexity. A new coordinate system, distance 
                calculations across diagonals, or conversions between field coordinates and room coordinates are just a few key points. Additionally, field generation serves as both an 
                adoption of the modular structure of the original concept and a personal challenge for myself, as procedural generation in games has interested me for some time.
              </p>
            </div>
          </div>
        </div>
        <h5 className='text-2xl font-semibold my-12 max-md:text-xl max-md:my-8 min-[2000px]:text-4xl'>Learned Skills</h5>
        <div className='mx-8 max-sm:mx-0 min-[2000px]:text-[1.5rem]'>
          <ul className='list-none mb-8 ml-5'>
            <ListItem style='mb-1'>Identifying and addressing issues in existing game concepts</ListItem>
            <ListItem style='mb-1'>Independent work and organization within a team</ListItem>
            <ListItem style='mb-1'>Structured documentation and dissemination of work results</ListItem>
            <ListItem style='mb-1'>Engaging in reasoned discussions of solution approaches within a team</ListItem>
            <ListItem style='mb-1'>Game development in the Unreal Engine</ListItem>
            <ListItem style='mb-1'>Development of procedural generation algorithms and balancing them</ListItem>
          </ul>
        </div>
        <hr/>
        <p className='mt-2 mb-4 min-[2000px]:text-[1.5rem]'>
          <b>Download the Game Design Document <a title="Game Design Document" download href="\assets\documents\Twisted_Realms_GDD.pdf" className='text-[#9678ff] hover:text-[#b7a3ff] transition-colors duration-300'><u>here</u></a>.</b> &#40;German only&#41;
        </p>
      </>
    </>
  )
}
