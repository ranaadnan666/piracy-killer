import React from 'react'
import Pricedata from './Pricedata'
import './style.css'
export default function Pricesing() {
  return (
    <div className='parent-priceee'>
    <span id='price-heading'>
    <p>PRICING TABLE</p>
    <h1>Our Pricing</h1>
    </span>
    <div className='price-card-main'>
      
      {
        Pricedata.map((item)=>{
            return(
                <div className='price-inner-card' data-aos="zoom-in-right">
                <img src={item.pic}/>
                 <h1>{item.title}</h1>
                   <div className='parent-desp'>
                   <p>
                  {item.Des}
                 </p>
                   </div>
              <span>
              
              <i>$</i>{item.num}<span>Month</span>
              </span>
       <div className='btn-pri'><button>Buy Now</button>  </div>
      </div>
            )
        })
      }

    </div>
    </div>
  )
}
