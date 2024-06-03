import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
import img1 from "../assets/Herosection/undraw_designer_girl_re_h54c.svg";
import img2 from "../assets/Herosection/undraw_online_learning_re_qw08.svg";
import img3 from "../assets/Herosection/undraw_people_search_re_5rre.svg";
import img4 from "../assets/Herosection/undraw_portfolio_feedback_6r17.svg";
import img5 from "../assets/Herosection/undraw_react_re_g3ui.svg";
import img6 from "../assets/Herosection/undraw_programmer_re_owql.svg";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const HeroSection = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <motion.div
      initial={{ y: -200 }} // Start 200px above the viewport
      animate={{ y: 30 }} // Move 200px below the original position
      exit={{ scale: 0, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1.5,
      }}
    >
      <div className="flex lg:flex-row md:flex-row flex-col-reverse gap-y-11 justify-between lg:h-[500px] w-10/12 mx-auto relative lg:mt-[80px] mt-16 z-0 mb-10">
        <div className="flex flex-col h-full justify-center lg:w-5/12 w-full">
          <div className="flex flex-col  ">
            <div className=" flex text-4xl font-semibold leading-10 ">
              {" "}
              Hi👋 ! I am Deepti{" "}
            </div>
            <p className=" text-4xl font-semibold leading-10 mt-6">
              I am a {"  "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-teal-500  font-bold">
                <Typewriter
                  words={[
                    "Software Engineer",
                    "Web Developer",
                    "MERN Stack Developer",
                    "Coder",
                    "Problem Solver",
                    "Web Designer",
                  ]}
                  loop={5}
                  cursor
                  typeSpeed={250}
                  deleteSpeed={250}
                  delaySpeed={2000}
                  cursorBlinking={true}
                  cursorColor="black"
                />
              </span>
            </p>
          </div>
          {/* <p className='pt-4 text-xl text-justify'>
            I am a passionate full-stack web developer with a curious mind and a knack for problem-solving, thrive on
            the challenge of creating seamless, end-to-end web experiences 🚀. I love to learn and explore new
            technologies.
          </p> */}
          <div className="lg:mt-10 flex items-center mt-8 gap-x-4  text-lg font-bold ">
            <div className=" flex items-center gap-x-3">
              <div className=" social rounded-full p-2 hover:bg-gradient-to-r hover:from-cyan-500 text- hover:to-teal-500">
                <a className="bg-clip-text text-[#06b6d4]">
                  <FaLinkedin className="w-6 h-6 " />
                </a>
              </div>
              <div className=" social rounded-full p-2 hover:bg-gradient-to-r hover:from-cyan-500 text- hover:to-teal-500">
                <a className="bg-clip-text text-[#06b6d4]">
                  <AiOutlineGithub className="w-6 h-6 " />
                </a>
              </div>

              <div className=" social rounded-full p-2 hover:bg-gradient-to-r hover:from-cyan-500 text- hover:to-teal-500">
                <a className="bg-clip-text text-[#06b6d4]">
                  <HiOutlineMail className="w-6 h-6 " />
                </a>
              </div>
            </div>
            <div>
              <button
                id="btn"
                className=" w-fit font-medium  bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black peer-hover:text-black"
              >
                <a href="#contact">Contact Me</a>
              </button>
            </div>
          </div>
        </div>
        {/* image */}

        <div className=" flex lg:w-1/2 w-full h-full items-center justify-center lg:pl-4 lg:mt-4 mt-14">
          <Swiper
            slidesPerView={1}
            spaceBetween={25}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
          >
            {images.map((image, i) => {
              return (
                <SwiperSlide key={i}>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      duration: 0.5,
                    }}
                  >
                    <div className=" flex justify-center items-center mt-3 pl-5">
                      <img
                        src={image}
                        alt=""
                        className="w-full h-[400px] object-fill"
                      />
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
            {/* <SwiperSlide>Slide 1</SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
