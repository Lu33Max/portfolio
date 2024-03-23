import React, { type ReactNode } from 'react'

type SkillCardArgs = {
  title: string,
  icon: ReactNode,
  isActive: boolean,
  onClick: () => void,
}

const SkillCard = ({ title, icon, isActive, onClick }: SkillCardArgs) => {
  return (
    <div className={`skills-card max-lg:p-8 rounded-xl border-2 border-solid border-[#6751b9] py-10 text-center bg-[rgba(22,17,47,0.4)] backdrop-blur-sm relative cursor-pointer transition-all ease-in-out ${isActive ? "bg-gradient-to-t from-[#aa94fe] to-[#7c5fe6]" : ""} hover:bg-gradient-to-t hover:from-[#aa94fe] hover:to-[#7c5fe6]`} onClick={onClick}>
      <div className='skill-icon max-lg:w-12 max-lg:h-12 w-16 h-16 flex items-center justify-center bg-[#2a2252] rounded-xl border-2 border-solid border-[#6852ba] absolute -top-4 -left-4'>
        {icon}
      </div>
      <span className='text-xl font-medium max-lg:text-base text-nowrap'>{title}</span>
    </div>
  )
}

export default SkillCard
