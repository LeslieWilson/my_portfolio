import React, { Component } from 'react'
import Slide from './Slide.js'
import RightArrow from './Arrows.js'

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToNextSlide = () => {

      if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
          }
      this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));

  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
     return (
       <div className="slider">
       <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 2s'
          }}>

         {
           this.state.images.map((image, i) => (
             <Slide key={i} image={image} />
           ))
         }

         </div>

        <RightArrow goToNextSlide={this.goToNextSlide}
        />
        Hello!!!!
      </div>
    );
  }
}
