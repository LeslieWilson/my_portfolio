
import React, { Component } from 'react'
import Slide from './Slide.js'
import RightArrow from './RightArrow.js'
import LeftArrow from './LeftArrow.js'
import CircusDescription  from './CircusDescription.js'



export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: this.props.images,
      currentIndex: 0,
      translateValue: 0
    }
  }



goToPrevSlide = () =>  {
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

  render() {
     return (
         <div>
            <div className="slider">
                <div className="slider-wrapper"

                  style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 2s'}}>
                  {this.state.slides.map((slide, i) => (<Slide key={i} image={slide.image}/>))}
        </div>



        <RightArrow goToNextSlide={this.goToNextSlide}/>
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        </div>
<CircusDescription />
        </div>
        );
      }
    }
