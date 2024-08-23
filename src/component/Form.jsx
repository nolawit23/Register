import React from 'react';
import hero from '../assets/hero.jpg';
import '../style/form.css';
import logoimg from '../assets/logoimg.png';

const Form = () => {
  return (
    <div className="container">
      <div className="header-container">
        <img src={hero} alt="Hero" className="hero" />
        <a href="#" className="logo">
          <img src={logoimg} alt="Logo" className="logoimg" />
        </a>
        <h4 className="title">
          BITS <span>STUDENT INFORMATION MANAGEMENT </span> SYSTEM
        </h4>
      </div>
      <form className="form">
        <div className="form-group input-group">
          <input type="text" id="username" name="username" className="input" placeholder="Email" />
        </div>
        <div className="form-group input-group">
          <input type="password" id="password" name="password" className="input" placeholder="Password" />
        </div>
      </form>
    </div>
  );
};

export default Form;
