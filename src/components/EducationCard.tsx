import { FaGraduationCap } from "react-icons/fa6";

interface Education {
  title: string;
  institute: string;
  field: string;
  level?: string;
  description: string;
  date: string;
}


interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) =>{

    return ( 
  <section className="section-container before:even:-left-7 before:odd:-left-7    lg:even:right-[-50%] lg:before:even:-left-9 lg:before:odd:top-0 lg:before:odd:left-[32rem]"  style={{ animationDelay: `${index * 1}s` }} 
  data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'} 
   >
     <FaGraduationCap
        className={`graduation-icon ${
          index % 2 === 0
            ? "even" // Position for even elements
            : "odd " // Position for odd elements
        }`}
      />
    <div className="education-card">
        <div className='grain-layout'
       ></div> 
<div className="edu-content">
  
     <div className="flex justify-center ">
     <h2 className='title gradient-text'>{education.title}</h2>
     </div>
          <h3 className="institute">{education.institute}</h3>
          
         <div className="details">
          <span>{education.field}</span>
           <span>{education.level}</span>
          </div>
          <p className="edu-description">{education.description}</p>
          <span className="date-badge" >{education.date}</span>
</div>

  </div>
  </section>
    )  
}   
  
export  default EducationCard