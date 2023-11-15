import React from 'react';

function BackgroundImage() {
  return (
    <div style={{
      background: `url(https://i0.wp.com/mynicevilla.com/wp-content/uploads/2021/02/Home-2237-2.jpg?resize=1080%2C719&ssl=1)`,
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
        Explore a destination that you'll truly enjoy residing in.
      </h1>
    </div>
  );
}

export default BackgroundImage;
