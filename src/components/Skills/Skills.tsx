import React, { type ReactNode, useState } from 'react'
import { SKILLS } from '~/utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

type Skill = {
  title: string,
  icon: ReactNode,
  skills: {
    skill: string,
    percentage: string
  }[]
}

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

  const handelSelectSkill = (data: Skill) => {
    setSelectedSkill(data);
  }

  return (
    <section className='skills-container my-16 max-sm:p-0 relative after:content-[" "] after:w-[28rem] after:h-[28rem] after:rounded-full after:bg-[#7c66e3] after:absolute after:-z-10 before:w-[28rem] max-md:before:w-[18rem] max-md:after:w-[18rem] max-md:before:h-[18rem] max-md:after:h-[18rem] before:h-[28rem] before:rounded-full before:bg-[#9e51b9] before:absolute before:-z-10 after:-top-12 after:-left-20 before:bottom-0 before:right-0 before:blur-[200px] after:blur-[200px]'>
      <div id='skills' className='relative -top-28'></div>
      <h5 className='text-2xl font-semibold mb-14 max-md:text-xl max-md:mb-8 min-[2000px]:text-4xl'>Technical Proficiency</h5>
      <div className='skills-content flex max-md:flex-col-reverse max-md:gap-12 items-start gap-12 max-lg:gap-8 min-[2000px]:text-4xl'>
        <div className='skills max-md:w-full flex-1 grid gap-12 grid-cols-2 max-lg:pl-4 max-lg:gap-8'>
          {SKILLS.map(item => (
            <SkillCard key={item.title} icon={item.icon} title={item.title} isActive={selectedSkill?.title === item.title} onClick={() => handelSelectSkill(item)}/>
          ))}
        </div>
        <div className='skills-info max-md:w-full flex-1'>
          <SkillsInfoCard heading={(selectedSkill as Skill).title} skills={(selectedSkill as Skill).skills} />
        </div>
      </div>
    </section>
  )
}

export default Skills
