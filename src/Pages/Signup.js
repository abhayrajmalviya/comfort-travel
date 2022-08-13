import React, { useState } from 'react'
import '../styles/Signup.css'
import girl from '../assests/girl-worker.jpg'

import { Link } from "react-router-dom";

const Signup = () => {
    const baseUrl = 'http://13.59.201.28/api/addUser';

    const [email,setEmail]= useState('');
    const [fullName,setFullName]= useState('');
    const [mobile,setMobile]= useState('');
    const [password,setPassword]= useState('');
    const [confirmPassword,setConfirmPassword]= useState('');
    // const [ data, setData] = useState('');


    const addUser =  async () =>{
        await fetch(`${baseUrl}`,{
            method:  'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({  
                "email": `${email}`,
                "fullName": `${fullName}`,
                "password": `${password}`,
                "countryCode": "+91",
                "phoneNumber": `${mobile}`,
            })
        }).then(async (response) => {
            const data1 = await response.json();
            if (data1?.message === 'Success') {
                alert('User registered');
                setEmail('');
                setFullName('');
                setMobile('');
                setPassword('');
                setConfirmPassword('');
            } else {
                alert(`ERROR!!! \n ${data1.message}`);
            }
            // setData(data1);
          })
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        addUser(); 
    }
  return (
    <div className="signup_main">
        <div className="signup_container">
            <img 
                src={girl} 
                alt="" 
                height='450px'
                width='836px'
            />
            <div id='signup_form_container'>
                <h3 id='signup_heading'>Sign Up for Ride</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' className='details' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <input type="text" placeholder='Full Name' className='details' value={fullName} onChange={(e)=>setFullName(e.target.value)} required/>
                    <input type="text" placeholder='Mobile Number' className='details' value={mobile} onChange={(e)=>setMobile(e.target.value)} required/>
                    <div id='password_container'>
                        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                        <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password' required/>
                    </div>
                    <div id='terms'>
                        <input type="checkbox" required/>
                        <p>Terms & Conditions</p>
                    </div>
                    <div id='signup_buttonContainer'>
                        <button type='submit' className='btn submit_button'>
                            Sign up
                        </button>
                    </div>
                    <div id='authSwitch'>
                        <p>Already have an account? <Link to='/login'>Log in</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
