import React from 'react'
import './style.css';
import { FiPhoneIncoming } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md';
import { CiFacebook} from 'react-icons/ci';
import { AiOutlineGooglePlus} from 'react-icons/ai';
import { AiOutlineTwitter} from 'react-icons/ai';
import { AiOutlineInstagram} from 'react-icons/ai';
export default function Header() {
  return (
    <>
    <div className='parent-piracy-headers'>
      <div className='inner-piracy-headers'>
      <div className='piracy-head-left'>
      <span><i><FiPhoneIncoming/></i>1010 Avenue, NY, USA</span>
      <span><i><MdOutlineEmail/></i>[email protected]</span>
      <span><i><GoLocation/></i>009-215-5596</span>
      </div>
       <div className='piracy-head-right'>
     <span id='foloow-info'>Follow us:
        <i><CiFacebook/></i>
        <i><AiOutlineTwitter/></i>
        <i><AiOutlineGooglePlus/></i>
        <i><AiOutlineInstagram/></i>
     </span>
     </div>
      </div>
    </div>
    <hr/>
    </>
  )
}
