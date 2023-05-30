import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'


const Login=()=>{
    const[myData, setmyData]=useState({
        Email:'',
        Password:''
    })

console.log(myData)

    const handleChange=(e)=>{
        // console.log(setmyData)
        // const{name, value, type}=e.target
        
        setmyData((r)=>{
            return{
                ...r,
                [e.target.name]:e.target.value
            }
        })
    }


    return(
        <div className='FormContainer'>
            <form className='form'>
            <h2>LogIn</h2>
            <label>Email:</label>
                <input className='input' type='email' name='Email' 
                id='Email'  placeholder='Email'
                 onChange={handleChange}                 
                value={myData.Email}/>
            <label>Password:</label>
                <input className='input' type='Password' name='Password'
                 onChange={handleChange}                
                 id='Password'  placeholder='Password' value={myData.Password}/>
                <small>Don't Have an Account with Kinx? Sign Up<span><a href=''>Here</a></span></small>
                <div className='button'>
                <button className='but'>Log In</button>
                </div>
            </form>
        </div>
    )
}

export default Login