import React from "react";
import { Socialcontact } from "../../common/social-contact/Socialcontact";
import "./About.css";

export function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There{" "}
          <span className="material-symbols-outlined hand">waving_hand</span>{" "}
          <br /> I am
          <span className="info-name"> Shubham Meena</span>
          <br /> I Love Experimenting With The Web
        </div>
        <div className="about-photo">
          <img src={require('../../../assets/mypic.png')} className='picture'/>
        </div>
      </div>

      <div className="about-bottom">
        <Socialcontact/>
        </div>
  </div>
  );
}
