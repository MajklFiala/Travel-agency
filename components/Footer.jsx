import React from 'react'
import '../CSS/Footer.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className='footer' name='footer'>
      <div className="container">
        <div className="top">
            <h3>BEACHES</h3>
            <div className='social-icons'>
            <InstagramIcon className="icon"></InstagramIcon>
            <TwitterIcon className="icon"></TwitterIcon>
            <FacebookIcon className="icon"></FacebookIcon>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <ul>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Aadvertising</li>
                </ul>

            </div>
            <div className="right">
            <ul>
                    <li>Contact</li>
                    <li>Terms</li>
                    <li>Policy</li>
                    <li>Privacy</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
