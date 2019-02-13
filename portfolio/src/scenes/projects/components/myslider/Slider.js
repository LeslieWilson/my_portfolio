import React, { Component } from 'react'
import Slide from './Slide.js'
import RightArrow from './Arrows.js'

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slides: [
        {image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        text: "some stuff"},
        {image:"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        text:"aksjdhfkah"},
        {image: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        text:"happy"}
      ],
      currentIndex: 0,
      translateValue: 0
    }



  }


  goToNextSlide = () => {
      console.log(this.state.slides)
      if(this.state.currentIndex === this.state.slides.length - 1) {
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
           this.state.slides.map((slide, i) => (
             <Slide key={i} image={slide.image}  />

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
