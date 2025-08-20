import React, { Suspense, lazy } from 'react';
import './Content.scss';

const LazyProjects = lazy(() => import('../Projects/Projects'));
const LazyExperience = lazy(() => import('../Experience/Experience'));
const LazyAbout = lazy(() => import('../About/About'));

const Content: React.FC = () => {
  return (
    <div className="content-container">
      <div id="about" className="section-container">
        <Suspense>
          <LazyAbout />
        </Suspense>
      </div>
      <div id="projects" className="section-container">
        <Suspense>
          <LazyProjects />
        </Suspense>
      </div>
      <div id="stats" className="section-container">
        <Suspense>
          <LazyExperience />
        </Suspense>
      </div>
    </div>
  );
};

export default Content;
