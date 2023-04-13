import AboutCompanyBanner from "./AboutCompanyBanner/AboutCompanyBanner";
import Awards from "./Features/Awards";
import Footer from "./Footer/Footer";
import Ourmission from "./Ourmission/Ourmission";
import OurTeam from "./OurTeam/OurTeam";
import PageTitleBanner from "./PageTitleBanner/PageTitleBanner";
import UserFeedBack from "./UserFeedBack/UserFeedBack";
function AboutUs() {
  return (
    <>
      <PageTitleBanner title={"About us"} subtitle="About us" />
      <AboutCompanyBanner />
      <Awards />
      <Ourmission />
      <OurTeam />
      <UserFeedBack/>
      <Footer />
    </>
  );
}

export default AboutUs;
