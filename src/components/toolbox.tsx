import React, { Fragment } from 'react'
import TechIcon from './Techicon'
import { twMerge } from 'tailwind-merge'

const Toolbox = (
    {
        items,
        className,
        itemsWrapperClassName ,
    }:{
    items :{
        title : string ,
        iconType : React.ElementType ,
    }[] ,
    className? : string
    itemsWrapperClassName? : string
}) => {
  return (
    <div className= {twMerge("flex  mask",className)}>
         <div className={twMerge('flex md:my-2 my-1 flex-none',itemsWrapperClassName)}>
            {[...new Array(2)].fill(0).map((_,index)=>(
                <Fragment key={index}>         
             {items.map((item)=>(
               <div key={item.title} className='toolbox'>
                    <TechIcon component={item.iconType} />
                    <span className=' md:text-base text-sm'>{item.title}</span>
              </div>    
            ))
           }
                </Fragment>
            ))}
        
         </div>
          </div>
  )
}

export default Toolbox