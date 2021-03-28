import React from 'react';
import './techstacks.scss';

function TechStacks(props) {
    return (
        <div className="techstacks">
            {props.children}
        </div>
    );
};

export default TechStacks;
