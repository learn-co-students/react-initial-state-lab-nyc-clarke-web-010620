import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ImageSlider extends Component {
    constructor(props){
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render(){
        return <h1>I am on slide {this.state.currentSlideIndex}</h1>
    }

}


export default ImageSlider;