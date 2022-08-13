import React, { useState } from 'react'
import '../../styles/Invest.css'
import banner from '../../assests/building.jpg'

const Invest = () => {
  

  const handleSubmit =(e) =>{
    e.preventDefault();
  }
  return (
    <div className="invest_container">
      <div className="invest_banner">
        <h1>Invest and Earn</h1>
      </div>
      <div className="invest_form">
            <div className='invest_formContainer'>
                <p className='invest_formHeading'>Get an estimate.</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Pick up Point" />
                    <input type="text" placeholder="Drop Point" />
                    <button className='btn btn-invest' type='submit'>
                        Get Estimate
                    </button>
                </form>    
            </div>
      </div>
    </div>
  )
}

export default Invest
