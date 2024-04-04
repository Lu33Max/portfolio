import React, { useRef } from 'react'
import { OTHER_EXPERIENCE } from '~/utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'

const OtherExperience = () => {
  const sliderRef: React.LegacyRef<Slider> = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slideRight = () => {
    sliderRef.current?.slickNext();
  }

  const slideLeft = () => {
    sliderRef.current?.slickPrev();
  }

  return (
    <section className='experience-container mt-12 mb-6 md:mb-12 relative after:content-[" "] after:w-[28rem] after:h-[28rem] after:rounded-full after:bg-[#7c66e3] after:absolute after:-z-10 before:w-[28rem] max-md:before:w-[18rem] max-md:after:w-[18rem] max-md:before:h-[18rem] max-md:after:h-[18rem] before:h-[28rem] before:rounded-full before:bg-[#9e51b9] before:absolute before:-z-10 after:-top-40 after:-left-20 before:bottom-0 before:right-0 before:blur-[200px] after:blur-[200px]'>
      <div className='relative -top-28'></div>
      <h5 className='text-2xl min-[2000px]:text-4xl font-semibold mb-12 max-md:text-xl max-md:mb-8'>Other Projects</h5>
      <div className='experience-content'>
        <div onClick={slideRight} className='arrow-right max-xl:right-0 max-md:-right-4 w-8 min-[2000px]:w-16 h-8 flex min-[2000px]:h-16 items-center justify-center text-[#6751b9] rounded-xl border-solid border-2 border-[#6751b9] bg-[#130f2a] absolute top-[55%] right-[-2rem] z-20 cursor-pointer'>
          <BiArrowFromLeft className='text-3xl min-[2000px]:text-6xl font-medium'/>
        </div>
        <div onClick={slideLeft} className='arrow-left max-xl:left-0 max-md:-left-4 w-8 min-[2000px]:w-16 h-8 flex min-[2000px]:h-16 items-center justify-center text-[#6751b9] rounded-xl border-solid border-2 border-[#6751b9] bg-[#130f2a] absolute top-[55%] left-[-2rem] z-20 cursor-pointer'>
          <BiArrowFromRight className='text-3xl min-[2000px]:text-6xl font-medium'/>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {OTHER_EXPERIENCE.map(item => (
            <ExperienceCard key={item.title} details={item} type='other'/>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default OtherExperience
