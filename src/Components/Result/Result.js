import React from 'react'
import img from '../../images/li.png'
import img1 from '../../images/li2.png'
import img3 from '../../images/Resultpic.png'
import './style.css'
export default function Result() {
  return (
    <div className='parent-result'>

    <div className='inner-result'>
    <div className='left-card-1' data-aos="fade-down">
   <img src={img3}/>
    </div>
    <div className='right-card-1' data-aos="fade-down">
        <h1>Give you best result</h1>
      <p>
                  Start working with an company that can provide everything you need to generate awareness, drive
                  traffic, connect with .
                  massa quis enim. Donec pede justo.
               </p>
               <p>
                <li><img src={img}/>  44% growth in organic traffic</li>
                <li><img src={img1}/> No. 1 rankings for multiple</li>
               </p>
       </div>
       </div>
      </div>
  )
}
