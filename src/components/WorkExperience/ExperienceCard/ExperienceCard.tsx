import Image from 'next/image'
import React, { type ReactNode } from 'react'

type Detail = {
  title: string,
  date: string,
  responsibilities: string[]
  picture: string,
  skills: string[],
  imgLinks: string[],
  link: ReactNode
}

type Details = {
  details: Detail
}

const ExperienceCard = ({details}: Details) => {
  return (
    <div className='work-experience-card max-md:m-0 bg-[#130f2a] rounded-xl border-solid border-2 border-[#6751b9] py-6 px-10 mx-4'>
      <div className='flex justify-between items-center'>
        <div>
          <h6 className='text-[1.05rem] min-[2000px]:text-2xl font-semibold mb-3'>{details.title}</h6>
          <div className='work-duration inline-block text-xs min-[2000px]:text-lg font-normal bg-[#6751b980] rounded-md py-2 px-3 mb-5'>
            {details.date}
          </div>
        </div>
        {details.link}
      </div>
      <ul className='list-none text-[0.9rem] min-[2000px]:text-xl font-normal mb-4'>
        {details.responsibilities.map(res => (
          <li key={res} className='relative after:content-[" "] after:w-2 after:h-2 after:bg-[#6751b9] after:rounded-lg after:absolute after:left-[-1.3rem] after:top-[0.30rem]'>{res}</li>
        ))}
      </ul>
      <div className='mb-4'>
        <a className='text-[#9678ff] hover:text-[#b7a3ff] min-[2000px]:text-xl transition-colors duration-300' href={`/projects/${details.title.toLowerCase().replaceAll(" ","")}`}><u>Learn More</u></a>
      </div>
      <div className='p-2 border-2 border-[#6751b9] rounded-2xl'>
        <Image src={details.picture} alt={details.title} width={854} height={480} className='w-full h-auto rounded-xl'/>
      </div>
      <div className='flex flex-row justify-center items-center max-lg:gap-2 gap-6 mt-2'>
        {details.skills.map((skill, i) => (
          <div key={`${details.title}${skill}`} className='p-1 border-2 border-[#6751b9] rounded-xl max-sm:w-[15%] max-md:w-[10%] max-lg:w-[15%] w-[10%]'>
            <Image src={details.imgLinks[i] ?? ""} title={skill} alt={skill} width={100} height={100} className='w-full h-auto rounded-lg'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
