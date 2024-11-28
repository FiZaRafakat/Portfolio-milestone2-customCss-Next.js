"use client"
import Link from 'next/link'
import { IoHomeOutline } from "react-icons/io5";
import { RxEnvelopeClosed } from "react-icons/rx";
import { SlBriefcase } from "react-icons/sl";
import { AiOutlineFileText } from "react-icons/ai";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {

  const [isHovered , setIsHovered] =  useState<string | null>(null)
  const pathname = usePathname(); 

  return (
    <div className='header'>
      <div className='grain-layout'></div> 
       <div className='main-header'>
            {/* Logo */}
            <div>
        <h2 className='logo-heading'>&lt; <span className='gradient-text'>F!Za</span> / &gt;</h2>
      </div>
       {/* Navbar */}  
       <div>
        <nav className='custom-nav'>
  
          {/* Home Link */}
          <Link href="/" 
          onMouseEnter={() => setIsHovered("home")} 
          onMouseLeave={() => setIsHovered(null)} 
          className= "custom-link"
        >
          <span 
            className={`custom-icon ${isHovered === "home" || pathname === '/' ? 'active-icon' : ' '}`}
          >
          <IoHomeOutline className='custom-button' />
          </span>
          {(isHovered === "home" || pathname === '/') && (
            <span className="custom-label">Home</span>
          )}
        </Link>
  
         {/* Resume Link */}
        <Link href="/resume" 
          onMouseEnter={() => setIsHovered("resume")} 
          onMouseLeave={() => setIsHovered(null)} 
          className= "custom-link"
        >
          <span 
            className={`custom-icon ${isHovered === "resume" || pathname === '/resume' ? 'active-icon' : ''}`}
          >
            <AiOutlineFileText className='custom-button' />
          </span>
          {(isHovered === "resume" || pathname === '/resume') && (
            <span className="custom-label">Resume</span>
          )}
        </Link>

        {/* Portfolio Link */}
        <Link href="/portfolio" 
          onMouseEnter={() => setIsHovered("portfolio")} 
          onMouseLeave={() => setIsHovered(null)} 
          className= "custom-link" 
        >
          <span 
            className={`custom-icon ${isHovered === "portfolio" || pathname === '/portfolio' ? 'active-icon' : ''}`}
          >
            <SlBriefcase  className='custom-button'/>
          </span>
          {(isHovered === "portfolio" || pathname === '/portfolio') && (
            <span className="custom-label">Portfolio</span>
          )}
        </Link>

        {/* Contact Link */}
        <Link href="/contact" 
          onMouseEnter={() => setIsHovered("contact")} 
          onMouseLeave={() => setIsHovered(null)} 
          className="custom-link"
        >
          <span 
            className={`custom-icon ${isHovered === "contact" || pathname === '/contact' ? 'active-icon' : ''}`}
          >
            <RxEnvelopeClosed  className='custom-button'/>
          </span>
          {(isHovered === "contact" || pathname === '/contact') && (
            <span className="custom-label">Contact</span>
          )}
        </Link>
  
        </nav>
      </div> 
   </div>  
        </div>
  )
}

export default Header

// 243748