import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './header.scss';

function Header() {

    function mouseHover(e) {
        console.log(e.target.className)
        if (e.target.className.includes('link1')) {
            document.querySelector('.header__nav-list-item--left1').classList.add('header__nav-list-item--hover1');
            document.querySelector('.header__nav-list-item--right1').classList.add('header__nav-list-item--hover2');
            document.querySelector('.header__nav-list-item-line1').classList.add('header__nav-list-item-line1--move');
            document.querySelector('.header__nav-list-item-line2').classList.add('header__nav-list-item-line2--move');
        } else if (e.target.className.includes('link2')) {
            document.querySelector('.header__nav-list-item--left2').classList.add('header__nav-list-item--hover1');
            document.querySelector('.header__nav-list-item--right2').classList.add('header__nav-list-item--hover2');
            document.querySelector('.header__nav-list-item-line3').classList.add('header__nav-list-item-line3--move');
            document.querySelector('.header__nav-list-item-line4').classList.add('header__nav-list-item-line4--move');
        } else {
            document.querySelector('.header__nav-list-item--left3').classList.add('header__nav-list-item--hover1');
            document.querySelector('.header__nav-list-item--right3').classList.add('header__nav-list-item--hover2');
            document.querySelector('.header__nav-list-item-line5').classList.add('header__nav-list-item-line5--move');
            document.querySelector('.header__nav-list-item-line6').classList.add('header__nav-list-item-line6--move');
        }
    }

    function mouseLeave(e) {
        if (e.target.className.includes('link1')) {
            document.querySelector('.header__nav-list-item--left1').classList.remove('header__nav-list-item--hover1');
            document.querySelector('.header__nav-list-item--right1').classList.remove('header__nav-list-item--hover2');
            document.querySelector('.header__nav-list-item-line1').classList.remove('header__nav-list-item-line1--move');
            document.querySelector('.header__nav-list-item-line2').classList.remove('header__nav-list-item-line2--move');
        } else if (e.target.className.includes('link2')) {
            document.querySelector('.header__nav-list-item--left2').classList.remove('header__nav-list-item--hover1');
            document.querySelector('.header__nav-list-item--right2').classList.remove('header__nav-list-item--hover2');
            document.querySelector('.header__nav-list-item-line3').classList.remove('header__nav-list-item-line3--move');
            document.querySelector('.header__nav-list-item-line4').classList.remove('header__nav-list-item-line4--move');
        } else {
            document.querySelector('.header__nav-list-item--left3').classList.remove('header__nav-list-item--hover1');
            document.querySelector('.header__nav-list-item--right3').classList.remove('header__nav-list-item--hover2');
            document.querySelector('.header__nav-list-item-line5').classList.remove('header__nav-list-item-line5--move');
            document.querySelector('.header__nav-list-item-line6').classList.remove('header__nav-list-item-line6--move');
        }
    }

    return (
        <div className="header">
            <nav className="header__nav">
                <img src={Logo} alt="Logo" className="header__nav-list-logo"/>
                <ul className="header__nav-list">
                    <Link to='/' className="header__nav-link">
                        <li className="link1 header__nav-list-item1" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>
                            <div className="link1 header__nav-list-item--left1" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&lt; </div> about me 
                            <span className="link1 header__nav-list-item-line1" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <span className="link1 header__nav-list-item-line2" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <div className="link1 header__nav-list-item--right1" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&gt;</div>
                        </li>
                    </Link>
                    <Link to='/' className="header__nav-link">
                        <li className="link2 header__nav-list-item2" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>
                            <div className="link2 header__nav-list-item--left2" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&lt; </div> projects 
                            <span className="link2 header__nav-list-item-line3" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <span className="link2 header__nav-list-item-line4" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <div className="link2 header__nav-list-item--right2" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&gt;</div>
                        </li>
                    </Link>
                    <Link to='/' className="header__nav-link">
                        <li className="link3 header__nav-list-item3" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>
                            <div className="link3 header__nav-list-item--left3" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&lt; </div> contact 
                            <span className="link3 header__nav-list-item-line5" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <span className="link3 header__nav-list-item-line6" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>/</span>
                            <div className="link3 header__nav-list-item--right3" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>&gt;</div>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
