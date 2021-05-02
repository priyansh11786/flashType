import React from 'react'
import './Landing.css'
import hero from './../../assets/hero.png'
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return (
        <div data-aos="fade-down-right" className="Landing-container">
            <div className="Landing-left">
                <h1 className="Landing-header">Can You Type...</h1>
                <div className="typing-container">
                    <Typewriter
                        options={{
                            strings: ['Correct??', 'Fast??','Quick??'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div data-aos="fade-down-left" className="Landing-right">
                <img src={hero} alt="hero" className="hero-img" />
            </div>
        </div>
    )
}
export default Landing;