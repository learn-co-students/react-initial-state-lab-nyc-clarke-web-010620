import React from "react"
import { render } from "enzyme"

class ImageSlider extends React.Component {
    constructor() {
        super() 
    
        this.state = {
          currentSlideIndex: 0
        }
    }

    render() {

        return (
            <div>
                <p>I am on slide {this.state.currentSlideIndex}</p>

            </div>
        ) 
    }
}

// your ImageSlider code here!
export default ImageSlider