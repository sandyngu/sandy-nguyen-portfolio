import React from 'react';
import Polaroid from '../../assets/images/polaroid.png';
import './project-card.scss';

function ProjectCard(props) {
    return (
        <div className="project__card">
            <img src={Polaroid} alt="Polaroid" className="project__card-background"/>
            {props.children}
            <div className="project__card-circle-container">
                <button className="project__card-circle projects__card-arrow1">
                    <div className="project__card-arrow">&lt;</div>
                </button>
                <button className="project__card-circle projects__card-arrow2">
                    <div className="project__card-arrow">&gt;</div>
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
