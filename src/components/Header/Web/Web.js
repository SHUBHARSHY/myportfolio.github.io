import React from 'react'
import './Web.css'
export function Web() {
  return (
  <div className="web">
      <div className='web-options'>
          <a href='#project'>
          <i className="fi fi-rr-document option-icon ">Projects</i>
          </a>
      </div>

      <div className='web-options'>
          <a  href='#skills' >
          <i className="fi fi-rr-bulb option-icon">Skills</i>
          </a>
      </div>

      <div className='web-options'>
          <a href='#work'>
          <i className="fi fi-rr-briefcase option-icon">Work</i>
          </a>
      </div>

      <div className='web-options'>
          <a href='#contact'>
          <i className="fi fi-rr-user option-icon">Contact</i>
          </a>
      </div>
  </div>
  )
}
