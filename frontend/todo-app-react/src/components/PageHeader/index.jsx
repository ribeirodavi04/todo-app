import React from 'react';
import './style.css';
const PageHeader = (props) => {
    return (
        <header className="header-class">
            <h2>{props.bigTitle} <small>{props.smallTitle}</small></h2>
        </header>
    );
};

export default PageHeader;