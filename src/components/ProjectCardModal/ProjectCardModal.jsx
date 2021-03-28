import React from 'react';
import Polaroid from '../../assets/images/polaroid.png';
import './project-card-modal.scss';

function ProjectCardModal(props) {
    return (
        <div className="project__card-modal">
            <img src={Polaroid} alt="Polaroid" className="project__card-modal-background"/>
            {props.children}
        </div>
    )
}

export default ProjectCardModal;
