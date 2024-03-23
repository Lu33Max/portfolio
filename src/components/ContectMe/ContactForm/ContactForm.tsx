import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-form-content w-full'>
      <form className='flex flex-col gap-6'>
        <div className='name-container flex items-center gap-6 max-[450px]:flex-col max-[450px]:items-start'>
          <input type='text' name='firstname' placeholder='First Name' className='flex-1 w-full text-white bg-[#130f2a] rounded-xl border-2 border-solid border-[#6751b9] p-4 max-[450px]:p-3 max-[450px]:rounded-md'></input>
          <input type='text' name='lastname' placeholder='Last Name' className='flex-1 w-full text-white bg-[#130f2a] rounded-xl border-2 border-solid border-[#6751b9] p-4 max-[450px]:p-3 max-[450px]:rounded-md'></input>
        </div>
        <input type='text' name='email' placeholder='Email' className='flex-1 w-full text-white bg-[#130f2a] rounded-xl border-2 border-solid border-[#6751b9] p-4 max-[450px]:p-3 max-[450px]:rounded-md'></input>
        <textarea name='message' placeholder='Message' rows={3} className='flex-1 w-full text-white bg-[#130f2a] rounded-xl border-2 border-solid border-[#6751b9] p-4 max-[450px]:p-3 max-[450px]:rounded-md'></textarea>
        <button className='text-base font-medium text-white rounded-xl border-2 border-solid border-[#6751b9] bg-gradient-to-r from-[#a892fe] to-[#8064e8FF] p-3 transition-all ease-in-out cursor-pointer hover:text-[#a892fe] hover:bg-none duration-300 max-[450px]:text-[0.9rem] max-[450px]:rounded-md max-[450px]:p-2'>Send</button>
      </form>
    </div>
  )
}

export default ContactForm
