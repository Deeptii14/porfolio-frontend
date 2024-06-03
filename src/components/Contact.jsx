import React, { useState } from 'react'
import img2 from '../assets/projects/undraw_conversation_re_c26v.svg'
import { FaPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion'
import axios from 'axios';
import { toast } from 'react-toastify';


const Contact = () => {
  const images=[img2];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone:''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value,email,phone } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://protfoliobackend.onrender.com/sendmessage', formData)
      .then((response) => {
        toast.success('Email sent successfully!');
        setResponseMessage(response.data.message);
      })
      .catch((error) => {
        toast.error('Failed to send message. Please try again later.');
        setResponseMessage('Failed to send message. Please try again later.');
      });
  };

  return (
   
    <div className="lg:mt-[8rem]  mt-6 relative flex items-center justify-center flex-col mb-16 w-10/12 mx-auto" id="contact">
     
   
   <div className="waviy lg:text-7xl md:text-5xl text-4xl mb-0 " >
                    <span style={{"--i":"1"}} className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-teal-500'>C</span>
                    <span style={{"--i":"2"}} className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500'>O</span>
                    <span style={{"--i":"3"}} className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500'>N</span>
                    <span style={{"--i":"4"}} className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500'>T</span>
                    <span style={{"--i":"5"}} className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500'>A</span>
                    <span style={{"--i":"6"}} className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500'>C</span>
                    <span style={{"--i":"7"}} className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500'>T</span>
                    <span style={{"--i":"8"}} className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500 ml-2'>M</span>
                    <span style={{"--i":"9"}} className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 text- to-teal-500'>E</span>
               
               </div>
    <div className='w-full flex flex-col lg:flex-row  pt-4 mt-10 items-center md:flex-row'>
        <div className='lg:w-1/2  md:w-1/2 w-full p-2 flex items-center justify-center'>
      
                  <motion.div
     initial={{ scale: 0, opacity: 0 }}
     animate={{ scale: 1, opacity: 1 }}
     exit={{ scale: 0, opacity: 0 }}
     transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1.5 }}
  >

                <div className=' w-[90%] h-[90%] lg:flex md:block justify-center items-center hidden'>
                    <img
                      src={img2}
                      alt=""
                      className="object-fill "
                    />
                 
                </div>
  </motion.div>
              
      
        </div>
      
        <form className="flex flex-col gap-7 lg:w-1/2 md:w-1/2 w-full mx-auto pl-2 " onSubmit={handleSubmit}>
      <div className="formfield-container space-y-4">
        <input className="formfield w-full p-2 border border-gray-300 rounded-md" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" />

        <input className="formfield w-full p-2 border border-gray-300 rounded-md" type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required/>
        
        <input className="formfield w-full p-2 border border-gray-300 rounded-md" type="number" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />

        {/* <input className="formfield w-full p-2 border border-gray-300 rounded-md" type="text" name="subject" placeholder="Enter your subject" /> */}

        <textarea name="message" cols="30" rows="10" className="formfield formfield-textarea w-full p-2 border border-gray-300 rounded-md" placeholder="Enter your message" value={formData.message} onChange={handleChange} required></textarea>
      </div>

      <div className="mt-4">
        <button type="submit" className="bg-gradient-to-r from-cyan-500 text- to-teal-500 flex gap-x-2 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300 items-center justify-center">
         <p> Send Message</p> <FaPaperPlane />
        </button>
      </div>
      {responseMessage && <p className='text-red-700'>{responseMessage}</p>}
    </form>
    </div>

   
  </div>
  )
}

export default Contact