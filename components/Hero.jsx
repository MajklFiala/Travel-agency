import React from 'react'
import '../CSS/Hero.css'
import SearchIcon from '@mui/icons-material/Search';

import video from '../assets/maldivesVideo.mp4'

function Hero() {
  return (
    <div className='hero' name='home'>
      <video autoPlay loop muted id='video'>
        <source src={video} type='video/mp4'/>
      </video>
      <div className='overlay'>

      </div>
      <div className="content">
        <h1>First class travel</h1>
        <h2>Top 1% locations worldwide</h2>
        <form className='form'>
            <div>
                <input type="text" placeholder='Search destinations'></input>
            </div>
            <div>
                <button><SearchIcon className='icon'/></button>
            </div>

        </form>
      </div>

    </div>
  )
}

export default Hero
