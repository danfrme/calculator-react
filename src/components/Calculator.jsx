import React from 'react'
import Button from './Button';
import './styles/Calculator.scss';
import Input from './Input';
import ClearButton from './ClearButton';

export default function Calculator(props) {
    return (
        <div className='calc-wrapper'>
            <Input input={props.input} />
            <div className='row'>
                <Button handdleClick={props.addToInput}>(</Button>
                <Button handdleClick={props.addToInput}>)</Button>
                <ClearButton handdleErase={props.handdleErase}>Back</ClearButton>
                <ClearButton handdleClear={props.handdleClear}>Clear</ClearButton>
            </div>
            <div className='row'>
                <Button handdleClick={props.addToInput}>7</Button>
                <Button handdleClick={props.addToInput}>8</Button>
                <Button handdleClick={props.addToInput}>9</Button>
                <Button handdleClick={props.addToInput}>/</Button>
            </div>
            <div className='row'>
                <Button handdleClick={props.addToInput}>4</Button>
                <Button handdleClick={props.addToInput}>5</Button>
                <Button handdleClick={props.addToInput}>6</Button>
                <Button handdleClick={props.addToInput}>*</Button>
            </div>
            <div className='row'>
                <Button handdleClick={props.addToInput}>1</Button>
                <Button handdleClick={props.addToInput}>2</Button>
                <Button handdleClick={props.addToInput}>3</Button>
                <Button handdleClick={props.addToInput}>+</Button>
            </div>
            <div className='row'>
                <Button handdleClick={props.addToInput}>.</Button>
                <Button handdleClick={props.addToInput}>0</Button>
                <Button handdleClick={props.handdleEqual}><strong>=</strong></Button>
                <Button handdleClick={props.addToInput}>-</Button>
            </div>
            
      </div>
    )
}
