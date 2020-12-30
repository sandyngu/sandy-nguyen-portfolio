import React from 'react';
import $ from 'jquery';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Comments from '../Comments/Comments';
import Footer from '../Footer/Footer';

class Main extends React.Component {

    state = {
        capstone: false,
        adidas: false,
        instock: false,
        pair: false,
        brainflix: false,
        bandsite: false,
        travelsite: false,
        coffeeshop: false
    }

    toggleCapstone = () => {
        if (!this.state.capstone) {
            this.setState({
                capstone: true
            })
        } else {
            this.setState({
                capstone: false
            })
        }
    }
    toggleAdidas = () => {
        if (!this.state.adidas) {
            this.setState({
                adidas: true
            })
        } else {
            this.setState({
                adidas: false
            })
        }
    }
    toggleInstock = () => {
        if (!this.state.instock) {
            this.setState({
                instock: true
            })
        } else {
            this.setState({
                instock: false
            })
        }
    }
    togglePair = () => {
        if (!this.state.pair) {
            this.setState({
                pair: true
            })
        } else {
            this.setState({
                pair: false
            })
        }
    }
    toggleBrainflix = () => {
        if (!this.state.brainflix) {
            this.setState({
                brainflix: true
            })
        } else {
            this.setState({
                brainflix: false
            })
        }
    }
    toggleBandSite = () => {
        if (!this.state.bandsite) {
            this.setState({
                bandsite: true
            })
        } else {
            this.setState({
                bandsite: false
            })
        }
    }
    toggleTravelSite = () => {
        if (!this.state.travelsite) {
            this.setState({
                travelsite: true
            })
        } else {
            this.setState({
                travelsite: false
            })
        }
    }
    toggleCoffeeShop = () => {
        if (!this.state.coffeeshop) {
            this.setState({
                coffeeshop: true
            })
        } else {
            this.setState({
                coffeeshop: false
            })
        }
    }
    closeModal = () => {
        this.setState({
            capstone: false,
            adidas: false,
            instock: false,
            pair: false,
            brainflix: false,
            bandsite: false,
            travelsite: false,
            coffeeshop: false 
        })
    }

    render() {
        console.log(this.state.capstone)
        return (
            <div className="main">
                <Header />
                <Hero />
                <AboutMe />
                <Projects state={this.state} toggleCapstone={this.toggleCapstone} toggleAdidas={this.toggleAdidas} toggleInstock={this.toggleInstock} togglePair={this.togglePair} toggleBrainflix={this.toggleBrainflix} toggleBandSite={this.toggleBandSite} toggleTravelSite={this.toggleTravelSite} toggleCoffeeShop={this.toggleCoffeeShop} closeModal={this.closeModal}/>
                <Comments />
                <Footer />
            </div>
        )
    }
}

export default Main;
