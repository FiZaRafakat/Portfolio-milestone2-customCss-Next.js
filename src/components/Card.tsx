import React, { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({
    className ,
    children,
    ...other
}:ComponentPropsWithoutRef<'div'>)=> {
  return (
    <div className={twMerge("main-card ",className)} {...other} >

    <div className='grain-layout'
    ></div>
    {children}
     </div>
  )
}

export default Card