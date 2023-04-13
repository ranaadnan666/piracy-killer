import React from 'react'
import './style.css'
import  Mdata from './Mdata'
import { IoIosArrowForward } from 'react-icons/io';

export default function Mservices() {
  return (
    <>
    <div className='main-services-parent'>
        <div className='main-services-inner'>
       <div className='service-left-1' data-aos="fade-right">
        <h1>
        Best Digital
Marketing Services!
        </h1>
       </div>

        <hr id='abc1' color='tomato'/>
        <div className='service-right-1' data-aos="fade-left">
            <p>Start working with an company that can provide everything you need to generate awareness, drive traffic, connect with customers, and increase sales montes,
nascetur ridiculus mus.</p>
        </div>

        </div>
        <div className='parent-m-card'>

            {
           Mdata.map((item)=>{
            return(
                <div className='inner-m-card' data-aos="zoom-in-up">
               <img src={item.pic} data-aos="zoom-out-right"/>
               <h2>{item.name}</h2>
               <p >
               {item.desc}
               </p>
               <button>Read More<IoIosArrowForward color='tomato'/></button>
            </div>
            )
           })     
            }
        </div>
    </div>
    </>
  )
}
