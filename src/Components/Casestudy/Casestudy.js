import React from 'react'
import Casedata from './Casedata'
import './style.css'
export default function Casestudy() {
  return (
    <>
    <div className='main-story-1'>
    <span id='Case-story-headimg'><p>
    SUCCESS STORIES
</p>
      <h2>Our Case Study</h2>
    </span>
    <div className='case-study-parent'>
    
        {
            Casedata.map((item)=>{
                var Abc=item.bgcol
                return(
                    <div className='case-study-inner' >
                    <div id='bgimage' style={{backgroundColor:Abc}}> <img src={item.img}/></div>
                   <h3>{item.title}</h3>
                   <p>{item.name}</p>
                    </div>
                )
            })
        }

    </div>
    <button id='View-all1-1'>View All</button>
    </div>
   </>
  )
}
