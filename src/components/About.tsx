import Link from 'next/link'
import React from 'react'
import Services from './Services'
import { Button } from './ui/moving-border'

const About = () => {
  return (
    <div className='about-section'>
    <div className='about-container'>
    <div className='about'>
    <div className='sub-h-div'><h2 className='sub-h gradient-text'>Why Me ?</h2></div>
     <p className='para'>
       As a frontend developer and designer based in Pakistan, I&apos;m dedicated to turning concepts into captivating digital platforms. With expertise in <span className='main-p'>HTML, CSS, JavaScript, TypeScript, Tailwind CSS, and Next.js</span>, I create responsive, user-centered websites that combine aesthetics with top-tier performance.
       <br />
     I bring depth to user interactions with animations powered by <span className='main-p'>GSAP, AOS, and Framer Motion</span>, enhancing the visual flow and engagement. Additionally, my experience with <span className='main-p'>Git</span> and <span className='main-p'>GitHub</span> supports smooth collaboration and efficient project workflow.
     <br />
      If you&apos;re ready to elevate your online presence, let&apos;s create something truly <span className='main-p'>remarkable</span> together!
   </p>
   <div className='mt-6'>
    <Link href={"/resume"}>
    <Button  containerClassName='w-40 ' borderRadius='1.5rem' data-aos="zoom-in">More about me</Button>
    </Link>
     </div>
     </div>
     <Services />
    </div>
   </div>
  )
}

export default About