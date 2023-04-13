import React from 'react'
import Footer from '../../component/Footer/Footer'
import PageTitleBanner from '../../component/PageTitleBanner/PageTitleBanner'
import ContactCard from '../contactcarding/contactcard'
import Contactform from '../contactform/contactform'

export default function Contactcontainer() {
  return (
    <div>
        <PageTitleBanner title="Contact Us" subtitle={"Contact Us"}/>
        <ContactCard/>
        <Contactform/>
        <Footer/>
    </div>
  )
}
