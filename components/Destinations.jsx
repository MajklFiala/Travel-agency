import React from 'react'
import '../CSS/Destinations.css'

import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'

function Destinations() {
  return (
    <div className='destinations' name='destinations'>
      <div className="container">
        <h1>All-inclusive resorts </h1>
        <p>On the carabien's best beaches</p>
        <div className="image-container">
            <img src={BoraBora} alt="image" className='span3 image-grid-row-2'/>
            <img src={BoraBora2} alt="image" />
            <img src={Maldives} alt="image" />
            <img src={Maldives2} alt="image" />
            <img src={Maldives3} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Destinations
