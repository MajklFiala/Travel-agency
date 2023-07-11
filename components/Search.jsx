import React, { useState } from 'react'
import '../CSS/Search.css'

import Gold from '../assets/gold.png'
import {DatePicker} from "rsuite";

function Search() {

    let date = new Date();
    let today = date.getDate();

  return (
    <div className='search' name='book'>
        <div className='container'>
            <div className="left">
                <h2>Luxury included vacations for two people</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend tellus sit amet massa euismod suscipit. Integer non purus laoreet, blandit ipsum sed, consectetur massa. Proin accumsan justo velit, a pretium nisl semper ac. Donec nec lectus finibus, ornare urna et, cursus ipsum. Etiam consequat velit sapien, non suscipit ligula sodales quis. Nunc ut erat placerat, vestibulum tortor vitae, varius ipsum. Morbi eleifend scelerisque efficitur. Cras non finibus risus.</p>
            <div className="search-col-2">
                <div className="box">
                    <div>
                        <img src={Gold} alt='image'></img>
                    </div>
                    <div>
                        <h3>world leading</h3>
                        <p>all inclusivr for 20 years</p>
                    </div>
                </div>
                <div className="box">
                    <div>
                        <h3>No one includes more</h3>
                        <p>all inclusive for 20 years</p>
                        <button>View packages</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="right">
                <div className="promo">
                    <h4 className='save'> get  an additional 7% off</h4>
                    <p className='timer'>12 hours left</p>
                    <p className="offers">view all current offers</p>
                </div>
                <form>
                    <div className="input-wrap">
                        <label>Destination</label>
                        <select>
                            <option value="1">Grande</option>
                            <option value="2">Grenda</option>
                            <option value="3">Bora BOra</option>
                            <option value="4">Talacia</option>
                            <option value="5">Maldives</option>
                        </select>
                    </div>
                    <div className="date">
                        <div className="input-wrap">
                            <label>Check in </label>
                            <input type="date" ></input>
                        </div>
                        <div className="input-wrap">
                            <label>Check out </label>
                            <input type="date"></input>
                        </div>
                    </div>
                    <button>Rates and Availabilities</button>
                </form>
            </div>


        </div>
      
    </div>
  )
}

export default Search
