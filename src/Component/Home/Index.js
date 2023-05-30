import React from 'react'
import './index.css'
import { Data } from '../Data/Data'
import { DataApp } from '../Data/Data'
import { DataApp2 } from '../Data/Data'
import { DataApp3 } from '../Data/Data'
import { UilEstate } from '@iconscout/react-unicons'
import daddy from '../../Image/IMG-20220107-WA0000.jpg'
import Simeon from '../../Image/images (52).jpeg'
import Thiago from '../../Image/Thiago silva.jpg'
import d9dc8d3920483fb47fe52b7c6f15 from '../../Image/d9dc8d3920483fb47fe52b7c6f15.jpg'
import mailchimpct0iDMOjuc from '../../Image/mailchimp-4ct0iDMOjuc-unsplash.jpg'
import EdenHazard from '../../Image/Eden-Hazard.jpg'
import video from '../../Image/VID-20211104-WA0007.mp4'


const Index = () => {

    return (
        <div className='index-Container'>

            <div className='Menu'>
                {Data.map((data) => {
                    return (
                        <div className='Menu-list'>
                            <data.icons className='colorIcons'/>
                            {data.heading}

                        </div>
                    )
                })}
                <div>
                    <hr className='hr' />
                </div>
                {DataApp2.map((data) => {
                    return (
                        <div className='Menu-list'>
                            <data.icons className='colorIcons' />
                            {data.heading}

                        </div>
                    )
                })}
                <div>
                    <hr className='hr' />
                </div>


            </div>


            <div >
                <div className='field'>
                    <div className='h3'>
                    
                        {DataApp3.map((app)=>{
                            return(
                                    <div>
                                <app.icons />
                                {app.heading}
 <div>
                                                                   
                                <hr className='hrstory'/>
                                    </div>
                                    </div> 
                                   
                                
                            )
                        })}
                        
                    </div>
                    <div className='sub-Field'>
                        {/* <div className='imgField'><img src={daddy} /></div> */}
                        <div className='imgField'><img className='imgs' src={daddy} /><span className='badge'></span></div>
                        <div className='imgField'><img className='imgs' src={Thiago} /><span className='badge'></span></div>
                        <div className='imgField'><video className='imgs' src={video} controls muted autoplay loop ></video><span className='badge'></span></div>
                        <div className='imgField'><img className='imgs' src={Simeon} /><span className='badge'></span></div>
                    </div>
                </div>

                <div className='secondField'>
                    <div className='statusField'>
                        <span className='badgeForStatus'><img className='imgs' src={daddy} /></span>
                        <span ><input className='inputForStatus' type='text' placeholder='Whats on your mind, UserName?' /></span>
                    </div>
                    <hr />
                    <div>
                        <div id='PostField'>{DataApp.map((app) => {
                            return (
                                <span >
                                    <app.icons className='colorIcons' />
                                    <span ClassName='r'>{app.heading}</span>
                                </span>

                            )
                        })}
                        </div>
                        
                    </div>
                   
                </div>
                <div className='friends'>
                <div className='friendsField'>
                        <span className='badgeForStatus'><img className='imgs' src={EdenHazard} /></span>
                        <span >Friend Full Name</span>
                    </div>
                        
                        <div>
                        <p>FriendStatus or Description</p>
                    </div>
                    </div>

            </div>
            <div className='last'>
                <h4 className='h4'>Sponsored</h4>

                <div className='flexSponsor'>
                    <div className='nsor'>
                        <div className='sponsoredImg'>
                            <img src={d9dc8d3920483fb47fe52b7c6f15} />
                        </div>
                        <span><p>You are  invited to become our Dev Partner</p> <a href=''>Myapp.io</a></span>
                    </div>

                    <div className='ponsor'>
                        <div className='exSponsor'>
                            <img src={mailchimpct0iDMOjuc} />
                        </div>
                        <span><p>Accelerate your carrer</p> <a href=''>TalentHunt.Search</a></span>
                    </div>

                </div>
                <div>
                    <div className='h3flex'>
                        <h3>Friend Requests</h3>
                        <h3><a href=''>See all</a></h3>
                    </div>

                    <div className='flexFriend'>
                        <span className='badgeForfriend'><img src={EdenHazard} /></span>
                        <span className=''>Friend Name</span>
                    </div>
                    <form className='friendRequestButton'>
                        <button className='confirm'>Confirm</button>
                        <button className='delete'>Delete</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Index