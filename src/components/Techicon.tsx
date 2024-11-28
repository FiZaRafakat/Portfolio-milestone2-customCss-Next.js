import React from 'react'

const TechIcon = ({component}:{component:React.ElementType}) => {
    const Component = component
  return (
   <>
    <Component className='md:size-10 size-7 fill-[url(#tech-icon-gradient)] ' />
    <svg className='size-0 absolute'>
       <linearGradient id='tech-icon-gradient'>
        <stop offset="0%" stopColor='#81171b' />
        <stop offset="25%" stopColor='#f2d492' />
        <stop offset="50%" stopColor='#ad2e24' />
        <stop offset="75%" stopColor='#f2d492' />
        <stop offset="100%" stopColor='#81171b' />
        </linearGradient> 
    </svg>
   </>
  )
}

export default TechIcon