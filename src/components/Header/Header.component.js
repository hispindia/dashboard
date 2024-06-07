import React from "react";
import "./Header.style.scss";
import MHFW from '../../imgicon/logo.png';
import NHMS from '../../imgicon/nhms.png';

const Header = () => {  
  return (
    <div className="d-flex justify-content-between align-items-center m-2">
      <img src={MHFW} alt ='Ministry of Health & Family Welfare' />
      <h4  style={{color: 'rgb(44, 102, 147)'}} className="text-center fw-bold">INDIAN PUBLIC HEALTH STANDARDS</h4>
      <img src={NHMS} alt ='National Health Mission' />
    </div>
  );
};

export default Header;
