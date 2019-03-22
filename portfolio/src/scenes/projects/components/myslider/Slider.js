
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
      backgroundIndex: 0,
      translateValue: 0,
      slideIndex:0

    }
  }

goToPrevSlide = () =>  {
    if(this.state.backgroundIndex === 0) {
          return
        }
    this.setState(prevState => ({
    translateValue: 1500,
    slideIndex:prevState.slideIndex-1
  }))


setTimeout(function(){
    this.setState(prevState =>  ({
        backgroundIndex: prevState.backgroundIndex-1
    }));
}.bind(this), 400);

}

  goToNextSlide = () => {
      if(this.state.backgroundIndex === this.state.slides.length - 1){
            return
        }
            this.setState(prevState => ({
              translateValue: -1500,
              slideIndex: prevState.slideIndex + 1
          }));

    setTimeout(function(){
      this.setState(prevState => ({
      backgroundIndex: prevState.backgroundIndex + 1

    }));
}.bind(this), 400);

}


  render() {
     return (
         <div>
         <div className = "black-top">
         </div>
          <div className='slider' style={{
              backgroundImage:`url(${this.state.slides[this.state.backgroundIndex].image})`,
              backgroundSize:'cover',
              backgroundRepeat:'no-repeat',
              backgroundPosition:'50% 60%'

          }}>



                <div className="slider-wrapper">
                  {this.state.slides.map((slide, i) => (<Slide
                      slideIndex = {this.state.slideIndex}
                      key={i}
                      imageKey={i}
                      translateValue = {this.state.translateValue}
                          image={slide.image}
                          />))}
        </div>



        <RightArrow goToNextSlide={this.goToNextSlide}/>
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        </div>
<CircusDescription />
        </div>
        );
      }
    }
