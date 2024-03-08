import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
function Navbar() {
const navigate = useNavigate();
  const handleclick = () => {
    navigate('/');
  };

  const handleclicklogin = () => {
    navigate('/login');
  };

  const handleclickregister = () => {
    navigate('/register');
  };
  return (
    <div className="container">
        
      <div className="navbarcontainer" onClick={handleclick}>
        <GiKnifeFork />
        <div className="logo">
          Cusine-Companion
        </div>
      </div>

      {/* <div className="buttons">
          <button className="login" onClick={handleclicklogin}>login</button>
          <button className="register"onClick={handleclickregister}>register</button>
        </div> */}

    </div>

  );
}

export default Navbar;
