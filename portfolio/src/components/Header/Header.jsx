import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
    return (
        <div className="header">
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <Link className="header__nav-link"><li className="header__nav-list-item">about me</li></Link>
                    <Link className="header__nav-link"><li className="header__nav-list-item">projects</li></Link>
                    <Link className="header__nav-link"><li className="header__nav-list-item">contact</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
