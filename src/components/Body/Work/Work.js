import React from "react";
import "./Work.css";
import { Dash } from "../../common/separator/Dash";
export function Work() {
  return (
    <div className="work">
      <Dash />
      <label className="section-title"> Work</label>
      <div className="work-list">
        <div className="work-card">
          <div className="work-info">
            <lable className="company-name"> Andronium Solutions Pvt Ltd</lable>
            <lable className="company-desig"> Internship Trainee</lable>
            <div className="work-dates">
              <lable>September,2022 - February,2023</lable>
            </div>
            <div className="work-desc">
              <ul>
                <li>Frontend development using Javascript, React.Js</li>
                <li>Expertise in JAVASCRIPT and React.Js to develop the SAP on client demand</li>
                <li> Used to develop SAP and webpages with JavaScript and React forcreating interactive UI's using One-way data flow, Virtual DOM,J.S.X, React concepts.</li>
                <li> Implemented shimmer effects to enhance user experience during data loading</li>
                <li> Utilizing React Router DOM for seamless navigation between different pages</li>
                <li> Implemented asynchronous programming with async/await for efficient data fetching and filtering datas from API responses.</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
