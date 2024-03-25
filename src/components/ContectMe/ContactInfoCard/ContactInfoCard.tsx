import React, { type ReactNode } from 'react'

type ContactProps = {
  icon: ReactNode,
  text: string
}

const ContactInfoCard = ({icon, text}: ContactProps) => {
  return (
    <div className='contact-details-card flex flex-col items-center justify-center bg-[#130f5a] rounded-xl border-2 border-solid border-[#6751b9] p-6 mb-8'>
      <div className='icon w-16 min-[2000px]:w-28 h-16 xl:h-28 min-[2000px]:text-6xl max-sm:w-12 max-sm:h-12 flex items-center justify-center rounded-lg bg-[#3d3072] sm:mb-3 text-4xl'>
        <>{icon}</>
      </div>
      <p className='text-[0.9rem] min-[2000px]:text-xl font-normal max-sm:hidden'>{text}</p>
    </div>
  )
}

export default ContactInfoCard
