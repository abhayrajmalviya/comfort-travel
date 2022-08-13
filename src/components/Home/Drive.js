import React from 'react'
import taxi from '../../assests/taxi-driver.jpg'
import '../../styles/Drive.css'

const Drive = () => {
  return (
    <div className='drive__container'>
      <div className='drive_main'>
        <div className='drive__image'>
            <img 
                src= {taxi} 
                alt="taxi-driver" 
                width='600px'invest_container
                height='400px'/>
        </div>
        <div className='drive_content'>
            <h2 className='drive_content_heading'>Drive with Comfort Trips</h2>
            <h4 className='drive_content_heading1'>Set your own hours. Earn on your own terms.</h4>
            <div>
                <h5 className='drive_content_subHeading'>Reliable earnings:</h5>
                <p className='drive_content_subContent'>Make money, keep your tips, and cash out when you want.</p>
            </div>
            <div>
                <h5 className='drive_content_subHeading'>A flexible schedule:</h5>
                <p className='drive_content_subContent'>Be your own boss and drive whenever it works for you.</p>
            </div>

            <div>
                <h5 className='drive_content_subHeading'>Get paid instantly:</h5>
                <p className='drive_content_subContent'>Cash out your earnings whenever you want.</p>
            </div>
        </div>  
      </div>  
      <div className='drive_button_container'>
        <button className='btn drive_button'>
            Apply to drive
        </button>
      </div>
    </div>
  )
}

export default Drive
