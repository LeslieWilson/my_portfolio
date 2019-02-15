import React from 'react'

const Text = (props) => {
  const styles = {
    visibility: props.visibility
  }
  return(
  <div className = {props.visibility}><p className='text'>{props.text}</p></div>
  )
}

export default Text
