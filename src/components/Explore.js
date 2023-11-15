import React from 'react';
import './explore.css';
import { Link } from 'react-router-dom';
function Explore() {
  return (
    <div className="explore-container">
        <div class="outer"> 
      <center>
        <h1>Explore House Hunter</h1> <br></br>
        <div className="explore">
          <div className="centered-card">
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://titleinsurancewebdesign.com/firsttitleabstract/wp-content/uploads/sites/55/2016/03/House-in-hand.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight : "bold", fontSize : "27px"}}>Buy a Home</h5>
                <p className="card-text">Discover your perfect home through a captivating visual journey and access the most comprehensive listings, including exclusive options you won't find anywhere else..</p>
                <a href="#" className="btn btn-primary" style={{fontWeight : "bold"}}>Find Homes</a>
              </div>
            </div>
          </div>

          <div className="centered-card">
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://w7.pngwing.com/pngs/141/932/png-transparent-custom-home-house-logo-sales-home-angle-building-company-thumbnail.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight : "bold", fontSize : "27px"}}>Sell a Home</h5>
                <p className="card-text">"Regardless of your chosen selling approach, we're here to expertly guide you towards a successful sale, ensuring your peace of mind and maximum value throughout the process."".</p>
                <a href="#" className="btn btn-primary " style={{fontWeight : "bold"}}>
                  <Link to="/selllogin"><span class="text-white">Sell Homes</span></Link>
                </a>
              </div>
            </div>
          </div>

          <div className="centered-card">
            <div className="card" style={{ width: '18rem' }}>
              <img src="https://clipground.com/images/buying-a-house-clipart-16.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{fontWeight : "bold", fontSize : "27px"}}>Rent a Home</h5>
                <p className="card-text">We're building a seamless online journey, offering access to the largest rental network, simplifying applications, and streamlining rent payments for your convenience..</p>
                <a href="#" className="btn btn-primary" style={{fontWeight : "bold"}}>Find Rentals</a>
              </div>
            </div>
          </div>
        </div>
      </center>
      </div>
    </div>
  );
}

export default Explore;
