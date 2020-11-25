import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';

function Main() {
    return (
        <div className="main">
            <Header />
            <Hero />
            <AboutMe />
            <Projects />
        </div>
    )
}

export default Main;
