import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-[#231023] p-20 relative w-full" >
      <div class=" absolute left-0 bottom-0 select-none text-[#452745] text-[5em] z-0 lg:block hidden">Deepti</div>

    <div className="flex lg:justify-between lg:flex-row items-center justify-center lg:gap-0 gap-y-7 flex-col ">
  

      <div className="flex gap-x-8 text-white z-20">
      <a href="#project" className="cursor-pointer hover:scale-110 hover:text-[#455e62] hover:font-bold">Projects</a>
      <a href="#skills" className="cursor-pointer hover:scale-110 hover:text-[#455e62] hover:font-bold">Skills</a>
      <a href="#contact" className="cursor-pointer hover:scale-110 hover:text-[#455e62] hover:font-bold">Contact</a>

      </div>
      <div className="text-white flex gap-x-7 text-3xl">
      <a href="https://www.linkedin.com/in/deepti-mehra-20055a247/" className=" hover:scale-125 ">
      <FaLinkedin />
    </a>
    <a href="https://github.com/Deeptii14" className=" hover:scale-125" >
      <AiOutlineGithub />
    </a>
    <a href="https://www.instagram.com/deeptii._mehra/" className=" hover:scale-125 ">
      <FaInstagram />
    </a>
    <a href="mailto:deeptii1403@gmail.com" className=" hover:scale-125" >
      <HiOutlineMail />
    </a>
      </div>
    </div>
    </footer>
  );
};

export default Footer;

