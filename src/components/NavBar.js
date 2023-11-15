import React from 'react';
import "./NavStyles.css";
import logo from './House Hunter.jpg';
import { Link } from 'react-router-dom';

function NavBar() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '40px',
    height: '40px',
    marginRight: '5px', // Add some spacing between the image and text if desired
  };

  return (
    <nav className="navbar bg-danger">
      <div style={containerStyle} className="ms-2">
        <img src={logo} alt="Avatar Logo" style={imageStyle} className="rounded-pill" />
        <h3 className="text-light mb-0">House Hunter</h3>
        <h4 className="text-light ms-4 mb-0"><Link to="/" className="nav-link" >Home</Link></h4>
        <h4 className="text-light ms-4 mb-0"><Link to="/buy-listing" className="nav-link" >Buy</Link></h4>
        <h4 className="text-light ms-4 mb-0"><Link to="/selllogin" className="nav-link">Sell</Link></h4>
      </div>
      <button className="btn btn-light me-2" type="button">
        <Link to="/signup" className="nav-link">Signup</Link>
      </button>
    </nav>
  );
}

export default NavBar;
