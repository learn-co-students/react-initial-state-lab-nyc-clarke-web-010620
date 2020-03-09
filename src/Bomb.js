import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Bomb extends Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        console.log(this.state.secondsLeft)
        return this.state.secondsLeft === 0 ? <h1>Boom!</h1> : <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
    }
}


export default Bomb;