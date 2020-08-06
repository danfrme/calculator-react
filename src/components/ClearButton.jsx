import React from 'react';
import './styles/ClearButton.scss'

export default function ClearButton(props) {
    return (
        <div className='clear-btn' onClick={props.children === 'Clear' ? props.handdleClear : props.handdleErase}>
            {props.children}
        </div>
    )
}
