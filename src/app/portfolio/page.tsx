"use client"
import ProjectSection from '@/components/ProjectSection'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

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

  return (
    <div className=''> 
     <ProjectSection/>
    </div>
  )
}

export default Page