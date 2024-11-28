"use client"
import Link from 'next/link';
import React, { useRef } from 'react'
import { useEffect,useState } from 'react';
import AnimatedLetters from './AnimatedLetters';
import { TiSocialFacebook } from 'react-icons/ti';
import { FiGithub } from 'react-icons/fi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { Button } from './ui/moving-border';
import AOS from "aos"
import "aos/dist/aos.css"

const Hero = () => {

  useEffect(()=>{
    AOS.init({
       easing : "ease-out-back",
       duration : 1200,
       delay : 100 ,
       mirror : true ,
       anchorPlacement : "bottom-bottom",
       offset : 160,
    }) ;
    AOS.refresh()
    },[])


  const counterRef = useRef(null);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [dailyLearningHours, setDailyLearningHours] = useState(0);
  const [typescriptScore, setTypescriptScore] = useState(0);

 //countdown function 
  const countUp = () => {
    const targets = {
      projectsCompleted: 10,
      dailyLearningHours: 8,
      typescriptScore: 100,
    };

    const counts = {
      projectsCompleted: 0,
      dailyLearningHours: 0,
      typescriptScore: 0,
    };

    const duration = 3; 
    const framesPerSecond = 60; 
    const totalFrames = duration * framesPerSecond;

    let frame = 0;

    const animate = () => {
      if (frame < totalFrames) {
        counts.projectsCompleted = Math.min(
          targets.projectsCompleted,
          (targets.projectsCompleted * frame) / totalFrames
        );
        counts.dailyLearningHours = Math.min(
          targets.dailyLearningHours,
          (targets.dailyLearningHours * frame) / totalFrames
        );
        counts.typescriptScore = Math.min(
          targets.typescriptScore,
          (targets.typescriptScore * frame) / totalFrames
        );
        setProjectsCompleted(Math.round(counts.projectsCompleted));
        setDailyLearningHours(Math.round(counts.dailyLearningHours));
        setTypescriptScore(Math.round(counts.typescriptScore));

        frame++;

        requestAnimationFrame(animate); 
      }
    };
    animate();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          countUp(); 
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );
    const currentRef = counterRef.current; 
  if (currentRef) {
    observer.observe(currentRef);
  }

  return () => {
    if (currentRef) {
      observer.disconnect();
    }
  };
 
  },
   []);

const [letterClass] = useState('animate-bounce-in opacity-0 lg:min-w-[10px] min-w-[5px] inline-block ');
const [jobIndex, setJobIndex] = useState(0);
const [jobClass, setJobClass] = useState('animate-bounce-in');

const HiArray = ['H' , 'i' , ',' ];
const imArray = ["I'",'m'," "]
const nameArray = ['F','i', 'z','a' ,' ','R','a','f','a','k','a','t'];
const jobTitles = [
  ['U', 'I', '/', 'U', 'X', ' ', 'D', 'e', 's', 'i', 'g', 'n', 'e', 'r'],
  ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'],
  ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
];
useEffect(() => {
  const jobTimer = setInterval(() => {
    setJobIndex((prevIndex) => (prevIndex + 1) % jobTitles.length); 
    setJobClass('animate-bounce-in');
  }, 4000); 

  return () => clearInterval(jobTimer);
}, []);


const scrollToServices = () => {
  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

  return (
    <div className='main-hero'>
        <div className='intro-section mb-40'>
          {/* Left Side  */}
           <div className='left'>
        <div className='text-center'>
          <h1 className='heading1'>
         { <AnimatedLetters letterClass={letterClass}
          strArray={HiArray}
          idx={11}
          /> }
          <br />
           {  <AnimatedLetters letterClass={letterClass}
            strArray={imArray}
            idx={14} />  }
           <span className={`main-word`}>
           { <AnimatedLetters letterClass={letterClass} 
            strArray = {nameArray}
            idx = {17}
            /> }
            </span>
            <span className={`${letterClass} _29`}>,</span>
          </h1>
          <div className='description-container'>
          <h2 className='job-title'>
          { <AnimatedLetters letterClass={letterClass} 
           strArray={jobTitles[jobIndex]}
            idx = {30}
            /> }
            </h2>
            {/* Description */}
          <h2 className='description'>
          Offering tailored web solutions to bring your vision to life with seamless functionality and engaging design. Explore a portfolio crafted to elevate your digital presence.</h2>
          </div>
          {/* Buttons */}
          <div className='buttons'>
            <a >
            <Button borderRadius='1.5rem' className='button' containerClassName='w-24 h-[2.3rem] md:h-12 md:w-40' onClick={scrollToServices} data-aos="zoom-in"> Services </Button>
            </a>
          <Link href={"/resume"}>
          <Button borderRadius='1.5rem' className='button' data-aos="zoom-in"> Resume </Button>
          </Link>
          </div>
        </div>
      </div>
      {/* Right Side Pic  */}
         <div className='right'  >  
        <div className='image'>
         <img src={"/girl_pic.png"}  alt='Girl Image' />
         {/* Circle Div */}
         <div className="portrait relative" ></div>
         {/* Icons */}
          <div className='absolute -top-1'>
            <Link href="https://www.linkedin.com/in/fiza-rafakat-9b6728275/" target='_blank' className='linkedin'>
            <BiLogoLinkedin className='custom-button icon'/>
            </Link>
            <Link href='https://github.com/FiZaRafakat' target='_blank' className='github'>
            <FiGithub className='custom-button icon' />
            </Link>
            <Link href='https://www.facebook.com/share/o7QNDcVAchkiiKTb/' className='facebook'>
            <TiSocialFacebook  className='custom-button icon '/>
            </Link>
         </div>
       </div>
     </div>
   </div>
   {/* Counter animation */}
   <div ref={counterRef} className='counter-div'>
     <div className='counter'>
      <p className='number'> {projectsCompleted} <sub>+</sub></p>
       <span className='counter-desc'>Projects Completed</span>
      </div>
      <div className='counter'>
      <p className='number'> {dailyLearningHours} <sub>h</sub></p>
       <span className='counter-desc'>Daily Learning Hours</span>
      </div>
      <div className='counter'>
      <p  className='number'> {typescriptScore} <sub>%</sub></p>
       <span className='counter-desc' >Typescript Q1 score</span>
      </div>
   </div>
</div>
  )
}

export default Hero


{/*  onClick={scrollToServices}> */}