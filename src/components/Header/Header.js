import React, { useState } from "react";
import "./Header.css";
import { Mobile } from "./Mobile/Mobile";
import { Web } from "./Web/Web";
export function Header() {

  const [isOpen,setIsopen]= useState(false)
  return (
    <div className="header">
      <div className="logo">Portfolio</div>
      <div className="menu">
        <div className="web-menu">
          <Web/>
        </div>
        <div className="mobile-menu">
          <div onClick={()=>setIsopen(true)}>
          <i className="fi fi-rr-menu-burger menu-icon"></i>
          </div>
          {isOpen&& <Mobile isOpen={isOpen} setIsopen={setIsopen}/>}
        </div>
      </div>
    </div>
  );
}
