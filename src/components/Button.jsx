import React from 'react';
import './styles/Button.scss';

const isOperator = val => {
    return !isNaN(val) || val ==='.' || val === '=';
}

export default function Button(props) {
    return (
        <div 
        className={`button-wrapper ${isOperator(props.children) ? null : 'operator'}`}
        onClick={() => props.handdleClick(props.children)}
        >
            {props.children}
        </div>
    )
}
