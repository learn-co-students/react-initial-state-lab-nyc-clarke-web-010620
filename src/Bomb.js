// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        return (
          <div >
              {this.state.secondsLeft ? this.state.secondsLeft + ' seconds left before I go boom!' : 'Boom!'}
          </div>
        )
      }
}

export default Bomb
