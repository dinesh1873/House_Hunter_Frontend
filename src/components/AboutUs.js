import React from 'react'
import Bimage from "./Bimage";
import Mission from "./Mission";
import WhyUs from "./WhyUs";
import Founders from "./Founders";
import Footer from "./Footer";

export function AboutUs() {
  return (
    <div style={{backgroundColor : "white"}}>
      <Bimage/>
      <br></br>
      <Mission/>
      <br></br>
      <WhyUs/>
      <br></br>
      <Founders/>
      <br></br>
      <Footer/>
    </div>
  )
}
