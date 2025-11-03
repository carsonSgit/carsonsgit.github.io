import React from 'react';
import { Statistics } from '../../types/types';

interface TimelineStatsProps {
  statsKey: string;
  statistics: Statistics;
}

const TimelineStats: React.FC<TimelineStatsProps> = ({ statsKey, statistics }) => {
  const stats = statistics[statsKey];
  if (!stats) return null;

  return (
    <div className="timeline-stats">
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="stat-item">
          <strong>{value}</strong>{' '}
          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
        </div>
      ))}
    </div>
  );
};

export default TimelineStats;

