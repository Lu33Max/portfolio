import React, { useRef } from 'react'
import { EXPERIENCE } from '~/utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'

const WorkExperience = () => {
  const sliderRef: React.LegacyRef<Slider> = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const slideRight = () => {
    sliderRef.current?.slickNext();
  }

  const slideLeft = () => {
    sliderRef.current?.slickPrev();
  }

  return (
    <section className='experience-container mt-12 mb-6 md:mb-12 relative'>
      <div id='experience' className='relative -top-28'></div>
      <h5 className='text-2xl 2xl:text-4xl font-semibold mb-12 max-md:text-xl max-md:mb-8'>Game Projects</h5>
      <div className='experience-content'>
        <div onClick={slideRight} className='arrow-right max-xl:right-0 max-md:-right-4 w-8 2xl:w-16 h-8 flex 2xl:h-16 items-center justify-center text-[#6751b9] rounded-xl border-solid border-2 border-[#6751b9] bg-[#130f2a] absolute top-[55%] right-[-2rem] z-20 cursor-pointer'>
          <BiArrowFromLeft className='text-3xl 2xl:text-6xl font-medium'/>
        </div>
        <div onClick={slideLeft} className='arrow-left max-xl:left-0 max-md:-left-4 w-8 2xl:w-16 h-8 flex 2xl:h-16 flex items-center justify-center text-[#6751b9] rounded-xl border-solid border-2 border-[#6751b9] bg-[#130f2a] absolute top-[55%] left-[-2rem] z-20 cursor-pointer'>
          <BiArrowFromRight className='text-3xl 2xl:text-6xl font-medium'/>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {EXPERIENCE.map(item => (
            <ExperienceCard key={item.title} details={item}/>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default WorkExperience
