import React from 'react'
import Bdata from './Blogdata'
import './style.css'
export default function Blogcard() {
  return (
    <div id='parent-div'>
        <span id='Blog-heading-11'>
            <p>OUR BLOG</p>
          <h1>Latest Blog</h1>
        </span>
   
    <div className='Blog-Card-outer-1'>
      
         {
            Bdata.map((item)=>{
                return(
                    <div className='inner-b-card' data-aos="zoom-in-left">
                 <img src={item.pic}/>
               <div className='inner-card-b-1'>
           <div className='card-b-left'>
           <div className='left-date-1'>
            <span><i>29</i><br></br>May</span>
           </div>
           </div>
           <div className='card-b-right'>
            <p>{item.name}</p>
            <h2>{item.title}</h2>
            <p>{item.des}</p>
          </div>
         </div>

          </div>
                )
            })
         }

    </div>

    <div><button id='btn-view-all'>View All</button></div>
    </div>
  )
}
