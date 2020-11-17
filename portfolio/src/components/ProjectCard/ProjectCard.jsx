import React from 'react';
import Polaroid from '../../assets/images/polaroid.png';
import './project-card.scss';

function ProjectCard(props) {
    return (
        <div className="project__card">
            <img src={Polaroid} alt="Polaroid" className="project__card-background"/>
            <div className="project__card-image">
                {props.children}
            </div>
        </div>
    );
};

export default ProjectCard;
