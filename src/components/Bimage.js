import React from 'react';

function BackgroundImage() {
  return (
    <div style={{
      background: `url(https://www.balihappy.com/images/jimbaran-villas/villa-uma-nina/villa-uma-nina.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh', 
      width: '100%', 
      position: 'relative'
    }}>
      <h1 style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        fontWeight : "bold",
        fontSize : "50px",
      }}>
        Welcome to Our Story
      </h1>
    </div>
  );
}

export default BackgroundImage;