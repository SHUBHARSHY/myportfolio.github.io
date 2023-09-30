import React from "react";
import "./Project-card.css";
export function Projectcard(project) {
  return (
<>
    <div className="project-card">
      <div className="project-info">
  <label className="project-title">BakeHut Food-Ordering App</label>
        <div className="project-links">
          { 'www.example.com' && (
            <a className="project-link" href={'https://bakehut-desktop.netlify.app/'}>
              <div className='link-button'>
                <i className="fi fi-rr-globe">Demo</i>
              </div>
            </a>
          )}
          { 'www.github.com' &&(
            <a className='project-link' href={'https://github.com/SHUBHARSHY/BakeHut-App.github.io'}>
                <div className='link-button'>
            <i className="devicon-github-original colored git">Github</i>
                </div>
              </a>
            )}
        </div>
        <p>Created a BakeHut Food-Ordering App with React.js using a realtime API of local restaurants and  with some functionality like adding menu to cart with redux-toolkit method and more..</p>
        <div className='project-tags'>
          <lable className='tag'> React.js </lable>
          <lable className='tag'> Javascript </lable>
          <lable className='tag'> CSS</lable>
          <lable className='tag'> HTML </lable>
          <lable className='tag'> Github </lable>
          <lable className='tag'> Redux-Toolkit </lable>
          <lable className='tag'> Parcel </lable>
        </div>
      </div>
      <img alt="bakehut-img"src={require('../../../assets/templates/bakehut.png')} className='project-photo'/>
            </div>




    <div className="project-card">
      <div className="project-info">
  <label className="project-title">Weather App</label>
        <div className="project-links">
          { 'www.example.com' && (
            <a className="project-link" href={'https://shubharsh-weathertime.netlify.app/'}>
              <div className='link-button'>
                <i className="fi fi-rr-globe">Demo</i>
              </div>
            </a>
          )}
          { 'www.github.com' &&(
            <a className='project-link' href={'https://github.com/SHUBHARSHY/Weathertime.github.io'}>
                <div className='link-button'>
            <i className="devicon-github-original colored git">Github</i>
                </div>
              </a>
            )}
        </div>
        <p>Created a Live Search Weather App with React.js using a realtime world API and  React Hooks</p>
        <div className='project-tags'>
          <lable className='tag'> React.js </lable>
          <lable className='tag'> Javascript </lable>
          <lable className='tag'> CSS</lable>
          <lable className='tag'> HTML </lable>
          <lable className='tag'> Github </lable>
        </div>
      </div>
      <img src={require('../../../assets/templates/weather.png')} className='project-photo'/>
            </div>



            <div className="project-card">
      <div className="project-info">
  <label className="project-title">TODO List</label>
        <div className="project-links">
          { 'www.example.com' && (
            <a className="project-link" href={'https://shubharsh-todolist.netlify.app/'}>
              <div className='link-button'>
                <i className="fi fi-rr-globe">Demo</i>
              </div>
            </a>
          )}
           { 'www.github.com' &&(
              <a className='project-link' href={'https://github.com/SHUBHARSHY/todo.github.io'}>
                <div className='link-button'>
            <i className="devicon-github-original colored git">Github</i>
                </div>
              </a>
            )}
        </div>
        <p>TODO List App with Add, Delete and Edit functionality. Also creating a  LocalStorage using React and Hooks</p>
        <div className='project-tags'>
        <lable className='tag'> React.js </lable>
          <lable className='tag'> Javascript </lable>
          <lable className='tag'> CSS</lable>
          <lable className='tag'> HTML </lable>
          <lable className='tag'> Github </lable>
        </div>
      </div>
      <img src={require('../../../assets/templates/todo.png')} className='project-photo'/>
            </div>


            <div className="project-card">
      <div className="project-info">
  <label className="project-title">Food Menu App</label>
        <div className="project-links">
          { 'www.example.com' && (
            <a className="project-link" href={'https://shubharsh-foodmenu.netlify.app/'}>
              <div className='link-button'>
                <i className="fi fi-rr-globe">Demo</i>
              </div>
            </a>
          )}
          { 'www.github.com' &&(
            <a className='project-link' href={'https://github.com/SHUBHARSHY/Restaurant-menu-app.github.io'}>
                <div className='link-button'>
            <i className="devicon-github-original colored git">Github</i>
                </div>
              </a>
            )}
        </div>
        <p>Created a Food Menu App using a React.js, creating our local API and passing it to different cart components through map function</p>
        <div className='project-tags'>
        <lable className='tag'> React.js </lable>
          <lable className='tag'> Javascript </lable>
          <lable className='tag'> CSS</lable>
          <lable className='tag'> HTML </lable>
          <lable className='tag'> Github </lable>
        </div>
      </div>
      <img src={require('../../../assets/templates/foodmenu.png')} className='project-photo'/>
            </div>

</>
  );
}
