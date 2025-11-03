import React from 'react';

interface TimelineSectionProps {
  title: string;
  children: React.ReactNode;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ title, children }) => {
  return (
    <div className="timeline-section">
      <h1 className="ProjectsTitle">
        {title}
        <span className="ProjectsTitleAnimated"></span>
      </h1>
      {children}
    </div>
  );
};

export default TimelineSection;

