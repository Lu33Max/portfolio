import React from 'react'

type NavProps = {
  isOpen: boolean,
  toggleMenu: () => void
}

const MobileNav = ({isOpen, toggleMenu}: NavProps) => {
  return (
    <div className={`${isOpen ? "block lg:hidden opacity-100 translate-x-0" : "opacity-0 translate-x-[-100vw]"} w-full h-full bg-[rgba(0,0,0,0.3)] fixed left-0 top-0 z-50  shadow-lg transition-all ease-linear items-center`} onClick={toggleMenu}>
      <div className='w-[40vw] h-full bg-[#342864] p-[2rem]'>
        <p className='text-lg font-semibold mb-12'>Lucas Maximilian Ernst</p>
        <ul className='flex flex-col gap-4 list-none -ml-4'>
          <li className='mx-6'>
            <a href='#home' className='text-base font-medium text-white relative cursor-pointer before:content-[" "] before:w-8 before:h-1 before:bg-gradient-to-r before:from-violet-300 before:to-violet-500 before:rounded-lg before:border-none before:absolute before:-bottom-2 before:opacity-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100'>Home</a>
          </li>
          <li className='mx-6'>
            <a href='#skills' className={'text-base font-medium text-white relative cursor-pointer before:content-[" "] before:w-8 before:h-1 before:bg-gradient-to-r before:from-violet-300 before:to-violet-500 before:rounded-lg before:border-none before:absolute before:-bottom-2 before:opacity-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100'}>Skills</a>
          </li>
          <li className='mx-6'>
            <a href='#experience' className={'text-base font-medium text-white relative cursor-pointer before:content-[" "] before:w-8 before:h-1 before:bg-gradient-to-r before:from-violet-300 before:to-violet-500 before:rounded-lg before:border-none before:absolute before:-bottom-2 before:opacity-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100'}>Projects</a>
          </li>
          <li className='mx-6'>
            <a href='contact' className={'text-base font-medium text-white relative cursor-pointer before:content-[" "] before:w-8 before:h-1 before:bg-gradient-to-r before:from-violet-300 before:to-violet-500 before:rounded-lg before:border-none before:absolute before:-bottom-2 before:opacity-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100'}>Contact Me</a>
          </li>
        </ul>
        <button className='mt-2 text-base font-medium flex items-center justify-center text-white bg-gradient-to-r from-violet-300 to-violet-500 py-[0.6rem] px-[2rem] outline outline-1 outline-transparent rounded-md cursor-pointer transition-all ease-in-out duration-300 hover:text-violet-300 hover:from-black hover:to-black hover:outline-violet-300 hover:outline'>
          Hire Me
        </button>
      </div>
    </div>
  )
}

export default MobileNav
