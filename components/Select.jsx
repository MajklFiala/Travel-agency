import React from 'react'
import '../CSS/Select.css'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import Keywest from '../assets/keywest.jpg'

import Image from './Images.jsx'

const array = [
    {
        image: BoraBora,
        text: 'Bora Bora'
    },
    {
        image: BoraBora2,
        text: 'Bora Bora2'
    },
    {
        image: Maldives,
        text: 'MALDIVES'
    },
    {
        image: Maldives2,
        text: 'MALDIVES2'
    },
   
    {
        image: Maldives3,
        text: 'MALDIVES3'
    },
    {
        image: Keywest,
        text: 'Keywest'
    }


   
   
]

function Select() {
  return (
    <div className='selects' name='views'>
    <div className="container">
        {array.map((i) => {return(<Image image={i.image} text={i.text}/>)})}
      </div>
    </div>
  )
}

export default Select
