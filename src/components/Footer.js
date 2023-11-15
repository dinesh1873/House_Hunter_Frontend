import React from 'react';
import './FooterStyle.css';

function Footer() {
  const styles = {
    color: 'white',
    height: '15vh',
    width: '100%',
    backgroundColor: '#000000',
    padding: '20px', // Added padding for better spacing
    boxSizing: 'border-box', // Include padding in the total width
  };

  const columnStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap : "4%",
  };

  return (
    <div>
      <footer style={styles}>
        <div style={columnStyles}>
          <h5 className="head5">Contact Us: huter@gmail.com </h5>
          <p className="para1">987654321, 8976543672</p>
        </div>
        <div style={columnStyles}>
          <p className="para11">Copyrights @ Home Hunter 2024 All rights reserved</p>
        </div>
        <div style={{ ...columnStyles, flexDirection: 'row' }}>
          <p className="follow" style={{ marginRight: '10px' }}>Follow Us On :</p>
          <a href="https://www.instagram.com/"><img className="img11" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png" alt="Instagram"></img></a>
          <a href="https://www.facebook.com/"><img className="img11" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/600px-Facebook_Logo_2023.png" alt="Facebook"></img></a>
          <a href="https://www.twitter.com/"><img className="img11" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" alt="Twitter"></img></a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;