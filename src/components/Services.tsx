import React, { Fragment } from 'react'
import { FaCode } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { IoColorPalette } from "react-icons/io5";
import TechIcon from './Techicon';

const services =[
    {
      icon : <FiPenTool className='md:size-12 sm:size-10 size-8' /> ,
      title : "UI UX Designer",
      description : "Crafting intuitive, visually compelling designs that balance aesthetics with seamless user interaction, ensuring your brand leaves a lasting impression.",
    },
    {
      icon : < FaCode className='md:size-12 sm:size-10 size-8'/>,
      title : "Frontend Developer",
      description : "Building engaging, responsive web interfaces optimized for performance and user experience, bringing your ideas to life on any device."
    },
    {
      icon : <IoColorPalette className='md:size-12 sm:size-10 size-8'/>,
      title : "Graphic Designer",
      description : "Creating visually captivating designs that resonate with your brand identity, transforming concepts into impactful visual storytelling."
    }
  ]

const Services = () => {
  return (
    <div >
         <div className='text-center'>
      <div className='sub-h-div' id='services'><h2 className='sub-h gradient-text'>Services</h2></div>
      <p className='para'>I create tailored digital solutions that enhance your brand and deliver seamless, engaging user experiences. Explore my work and contact me to discuss how we can bring your vision to life.</p>
      </div>
      <div>
  <div className="boxes">
    <div className='service-container'>
    {[...new Array(10)].fill(0).map((_,idx)=>(   
          <Fragment key={idx}>
          {services.map((service)=>(
             <div key={service.title} className="service-box">
            <div className='grain-layout'></div> 
            <p className='service-icon'>{service.icon}</p>
            {/* <TechIcon component={service.icon}/> */}
            <h2 className='service-title'>{service.title}</h2>
            <p className='service-description'>{service.description}</p>
            </div>
           ))}
          </Fragment>
    ))}   
    </div>  
     </div>
</div>
    </div>
  )
}

export default Services