import React, { useState } from 'react';
import $ from 'jquery';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectCardDescription from '../ProjectCardDescription/ProjectCardDescription';
import ProjectCardModal from '../ProjectCardModal/ProjectCardModal';
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
import NurSimulator from '../../assets/images/capstone.png';
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

function Projects(props) {

    const [border1, setBorder1] = useState(0);
    const [border2, setBorder2] = useState(0);
    const [border3, setBorder3] = useState(0);
    const [border4, setBorder4] = useState(0);
    const [border5, setBorder5] = useState(0);
    const [border6, setBorder6] = useState(0);
    const [border7, setBorder7] = useState(0);
    const [border8, setBorder8] = useState(0);

    function scrollLeft() {
        document.querySelector('.projects__container').scrollLeft -= 620;
    };

    function scrollRight() {
        document.querySelector('.projects__container').scrollLeft += 620;
    };

    (function () {

        let scrollHandle = 0,
            scrollStep = 5,
            parent = $('.projects__container');
    
        //Start the scrolling process
        $('.projects__heading-circle').on('mouseenter', function () {
            let data = $(this).data('scrollModifier'),
                direction = parseInt(data, 10);        
    
            startScrolling(direction, scrollStep);
        });
    
        //Kill the scrolling
        $('.projects__heading-circle').on('mouseleave', function () {
            stopScrolling();
        });
    
        //Actual handling of the scrolling
        function startScrolling(modifier, step) {
            if (scrollHandle === 0) {
                scrollHandle = setInterval(function () {
                    let newOffset = parent.scrollLeft() + (scrollStep * modifier);
    
                    parent.scrollLeft(newOffset);
                }, 10, 'linear');
            }
        }
    
        function stopScrolling() {
            clearInterval(scrollHandle);
            scrollHandle = 0;
        }
    
    }());

    function highlight() {
        $(this).style.opacity="0.5";
    }

    return (
        <div className="section projects" id="projects">
            <p className="projects__title">projects</p>
            <div className="projects__heading">
                <button className="projects__heading-circle projects__heading-arrow1" data-scroll-modifier='-1' onClick={() => scrollLeft()}>
                    <div className="projects__heading-arrow">&lt;</div>
                </button>
                <button className="projects__heading-circle projects__heading-arrow2" data-scroll-modifier='1' onClick={() => scrollRight()}>
                    <div className="projects__heading-arrow">&gt;</div>
                </button>
            </div>
            <div className="projects__container">
                <div className="projects__line-container">
                    <img src={Line} alt="Clothes Line" className="projects__line"/>
                    <img src={Line} alt="Clothes Line" className="projects__line"/>
                </div>
                <div className="projects__image-container">
                    <ProjectCard onClick={() => props.toggleCapstone()}>
                        <img src={NurSimulator8} alt="NurSimulator" className="projects__image projects__image8"/>
                        <img src={NurSimulator7} alt="NurSimulator" className="projects__image projects__image7"/>
                        <img src={NurSimulator6} alt="NurSimulator" className="projects__image projects__image6"/>
                        <img src={NurSimulator5} alt="NurSimulator" className="projects__image projects__image5"/>
                        <img src={NurSimulator4} alt="NurSimulator" className="projects__image projects__image4"/>
                        <img src={NurSimulator3} alt="NurSimulator" className="projects__image projects__image3"/>
                        <img src={NurSimulator2} alt="NurSimulator" className="projects__image projects__image2"/>
                        <img src={NurSimulator} alt="NurSimulator" className="projects__image projects__image1"/>
                        <img onClick={() => setBorder1(prevMode => !prevMode)} src={border1 ? ArrowBorder : Border} alt="Border" className="projects__border projects__border"/>
                        <div className="project__card-container">
                            <p className="projects__text projects__text-two">capstone: nursimulator.</p>
                        </div>
                        <ProjectCardDescription>
                            <p className="project__card-popup-description-title">Capstone Project: NurSimulator</p>
                            <p className="project__card-popup-description">Architected a nursing simulation web application using React, HTML, CSS/Sass, JavaScript, NodeJS, Express, Bookshelf, Knex and MySQL database.
                            Provided a smooth desktop experience using single-page app technologies with client-side assets and code managed through webpack.
                            Modals used for gaming components; assets enhanced with Photoshop.
                            Successful deployment with Heroku.</p>
                        </ProjectCardDescription>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={Adidas3} alt="Adidas" className="projects__image projects__image11"/>
                        <img src={Adidas2} alt="Adidas" className="projects__image projects__image10"/>
                        <img src={Adidas} alt="Adidas" className="projects__image projects__image9"/>
                        <img onClick={() => setBorder2(prevMode => !prevMode)} src={border2 ? ArrowBorder : Border} alt="Border" className="projects__border"/>
                        <div className="project__card-container">
                            <p className="projects__text projects__text-two" onHover={() => highlight()}>adidas hackathon.</p>
                        </div>
                        <ProjectCardDescription>
                            <p className="project__card-popup-description-title">adidas Hackathon: #FromTrashToTrainers</p>
                            <p className="project__card-popup-description">Provided 24 hours to create an innovative digital solution to address the future success of eCommerce.
                            Worked collaboratively with digital marketing, data science, and UX design to create a sustainability-driven solution by providing customers with sustainable facts on consumer products and carbon emissions contributed during shipment process.
                            Emphasized utilization of livestreaming to digitally market on social media platforms.</p>
                        </ProjectCardDescription>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={Instock3} alt="Instock" className="projects__image projects__image14"/>
                        <img src={Instock2} alt="Instock" className="projects__image projects__image13"/>
                        <img src={Instock} alt="Instock" className="projects__image projects__image12"/>
                        <img onClick={() => setBorder3(prevMode => !prevMode)} src={border3 ? ArrowBorder : Border} alt="Border" className="projects__border"/>
                        <div className="project__card-container">
                            <p className="projects__text projects__text-two">instock collaborative.</p>
                        </div>
                        <ProjectCardDescription>
                            <p className="project__card-popup-description-title">InStock Collaborative</p>
                            <p className="project__card-popup-description">Worked collaboratively on a team with 5 developers to create a warehouse inventory CRUD React app based on mockups provided on Figma.
                            Used an agile development methodology, leveraging JIRA to track progress and milestones for a 1-week sprint.
                            Used a combination of all learned tech stacks, and usage of API documentation to handle server requests.
                            Managed GitHub pull requests for standardizing peer code reviews.</p>
                        </ProjectCardDescription>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={Pair3} alt="Baby Got Track" className="projects__image projects__image17"/>
                        <img src={Pair2} alt="Baby Got Track" className="projects__image projects__image16"/>
                        <img src={Pair} alt="Baby Got Track" className="projects__image projects__image15"/>
                        <img onClick={() => setBorder4(prevMode => !prevMode)} src={border4 ? ArrowBorder : Border} alt="Border" className="projects__border"/>
                        <div className="project__card-container">
                            <p className="projects__text projects__text-two">pair programming.</p>
                        </div>
                        <ProjectCardDescription>
                            <p className="project__card-popup-description-title">Baby Got Track</p>
                            <p className="project__card-popup-description">Collaborated with another developer to architect a fully-functioning 'guess-the-next-lyric' music React application with back-end server using React Hooks, NodeJS & Express.</p>
                        </ProjectCardDescription>
                    </ProjectCard> 
                    <ProjectCard>
                        <img src={Brainflix3} alt="Brainflix" className="projects__image projects__image20"/>
                        <img src={Brainflix2} alt="Brainflix" className="projects__image projects__image19"/>
                        <img src={Brainflix} alt="Brainflix" className="projects__image projects__image18"/>
                        <img onClick={() => setBorder5(prevMode => !prevMode)} src={border5 ? ArrowBorder : Border} alt="Border" className="projects__border"/>
                        <div className="project__card-container">
                            <p className="projects__text">brainflix.</p>
                        </div>
                        <ProjectCardDescription>
                            <p className="project__card-popup-description-title">Brainflix</p>
                            <p className="project__card-popup-description">A responsive, single-page YouTube-inspired React application, constructing reusable components and accessing API for data. Use of React routing & React lifecycle methods.</p>
                        </ProjectCardDescription>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={BandSite3} alt="Band Site" className="projects__image projects__image23"/>
                        <img src={BandSite2} alt="Band Site" className="projects__image projects__image22"/>
                        <img src={BandSite} alt="Band Site" className="projects__image projects__image21"/>
                        <img onClick={() => setBorder6(prevMode => !prevMode)} src={border6 ? ArrowBorder : Border} alt="Border" className="projects__border"/>
                        <div className="project__card-container">
                            <p className="projects__text">band site.</p>
                        </div>
                        <ProjectCardDescription>
                            <p className="project__card-popup-description-title">BandSite</p>
                            <p className="project__card-popup-description">Created a 2-page responsive biographical website implementing JavaScript & media queries. Utilized HTTP requests using Axios to retrieve data from an API.</p>
                        </ProjectCardDescription>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={TravelSite3} alt="Travel Site" className="projects__image projects__image26"/>
                        <img src={TravelSite2} alt="Travel Site" className="projects__image projects__image25"/>
                        <img src={TravelSite} alt="Travel Site" className="projects__image projects__image24"/>
                        <img onClick={() => setBorder7(prevMode => !prevMode)} src={border7 ? ArrowBorder : Border} alt="Border" className="projects__border"/>
                        <div className="project__card-container">
                            <p className="projects__text">travel site.</p>
                        </div>
                        <ProjectCardDescription>
                            <p className="project__card-popup-description-title">TravelSite</p>
                            <p className="project__card-popup-description">Provided 24 hours to build a 4-page website utilizing provided mock-ups with form implementation. Utilized HTML, CSS & Flexbox.</p>
                        </ProjectCardDescription>
                    </ProjectCard>
                    <ProjectCard /*onClick={()=>changeBorder()}*/>
                        <img src={CoffeeShop3} alt="Coffee Shop" className="projects__image projects__image29"/>
                        <img src={CoffeeShop2} alt="Coffee Shop" className="projects__image projects__image28"/>
                        <img src={CoffeeShop} alt="Coffee Shop" className="projects__image projects__image27"/>
                        <img onClick={() => setBorder8(prevMode => !prevMode)} src={border8 ? ArrowBorder : Border} alt="Border" className="projects__border"/>
                        <div className="project__card-container">
                            <p className="projects__text">coffee shop.</p>
                        </div>
                        <ProjectCardDescription>
                            <p className="project__card-popup-description-title">Coffee Shop</p>
                            <p className="project__card-popup-description">Introductory project. A 2-page website built utilizing provided mock-ups, with animation implementation. Utilized HTML, CSS & Flexbox.</p>
                        </ProjectCardDescription>
                    </ProjectCard>               
                </div>
            </div>
            {props.state.capstone ? <ProjectCardModal>
                    <button className="projects__heading-close">
                        <div className="projects__heading-x">x</div>
                    </button>
                </ProjectCardModal> : null}
        </div>
    )
}

export default Projects;
