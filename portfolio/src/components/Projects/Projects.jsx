import React from 'react';
import $ from 'jquery';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectCardPopup from '../ProjectCardPopup/ProjectCardPopup';
import Line from '../../assets/images/clothesline.png';
import CoffeeShop from '../../assets/images/coffeeshop.png';
import CoffeeShop2 from '../../assets/images/coffeeshop2.png';
import CoffeeShop3 from '../../assets/images/coffeeshop3.png';
import TravelSite from '../../assets/images/travelsite.png';
import TravelSite2 from '../../assets/images/travelsite2.png';
import TravelSite3 from '../../assets/images/travelsite3.png';
import BandSite from '../../assets/images/bandsite.png';
import BandSite2 from '../../assets/images/bandsite2.png';
import BandSite3 from '../../assets/images/bandsite3.png';
import Brainflix from '../../assets/images/brainflix.png';
import Brainflix2 from '../../assets/images/brainflix2.png';
import Brainflix3 from '../../assets/images/brainflix3.png';
import Pair from '../../assets/images/pair.png';
import Pair2 from '../../assets/images/pair2.png';
import Pair3 from '../../assets/images/pair3.png';
import Instock from '../../assets/images/instock.png';
import Instock2 from '../../assets/images/instock2.png';
import Instock3 from '../../assets/images/instock3.png';
import Adidas from '../../assets/images/adidas.png';
import Adidas2 from '../../assets/images/adidas2.png';
import Adidas3 from '../../assets/images/adidas3.png';
import NurSimulator from '../../assets/images/adidas.png';
import NurSimulator2 from '../../assets/images/capstone2.png';
import NurSimulator3 from '../../assets/images/capstone3.png';
import NurSimulator4 from '../../assets/images/capstone4.png';
import NurSimulator5 from '../../assets/images/capstone5.png';
import NurSimulator6 from '../../assets/images/capstone6.png';
import NurSimulator7 from '../../assets/images/capstone7.png';
import NurSimulator8 from '../../assets/images/capstone8.png';
import Border from '../../assets/images/border.png';
import ArrowBorder from '../../assets/images/arrow-border.png';
import './projects.scss';

