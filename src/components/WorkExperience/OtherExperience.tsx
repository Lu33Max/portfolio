import React, { useRef } from "react";
import { OTHER_EXPERIENCE } from "~/utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

const OtherExperience = () => {
  const sliderRef: React.LegacyRef<Slider> = useRef(null);
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
  };

  const slideLeft = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className='experience-container after:content-[" "] relative mb-6 mt-12 before:absolute before:bottom-0 before:right-0 before:-z-10 before:h-[28rem] before:w-[28rem] before:rounded-full before:bg-[#9e51b9] before:blur-[200px] after:absolute after:-left-20 after:-top-40 after:-z-10 after:h-[28rem] after:w-[28rem] after:rounded-full after:bg-[#7c66e3] after:blur-[200px] max-md:before:h-[18rem] max-md:before:w-[18rem] max-md:after:h-[18rem] max-md:after:w-[18rem] md:mb-12'>
      <div className="relative -top-28"></div>
      <h5 className="mb-12 text-2xl font-semibold max-md:mb-8 max-md:text-xl min-[2000px]:text-4xl">
        Other Projects
      </h5>
      <div className="experience-content">
        <div
          onClick={slideRight}
          className="arrow-right absolute right-[-2rem] top-[15%] z-20 flex h-[80%] w-8 cursor-pointer items-center justify-center rounded-xl border-2 border-solid border-[#6751b9] bg-[#130f2a] text-[#6751b9] hover:brightness-125 max-xl:right-0 max-md:-right-4 min-[2000px]:h-16 min-[2000px]:w-16"
        >
          <BiArrowFromLeft className="text-3xl font-medium min-[2000px]:text-6xl" />
        </div>
        <div
          onClick={slideLeft}
          className="arrow-left absolute left-[-2rem] top-[15%] z-20 flex h-[80%] w-8 cursor-pointer items-center justify-center rounded-xl border-2 border-solid border-[#6751b9] bg-[#130f2a] text-[#6751b9] hover:brightness-125 max-xl:left-0 max-md:-left-4 min-[2000px]:h-16 min-[2000px]:w-16"
        >
          <BiArrowFromRight className="text-3xl font-medium min-[2000px]:text-6xl" />
        </div>
        <Slider ref={sliderRef} {...settings}>
          {OTHER_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} type="other" />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OtherExperience;
