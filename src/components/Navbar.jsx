import React, { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#project" },
  
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  
  }, []);
  // const [darkMode, setDarkMode] = React.useState(true)
  return (

    <nav
      className={`fixed w-full  left-0 top-0 z-[999]   ${
        sticky ? "bg-white shadow pt-2 pb-2"  : "text-white pt-4 pb-4 bg-[rgb(255 255 255 / var(--tw-bg-opacity))]"}`} >

       <div className="flex items-center justify-between w-10/12 mx-auto ">
        <div className="">
          <h3 className="text-2xl ">
            <span className="text-black">Deepti</span>
          </h3>
        </div>
        <div className="text-gray-900 md:block hidden  py-1 font-medium rounded-bl-full">
  
          <ul className="flex items-center gap-x-1  text-black font-semibold">
            <li><BsMoonStarsFill/></li>
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-3 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
            <li>

          
     <button id="btn" className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white
      px-4 py-2 border-none rounded-md"
                    >
 <a>
  Resume
  </a> 
</button>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-gray-100"} text-3xl md:hidden p-3`}>
          < RxHamburgerMenu className="text-black" />
          </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${ open ? "right-0" : "right-[-100%]"}`}>
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-5 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a> 
              </li>
            ))}
<li
                onClick={() => setOpen(false)}
               
                className="px-5 hover:text-cyan-600">
                <a href="#contact">Contact</a> 
              </li>
                  
    <li  onClick={() => setOpen(false)}> <button className="ml-10 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md "
                    >
  Resume
</button></li>
        </ul>
        </div>
        
      </div> 
        
    </nav>
  );
};

export default Navbar;



// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="py-4 fixed w-full z-50" style={{ backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))" }}>
//       <div className=' w-10/12 mx-auto mb-16'>
//         <div className="flex justify-between items-center h-16">
//           <div className="flex justify-center items-center">
//             <p className="text-black text-lg font-semibold">Deepti</p>
//           </div>
         
//           <div className="flex items-center">
//           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class=" cursor-pointer text-2xl lg:mr-0 sm:mr-0 xs:mr-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg>
           
//           <div className="hidden sm:flex sm:ml-6 items-center">
//           {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class=" cursor-pointer text-2xl mr-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg> */}
//             <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-medium">About</a>
//             <a href="#skills" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-medium">Skills</a>
//             <a href="#project" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-medium">Projects</a>
//             <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
//                    >
//   Resume
// </button>
//           </div>
//             <div className="-mr-2 flex items-center sm:hidden">
//               <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 ml-3 rounded-md text-gray-400 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
//                 <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Responsive Menu */}
//       {isOpen && (
//         <div className="sm:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1">
            
//             <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</a>
//             <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
//             <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{
//               "background":"#14b8a6"
//             }}>
//   Resume
// </button>          </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
