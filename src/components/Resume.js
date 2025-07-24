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
    { year: "Feb 2025 - Present", title: "Sr. Software Engineer", place: "Fission Labs" },
    { year: "Jul 2012 - Aug 2024", title: "Product Analyst", place: "Rite Software Solutions & Services LLC." },
    { year: "Nov 2019 - Jul 2012", title: "Technical Consultant", place: "Rite Software Solutions & Services LLC." },
    { year: "Aug 2019 - Oct 2019", title: "Intern", place: "Inlight Data Analytics Pvt. Ltd." },
  ];

  const education = [
    { year: "2015 - 2019", title: "B.Tech Computer Science", place: "Avanthi Institute of Engg. & Tech" },
  ];

  return (
    <div className="roadmap-layout-horizontal">
      <h2 className="roadmap-title">
        <WorkHistoryTwoToneIcon fontSize="2.5rem" className="roadmap-icon" /> Career Roadmap
      </h2>
      <div className="roadmap-horizontal">
        {/* Roadmap milestones for experience */}
        {experience.map((item, index) => (
          <div className="roadmap-milestone-horizontal" key={index}>
            <div className="roadmap-dot-horizontal" />
            {index !== experience.length - 1 || education.length > 0 ? (
              <div className="roadmap-line-horizontal" />
            ) : null}
            <div className="roadmap-card-horizontal glass-card">
              <span className="roadmap-date">{item.year}</span>
              <span className="roadmap-role">{item.title}</span>
              <span className="roadmap-place">{item.place}</span>
            </div>
          </div>
        ))}
        {/* Education as a special milestone */}
        {education.map((item, index) => (
          <div className="roadmap-milestone-horizontal roadmap-education-horizontal" key={"edu-"+index}>
            <div className="roadmap-dot-horizontal roadmap-dot-edu-horizontal">
              <SchoolTwoToneIcon fontSize="medium" />
            </div>
            <div className="roadmap-card-horizontal glass-card">
              <span className="roadmap-date">{item.year}</span>
              <span className="roadmap-role">{item.title}</span>
              <span className="roadmap-place">{item.place}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
