import React from 'react'
import { Dash } from '../../common/separator/Dash'
import { Socialcontact } from '../../common/social-contact/Socialcontact'
import './Contact.css'

export function Contact() {
  return (
    <div className='contact'>
      <Dash/>
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Want to get in touch? <br/> Contact me on any of the platform.</p>
          <Socialcontact/>
        </div>
        <div className='download'> 
        <a download href={require('../../../assets/Resume.pdf')} >Download Resume 
        <i className="fi fi-rr-cloud-download download-icon"></i>
        </a>
        </div>
      </div>



      <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder="Input Name" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder="Input Last Name" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Mail ID</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Your Views</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <div className="col-12">
    <div className="form-check">
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
    </div>
  )
}
