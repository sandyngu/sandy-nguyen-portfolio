import React from 'react';
import './project-card-description.scss';

function ProjectCardDescription(props) {
    return (
        <div className="project__card-popup">
            {props.children}
        </div>
    )
}

export default ProjectCardDescription;
