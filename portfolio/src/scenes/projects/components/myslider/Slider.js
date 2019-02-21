

import React, { Component } from 'react'
import Slide from './Slide.js'
import RightArrow from './Arrows.js'
import Text  from './Text.js'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: this.props.images,
      text: this.props.text,
      currentIndex: 0,
      translateValue: 0
    }
  }
  goToNextSlide = () => {

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

  render(
  ) {
      let style="hidden";
      let textTiles = this.state.text.map((text,i) => {
          if(this.state.currentIndex !==i){
              style="hidden"}
              else {
              style = "visible"
          }
          return (<Text key={i} text={text} visibility={style}/>)
      })

     return (
         <div>
       <div className="slider">
       <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 2s'
          }}>

         {
           this.state.slides.map((slide, i) => (
             <Slide key={i} image={slide.image} />

           ))
         }

         </div>

        <RightArrow goToNextSlide={this.goToNextSlide}
        />
        </div>
        {textTiles}
      </div>
    );
  }
}
