import React from 'react'

const Slide = (props) => {
    let setStyles = function(){
        if(props.slideIndex == props.imageKey && props.translateValue == -1500){
            return{
                transform:`translateX(${props.translateValue}px)`,
                transition: 'transform ease-out 0.4s',
                backgroundImage: `url(${props.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 60%',
                left: '1500px'
            }
        } else if(props.slideIndex == props.imageKey && props.translateValue == 1500){
            return {
                transform:`translateX(${props.translateValue}px)`,
                transition: 'transform ease-out 0.4s',
                backgroundImage: `url(${props.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 60%',
                right: '1500px'
            }
        } else{
            return{visibility:'hidden'}
        }
    }

    let styles = setStyles()

    return(
     <div className="slide" style={styles}><p className='text'>{props.text}</p></div>
          )
        }

export default Slide
