import Scontainer from "./AllServices/Containerservices/Scontainer";
import "./App.css";
import AboutUs from "./component/AboutUs";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Contactcontainer from "./Contact us/Contactcontainer/Contactcontainer";
import Teamcontainer from "./Teampiracy/Teamcontainer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/About" element={<AboutUs />} />

          <Route exact path="/Services" element={<Scontainer />} />

          <Route exact path="/Team" element={<Teamcontainer />} />
          <Route exact path="/Contact" element={<Contactcontainer />} />
        </Routes>
      </Router>

      {/* <AboutUs/> */}
      {/* <Home/> */}
      {/* <Scontainer/> */}
      {/* <AboutUs/> */}
      {/* <Teamcontainer/> */}
      {/* <Contactcontainer/> */}
    </div>
  );
}

export default App;
