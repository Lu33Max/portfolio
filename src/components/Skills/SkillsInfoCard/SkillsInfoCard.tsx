import React from 'react'

type Skill = {
  skill: string,
  percentage: string
}

type InfoCardArgs = {
  heading: string,
  skills: Skill[]
}

const SkillsInfoCard = ({ heading, skills }: InfoCardArgs) => {
  return (
    <div className='skills-info-card min-h-[23rem] rounded-xl border-2 border-solid border-[#6751b9] bg-[rgba(22, 17, 47, 0.4)] backdrop-blur-sm'>
      <h6 className='text-lg 2xl:text-3xl max-lg:text-[1.1rem] font-medium px-8 py-3 bg-gradient-to-t from-[#ac96ff] to-[#7c5fe6] text-transparent bg-clip-text border-b-2 border-solid border-b-[#6751b9]'>{heading}</h6>
      <div className='skills-info-content p-8 max-lg:p-6'>
        {skills.map((item, i) => (
          <React.Fragment key={`skill_${i}`} >
            <div className='skill-info flex items-center justify-between 2xl:text-2xl max-lg:text-[0.9rem] text-base'>
              <p className='font-medium'>{item.skill}</p>
              <p className='percentage text-[#dd8cfa] font-medium '>{item.percentage}</p>
            </div>

            <div className='skill-progres-bg w-full h-2 bg-[#382e68] rounded-lg my-4 overflow-hidden'>
              <div className='skill-progress w-0 h-2 bg-gradient-to-r from-[#aa94fe] to-[#7d60e6] rounded-lg transition-all ease-in-out' style={{width: item.percentage}} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SkillsInfoCard
