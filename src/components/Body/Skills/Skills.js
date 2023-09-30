import React from "react";
import "./Skills.css";
import { Dash } from "../../common/separator/Dash";
import { SkillData } from "../../data/Work";

export function Skills() {
  const data = SkillData;
  return (
    <div className="skills">
      <Dash />
      <lable className="section-title">Skills</lable>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <lable className="skills-section-title">{item.type}</lable>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return (
                    <div className="skill-card">
                      <div className="skill-icon">{skill.icon}</div>
                      <label className="skill-name">{skill.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
