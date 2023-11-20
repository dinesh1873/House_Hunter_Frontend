import React from 'react'

function WhyUs() {
    const styles = {
        height : "60vh",
        width : "95%",
        borderRadius : "3%",
        marginLeft : "3%",
        
    };
  return (
    <div>
      <div class="container-fluid p-3">
  <div class="row">
    <div class="col-sm-5 bg-light">
      <h1 style={{paddingTop : "5%"}}>Why to Choose Us</h1>
      <br></br>
      <p style={{fontSize : "18px", textAlign : "justify", paddingLeft : "8%" , paddingRight : "8%", lineHeight : "2.2rem"}}>At House Hunter, we go beyond the ordinary to ensure that every property in our extensive and diverse range is not just a house but a canvas upon which you can paint the picture of your ideal home. Meticulously curated with a keen eye for detail, each listing is a testament to our commitment to presenting you with options that align seamlessly with your unique preferences, no matter how intricate they may be..</p> <br></br>
    </div>
    <div class="col-sm-7 bg-white ">
      <img style={styles} src="https://www.guptasen.com/wp-content/uploads/2023/02/luxury-second-home-project-alibaug.webp" alt="house"></img>
    </div>
  </div>
</div>
    </div>
  )
}

export default WhyUs
