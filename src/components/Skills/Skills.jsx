import React from 'react';
import './skills.css';


import { skillsData } from '../../data/skillsData';

const skills = skillsData;

const firstRow = skills.filter((_, i) => i % 2 === 0);
const secondRow = skills.filter((_, i) => i % 2 !== 0);

const firstRowScroll = [...firstRow, ...firstRow];
const secondRowScroll = [...secondRow, ...secondRow];


const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills-title">Tech Stack</h2>
      <div className="skills-scroll-wrapper">
        <div className="skills-row row1">
          {firstRowScroll.map((skill, idx) => (
            <div key={`row1-${idx}`} className="skill">
              {skill.iconClass && <i className={skill.iconClass}></i>}
              {skill.svg && <div className="skill-svg">{skill.svg}</div>}
              {skill.img && <img src={skill.img} alt={skill.name} />}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="skills-row row2">
          {secondRowScroll.map((skill, idx) => (
            <div key={`row2-${idx}`} className="skill">
              {skill.iconClass && <i className={skill.iconClass}></i>}
              {skill.svg && <div className="skill-svg">{skill.svg}</div>}
              {skill.img && <img src={skill.img} alt={skill.name} />}
              {/* <p>{skill.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
