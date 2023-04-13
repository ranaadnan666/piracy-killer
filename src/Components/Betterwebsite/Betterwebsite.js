import React from 'react'
import img1 from '../../images/aboutimage.png'
import './style.css'
import Webdata from './Webdata'
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Betterwebsite() {

  return (
    <>
    <div className='About-website-perent'>
    <div className='web-about-left' data-aos="fade-up">
   <img src={img1}/>
    </div>
    <div className='web-about-right' data-aos="fade-up">
    <h1>A better website means better user experience</h1>
<p >
Start working with an company that can provide everything you need to generate awareness, drive traffic, connect with customers, and increase sales nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.
<br></br>
<br></br>
Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim
</p>
<div className='btn-learn-11'>
    <button id='learn1'>Learn More</button>
    <button id='learn2'>Contact Us</button>
</div>
    </div>
    </div>

    <div className='parent-cart-web'>
    {
        Webdata.map((item)=>{
            return(
         <div className='inner-card-web' data-aos="zoom-in">
         <img src={item.img}/>
         <h2>{item.title}</h2>
         <h1>{item.number}</h1>
           </div>
            )
        })
    }
       
    </div>
    </>
  )
}
