import React from 'react';
import { EducationItem, ExperienceItem } from '../../types/types';
import TimelineStats from './TimelineStats';
import { statistics } from '../../data/statistics';

interface TimelineItemProps {
  item: EducationItem | ExperienceItem;
  index: number;
  isEducation: boolean;
  isHovered: boolean;
  hoveredIndex: number | null;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  itemRef: (el: HTMLDivElement | null) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  isEducation,
  isHovered,
  hoveredIndex,
  onMouseEnter,
  onMouseLeave,
  itemRef,
}) => {
  const isFaded = isHovered && hoveredIndex !== index;

  if (isEducation) {
    const educationItem = item as EducationItem;
    return (
      <div
        key={index}
        ref={itemRef}
        className={`timeline-item ${isFaded ? '' : ''}`}
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={onMouseLeave}
      >
        <div className="timeline-link">
          <div className="timeline-content">
            <h3>
              <a
                href={educationItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-title-link"
                style={{
                  '--hover-institution-color': educationItem.hoverColors?.institution || '#00715f'
                } as React.CSSProperties}
              >
                <span className="timeline-role">{educationItem.title}</span>
                <br />
                <span className="timeline-institution">{educationItem.institution}</span>
              </a>
            </h3>
            <div className="timeline-date">{educationItem.date}</div>
            <ul className="timeline-description timeline-education-description">
              {educationItem.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
            <TimelineStats statsKey={educationItem.statsKey} statistics={statistics} />
          </div>
        </div>
      </div>
    );
  } else {
    const experienceItem = item as ExperienceItem;
    return (
      <div
        key={index}
        ref={itemRef}
        className={`timeline-item ${isFaded ? 'faded' : ''}`}
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={onMouseLeave}
      >
        <div className="timeline-link">
          <div className="timeline-content">
            <h3>
              <a
                href={experienceItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-title-link"
                style={{
                  '--hover-company-color': experienceItem.hoverColors?.company || '#00715f'
                } as React.CSSProperties}
              >
                <span className="timeline-role">{experienceItem.title}</span>
                <br />
                <span className="timeline-company">{experienceItem.company}</span>
              </a>
            </h3>
            <div className="timeline-date">{experienceItem.date}</div>
            <ul className="timeline-description">
              {experienceItem.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
            <TimelineStats statsKey={experienceItem.statsKey} statistics={statistics} />
          </div>
        </div>
      </div>
    );
  }
};

export default TimelineItem;

