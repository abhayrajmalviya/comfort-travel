import React from 'react'
import '../styles/Footer.css'
import logo from '../assests/comfort.png'

import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <footer>
        <img 
            src={logo} 
            alt="logo" 
            height="64px"
            className='logo'
        />
        <div className='footer_bottom'>
            <div className='footer_bottom_left'>
                <h3 className="footer_subheading">
                    About
                </h3>
                <p id='footer_subContent'>
                    How we Work
                </p>
                <p id='footer_subContent'>
                    Help & Support
                </p>
                <p id='footer_subContent'>
                    Contact
                </p>
            </div>
            <div>
                <h3 className="footer_subheading">Policy</h3>

                <p id='footer_subContent'>
                    Privacy Policy
                </p>
                <p id='footer_subContent'>
                    Cookies Policies
                </p>
                <p id='footer_subContent'>
                    Terms & Conditions
                </p>
                <p id='footer_subContent'>
                    Blog
                </p>
            </div>
            
            <div className='footer_bottom_right'>
                <h3 className="footer_subheading">Signup for newsletter</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter your email'/>
                </form>
                <div className='footer_socialIcons'>
                    <p>
                        <AiOutlineFacebook className='footer_socialIcon'/>
                    </p>
                    <p>
                        <AiOutlineTwitter
                        className='footer_socialIcon'/>
                    </p>
                    <p>
                        <AiOutlineInstagram
                        className='footer_socialIcon'/>
                    </p>
                    <p>
                        <AiOutlineLinkedin
                        className='footer_socialIcon'/>
                    </p>
                    <p>
                        <AiOutlineYoutube
                        className='footer_socialIcon'/>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
