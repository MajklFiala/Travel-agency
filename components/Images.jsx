import React from 'react'
import '../CSS/Image.css'

function Images(props) {
  return (
    <div className='image-grid'>
      <img src={props.image} alt='image'></img>
      <div className='overlay'>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Images
