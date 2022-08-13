import React from 'react'

import '../styles/Header.css';
import logo from '../assests/comfort.png'

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header_container">
        <div className="header_main">
            <div className='header_left'>
                <div>
                    <Link to='/'>
                        <img src={logo} 
                            alt="logo" 
                            className='logo'
                            height='50px'

                        />
                    </Link>
                </div>
                <div className='nav'>
                    <p><Link to='/home'>Home</Link></p>

                    <p>About CTPD</p>
                    
                    <p>Ride with us</p>
                    <p>
                        Drive with us
                    </p>
                    <p>
                        SAFETY
                    </p>
                    <p>
                        EN
                    </p>
                </div>
            </div>
        <div className='header_right'>
                <div className='auth'>
                    <button className='btn'>
                        <Link to='/login'>Login</Link>
                    </button>
                    <button className='btn btn-primary'>
                        <Link to='/signup'>Signup</Link>
                    </button>
                </div>
        </div>
        </div>
    </header>
  )
}

export default Header
