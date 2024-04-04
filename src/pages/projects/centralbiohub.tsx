import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ListItem from '~/components/Utilities/ListItem'
import Highlight from '~/components/Utilities/highlight'

export default function centralbiohub() {
  return (
    <>
			<Head>
        <title>Ernst</title>
        <meta name="description" content="Central BioHub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <h2 className='text-center md:text-left min-[2000px]:text-8xl sm:text-5xl text-4xl lg:text-6xl font-semibold leading-[3rem] sm:leading-[4rem] lg:leading-[5rem] mt-12 md:mt-0 md:mb-[1rem]'>Central BioHub</h2>
        <h5 className='text-2xl font-semibold mb-12 max-md:text-xl max-md:mb-8 min-[2000px]:text-4xl'>The Project</h5>
        <Highlight/>
        <div className='mx-8 max-sm:mx-0 text-justify min-[2000px]:text-[1.5rem]'>
          <p className='mb-4'>
            Central BioHub GmbH is a startup that has now become the world&apos;s largest provider of human biospecimen. The global demand for biospecimen in research has been rapidly 
            increasing in recent years. Whether it&apos;s for testing new vaccines or potential cancer treatments, researchers worldwide require samples, yet procurement often poses 
            challenges. Due to the decentralized storage of samples in locations where they are collected (hospitals, university clinics, medical practices, etc.), it is difficult to 
            reliably connect suppliers and buyers. This is where Central BioHub steps in, offering a central platform for providers and seekers of biospecimen to offer and search for 
            samples.
          </p>
          <p className='mb-4 lg:hidden'>
            As a team of 8 students, our task was to redesign and adapt the online services of Central BioHub to meet customer requirements. Specifically, there were three projects that 
            were supervised over three semesters: firstly, the public sales website, secondly, the Harmonizer, a tool for uploading supplier data into the company&apos;s internal database, 
            and finally, the Predictor Tool, which is intended to make predictions about future sales based on past user data.
          </p>
          <div className='flex items-center max-md:flex-col gap-4 mb-4'>
            <div>
              <p className='mb-4 lg:block hidden'>
                As a team of 8 students, our task was to redesign and adapt the online services of Central BioHub to meet customer requirements. Specifically, there were three projects that 
                were supervised over three semesters: firstly, the public sales website, secondly, the Harmonizer, a tool for uploading supplier data into the company&apos;s internal database, 
                and finally, the Predictor Tool, which is intended to make predictions about future sales based on past user data.
              </p>
              <p className='mb-4'>
                The focus in the first semester was primarily on the Predictor Tool. This tool should be able to read Excel datasets on sales or website views, graphically process them, and 
                make predictions about future developments. This information should be available to employees at any time in the form of a web application.
                800,000 samples.
              </p>
            </div>
            <div className='p-2 border-2 border-[#6751b9] rounded-2xl w-[33%] max-md:w-[90%] max-sm:w-full h-auto flex-none'>
              <Image src={'/assets/projects/CBHWebsite1.png'} alt='Echolight1' width={600} height={350} className='rounded-lg'/>
            </div>
          </div>
          <p>
            In the subsequent semesters, the focus shifted to the website and the Harmonizer. The website was to be completely rebuilt from scratch, independent of existing infrastructure, 
            to test possible design concepts based on customer feedback. Additionally, a completely new filtering system for samples was added to allow users to make highly precise 
            search settings among The Harmonizer, on the other hand, was an internal management tool that allowed the import of supplier datasets into the company&apos;s internal database as 
            accurately and loss-free as possible. After an initial introduction with Central BioHub, customers received their own access, allowing them to easily add newly arriving 
            datasets with just a few clicks.
          </p>
        </div>
        <h5 className='text-2xl font-semibold my-12 max-md:text-xl max-md:my-8 min-[2000px]:text-4xl'>My Role</h5>
        <div className='mx-8 max-sm:mx-0 text-justify min-[2000px]:text-[1.5rem]'>
          <div className='flex items-center max-md:flex-col-reverse gap-4 mb-4'>
            <div className='p-2 border-2 border-[#6751b9] rounded-2xl w-[33%] max-md:w-[90%] max-sm:w-full h-auto flex-none'>
              <Image src={'/assets/projects/CBHHarmonizer.png'} alt='Echolight1' width={600} height={350} className='rounded-lg'/>
            </div>
            <p className=''>
              At the beginning of the project, I initially assumed the role of Technical Lead. With the guidelines from our stakeholders, it was my responsibility to find a suitable tech 
              stack for the project and to introduce and guide the other members of the programming team based on this stack. Due to the existing internal infrastructure, the choice of 
              backend technologies fell on a .NET Core API in conjunction with a Microsoft SQL Server. The frontend, on the other hand, was created with React. I created the basic 
              structure of the project, took over the scheduling for the completion of individual features, and distributed tasks within the programming team accordingly. By the end of 
              the semester, in addition to my lead position, I also took on the role of group leader, representing the interests of the group in regular status meetings or other 
              communications and informing the stakeholders about our current progress.
            </p>
          </div>
          <p className='mb-4'>
            In the following semesters, we were given much more freedom. For work on the website and the Harmonizer, we were allowed to independently select our own tech stack without 
            restrictions from existing technologies. Through my decision, we chose the T3-stack based on Next.js and TypeScript, which allowed us to work in a unified project without 
            strict separation of front and backend. With previous experience with React, which forms the basis of the Next.js framework, the entire team was able to make progress 
            without long transition times.
          </p>
          <div className='flex items-center max-md:flex-col gap-4 mb-4'>
            <p> 
              In addition to my organizational responsibilities, my main activity in these semesters was the creation of the new filtering logic for the website. As researchers sometimes 
              have very specific requirements for their samples, the existing system, in which all set filters were simply logically concatenated one after the other, was no longer 
              sufficient for some. With the new system found in the Expert Search, filters are now divided into groups. Any number of filters can belong to each group, which can be 
              connected with logical AND or OR operations or even completely excluded. In addition to filters, subgroups can also belong to groups, which are linked in the same way and 
              can themselves contain filters or further subgroups. This project presented me with the great challenge of recursive programming, which continued to occupy me throughout the 
              remaining project due to ever-increasing stakeholder requirements.
            </p>
            <div className='p-2 border-2 border-[#6751b9] rounded-2xl w-[33%] max-md:w-[90%] max-sm:w-full h-auto flex-none'>
              <Image src={'/assets/projects/CBHWebsite2.png'} alt='Echolight1' width={600} height={350} className='rounded-lg'/>
            </div>
          </div>
          <p>
            After completing the technical work, the last semester involved the scholarly preparation and writing of a scientific paper, in which I, as one of the two lead authors, wrote 
            the technical implementation details. With this paper, we applied for the Junior Scientist Conference 2024, and if our submission is accepted, we plan to have a representative 
            from our group present there.
          </p>
        </div>
        <h5 className='text-2xl font-semibold my-12 max-md:text-xl max-md:my-8 min-[2000px]:text-4xl'>Learned Skills</h5>
        <div className='mx-8 max-sm:mx-0 min-[2000px]:text-[1.5rem]'>
          <ul className='list-none mb-8 ml-5'>
            <ListItem style='mb-1'>Leading a team</ListItem>
            <ListItem style='mb-1'>Creating organizational plans, timelines, and task planning</ListItem>
            <ListItem style='mb-1'>Programming with C#, JavaScript, and TypeScript</ListItem>
            <ListItem style='mb-1'>Handling Java/TypeScript-based frameworks like React and Next.js</ListItem>
            <ListItem style='mb-1'>Writing and working with requirements analyses</ListItem>
            <ListItem style='mb-1'>Communicating with stakeholders and conveying work results</ListItem>
          </ul>
        </div>
        <hr/>
        <p className='mt-2 mb-4 min-[2000px]:text-[1.5rem] text-justify'>
          <b>A working live demo of the website prototype can be found <a href='https://cbh-website.vercel.app' title='Central BioHub' target='_blank' className='text-[#9678ff] hover:text-[#b7a3ff] transition-colors duration-300'><u>here</u></a>. </b>
          <b>Access the source code for all three projects over on GitHub: <a href='https://github.com/Lu33Max/cbh-website' title='CBH Website on GitHub' target='_blank' className='text-[#9678ff] hover:text-[#b7a3ff] transition-colors duration-300'><u>Website</u></a>, <a href='https://github.com/Lu33Max/cbh-harmonizer' title='CBH Harmonizer on GitHub' target='_blank' className='text-[#9678ff] hover:text-[#b7a3ff] transition-colors duration-300'><u>Harmonizer</u></a>, <a href='https://github.com/Lu33Max/cbh-predictor-new' title='CBH Predictor on GitHub' target='_blank' className='text-[#9678ff] hover:text-[#b7a3ff] transition-colors duration-300'><u>Predictor</u></a>.</b>
        </p>
      </>
    </>
  )
}
