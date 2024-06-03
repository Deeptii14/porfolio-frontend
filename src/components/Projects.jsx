import React from "react";
import img1 from "../assets/stack/HTML.png";
import img2 from "../assets/stack/Javascript.svg";
import img3 from "../assets/stack/CSS.png";
import img4 from "../assets/stack/Tailwind.png";
import img5 from "../assets/stack/NodeJs.svg";
import img6 from "../assets/stack/Github.svg";
import img7 from "../assets/stack/React.png";
import img8 from "../assets/stack/Express.png";
import ProjectCard from "./ProjectCard";
const projects = [
  {
    id: "project1",
    number: "01",
    align: "left",
    title: "StudyNotion",
    description:
      "StudyNotion is a fully functional Ed-tech platform that enables users to create,consume, and rate educational content. The platform is built using the MERN stack,which includes ReactJS, NodeJS, MongoDB, and ExpressJS.",
    liveLink: "",
    github: "",
    imagestack: [img1, img2, img3, img4, img5, img6, img7, img8],
  },
  {
    id: "project2",
    number: "02",
    align: "right",
    title: "Ecomzy",
    description:
      "An ecommerce webapp which allow users to browse a wide range of products, make purchases, and manage their accounts. It will provide a seamless shopping experience, secure payment gateways, and efficient order management.",
    liveLink: "",
    github: "",
    imagestack: [img1, img2, img3, img4, img5, img6, img7, img8],
  },
  {
    id: "project3",
    number: "03",
    align: "leftt",
    title: "Paswword Generator",
    description:
      "An ecommerce webapp which allow users to browse a wide range of products, make purchases, and manage their accounts. It will provide a seamless shopping experience, secure payment gateways, and efficient order management.",
    liveLink: "",
    github: "",
    imagestack: [img1, img2, img3, img4, img5, img6, img7, img8],
  },
  {
    id: "project4",
    number: "04",
    align: "right",
    title: "Weather App",
    description:
      "An ecommerce webapp which allow users to browse a wide range of products, make purchases, and manage their accounts. It will provide a seamless shopping experience, secure payment gateways, and efficient order management.",
    liveLink: "",
    github: "",
    imagestack: [img1, img2, img3, img4, img5, img6, img7, img8],
  },
  {},
];
const Projects = () => {
  return (
    <div className="w-full bg-gradient-to-r bg-cyan-50 border-y-teal-100">
      <div className="w-10/12 mx-auto bg-gradient-to-r ">
        <div className="flex flex-col  z-0 m" id="project">
          <div className=" flex waviy lg:text-7xl md:text-5xl text-4xl mb-10 justify-center ">
            <span
              style={{ "--i": "1" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-teal-500"
            >
              P
            </span>
            <span
              style={{ "--i": "2" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500"
            >
              R
            </span>
            <span
              style={{ "--i": "3" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500"
            >
              O
            </span>
            <span
              style={{ "--i": "4" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500"
            >
              J
            </span>
            <span
              style={{ "--i": "5" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500"
            >
              E
            </span>
            <span
              style={{ "--i": "6" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500"
            >
              C
            </span>
            <span
              style={{ "--i": "7" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500"
            >
              T
            </span>
            <span
              style={{ "--i": "8" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500"
            >
              S
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <p className="text-center text-2xl font-medium text-gray-700">
            I have a solid portfolio of various web development projects, each a
            testament to my dedication and expertise in crafting functional and
            innovative digital solutions. Explore my work to see how I turn
            ideas into reality.
          </p>
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
