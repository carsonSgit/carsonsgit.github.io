import React, { Suspense, lazy } from 'react';
import Hero from '../Home/Hero/Hero';
import './Content.scss';

const LazyProjects = lazy(() => import('../Projects/Projects'));
const LazyExperience = lazy(() => import('../Experience/Experience'));
const LazyAbout = lazy(() => import('../About/About'));

const Content: React.FC = () => {
  return (
    <div className="content-container">
      <div id="hero">
        <Hero />
      </div>
      <div id="projects" className="section-container">
        <Suspense fallback={<div>Loading projects...</div>}>
          <LazyProjects />
        </Suspense>
      </div>
      <div id="stats" className="section-container">
        <Suspense fallback={<div>Loading experience...</div>}>
          <LazyExperience />
        </Suspense>
      </div>
      <div id="about" className="section-container">
        <Suspense fallback={<div>Loading about...</div>}>
          <LazyAbout />
        </Suspense>
      </div>
    </div>
  );
};

export default Content;
