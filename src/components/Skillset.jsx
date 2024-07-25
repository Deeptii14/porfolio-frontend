import React from "react";
import img1 from "../assets/stack/HTML.png";
import img2 from "../assets/stack/CSS.png";
import img3 from "../assets/stack/Javascript.svg";
import img4 from "../assets/stack/React.png";
import img5 from "../assets/stack/NodeJs.svg";
import img6 from "../assets/stack/Redux.svg";
import img7 from "../assets/stack/Tailwind.png";
import img8 from "../assets/stack/Bootstrap.svg";
import img9 from "../assets/stack/MaterialUI.svg";
import img10 from "../assets/stack/Express.png";
import img11 from "../assets/stack/Git.svg";
import img12 from "../assets/stack/Github.svg";

import img13 from "../assets/stack/MongoDB.svg";
import img14 from "../assets/stack/Vercel.svg";
import { motion } from "framer-motion";
const Skillset = () => {
  return (
    <div className="mt-16 w-10/12 mx-auto" id="skills">
      <div className=" w-full box flex lg:flex-row md:flex-row flex-col relative gap-7 ">
        <div
          className="absolute text-[15em] opacity-50 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-teal-500 
bottom-[-34.5%] right-[-25%] select-none overflow-y-hidden lg:block md:block hidden"
        >
          Skills
        </div>
        <div className=" w-full">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-teal-500 text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-teal-500 text-8xl">
              M
            </span>
            y Tech Stack
            <br />
           
          </h2>

          <div className="mt-4 text-justify leading-6">
           
          </div>
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 0.9, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 25,
            delay:2.6
          }}
        >
          <div className="flex flex-wrap lg:w-1/2 w-full relative gap-8 justify-center">
            <img src={img1} alt="" className="skills-logo" />
            <img src={img2} alt="" className="skills-logo" />
            <img src={img3} alt="" className="skills-logo" />
            <img src={img4} alt="" className="skills-logo" />
            <img src={img5} alt="" className="skills-logo" />
            <img src={img6} alt="" className="skills-logo" />
            <img src={img7} alt="" className="skills-logo" />
            <img src={img8} alt="" className="skills-logo" />
            <img src={img9} alt="" className="skills-logo" />
            <img src={img10} alt="" className="skills-logo" />
            <img src={img11} alt="" className="skills-logo" />
            <img src={img12} alt="" className="skills-logo" />
            <img src={img13} alt="" className="skills-logo" />
            <img src={img14} alt="" className="skills-logo" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skillset;
