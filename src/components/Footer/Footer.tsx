import React from 'react'

const Footer = () => {
  return (
    <div className='footer w-full text-[0.8rem] 2xl:text-lg text-center bg-gradient-to-r from-[#303072] to-[#423477] p-4 mt-6'>
      © {new Date().getFullYear()} Lucas Maximilian Ernst
    </div>
  )
}

export default Footer
