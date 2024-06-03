import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";
const ProjectCard = ({ project }) => {
  return (
    <>
      <motion.div
        initial={{ x: -200 ,opacity:0 }} // Start 200px to the left of the viewport
        animate={{ x: 0 ,opacity:1}} // Move 200px to the right from the original position
        transition={{ type: 'spring', stiffness: 100  , duration:15,delay:2.4}}>

      <div class="project-card lg:mt-10 mb-10 mt-6" id={project.id}>
    
        <div class="project-number project-number-right">{project.number}</div>
        <div class="project-content project-content-left">
          <div class=" flex gap-x-5 flex-wrap">
            {project.imagestack.map((i, index) => (
              <img src={i} className="lg:h-10 lg:w-10 w-6 h-6" alt="" />
            ))}
          </div>

          <h2 class="lg:text-3xl text-xl font-bold">{project.title}</h2>
          <p class="lg:text-xl text-sm lg:w-11/12 w-full">{project.description}</p>
          <div class="flex gap-x-6 items-center">
            <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ">
              See Project
            </button>
            <IoLogoGithub className="text-4xl" />
          </div>
        </div>
      </div>
    
              </motion.div>
    </>
  );
};
export default ProjectCard;
