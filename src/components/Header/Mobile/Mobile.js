import React from 'react'
import './Mobile.css'

export function Mobile({isOpen,setIsopen}) {
  return (
    <div className='mobile'>
        <div className='close-icon' onClick={()=> setIsopen(!isOpen)}>
        <i className="fi fi-rr-cross-circle icon"></i>
        </div> 
        <div className='mobile-option'>
        <div className='mobile-options'>
          <a href='#project'>
          <i className="fi fi-rr-document option-icon ">Projects</i>
          </a>
      </div>

      <div className='mobile-options'>
          <a  href='#skills' >
          <i className="fi fi-rr-bulb option-icon">Skills</i>
          </a>
      </div>

      <div className='mobile-options'>
          <a href='#work'>
          <i className="fi fi-rr-briefcase option-icon">Work</i>
          </a>
      </div>

      <div className='mobile-options'>
          <a href='#contact'>
          <i className="fi fi-rr-user option-icon">Contact</i>
          </a>
      </div>
        </div>
    
    </div>
  )
}
