import React from 'react'
import './style.css'
import img1 from '../../images/joinpic2.png'
import img2 from '../../images/joinbtnpic.png'
import img3 from '../../images/jpoinpic4.png'
import img4 from '../../images/joinpic3.png'
export default function Joinnow() {
  return (
    <div className='main-jpin-now'>
    <div className='btn-picleft-1'>
    <img src={img1}/>
    <img id='data-image-2' src={img2} data-aos="fade-up"/>
    </div>
       <div className='input-join-11-1' data-aos="zoom-in-left">
         <h2><i>Join Us</i> Right Now</h2>
         <input type="text" />
         <button>Submit</button>
        </div>
        <div className='ab1-1-1'>
            <img src={img3} data-aos="fade-down"/>
        </div>
        <div className='ab1-1-1'>
            <img src={img4}/>
        </div>
       
    </div>
  )
}
