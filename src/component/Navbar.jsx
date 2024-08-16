import React from 'react';
import { BiHome, BiTime, BiMessage, BiCog } from 'react-icons/bi';
import "../style/navbar.css";

const Navbar = () => {
    return (
        <div className="menu">
            <div className="header">
                <img src="../path/to/logo.png" alt="Logo" className="logo" />
                <div className="header-text">
                    <h1 className="header-title">BITS-SIS</h1>
                    <p>@register</p>
                </div>
            </div>
            <hr />
            <div className="menu--list">
                <div className="section">
                    <h2 className="section-title">Calendar Management</h2>
                    <a href="#" className="item">
                        <span className="item-text">Academic Timeline</span>
                        <BiTime className='icon' />
                    </a>
                </div>
                <div className="section">
                    <h2 className="section-title">Student Records</h2>
                    <a href="#" className="item">
                        <span className="item-text">Student Grade</span>
                        <BiMessage className='icon' />
                    </a>
                    <a href="#" className="item">
                        <span className="item-text">Course Eligibility</span>
                        <BiMessage className='icon' />
                    </a>
                    <a href="#" className="item">
                        <span className="item-text">Student Promotion</span>
                        <BiMessage className='icon' />
                    </a>
                </div>
                <div className="section">
                    <h2 className="section-title">Student Financial Records</h2>
                    <a href="#" className="item">
                        <span className="item-text">Credit Hour Rate</span>
                        <BiCog className='icon' />
                    </a>
                    <a href="#" className="item">
                        <span className="item-text">Payment Information</span>
                        <BiCog className='icon' />
                    </a>
                </div>
                <a href="#" className="logout">
                <span className="logout-text">Log Out</span>
                    <BiCog className='icon' />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
