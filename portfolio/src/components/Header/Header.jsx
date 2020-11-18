import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
    return (
        <div className="header">
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <Link className="header__nav-link"><li className="header__nav-list-item"><span className="header__nav-list-item--hover">&lt;</span> about me /<span className="header__nav-list-item--hover">&gt;</span></li></Link>
                    <Link className="header__nav-link"><li className="header__nav-list-item"><span className="header__nav-list-item--hover">&lt;</span> projects /<span className="header__nav-list-item--hover">&gt;</span></li></Link>
                    <Link className="header__nav-link"><li className="header__nav-list-item"><span className="header__nav-list-item--hover">&lt;</span> contact /<span className="header__nav-list-item--hover">&gt;</span></li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
