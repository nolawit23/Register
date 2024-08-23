import React from 'react';
import "../style/navbar.css";
import Calendar from '../assets/Calendar .png';
import  logoimg  from '../assets/logoimg.png';
import Grades from '../assets/Grades.png';
import CourseAssign from '../assets/CourseAssign.png';
import Commercial from '../assets/Commercial.png';
import Dollar from '../assets/Dollar.png';
import Payment from '../assets/Payment.png';
import logout from '../assets/logout.png';
const Navbar = () => {
    return (
        <div className="menu">
            <div className="header">
                <a href="#" className="logo"></a>
                <img src={logoimg } alt="logoimg" className="logoimg " />
                <div className="header-text">
                    <h1 className="header-title">BITS-SIS</h1>
                  <a href="#" className="p"> @register</a>
              </div> 
            </div>
            <hr />
            <div className="menu--list">
                <div className="section">
                    <h2 className="section-title">Calendar Management</h2>
                    <a href="#" className="item">
                        <span className="item-text">Academic Timeline</span>
                        < img src={Calendar } alt="Calendar"  className='image' />
                    </a>
                </div>
                <div className="section">
                    <h2 className="section-title">Student Records</h2>
                    <a href="#" className="item">
                        <span className="item-text">Student Grade</span>
                        < img src={ Grades} alt="Grades"  className='image' />
                    </a>
                    <a href="#" className="item">
                        <span className="item-text">Course Eligibility</span>
                        < img src={CourseAssign} alt="CourseAssign"  className='image' />
                    </a>
                    <a href="#" className="item">
                        <span className="item-text">Student Promotion</span>
                        < img src={Commercial} alt="Commercial"  className='image' />
                    </a>
                </div>
                <div className="section">
                    <h2 className="section-title">Student Financial Records</h2>
                    <a href="#" className="item">
                        <span className="item-text">Credit Hour Rate</span>
                        < img src={Dollar} alt="Dollar"  className='image' />
                    </a>
                    <a href="#" className="item">
                        <span className="item-text">Payment Information</span>
                        < img src={Payment} alt="Payment"  className='image' />
                    </a>
                </div>
                <a href="#" className="logout">
                <span className="logout-text">Log Out</span>
                < img src={logout} alt="logout"  className='image' />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
