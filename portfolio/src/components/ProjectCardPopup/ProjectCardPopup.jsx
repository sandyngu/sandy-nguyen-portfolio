import React from 'react';
import './project-card-popup.scss';

function ProjectCardPopup(props) {
    return (
        <div className="project__card-popup">
            {props.children}
        </div>
    )
}

export default ProjectCardPopup;
