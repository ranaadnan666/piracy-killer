import React, { useEffect } from "react";
import Footer from "../../component/Footer/Footer";
import UserFeedBack from "../../component/UserFeedBack/UserFeedBack";
import Betterwebsite from "../Betterwebsite/Betterwebsite";
import Blogcard from "../BlogCard/Blogcard";
import Casestudy from "../Casestudy/Casestudy";
import Header from "../Header/Header";
import Joinnow from "../JoinNow/Joinnow";
import Mservices from "../Marketing-services/Mservices";
import Navbar from "../Navbar/Navbar";
import Pricesing from "../OurPrice/Pricesing";
import Result from "../Result/Result";
import Servicescard from "../Servicescard/Servicescard";
import Workservice from "../WorkServices/Workservice";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: "1500",
    });
  }, []);
  return (
    <div>
      {/* <Header/>
      <Navbar/> */}
      <Mservices />
      <Joinnow />
      <Betterwebsite />
      <Servicescard />
      <Casestudy />
      <Workservice />
      <UserFeedBack />
      <Result />
      <Pricesing />
      <Blogcard />
      <Footer />
    </div>
  );
}
