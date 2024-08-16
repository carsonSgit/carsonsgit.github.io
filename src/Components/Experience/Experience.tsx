import React from 'react';
import ExperienceTimeline from './ExperienceTimeline';
import EducationTimeline from './EducationTimeline';
import './Experience.scss';

const Experience = () => (
  <div className="experience-page">
    <h1>My Experience</h1>
    <EducationTimeline />
    <ExperienceTimeline />
  </div>
);

export default Experience;
