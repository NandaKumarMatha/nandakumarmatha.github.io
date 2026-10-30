import React, { useEffect, useRef, useState, useCallback } from 'react';
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';

import "./resume.css";

const Resume = () => {
  const experience = [
    { year: "Sep 2026 - Present", title: "Sr. Associate", place: "Synechron" },
    { year: "Feb 2025 - Sep 2026", title: "Sr. Software Engineer", place: "Fission Labs" },
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

  const calculateLinePosition = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const dots = container.querySelectorAll('.roadmap-dot-horizontal');
    if (dots.length < 2) return;

    const containerRect = container.getBoundingClientRect();
    const firstDotRect = dots[0].getBoundingClientRect();
    const lastDotRect = dots[dots.length - 1].getBoundingClientRect();

    const scrollLeft = container.scrollLeft;
    const scrollTop = container.scrollTop;

    // Center coordinates of dots relative to container scroll space
    const startX = firstDotRect.left - containerRect.left + scrollLeft + (firstDotRect.width / 2);
    const endX = lastDotRect.left - containerRect.left + scrollLeft + (lastDotRect.width / 2);
    const centerY = firstDotRect.top - containerRect.top + scrollTop + (firstDotRect.height / 2);

    setLineLeft(startX);
    setLineWidth(Math.max(0, endX - startX));
    setLineTop(centerY);
  }, []);

  useEffect(() => {
    calculateLinePosition();

    const container = scrollContainerRef.current;
    const handleResize = () => calculateLinePosition();

    window.addEventListener('resize', handleResize);

    let observer;
    if (typeof ResizeObserver !== 'undefined' && container) {
      observer = new ResizeObserver(() => {
        calculateLinePosition();
      });
      observer.observe(container);
    }

    const timer1 = setTimeout(calculateLinePosition, 80);
    const timer2 = setTimeout(calculateLinePosition, 300);
    const timer3 = setTimeout(calculateLinePosition, 600);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (observer) observer.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [calculateLinePosition]);

  return (
    <div className="roadmap-layout-horizontal">
      <h2 className="roadmap-title">
        <WorkHistoryTwoToneIcon fontSize="2.5rem" className="roadmap-icon" /> Career Roadmap
      </h2>
      <div className="roadmap-horizontal" ref={scrollContainerRef}>
        {/* Dynamic Line connecting all milestone dots */}
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
          <div className="roadmap-milestone-horizontal" key={`exp-${index}`}>
            <span className="roadmap-milestone-date">{item.year}</span>
            <div className="roadmap-dot-horizontal" />
            
            {/* Hanging rig: suspension threads + swinging sign board */}
            <div
              className="roadmap-hanging-rig"
              style={{ animationDelay: `${index * 0.45}s` }}
            >
              {/* Dual suspension threads from anchor dot to board */}
              <div className="roadmap-hanging-threads" aria-hidden="true">
                <svg className="roadmap-threads-svg" viewBox="0 0 160 32" preserveAspectRatio="none">
                  {/* Left & Right suspension threads */}
                  <line x1="80" y1="0" x2="28" y2="30" className="roadmap-thread-line" />
                  <line x1="80" y1="0" x2="132" y2="30" className="roadmap-thread-line" />
                  {/* Top anchor bead */}
                  <circle cx="80" cy="2" r="3" className="roadmap-thread-pivot" />
                  {/* Board eyelet rings */}
                  <circle cx="28" cy="30" r="3.5" className="roadmap-thread-ring" />
                  <circle cx="132" cy="30" r="3.5" className="roadmap-thread-ring" />
                </svg>
              </div>

              {/* Hanging Name Board Card */}
              <div className="roadmap-card-horizontal glass-card">
                <div className="roadmap-board-pin-l" />
                <div className="roadmap-board-pin-r" />
                <span className="roadmap-role">{item.title}</span>
                <span className="roadmap-place">{item.place}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Education as a special milestone */}
        {education.map((item, index) => (
          <div className="roadmap-milestone-horizontal roadmap-education-horizontal" key={`edu-${index}`}>
            <span className="roadmap-milestone-date">{item.year}</span>
            <div className="roadmap-dot-horizontal roadmap-dot-edu-horizontal">
              <SchoolTwoToneIcon fontSize="medium" />
            </div>

            {/* Hanging rig for education */}
            <div
              className="roadmap-hanging-rig"
              style={{ animationDelay: `${(experience.length + index) * 0.45}s` }}
            >
              <div className="roadmap-hanging-threads" aria-hidden="true">
                <svg className="roadmap-threads-svg" viewBox="0 0 160 32" preserveAspectRatio="none">
                  <line x1="80" y1="0" x2="28" y2="30" className="roadmap-thread-line" />
                  <line x1="80" y1="0" x2="132" y2="30" className="roadmap-thread-line" />
                  <circle cx="80" cy="2" r="3" className="roadmap-thread-pivot" />
                  <circle cx="28" cy="30" r="3.5" className="roadmap-thread-ring" />
                  <circle cx="132" cy="30" r="3.5" className="roadmap-thread-ring" />
                </svg>
              </div>

              <div className="roadmap-card-horizontal glass-card">
                <div className="roadmap-board-pin-l" />
                <div className="roadmap-board-pin-r" />
                <span className="roadmap-role">{item.title}</span>
                <span className="roadmap-place">{item.place}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
