// your Bomb code here!
import React from "react"
import { render } from "enzyme"

class Bomb extends React.Component {
    
    constructor(props) {
        super() 
        this.state = {secondsLeft:props.initialCount}
    }

    startTimer = () => {
        let b = document.querySelector("button")
        b.style = {display:'none'}
        const tick = setInterval(()=>{ 
            let newSecs = --this.state.secondsLeft
            this.state.secondsLeft >= 0? 
            this.setState({secondsLeft:newSecs}):clearInterval(tick)}
        ,1000)
    }
    
    render() {
    console.log(this.state.secondsLeft)
    // {this.state.secondsLeft == 0? a:b}    
    return (
            <div>
                {this.state.secondsLeft > 0? 
                <p>{this.state.secondsLeft} seconds left before I go boom!</p>
                :<p>Boom!</p>}
                {/* <button onClick={this.startTimer}>DON'T PRESS THIS BUTTON</button> */}
            </div>
        ) 
    }

    
}

// your ImageSlider code here!
export default Bomb