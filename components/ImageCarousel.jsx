import React from 'react'
import '../CSS/ImageCarousel.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Keywest from '../assets/keywest.jpg'

function ImageCarousel() {
  return (
    <div className='container' name='carousel'>
      <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
            <img src={BoraBora2}></img>
            <p>Bora Bora</p>
        </div>
        <div>
            <img src={Keywest}></img>
            <p>Key West</p>
        </div>
        <div>
            <img src={Maldives}></img>
            <p>Maldives</p>
        </div>
      </Carousel>
      </div>
  )
}

export default ImageCarousel
