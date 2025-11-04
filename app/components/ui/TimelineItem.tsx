import React from 'react';
import { EducationItem, ExperienceItem } from '../../types/types';
import TimelineStats from './TimelineStats';
import { statistics } from '../../data/statistics';
import { Card } from './card';
import { Badge } from './badge';
interface TimelineItemProps {
  item: EducationItem | ExperienceItem;
  index: number;
  isEducation: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  isEducation,
}) => {

  if (isEducation) {
    const educationItem = item as EducationItem;
    return (
      <Card variant="default"
        key={index}
        className="my-5 max-w-md min-w-full"
      >
            <h3 className="text-lg font-bold text-gray-800">
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
                <span className="timeline-company">{educationItem.institution}</span>
              </a>
            </h3>
            <div className="text-sm text-gray-500">{educationItem.date}</div>
            <ul className="text-sm text-gray-800">
              {educationItem.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
            <TimelineStats statsKey={educationItem.statsKey} statistics={statistics} />

      </Card>
    );
  } else {
    const experienceItem = item as ExperienceItem;
    return (
      <Card variant="default"
        key={index}
        className="my-5 max-w-md min-w-full"
      >
            <h3 className="text-lg font-bold text-gray-800">
              <a
                href={experienceItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-title-link"
                style={{
                  '--hover-company-color': experienceItem.hoverColors?.company || '#00715f'
                } as React.CSSProperties}
              >
                <span className="text-lg font-bold text-gray-800">{experienceItem.title}</span>
                <br />
                <span className="timeline-company">{experienceItem.company}</span>
              </a>
            </h3>
            <div className="text-sm text-gray-500">{experienceItem.date}</div>
            <ul className="text-sm text-gray-800">
              {experienceItem.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
            <TimelineStats statsKey={experienceItem.statsKey} statistics={statistics} />
      </Card>
    );
  }
};

export default TimelineItem;

