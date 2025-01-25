import React from 'react';
// import { WorkspacePremiumTwoTone, WorkspacePremiumOutlined, WorkspacePremiumSharp, WorkspacePremiumRounded } from '@mui/icons-material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
import SchoolIcon from '@mui/icons-material/School';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import "./resume.css";

const Resume = () => {
  const experience = [
    { year: "Jul 2012 - Aug 2024", title: "Product Analyst", place: "Rite Software Solutions & Services LLC." },
    { year: "Nov 2019 - Jul 2012", title: "Technical Consultant", place: "Rite Software Solutions & Services LLC." },
    { year: "Aug 2019 - Oct 2019", title: "Intern", place: "Inlight Data Analytics Pvt. Ltd." },
  ];

  const education = [
    { year: "2015 - 2019", title: "B.Tech Computer Science", place: "Avanthi Institute of Engg. & Tech" },
  ];

  return (
    <div className="rcontainer">
    <div className="section exp">
      <h2> <WorkHistoryTwoToneIcon fontSize='2.5rem'/>  My Experience</h2>
      <div className="epcard-container">
        {experience.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.year}</h4>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="section edu">
      <h2> <SchoolTwoToneIcon fontSize='2.5rem'/>  My Education</h2>
      <div className="edcard-container">
        {education.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.year}</h4>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Resume;
