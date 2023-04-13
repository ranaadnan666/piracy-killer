import React from 'react'
import AboutCompanyBanner from '../component/AboutCompanyBanner/AboutCompanyBanner'
import Footer from '../component/Footer/Footer'
import OurTeam from '../component/OurTeam/OurTeam'

import PageTitleBanner from '../component/PageTitleBanner/PageTitleBanner'
import UserFeedBack from '../component/UserFeedBack/UserFeedBack'

export default function Teamcontainer() {
  return (
    <div>
            <PageTitleBanner title="Our Teams" subtitle={"Our Teams"}/>
            <AboutCompanyBanner />
            <OurTeam/>
            <UserFeedBack/>
            <Footer/>
            
            
    </div>
  )
}
