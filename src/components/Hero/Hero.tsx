import Image from "next/image";

const Hero = () => {
  return (
    <section className='hero-container md:after:content-[" "] md:before:content-[" "] after:content-[" "] before:content-[" "] relative items-center before:absolute before:bottom-8 before:right-0 before:-z-10 before:h-72 before:w-72 before:rounded-full before:bg-[#7c66e3] before:blur-[225px] after:absolute after:left-0 after:top-0 after:-z-10 after:h-72 after:w-72 after:rounded-full after:bg-[#7c66e3] after:blur-[225px] max-md:flex-col md:flex md:before:bottom-8 md:before:right-0 md:before:h-[28.125rem] md:before:w-[28.125rem] md:after:-left-20 md:after:-top-12 md:after:h-[28.125rem] md:after:w-[28.125rem]'>
      <div className="hero-content flex-1">
        <h2 className="mt-12 text-center text-4xl font-semibold leading-[3rem] sm:text-5xl sm:leading-[4rem] md:mb-[1rem] md:mt-0 md:text-left lg:text-6xl lg:leading-[5rem] min-[2000px]:text-8xl">
          Creating Worlds That Inspire
        </h2>
        <p className="w-auto text-center text-xs font-normal leading-5 sm:text-sm sm:leading-6 md:w-[80%] md:text-left lg:text-lg lg:leading-8 min-[2000px]:text-2xl">
          Game Design and Development | Bringing beautiful stories and ideas to
          life
        </p>
      </div>
      <div className="hero-img mx-0 my-8 flex-1 flex-col items-center gap-4 sm:gap-8 lg:relative lg:left-12">
        <div id="home" className="relative -top-28" />
        <div className="mb-4 flex items-end gap-4 max-md:justify-center sm:gap-8">
          <div className="tech-icon hidden h-[3.3rem] w-[3.3rem] items-center justify-center rounded-xl border border-solid border-[#6852ba] text-center sm:flex sm:h-16 sm:w-16 lg:h-20 lg:w-20">
            <Image
              src={"/assets/images/unity_logo.png"}
              alt=""
              width={50}
              height={50}
              className="h-auto w-8 transition-all ease-in-out hover:translate-y-[-0.5rem] sm:w-10 lg:w-12"
            />
          </div>
          <Image
            src={"/assets/hero/hero.jpg"}
            alt=""
            width={600}
            height={800}
            className="w-48 rounded-3xl transition-all ease-in-out hover:translate-y-[-0.5rem] min-[450px]:w-72 lg:w-[25rem]"
          />
        </div>
        <div className="flex items-end gap-4 max-md:justify-center sm:ml-8 sm:gap-8">
          <div className="tech-icon flex h-[3.3rem] w-[3.3rem] items-center justify-center rounded-xl border border-solid border-[#6852ba] text-center sm:hidden sm:h-16 sm:w-16 lg:h-20 lg:w-20">
            <Image
              src={"/assets/images/unity_logo.png"}
              alt=""
              width={50}
              height={50}
              className="h-auto w-8 transition-all ease-in-out hover:translate-y-[-0.5rem] sm:w-10 lg:w-12"
            />
          </div>
          <div className="tech-icon flex h-[3.3rem] w-[3.3rem] items-center justify-center rounded-xl border border-solid border-[#6852ba] text-center sm:h-16 sm:w-16 lg:h-20 lg:w-20">
            <Image
              src={"/assets/images/godot_logo.png"}
              alt=""
              width={50}
              height={50}
              className="h-auto w-10 transition-all ease-in-out hover:translate-y-[-0.5rem] lg:w-12"
            />
          </div>
          <div className="tech-icon flex h-[3.3rem] w-[3.3rem] items-center justify-center rounded-xl border border-solid border-[#6852ba] text-center sm:h-16 sm:w-16 lg:h-20 lg:w-20">
            <Image
              src={"/assets/images/CSharp_logo.png"}
              alt=""
              width={50}
              height={50}
              className="h-auto w-10 transition-all ease-in-out hover:translate-y-[-0.5rem] lg:w-12"
            />
          </div>
          <div className="tech-icon flex h-[3.3rem] w-[3.3rem] items-center justify-center rounded-xl border border-solid border-[#6852ba] text-center sm:h-16 sm:w-16 lg:h-20 lg:w-20">
            <Image
              src={"/assets/images/TypeScript_logo.png"}
              alt=""
              width={50}
              height={50}
              className="h-auto w-10 transition-all ease-in-out hover:translate-y-[-0.5rem] lg:w-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
