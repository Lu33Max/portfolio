import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[rgba(0,0,0,0.1)] py-[0.5rem] px-0 z-30 backdrop-blur-2xl fixed top-0 w-full">
        <div className={"max-w-[1300px] 2xl:max-w-[1500px] flex items-center justify-between py-[1rem] px-0 my-0 mx-[2rem] xl:mx-auto"}>
          <p className='text-lg font-semibold 2xl:text-3xl'><Link href={"/"}>Lucas Maximilian Ernst</Link></p>
          <ul className='items-center gap-2 list-none hidden lg:flex'>
            <li className='mx-6'>
              <Link href='/#home' className={'text-base 2xl:text-2xl font-semibold text-white relative cursor-pointer before:content-[" "] before:w-8 before:h-1 before:bg-gradient-to-r before:from-violet-300 before:to-violet-500 before:rounded-lg before:border-none before:absolute before:-bottom-2 before:opacity-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100 scroll-smooth'}>Home</Link>
            </li>
            <li className='mx-6'>
              <Link href='/#skills' className={'text-base 2xl:text-2xl font-semibold text-white relative cursor-pointer before:content-[" "] before:w-8 before:h-1 before:bg-gradient-to-r before:from-violet-300 before:to-violet-500 before:rounded-lg before:border-none before:absolute before:-bottom-2 before:opacity-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100'}>Skills</Link>
            </li>
            <li className='mx-6'>
              <Link href='/#experience' className={'text-base 2xl:text-2xl font-semibold text-white relative cursor-pointer before:content-[" "] before:w-8 before:h-1 before:bg-gradient-to-r before:from-violet-300 before:to-violet-500 before:rounded-lg before:border-none before:absolute before:-bottom-2 before:opacity-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full hover:before:translate-x-0 hover:before:opacity-100'}>Projects</Link>
            </li>
            <li className='mx-6'>
              <Link href='/#contact' className={"text-base 2xl:text-2xl font-semibold flex items-center justify-center text-white bg-gradient-to-r from-violet-300 to-violet-500 py-[0.6rem] px-[2rem] outline outline-1 outline-transparent rounded-md cursor-pointer transition-all ease-in-out duration-300 hover:text-violet-300 hover:from-black hover:to-black hover:outline-violet-300 hover:outline"}>Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
