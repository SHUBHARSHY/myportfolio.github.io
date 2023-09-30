import React from 'react'
import { Socialdata } from '../../data/Social'
import './Socialcontact.css'


export function Socialcontact() {
    const data = Socialdata;
  return (
    <div className='social-contact'>
        {data.map((item)=>{
            return(
               <a href={item.link}>
                   <div className='social-icon-div'>
                       <img src={item.icon } className="social-icon"/>

                   </div>
               </a>
        )
        })}
    </div>
  )
}
