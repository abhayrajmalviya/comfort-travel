import React, { useState } from 'react'
import '../styles/Login.css'
import girl from '../assests/girl-worker.jpg'
import { Link } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const baseUrl = 'http://13.59.201.28/api/userLogin';
    
    const login =  async () =>{
        await fetch(`${baseUrl}`,{
            method:  'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({  
                "email": `${email}`,
                "password": `${password}`,
            })
        }).then(async (response) => {
            const data1 = await response.json();
            if (data1?.status === 422) {
                alert(data1.message);
                setEmail('');
                setPassword('');
            } else {
                alert(`ERROR!!! \n ${data1.message}`);
            }
          })
    } 

    const handleSubmit =(e) =>{
        e.preventDefault();
        login();
    }
  return (
    <div className="login_main">
        <div className="login_container">
            <img 
                src={girl} 
                alt="" 
                height='450px'
                width='836px'
            />
            <div id='login_form_container'>
                <h3 id='login_heading'>Log In for Ride</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} className='login_details'/>
                    <input type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} className='login_details'/>
                    <div id='forgotPassword'>
                        <p>
                            <a href="#">forgot password?</a>
                        </p>
                    </div>
                    <div id='login_buttonContainer'>
                        <button type='submit' className='btn submit_button'>
                            login
                        </button>
                    </div>
                    <div id='authSwitch'>
                        <p>Don’t have an account?
                        <Link to='/signup'> Sign  up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
