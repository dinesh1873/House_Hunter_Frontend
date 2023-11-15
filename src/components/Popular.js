import React from 'react';
import "./Popular.css";

function Popular() {
  return (
    <div>
      <marquee><h1>Explore Popular Residential Properties in House Hunter</h1></marquee>
      <div className="popular">
        
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://luxurystays.in/villas/garden-villa/23.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <center>
              <h4>Lake Side Lodge</h4>
              <p>789 T nagpur</p>
              <p>studio 4-beds</p>
              <p>$21000-$30000</p>
              </center>
            </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
            <img src="https://stylesatlife.com/wp-content/uploads/2021/02/Best-Villa-Designs.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
            <center>
              <h4>Sun Set Villa</h4>
              <p>124 V Khammam</p>
              <p>studio 2-beds</p>
              <p>$11000-$15000</p>
              </center>
             
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://i.pinimg.com/originals/f1/d0/ab/f1d0ab638a17754048a84f89496eeeb6.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
            <center>
              <h4>Evergreen Estate</h4>
              <p>652 P Tripura</p>
              <p>studio 4-beds</p>
              <p>$19000-$27000</p>
              </center>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/2/IP/GT/UR/96699699/best-villa-construction-company-in-delhi-house-construction-500x500.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
            <center>
              <h4>Moonlight Meadows</h4>
              <p>555 Z Delhi</p>
              <p>studio 4-beds</p>
              <p>$23000-$31000</p>
              </center>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://i0.wp.com/kreativemommy.com/wp-content/uploads/2017/10/jrd130.jpg?resize=504%2C336&ssl=1" className="card-img-top" alt="..." />
            <div className="card-body">
            <center>
              <h4>Starry Night House</h4>
              <p>777 C Vijaywada</p>
              <p>studio 4-beds</p>
              <p>$22000-$38000</p>
              </center>
            </div>
          </div>


      </div>
    </div>
  );
}

export default Popular;

