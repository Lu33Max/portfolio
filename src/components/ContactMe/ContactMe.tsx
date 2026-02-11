import React from 'react'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import { BiLogoGithub, BiLogoLinkedin, BiMailSend } from 'react-icons/bi'

const ContactMe = () => {
  return (
    <section id='contact' className='contact-container relative'>
      <h5 className='text-2xl min-[2000px]:text-4xl font-semibold mb-12 max-lg:text-xl max-md:mb-4'>Contact Me</h5>
      <div className='contact-content flex gap-12 max-lg:gap-4 mx-8 max-w-full justify-evenly'>
        <div className='w-[33%]'>
          <ContactInfoCard icon={<BiMailSend/>} text='ernst_lucas@outlook.de'/>
        </div>
        <div className='w-[33%]'>
          <ContactInfoCard icon={<a href='https://github.com/Lu33Max'><BiLogoGithub/></a>} text='Lu33Max'/>
        </div>
        <div className='w-[33%]'>
          <ContactInfoCard icon={<a href='https://www.linkedin.com/in/lucas-maximilian-ernst-ab4b732b4/'><BiLogoLinkedin/></a>} text='Lucas Maximilian Ernst'/>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
