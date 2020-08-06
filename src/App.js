import React, { Component } from 'react';
import './App.scss';
import Calculator from './components/Calculator';
import * as math from 'mathjs';
import logo from './logo192.png';

export class App extends Component {

  constructor () {
    super();

    this.state = {
      input: ''
    }
  }

  handdleClear = () => {
    this.setState({
      input: ''
    })
  }

  handdleErase = () => {
    this.setState({
      input: this.state.input.toString().slice(0, -1)
    })
  }

  addToInput = val => {
    this.setState({
      input: this.state.input + val
    })
  }

  handdleEqual = () => {

    console.log(math.evaluate(this.state.input))
    this.setState({
      input: math.evaluate(this.state.input)
    })
  }

  render() {
  return (
    <div className='app'>
      <header>
        <a href='https://github.com/danfrme' ><img className='logo' alt='logo' src={logo}/></a>
      </header>
      <Calculator 
        input={this.state.input} 
        handdleClear={this.handdleClear} 
        addToInput={this.addToInput}
        handdleEqual={this.handdleEqual}
        handdleErase={this.handdleErase}
      />

      <footer><p>Developed by Douglas Franquiz</p></footer>
    </div>
  );
}
}

export default App;
