import React from 'react'
 import logo from '../../Image/front_side.jpg'
 import daddy from '../../Image/IMG-20220107-WA0000.jpg'
 import './NavBar.css'
import { DataApp4 } from '../Data/Data'
 

const NavBar=()=>{

    return(
        // <div>
            <div className='nav'>
                    <div className='nav-container'>
                    <h1 className='h1'>KinxApp</h1>
                    <div className=''>
                        <form className='search-form'>
                        <div className='img'>
                                {/* <span><img className='im' width='20' src={logo} /></span> */}
                                 <input className='search' type='search' placeholder='Search KinxApp'/>
                        </div>
                         </form>

                    </div>
                    <div className='flex'>
                        {DataApp4.map((app)=>{
                            return(
                        <div className='rounded-circle '><button  className='navIcons '><app.icons className=' '/><span>2</span></button> </div>

                            )
                        })}
                        <div className='rounded-circle an-circle'><img className='imgs' src={daddy} /></div>
                        
                        {/* <div className='rounded-circle'></div> */}
                        </div>
                    </div>
            </div>
        // </div>
        
    )
}

export default NavBar