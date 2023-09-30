import React from 'react'

import './Home.css'
import {Body} from '../Body/Body'
import { Footer } from '../Footer/Footer'
import {Header} from '../Header/Header'

export function Home() {
  return (
    <div className='home'>
      <div>
          <Header/>
      </div>
      <div>
        <Body/>
      </div>
      <div>
          <Footer/>
      </div>
   
    </div>
  )
}


