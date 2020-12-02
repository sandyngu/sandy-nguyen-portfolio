import React from 'react';
import Camera from '../../assets/images/polaroidcamera2.png';
import Polaroid from '../../assets/images/polaroid.png';
import './about-me.scss';

function AboutMe() {
    return (
        <div className="section aboutme" id="aboutme">
            <p className="aboutme__title">about me</p>
            <div className="aboutme__content">
                <div className="aboutme__photos">
                    <img src={Camera} alt="Polaroid Camera" className="aboutme__camera"/>
                    <img src={Polaroid} alt="Polaroid" className="aboutme__photo aboutme__photo1"/>
                    <img src={Polaroid} alt="Polaroid" className="aboutme__photo aboutme__photo2"/>
                    <img src={Polaroid} alt="Polaroid" className="aboutme__photo aboutme__photo3"/>
                </div>
                <div className="aboutme__bio">
                    <p className="aboutme__greeting aboutme__text">Hello!</p>
                    <p className="aboutme__text">
                        My name is Sandy and I am a full-stack web developer && registered nurse. 
                        I am excited to make a career transition to web development; I love seeing
                        complex ideas come to fruition through problem-solving and implementation of 
                        various technical languages. I am committed to lifelong learning and am so 
                        eager to grow my technical skills and build wonderful, life-altering applications.
                        My passion for technology extends to my hobby of playing PC games in my 
                        spare time -- particularly Valorant and League of Legends. I even built my own PC this spring!

                        <br/><br/><q className="aboutme__text aboutme__text-quote">Dream it. Believe it. Build it.</q>

                        <br/><br/>Below is a showcase of the various projects I was able to complete. 
                        Don't hesitate to get in touch with me through LinkedIn, GitHub or e-mail!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
