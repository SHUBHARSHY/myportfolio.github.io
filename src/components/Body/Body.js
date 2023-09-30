import React from 'react'
import { About } from './About/About'
import './Body.css'
import { Contact } from './Contact/Contact'
import { Project } from './Project/Project'
import { Skills } from './Skills/Skills'
import { Work } from './Work/Work'

export function Body() {
  return (
    < div className='body'> 
<section id='About'>
<About/>
</section>

<section id='project'>
<Project/>
</section>

<section id='skills'>
<Skills/>
</section>

<section id='work'>
  <Work/>
</section>

<section id='contact'>
  <Contact/>
</section>

      </div>
  )
}

