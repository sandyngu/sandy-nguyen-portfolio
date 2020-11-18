import React from 'react';
import Polaroid from '../../assets/images/rectangle-polaroid.png';
import ProfilePic from '../../assets/images/profile.jpg';
import './hero.scss';

function Hero() {
    return (
        <div className="hero">
            <div className="hero__box">
                <img src={Polaroid} alt="Polaroid" className="hero__polaroid"/>
                <img src={ProfilePic} alt="Profile Pic" className="hero__profile"/>
                <p className="hero__name">Sandy Nguyen</p>
                <p className="hero__text">full-stack web developer.</p>
            </div>
        </div>
    )
}

export default Hero;
