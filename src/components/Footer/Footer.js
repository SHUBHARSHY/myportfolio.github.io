import React from 'react'
import './Footer.css'

export function Footer() {
  return (
    <div className='footer'>
      Made with <img src={require('../../assets/fire.png')} className='footer-fire'/> by Shubham Meena
    </div>
  )
}
