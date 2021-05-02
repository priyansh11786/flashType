import React from 'react'
import './nav.css'
import logo from './../../assets/logo.png'

const nav = () =>{
    return(
        <div className="nav-container">
            <div className="left-container">
                <img src={logo} alt="logo" className="image-class"/>
                <p className="text-class">FLASHTYPE</p>
            </div>
            <div className="right-container">
                <a href="http://stackoverflow.com" rel="noreferrer" className="link-class" target="_blank">Need Help?</a>
            </div>
        </div>
    )
}

export default nav;