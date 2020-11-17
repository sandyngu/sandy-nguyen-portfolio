import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import Line from '../../assets/images/clothesline.png';
import CoffeeShop from '../../assets/images/coffeeshop.png';
import CoffeeShop2 from '../../assets/images/coffeeshop2.png';
import CoffeeShop3 from '../../assets/images/coffeeshop3.png';
import './projects.scss';

function Projects() {
    return (
        <div className="projects">
            <p className="projects__title">projects</p>
            <div className="projects__container">
                <div className="projects__line-container">
                    <img src={Line} alt="Clothes Line" className="projects__line"/>
                    <img src={Line} alt="Clothes Line" className="projects__line"/>
                </div>
                <div className="projects__image-container">
                    <ProjectCard>
                        <img src={CoffeeShop} alt="Coffee Shop" className="projects__image projects__image1"/>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={CoffeeShop2} alt="Coffee Shop" className="projects__image projects__image2"/>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={CoffeeShop3} alt="Coffee Shop" className="projects__image projects__image3"/>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={CoffeeShop} alt="Coffee Shop" className="projects__image projects__image4"/>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={CoffeeShop} alt="Coffee Shop" className="projects__image projects__image5"/>
                    </ProjectCard>
                    <ProjectCard>
                        <img src={CoffeeShop} alt="Coffee Shop" className="projects__image projects__image6"/>
                    </ProjectCard>
                </div>
            </div>
        </div>
    )
}

export default Projects;
