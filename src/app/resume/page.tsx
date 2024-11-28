"use client"
import { SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { MdOutlineStarRate } from "react-icons/md";
import { motion } from "framer-motion";
import Toolbox from '@/components/toolbox';
import EducationCard from '@/components/EducationCard';
import Card from '@/components/Card';
import AOS from "aos"
import "aos/dist/aos.css"

import { useEffect } from "react";


interface EducationEntry {
  title: string;
  date: string;
  level?: string;
  institute: string;
  field : string ; 
  description : string
}

const About = [
  {
    title :"Name :",
    Ans : "Fiza Rafakat"
  },{
    title : "Father Name :",
    Ans : "Rafakat Ali"
  },{
    title : "Date Of Birth :",
    Ans : "11/April/2004"
    },{
    title : "Nationality :",
    Ans : "Pakistani"
  },{
    title : "Experience :",
    Ans : "3 Months"
  },{
    title : "Freelance :",
    Ans : "Available"
  },{
    title : "Languages :",
    Ans : "English, Urdu, Punjabi"
  },{
    title : "Email :",
    Ans : "fizarafakat@gmail.com"
  },
]

const toolBoxItem = [
  {
    iconType : SiHtml5  ,
    title : "HTML 5"
  },{
    iconType : FaCss3 ,
    title : "CSS 3"
  },{
    iconType : FaJsSquare ,
    title : "JavaScript"
  },{
    iconType : BiLogoTypescript ,
    title : "TypeScript"
  },{
    iconType : FaReact ,
    title : "React"
  },{
    iconType : RiNextjsFill ,
    title : "Nextjs"
  },{
    iconType : FaGithub ,
    title : "GitHub"
  },{
    iconType : FaChrome ,
    title : "Chrome"
  },{
    iconType : SiTailwindcss,
    title : "Tailwind CSS"
  },{
      iconType : FaPython ,
      title : "Python"
  },
  {
    iconType : SiAdobeillustrator ,
    title : "Adobe Ilustrator"
  },{
    iconType : SiAdobephotoshop ,
    title : "Adobe Photoshop"
  },
  
]

const hobbies =[
  {
    title : "Traveling",
    emoji : '🛤',
    top : '135%',
    left : '18%',
  },{
    title : "Reading",
    emoji : '📚',
    top : '400%',
    left : '5%',
  },{
    title: "Photography",
    emoji : '📸',
    top : '800%',
    left : '50%',
  },{
    title : "Cooking",
    emoji : '👩‍🍳',
    top : '700%',
    left : '10%',
  },{
    title : "Drawing",
    emoji : '✏',
    top : '950%',
    left : '12%',
  },{
    title : "Painting",
    emoji : '🎨',
    top : '550%',
    left : '40%',
  },{
    title : "Gardening",
    emoji : "🌳",
    top : '350%',
    left : '50%',
  }
]

const Education :EducationEntry[] = [
  {
    title : "GenAI , Metaverse & Web3.0",
    date : "2024-Present",
    field : "Quarter-2",
    institute : "Governor House",
    description :"Currently enrolled in an advanced IT course hosted at the Governor House. Thus far, I’ve focused on web development using the latest version of Next.js and various modern tools. Upcoming modules will delve into AI agents and advanced Python technologies, providing a comprehensive foundation in cutting-edge tech applications."
  },{
    title : "Chartered Accountancy",
    date : "2022-Present",
    field : "FTS 41",
    level : "CAF / CA-Inter",
    institute : "ICAP",
    description : "Currently pursuing Chartered Accountancy (CA) with a solid foundation in the field, having successfully completed PRC and CAF Group A exams. I am actively engaged in advancing my expertise by studying remaining modules, aiming to deepen my knowledge and skills in accounting, finance, and related disciplines."
  },{
    title : "Intermediate",
    date : "2020-2022",
    field : "FSC Pre-Engineering",
    institute : "Govt-degree college for boys and girls , Stadium Road",
    description : "Completed F.Sc. in Pre-Engineering with a strong focus on Mathematics, my favorite subject and a major influence in choosing a math-related career path. Graduated with an A grade, further motivating my pursuit of fields grounded in analytical and quantitative skills."
  },{
    title : "Matric",
    date : "2018-2020",
    field : "Science",
    institute : "Pak Educators School",
    description : "Completed Matriculation in the Science field, securing an A1 grade. This strong academic foundation helped develop critical thinking and problem-solving skills, which supported my further studies in Chartered Accountancy (CA) and IT."
  }
]

function Page() {

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


  useEffect(() => {
    const interval = setInterval(() => {
      const progressContainers = document.querySelectorAll(".progress-container");
      progressContainers.forEach((container) => {
        const element = container as HTMLElement; // Cast to HTMLElement
        element.style.animation = "none";
        void element.offsetWidth; // Trigger reflow
        element.style.animation = "";
      });
    }, 40000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="overflow-x-hidden">
       <div className='md:mt-32 sm:mt-36 mt-28 flex justify-center items-center '>
     <div >
    <div>
        {/* Heading Div */}
     <div className='heading-container' >
     <div className='heading-content '>
       <div className="flex justify-center">
       <h1 className='gradient-text heading-title '>A Glimpse into my World</h1>
       </div>
       <p className="heading-paragraph ">
         Welcome to a deeper look at my world—where passion, creativity, and dedication come together to shape who I am and what I do. From my background and skills to the values that drive me forward, discover the elements that fuel my journey and inspire my work. Let&apos;s explore what motivates me and how I can contribute to your vision.
       </p>

       </div>
     </div>
        {/* Personal Info Div */}
     <div className='pt-3 flex lg:gap-10 gap-2 md:gap-4 lg:pb-10 md:pb-4 pb-2 flex-col md:flex-row  md:mx-40' >
     <Card className='personal-card' data-aos="fade-right">
         <div className='card-header'>
          <MdOutlineStarRate className='icon'/> 
          <h1 className='title'>Personal Info</h1>
          </div>
           { About.map((about)=>(
            <div key={about.title} >
              <div className='personal-row '>
              <h3 className='personal-label'>{about.title}</h3>
              <p className='personal-value'>{about.Ans}</p>
              </div>
            </div>
           ))}
      </Card>
      {/* Skills Section */}
      <Card className='skills-card' 
      data-aos="fade-left">
      <div className='card-header'>
          <MdOutlineStarRate className='icon '/> 
          <h1 className='title'>My Skills</h1>
          </div>

     <div className='mx-14 mt-5'>
    <div className="skills-animation">
  <div className="skills-row">
    <div className="skill-item">
      <div
        className="progress-container"
        data-progress="75"
      >
        <div className="progress-border">
          <span className="circle">75%</span>
        </div>
      </div>
      <p className="skill-label">Communication</p>
    </div>
    <div className="skill-item">
      <div
        className="progress-container"
        data-progress="80"
      >
        <div className="progress-border">
          <span className="circle">80%</span>
        </div>
      </div>
      <p className="skill-label">Creativity</p>
    </div>
  </div>

  <div className="skills-row">
    <div className="skill-item">
      <div
        className="progress-container"
        data-progress="95"
      >
        <div className="progress-border">
          <span className="circle">95%</span>
        </div>
      </div>
      <p className="skill-label">Responsibility</p>
    </div>
    <div className="skill-item">
      <div
        className="progress-container"
        data-progress="79"
      >
        <div className="progress-border">
          <span className="circle">79%</span>
        </div>
      </div>
      <p className="skill-label">Problem Solving</p>
    </div>
  </div>
</div>
 </div>
  </Card>
     </div>
        {/* Div For 2nd Row */}
      <div className='lg:pt-8 md:pt-5 pt-3 flex lg:gap-10 md:gap-4 gap-2 md:pb-10 flex-col sm:flex-row md:mx-40'>
        {/* Toolbox Card */}
         <Card className='toolbox-card' data-aos="fade-right" >
         <div className='card-header'>
          <MdOutlineStarRate className='icon'/> 
          <h1 className='title'>My Toolbox</h1>
          </div>
           <div className='md:pt-6 pt-3 '>
          <Toolbox items={toolBoxItem} itemsWrapperClassName='animate-moveLeft [animation-duration:30s]' />
           <Toolbox items={toolBoxItem}  itemsWrapperClassName='animate-moveRight [animation-duration:30s]'/>
          </div>
          
            </Card>
        {/* Hobbies Card */}
       <Card className="hobby-card" 
           data-aos="fade-left">     
          <div className='hobby-h'>
          <MdOutlineStarRate className='icon'/> 
          <h1 className='title'>Beyond the Code</h1>
          </div >
           <div className='hobbies'>
              {  hobbies.map((hobby)=>(
                  <motion.div key={hobby.title} className='hobby-item' drag   style={{left : hobby.left ,top : hobby.top }}
                 >
                      <span >{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                     
                  </motion.div>
                ))
              }
               
          </div>
        </Card>
          </div>
      </div>
        {/* Eduacation Div */}
     <div className='education'>
    <div className="education-content">
    <div className='education-header'>
          <MdOutlineStarRate className='icon'/> 
          <h1 className='education-title gradient-text'>Education History</h1>
          </div>
          <p className="education-description heading-paragraph">
  My educational journey reflects my commitment to growth and learning, equipping me with the knowledge and skills necessary to excel in my field. Below is a timeline of the institutions and milestones that have shaped my academic path.
</p>
    </div>

     <div className="time-line">
      {Education.map((education,index)=>(
        <EducationCard key={index} education={education}  index={index} />
         ))}   
        </div>
       </div>
    </div>
   </div> 
  </div>
  )
}

export default Page