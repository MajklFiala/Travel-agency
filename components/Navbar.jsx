import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

import {Link} from 'react-scroll'

import '../CSS/Navabr.css'

function Navbar() {

    const [open, setOpen] = useState(false)

    const OpenMenu = () =>{
        setOpen(!open);
    }

  return (
    <div className={open == true ? 'navbar navbar-bg' : 'navbar'} name='navbar'>
      <div className="logo">
        <h2>BEACHES</h2>
      </div>
      <ul className="nav-menu">
        <Link to='home' smooth={true} duration={300}>Home</Link>
        <Link to='destinations' smooth={true} duration={300}>Destinations</Link>
        <Link to='book' smooth={true} duration={300}>Travel</Link>
        <Link to='views' smooth={true} duration={300}>Book</Link>
        <Link to='carousel' smooth={true} duration={300}>Views</Link>
        
      </ul>
      <div className="nav-icons">
        <PersonIcon className='icon'></PersonIcon>
        <SearchIcon className='icon'></SearchIcon>
      </div>
      <div className="hamburger">
        <MenuIcon onClick={OpenMenu}></MenuIcon>
      </div>

      <div className={open == true ? "mobile-menu active" : 'mobile-menu'}>
        <ul className="mobile-nav">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>Book</li>
            <li>Views</li>
            <div className="mobile-menu-footer">
                <div className="menu-icons">
                    <button>Search</button>
                    <button>Account</button>
                </div>
                <div className="social-icons">
                    <InstagramIcon className="icon"></InstagramIcon>
                    <TwitterIcon className="icon"></TwitterIcon>
                    <FacebookIcon className="icon"></FacebookIcon>
                </div>

            </div>
        </ul>
      </div>




    </div>

  )
}

export default Navbar