function Projects() {

    // function scroll() {
    //     // document.querySelector('.projects__container').scrollLeft -= 100;
    //     let box = $(".projects__container"), x;
    //         $(".projects__heading-circle").hover(function() {
    //         if ($(this).hasClass("projects__heading-arrow2")) {
    //             x = '+=10';
    //             box.animate({
    //                 scrollLeft: x,
    //             }, 0, 'linear')
    //         } else {
    //             x = '-=10';
    //             box.animate({
    //                 scrollLeft: x,
    //             }, 0, 'linear')
    //         }
    //         })
    // }

    // function changeBorder() {
    //     e.target.active
    // }

    // let amount = '';
    
    // function scroll() {
    //     $('.projects__container').animate({
    //         scrollLeft: amount
    //     }, 0, 'linear', function() {
    //         if (amount !== '') {
    //         scroll();
    //         }
    //     });
    //     }
    //     $('.projects__heading-arrow2').hover(function() {
    //     amount = '+=10';
    //     scroll();
    //     }, function() {
    //     amount = '';
    //     });
    //     $('.projects__heading-arrow1').hover(function() {
    //     amount = '-=10';
    //     scroll();
    //     }, function() {
    //     amount = '';
    //     });

    (function () {

        let scrollHandle = 0,
            scrollStep = 5,
            parent = $('.projects__container');
    
        //Start the scrolling process
        $('.projects__heading-circle').on('mouseenter', function () {
            let data = $(this).data('scrollModifier'),
                direction = parseInt(data, 10);        
    
            $(this).addClass('active');
    
            startScrolling(direction, scrollStep);
        });
    
        //Kill the scrolling
        $('.projects__heading-circle').on('mouseleave', function () {
            stopScrolling();
            $(this).removeClass('active');
        });
    
        //Actual handling of the scrolling
        function startScrolling(modifier, step) {
            if (scrollHandle === 0) {
                scrollHandle = setInterval(function () {
                    let newOffset = parent.scrollLeft() + (scrollStep * modifier);
    
                    parent.scrollLeft(newOffset);
                }, 10);
            }
        }
    
        function stopScrolling() {
            clearInterval(scrollHandle);
            scrollHandle = 0;
        }
    
    }());

    // function scrollRight() {
    //     // document.querySelector('.projects__container').scrollLeft += 100;
    // }

    return (
        <div className="projects">
            <p className="projects__title">projects</p>
            <div className="projects__heading">
                <div className="projects__heading-circle projects__heading-arrow1" data-scroll-modifier='-1'>
                    <div className="projects__heading-arrow">&lt;</div>
                </div>
                <div className="projects__heading-circle projects__heading-arrow2" data-scroll-modifier='1'>
                    <div className="projects__heading-arrow">&gt;</div>
                </div>
            </div>
            <div className="projects__container">
                <div className="projects__line-container">
                    <img src={Line} alt="Clothes Line" className="projects__line"/>
                    <img src={Line} alt="Clothes Line" className="projects__line"/>
                </div>
                <div className="projects__image-container">
                    <ProjectCard>
                        <img src={NurSimulator} alt="NurSimulator" className="projects__image projects__image1"/>
                        <img src={NurSimulator2} alt="NurSimulator" className="projects__image projects__image2"/>
                        <img src={NurSimulator3} alt="NurSimulator" className="projects__image projects__image3"/>
                        <img src={NurSimulator4} alt="NurSimulator" className="projects__image projects__image4"/>
                        <img src={NurSimulator5} alt="NurSimulator" className="projects__image projects__image5"/>
                        <img src={NurSimulator6} alt="NurSimulator" className="projects__image projects__image6"/>
                        <img src={NurSimulator7} alt="NurSimulator" className="projects__image projects__image7"/>
                        <img src={NurSimulator8} alt="NurSimulator" className="projects__image projects__image8"/>
                        <img src={ArrowBorder} alt="Border" className="projects__border-stars"/>
                        <p className="projects__text projects__text-two">capstone: nursimulator.</p>
                        <ProjectCardPopup>
                            <p className="project__card-popup-description-title">NurSimulator</p>
                            <p className="project__card-popup-description">A fun and interactive web-based browser game that simulates a nurse's journey in a 12-hour shift. Complete various nursing-related tasks in a timely manner.</p>
                        </ProjectCardPopup>
                    </ProjectCard>
                    <ProjectCard /*onClick={()=>changeBorder()}*/>
                        <img src={CoffeeShop} alt="Coffee Shop" className="projects__image projects__image1"/>
                        <img src={CoffeeShop2} alt="Coffee Shop" className="projects__image projects__image2"/>
                        <img src={CoffeeShop3} alt="Coffee Shop" className="projects__image projects__image3"/>
                        <img src={Border} alt="Border" className="projects__border"/>
                        <p className="projects__text">coffee shop.</p>
                        <ProjectCardPopup>
                            <p className="project__card-popup-description-title">NurSimulator</p>
                            <p className="project__card-popup-description">A fun and interactive web-based browser game that simulates a nurse's journey in a 12-hour shift. Complete various nursing-related tasks in a timely manner.</p>
                        </ProjectCardPopup>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={TravelSite} alt="Travel Site" className="projects__image projects__image1"/>
                        <img src={TravelSite2} alt="Travel Site" className="projects__image projects__image2"/>
                        <img src={TravelSite3} alt="Travel Site" className="projects__image projects__image3"/>
                        <img src={Border} alt="Border" className="projects__border"/>
                        <p className="projects__text">travel site.</p>
                        <ProjectCardPopup>
                            <p className="project__card-popup-description-title">NurSimulator</p>
                            <p className="project__card-popup-description">A fun and interactive web-based browser game that simulates a nurse's journey in a 12-hour shift. Complete various nursing-related tasks in a timely manner.</p>
                        </ProjectCardPopup>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={BandSite} alt="Band Site" className="projects__image projects__image1"/>
                        <img src={BandSite2} alt="Band Site" className="projects__image projects__image2"/>
                        <img src={BandSite3} alt="Band Site" className="projects__image projects__image3"/>
                        <img src={Border} alt="Border" className="projects__border"/>
                        <p className="projects__text">band site.</p>
                        <ProjectCardPopup>
                            <p className="project__card-popup-description-title">NurSimulator</p>
                            <p className="project__card-popup-description">A fun and interactive web-based browser game that simulates a nurse's journey in a 12-hour shift. Complete various nursing-related tasks in a timely manner.</p>
                        </ProjectCardPopup>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={Brainflix} alt="Brainflix" className="projects__image projects__image1"/>
                        <img src={Brainflix2} alt="Brainflix" className="projects__image projects__image2"/>
                        <img src={Brainflix3} alt="Brainflix" className="projects__image projects__image3"/>
                        <img src={Border} alt="Border" className="projects__border"/>
                        <p className="projects__text">brainflix.</p>
                        <ProjectCardPopup>
                            <p className="project__card-popup-description-title">NurSimulator</p>
                            <p className="project__card-popup-description">A fun and interactive web-based browser game that simulates a nurse's journey in a 12-hour shift. Complete various nursing-related tasks in a timely manner.</p>
                        </ProjectCardPopup>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={Pair} alt="Baby Got Track" className="projects__image projects__image1"/>
                        <img src={Pair2} alt="Baby Got Track" className="projects__image projects__image2"/>
                        <img src={Pair3} alt="Baby Got Track" className="projects__image projects__image3"/>
                        <img src={Border} alt="Border" className="projects__border"/>
                        <p className="projects__text projects__text-two">pair programming.</p>
                        <ProjectCardPopup>
                            <p className="project__card-popup-description-title">NurSimulator</p>
                            <p className="project__card-popup-description">A fun and interactive web-based browser game that simulates a nurse's journey in a 12-hour shift. Complete various nursing-related tasks in a timely manner.</p>
                        </ProjectCardPopup>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={Instock} alt="Instock" className="projects__image projects__image1"/>
                        <img src={Instock2} alt="Instock" className="projects__image projects__image2"/>
                        <img src={Instock3} alt="Instock" className="projects__image projects__image3"/>
                        <img src={Border} alt="Border" className="projects__border"/>
                        <p className="projects__text projects__text-two">instock collaborative.</p>
                        <ProjectCardPopup>
                            <p className="project__card-popup-description-title">NurSimulator</p>
                            <p className="project__card-popup-description">A fun and interactive web-based browser game that simulates a nurse's journey in a 12-hour shift. Complete various nursing-related tasks in a timely manner.</p>
                        </ProjectCardPopup>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={Adidas} alt="Adidas" className="projects__image projects__image1"/>
                        <img src={Adidas2} alt="Adidas" className="projects__image projects__image2"/>
                        <img src={Adidas3} alt="Adidas" className="projects__image projects__image3"/>
                        <img src={Border} alt="Border" className="projects__border"/>
                        <p className="projects__text projects__text-two">adidas hackathon.</p>
                        <ProjectCardPopup>
                            <p className="project__card-popup-description-title">NurSimulator</p>
                            <p className="project__card-popup-description">A fun and interactive web-based browser game that simulates a nurse's journey in a 12-hour shift. Complete various nursing-related tasks in a timely manner.</p>
                        </ProjectCardPopup>
                    </ProjectCard>
                </div>
            </div>
        </div>
    )
}

export default Projects;
