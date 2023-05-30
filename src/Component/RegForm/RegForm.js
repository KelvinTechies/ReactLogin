import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './RegForm.css'


const RegForm=()=>{
    const[myData, setmyData]=useState({
        FirstName:'',
        userName:'',
        Email:'',
        Password:'',
        cPassword:'',
        Dob:'',
        select:''
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


    const submit=()=>{
        if (myData.cPassword !== myData.Password) {
            alert('Pwd mixmatch')
        }
    }

    return(
        <div className='FormContainer'>
            <form className='form' onSubmit={submit}>
            <h2>Sign up</h2>
                
                <input className='input' type='text' name='FirstName'
                 id='FirstName' placeholder='FullName' 
                 onChange={handleChange}
                  value={myData.FirstName}/>
                <input className='input' type='text' name='userName'
                   placeholder='UserName'
                 onChange={handleChange}                   
                value={myData.userName}/>
                <input className='input' type='email' name='Email' 
                id='Email'  placeholder='Email'
                 onChange={handleChange}                 
                value={myData.Email}/>
                <input className='input' type='Password' name='Password'
                 onChange={handleChange}                
                 id='Password'  placeholder='Password' value={myData.Password}/>
                <input className='input' type='Password' name='cPassword'
                 onChange={handleChange}                 
                id='cPassword' placeholder='Password' 
                value={myData.cPassword}/>
                <label htmlFor='Dob'>Date Of Birth</label>
                <input className='input' type='date' name='Dob'
                 onChange={handleChange}                
                value={myData.dob} id='Dob'/>
                <label htmlFor='Dob'>Gender</label>
                <select name='select' value={myData.select}
                 onChange={handleChange}  >
                    <option value>--Select Gender-- </option>
                    <option value='Male'>Male </option>
                    <option value='Female'>Female</option>
                </select>
                <small>Do you Have an Account with Kinx? Login<span><a href=''>Here</a></span></small>
                <div className='button'>
                <button className='but'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default RegForm