import React from 'react'
import  Mdata from '../Marketing-services/Mdata'
import './style.css'
import { IoIosArrowForward } from 'react-icons/io';
export default function Servicescard() {
  return (
    <>
        <div className='services-heading-11'>
        <p>OUR SERVICES</p>
         <h1>Our Best Services</h1>
</div>

    
        <div className='parent-Services-card'>
        
     
        {
           Mdata.map((item)=>{
            return(
                <div className='inner-Services-card' data-aos="zoom-out-right">
               <img src={item.pic}/>
               <h2>{item.name}</h2>
               <p>
               {item.desc}
               </p>
               <button>Read More<IoIosArrowForward color='tomato'/></button>
            </div>
            )
           })     
            }
        </div>
        </>

  )
}
