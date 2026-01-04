import React, { useEffect, useRef, useState } from 'react';
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
    { year: "Jul 2021 - Aug 2024", title: "Product Analyst", place: "Rite Software." },
    { year: "Nov 2019 - Jul 2021", title: "Technical Consultant", place: "Rite Software." },
    { year: "Aug 2019 - Oct 2019", title: "Intern", place: "Inlight Data Analytics Pvt. Ltd." },
  ];

  const education = [
    { year: "2015 - 2019", title: "B.Tech Computer Science", place: "Avanthi Institute of Engg. & Tech" },
  ];

  const scrollContainerRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(0);
  const [lineLeft, setLineLeft] = useState(0);
  const [lineTop, setLineTop] = useState(0);

  const calculateLinePosition = () => {
    if (!scrollContainerRef.current) return;

    const dots = scrollContainerRef.current.querySelectorAll('.roadmap-dot-horizontal');
    if (dots.length < 2) return;

    const containerRect = scrollContainerRef.current.getBoundingClientRect();
    const firstDot = dots[0].getBoundingClientRect();
    const lastDot = dots[dots.length - 1].getBoundingClientRect();

    // Calculate positions relative to the container including scroll
    const containerScrollLeft = scrollContainerRef.current.scrollLeft;

    // Left position: center of first dot relative to container
    // This needs to handle the scroll offset correctly
    const relativeLeft = firstDot.left - containerRect.left + containerScrollLeft + (firstDot.width / 2);

    // Width: distance between center of first dot and center of last dot
    // Calculate total distance including scroll width differences
    const totalWidth = (lastDot.left - firstDot.left) + (lastDot.width / 2) - (firstDot.width / 2);
    // Since both rects are from getBoundingClientRect, their difference already accounts for viewport position
    // We just need to ensure we add the scroll distance if we are calculating absolute width

    // Actually, simpler logic:
    // We want the line to start at First Dot Center and end at Last Dot Center.
    // Width = (LastDot Left + LastDot Width/2) - (FirstDot Left + FirstDot Width/2)
    // Rects are viewport relative, so (LastDot X - FirstDot X) gives the visual distance.
    // BUT inside a scroll container, the content is wider.
    // We need element offset positions.
    const firstDotOffsetLeft = dots[0].offsetLeft + (dots[0].offsetWidth / 2);
    const lastDotOffsetLeft = dots[dots.length - 1].offsetLeft + (dots[dots.length - 1].offsetWidth / 2);

    // Check if we need to account for parent offset
    const parentOffset = dots[0].offsetParent.offsetLeft; // Milestone div offset

    // Let's use the milestones themselves as they are the direct children of the flex container
    const milestones = scrollContainerRef.current.querySelectorAll('.roadmap-milestone-horizontal');
    const firstMilestone = milestones[0];
    const lastMilestone = milestones[milestones.length - 1];

    // Center of dot within milestone
    // Dot is centered in milestone (flex column, center)
    const startX = firstMilestone.offsetLeft + (firstMilestone.offsetWidth / 2);
    const endX = lastMilestone.offsetLeft + (lastMilestone.offsetWidth / 2);

    const width = endX - startX;

    // Top position: Center of the dot vertically
    // Dot top relative to milestone + milestone top relative to container
    // Dots are consistently placed, so we can check one
    const dotTop = dots[0].offsetTop + (dots[0].offsetHeight / 2);
    const milestoneTop = firstMilestone.offsetTop;

    setLineLeft(startX);
    setLineWidth(width);
    setLineTop(milestoneTop + dotTop);
  };

  useEffect(() => {
    // Initial calculation
    calculateLinePosition(); // Slight delay to ensure layout

    const handleResize = () => {
      calculateLinePosition();
    };

    window.addEventListener('resize', handleResize);
    // Also recalculate on load and after short delays to handle font loading etc
    setTimeout(calculateLinePosition, 100);
    setTimeout(calculateLinePosition, 500);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="roadmap-layout-horizontal">
      <h2 className="roadmap-title">
        <WorkHistoryTwoToneIcon fontSize="2.5rem" className="roadmap-icon" /> Career Roadmap
      </h2>
      <div className="roadmap-horizontal" ref={scrollContainerRef}>
        {/* Dynamic Line connecting starts */}
        <div
          className="roadmap-line-horizontal"
          style={{
            width: `${lineWidth}px`,
            left: `${lineLeft}px`,
            top: `${lineTop}px`
          }}
        />

        {/* Roadmap milestones for experience */}
        {experience.map((item, index) => (
          <div className="roadmap-milestone-horizontal" key={index}>
            <span className="roadmap-milestone-date">{item.year}</span>
            <div className="roadmap-dot-horizontal" />
            <div className="roadmap-card-horizontal glass-card">
              <span className="roadmap-role">{item.title}</span>
              <span className="roadmap-place">{item.place}</span>
            </div>
          </div>
        ))}
        {/* Education as a special milestone */}
        {education.map((item, index) => (
          <div className="roadmap-milestone-horizontal roadmap-education-horizontal" key={"edu-" + index}>
            <span className="roadmap-milestone-date">{item.year}</span>
            <div className="roadmap-dot-horizontal roadmap-dot-edu-horizontal">
              <SchoolTwoToneIcon fontSize="medium" />
            </div>
            <div className="roadmap-card-horizontal glass-card">
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
