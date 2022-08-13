import React from 'react'
import '../../styles/Download.css'
import customer from '../../assests/customer.jpg'
import { Link } from 'react-router-dom'
const Download = () => {
  return (
    <div className="download_container">
        <div className="download_main">
            <div className='download_content'>
                <h1 id='download-heading'>Everyday life,<br/>
    made simple.</h1>
                <div className='authButtonContainer'>
                    <button  id ='signupbutton'>
                        <Link to ='/login'>Signup to ride</Link>
                    </button>
                    <button id='drive-apply-button'>
                        Apply to drive
                    </button>
                </div>
                <p id ='download_text'>Download our app from Applestore and  Playstore</p>
                <div className='appstore-buttons'>
                    <a href="#">
                        <div id='googleplay-button'></div>  
                    </a>
                    <a href="#">
                        <div id = 'applestore-button'></div>  
                    </a>
                </div>
            </div>
            <img src={customer} alt="customer image" 
            width='620px'
            height='350px'
            className='customer_image'/>
        </div>
    </div>
  )
}

export default Download
