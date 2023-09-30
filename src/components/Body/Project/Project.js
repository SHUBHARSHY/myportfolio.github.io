import React from 'react'
import { Dash } from '../../common/separator/Dash'
import { Projectcard } from './Project-card'
import './Project.css'

export function Project() {
  return (
    <div className='projects'>
      <Dash/>
   <label className='section-title'>Projects</label>
      
      <div>
        <Projectcard/>
      </div>
    </div>
  )
}
