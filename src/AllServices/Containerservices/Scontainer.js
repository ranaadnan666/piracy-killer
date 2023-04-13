import React, { useEffect }  from 'react'
import Joinnow from '../../Components/JoinNow/Joinnow'
import Bestfeature from '../BestFeature/Bestfeature'
import Contactus from '../ContactUs/Contactus'
import Slides from '../Slides/Slides'
import PauseOnHover from '../Slides/Slides'
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageTitleBanner from '../../component/PageTitleBanner/PageTitleBanner'
import Footer from '../../component/Footer/Footer'
export default function Scontainer() {
  useEffect(() => {
    AOS.init({
      duration:"1500"
    });

  }, [])
  return (
    <div>
      <PageTitleBanner title={"Services"} subtitle="Services" />

     <Slides/>
     <Joinnow/>
     <Bestfeature/>
     <Contactus/>
     <Footer/>
    </div>
  )
}
