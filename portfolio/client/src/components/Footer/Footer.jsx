import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import LinkedIn from '../../assets/images/linkedin.png';
import GitHub from '../../assets/images/github.png';
import './footer.scss';

function Footer() {

    function mouseHover(e) {
        console.log(e.target.className)
        if (e.target.className.includes('link1')) {
            document.querySelector('.footer__nav-list-item--left1').classList.add('footer__nav-list-item--hover1');
            document.querySelector('.footer__nav-list-item--right1').classList.add('footer__nav-list-item--hover2');
            document.querySelector('.footer__nav-list-item-line1').classList.add('footer__nav-list-item-line1--move');
            document.querySelector('.footer__nav-list-item-line2').classList.add('footer__nav-list-item-line2--move');
        } else if (e.target.className.includes('link2')) {
            document.querySelector('.footer__nav-list-item--left2').classList.add('footer__nav-list-item--hover1');
            document.querySelector('.footer__nav-list-item--right2').classList.add('footer__nav-list-item--hover2');
            document.querySelector('.footer__nav-list-item-line3').classList.add('footer__nav-list-item-line3--move');
            document.querySelector('.footer__nav-list-item-line4').classList.add('footer__nav-list-item-line4--move');
        } else if (e.target.className.includes('link3')) {
            document.querySelector('.footer__nav-list-item--left3').classList.add('footer__nav-list-item--hover1');
            document.querySelector('.footer__nav-list-item--right3').classList.add('footer__nav-list-item--hover2');
            document.querySelector('.footer__nav-list-item-line5').classList.add('footer__nav-list-item-line5--move');
            document.querySelector('.footer__nav-list-item-line6').classList.add('footer__nav-list-item-line6--move');
        } else {
            document.querySelector('.footer__nav-list-item--left4').classList.add('footer__nav-list-item--hover1');
            document.querySelector('.footer__nav-list-item--right4').classList.add('footer__nav-list-item--hover2');
            document.querySelector('.footer__nav-list-item-line7').classList.add('footer__nav-list-item-line7--move');
            document.querySelector('.footer__nav-list-item-line8').classList.add('footer__nav-list-item-line8--move');
        }
    }

    function mouseLeave(e) {
        if (e.target.className.includes('link1')) {
            document.querySelector('.footer__nav-list-item--left1').classList.remove('footer__nav-list-item--hover1');
            document.querySelector('.footer__nav-list-item--right1').classList.remove('footer__nav-list-item--hover2');
            document.querySelector('.footer__nav-list-item-line1').classList.remove('footer__nav-list-item-line1--move');
            document.querySelector('.footer__nav-list-item-line2').classList.remove('footer__nav-list-item-line2--move');
        } else if (e.target.className.includes('link2')) {
            document.querySelector('.footer__nav-list-item--left2').classList.remove('footer__nav-list-item--hover1');
            document.querySelector('.footer__nav-list-item--right2').classList.remove('footer__nav-list-item--hover2');
            document.querySelector('.footer__nav-list-item-line3').classList.remove('footer__nav-list-item-line3--move');
            document.querySelector('.footer__nav-list-item-line4').classList.remove('footer__nav-list-item-line4--move');
        } else if (e.target.className.includes('link3')) {
            document.querySelector('.footer__nav-list-item--left3').classList.remove('footer__nav-list-item--hover1');
            document.querySelector('.footer__nav-list-item--right3').classList.remove('footer__nav-list-item--hover2');
            document.querySelector('.footer__nav-list-item-line5').classList.remove('footer__nav-list-item-line5--move');
            document.querySelector('.footer__nav-list-item-line6').classList.remove('footer__nav-list-item-line6--move');
        } else {
            document.querySelector('.footer__nav-list-item--left4').classList.remove('footer__nav-list-item--hover1');
            document.querySelector('.footer__nav-list-item--right4').classList.remove('footer__nav-list-item--hover2');
            document.querySelector('.footer__nav-list-item-line7').classList.remove('footer__nav-list-item-line7--move');
            document.querySelector('.footer__nav-list-item-line8').classList.remove('footer__nav-list-item-line8--move');
        }
    }

    return (
        <div className="footer" id="contact">
            <nav className="footer__nav">
                <img src={Logo} alt="Logo" className="footer__nav-list-logo"/>
                <ul className="footer__nav-list">
                    <a href='https://www.linkedin.com/in/sandyngu/' className="footer__nav-link">
                        <li className="link1 footer__nav-list-item1" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>
                            <div className="link1 footer__nav-list-item--left1" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&lt; </div> linked
                            <img src={LinkedIn} alt="LinkedIn Logo" className="link1 footer__nav-list-item--logo"/>
                            <span className="link1 footer__nav-list-item-line1" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <span className="link1 footer__nav-list-item-line2" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <div className="link1 footer__nav-list-item--right1" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&gt;</div>
                        </li>
                    </a>
                    <a href='https://github.com/sandyngu' className="footer__nav-link">
                        <li className="link2 footer__nav-list-item2" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>
                            <div className="link2 footer__nav-list-item--left2" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&lt; </div> gith<img src={GitHub} alt="GitHub Logo" className="link2 footer__nav-list-item--logo2"/>b 
                            <span className="link2 footer__nav-list-item-line3" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <span className="link2 footer__nav-list-item-line4" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <div className="link2 footer__nav-list-item--right2" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&gt;</div>
                        </li>
                    </a>
                    <a href='mailto:sandy_nguyen@live.ca' className="footer__nav-link">
                        <li className="link3 footer__nav-list-item3" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>
                            <div className="link3 footer__nav-list-item--left3" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&lt; </div> e-m<span className="footer__nav-list-item--symbol">@</span>il 
                            <span className="link3 footer__nav-list-item-line5" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <span className="link3 footer__nav-list-item-line6" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <div className="link3 footer__nav-list-item--right3" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&gt;</div>
                        </li>
                    </a>
                    <a href="SandyNguyen-Resume.pdf" target="_blank" className="footer__nav-link">
                        <li className="link4 footer__nav-list-item4" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>
                            <div className="link4 footer__nav-list-item--left4" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&lt; </div> resume 
                            <span className="link4 footer__nav-list-item-line7" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <span className="link4 footer__nav-list-item-line8" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <div className="link4 footer__nav-list-item--right4" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&gt;</div>
                        </li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}

export default Footer;
