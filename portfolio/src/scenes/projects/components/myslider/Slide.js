import React from 'react'

const Slide = (props) => {
    const styles = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }

console.log(props)
 return(
     <div className="slide" style={styles}><p className='text'>{props.text}</p></div>
          )
        }
        
export default Slide
