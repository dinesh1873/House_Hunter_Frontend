import React from 'react';

function Mission() {
  const styles = {
    height: "60vh",
    width: '95%',
    borderRadius : "3%",
    
    
  };

  return (
    <div>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-sm-7 bg-white">
            <img
              style={styles}
              src="https://teja12.kuikr.com/is/a/c/880x425/gallery_images/original/cf607561c6b5c8d.gif"
              alt="Mission Background"
            />
          </div>
          <div className="col-sm-5 bg-light">
            <h1>Our Mission</h1>
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '18px',
              }}
            >
                <p style={{fontSize : "18px",textAlign : "justify", paddingLeft : "8%" , paddingRight : "8%",lineHeight : "2.2rem"}}>
              At House Hunter, our mission is an unwavering commitment to
              transcending the conventional boundaries of the home-buying
              journey. We strive not only to assist you in finding a house but
              to redefine and elevate your entire home-buying experience. Our
              passion lies in empowering you, our valued customer, with an
              unparalleled arsenal of tools and comprehensive information,
              fostering an environment where informed decisions become second
              nature.
              </p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
