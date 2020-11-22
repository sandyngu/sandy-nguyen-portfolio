import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {

    function mouseHover(e) {
        if (e.target.className === 'header__nav-list-item1') {
            document.querySelector('.header__nav-list-item--left1').classList.add('header__nav-list-item--hover1');
            document.querySelector('.header__nav-list-item--right1').classList.add('header__nav-list-item--hover2');
        } else if (e.target.className === 'header__nav-list-item2') {
            document.querySelector('.header__nav-list-item--left2').classList.add('header__nav-list-item--hover1');
            document.querySelector('.header__nav-list-item--right2').classList.add('header__nav-list-item--hover2');
        } else {
            document.querySelector('.header__nav-list-item--left3').classList.add('header__nav-list-item--hover1');
            document.querySelector('.header__nav-list-item--right3').classList.add('header__nav-list-item--hover2');
        }
    }

    function mouseLeave(e) {
        if (e.target.className === 'header__nav-list-item1') {
            document.querySelector('.header__nav-list-item--left1').classList.remove('header__nav-list-item--hover1');
            document.querySelector('.header__nav-list-item--right1').classList.remove('header__nav-list-item--hover2');
        } else if (e.target.className === 'header__nav-list-item2') {
            document.querySelector('.header__nav-list-item--left2').classList.remove('header__nav-list-item--hover1');
            document.querySelector('.header__nav-list-item--right2').classList.remove('header__nav-list-item--hover2');
        } else {
            document.querySelector('.header__nav-list-item--left3').classList.remove('header__nav-list-item--hover1');
            document.querySelector('.header__nav-list-item--right3').classList.remove('header__nav-list-item--hover2');
        }
    }

    return (
        <div className="header">
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <Link className="header__nav-link">
                        <li className="header__nav-list-item1" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>
                            <div className="header__nav-list-item--left1">&lt; </div> about me 
                            <span className="header__nav-list-item-line1">/</span>
                            <span className="header__nav-list-item-line2">/</span>
                            <div className="header__nav-list-item--right1">&gt;</div>
                        </li>
                    </Link>
                    <Link className="header__nav-link">
                        <li className="header__nav-list-item2" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>
                            <div className="header__nav-list-item--left2">&lt; </div> projects 
                            <span className="header__nav-list-item-line3">/</span>
                            <span className="header__nav-list-item-line4">/</span>
                            <div className="header__nav-list-item--right2">&gt;</div>
                        </li>
                    </Link>
                    <Link className="header__nav-link">
                        <li className="header__nav-list-item3" onMouseOver={(e) => mouseHover(e)} onMouseOut={(e) => mouseLeave(e)}>
                            <div className="header__nav-list-item--left3">&lt; </div> contact 
                            <span className="header__nav-list-item-line5">/</span>
                            <span className="header__nav-list-item-line6">/</span>
                            <div className="header__nav-list-item--right3">&gt;</div>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
