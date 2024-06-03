import React from 'react'
import img1 from "../assets/Herosection/undraw_programmer_re_owql.svg";
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa6';
const About = () => {
  return (
    <div id='about' className='w-10/12  mx-auto mb-12 mt-10 pt-2'>
      {/* <p className='text-3xl mb-4 font-semibold hidden lg:block md:block text-center'> About Me </p> */}
      <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center mt-3 pt-4'>
      <div  className='lg:w-1/2 md:w-1/2 w-full'>
       
      <motion.div
        alt="Animated"
       
        animate={{ y: ['-4%', '4%'] }}
        transition={{ duration: 5, ease: 'linear', repeat: Infinity ,delay:2.1 }}
      >
        <img src={img1} alt='' height='400px' width='400px'/>
    </motion.div>
      </div>
      <div className='lg:w-1/2 md:w-1/2 w-full'>
      <p className='text-3xl mb-2 font-semibold hidden lg:block md:block '> About Me </p>

 <p className='pt-4 text-xl text-justify'>
            I am a passionate full-stack web developer with a curious mind and a knack for problem-solving, thrive on
            the challenge of creating seamless, end-to-end web experiences 🚀. 
          </p>
          <p className='pt-4 text-xl text-justify'>
          I love to explore and learn new technologies as much I can. Right
              Now I am looking forward to collaborate in real life project to
              start up my carrer as a Software Engineer.
          </p>
          <div className='flex items-center gap-x-4 mt-5'>
          <div >
              <button
                id="btn"
                className=" w-fit font-medium  bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2.5 rounded-md hover:bg-white hover:text-black peer-hover:text-black"
              >
                <a href="#contact">Resume</a>
              </button>
            </div>
            <div className=" w-fit social rounded-md px-4 py-2 hover:bg-gradient-to-r hover:from-cyan-500 text- hover:to-teal-500 hover:font-semibold">
                <a className="bg-clip-text text-[#06b6d4] flex items-center gap-x-2">
                Contact Me 
                <span><FaPaperPlane/></span>
                </a>
                
              </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default About