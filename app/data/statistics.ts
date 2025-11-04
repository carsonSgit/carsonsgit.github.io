import { Statistics, StatBadge } from '../types/types';

const statColors = {
  coral: { backgroundColour: 'rgba(255, 179, 167, 0.5)' },
  lavender: { backgroundColour: 'rgba(200, 191, 231, 0.5)' },
  rose: { backgroundColour: 'rgba(255, 182, 193, 0.5)' },
  violet: { backgroundColour: 'rgba(186, 164, 217, 0.5)' },
  gold: { backgroundColour: 'rgba(255, 223, 150, 0.5)' },
  mint: { backgroundColour: 'rgba(167, 230, 195, 0.5)' },
  sky: { backgroundColour: 'rgba(173, 216, 255, 0.5)' },
  peach: { backgroundColour: 'rgba(255, 218, 185, 0.5)' },
};

export const getStatBorders = (colour: string) => {
  const rgbaMatch = colour.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  
  if (rgbaMatch) {
    const [, r, g, b] = rgbaMatch;
    return {
      borderColor: `rgba(${r}, ${g}, ${b}, 0.7)`,
      color: `#000000`,
    };
  }
  
  return {
    borderColor: colour,
    color: colour,
  };
};

export const statistics: Statistics = {
  'Software QA Specialist Intern': {
    stats: [
      { label: 'efficiency boost', value: '99%', ...statColors.coral }
    ]
  },
  'Director of Logistics': {
    stats: [
      { label: 'attendees', value: '350+', ...statColors.lavender },
      { label: 'universities', value: '15+', ...statColors.sky }
    ]
  },
  'Software Developer Intern': {
    stats: [
      { label: 'accuracy boost', value: '90%', ...statColors.rose }
    ]
  },
  'IT Intern': {
    stats: [
      { label: 'cases resolved', value: '100+', ...statColors.violet },
      { label: 'vulnerabilities fixed', value: '4500+', ...statColors.peach }
    ]
  },
  Director: {
    stats: [
      { label: 'attendees', value: '130+', ...statColors.gold }
    ]
  },
  'R&D Fellowship': {
    stats: [
      { label: 'program ranking', value: 'Top Project', ...statColors.mint }
    ]
  },
  Academics: {
    stats: [
      { label: 'final semester GPA', value: '4.0', ...statColors.sky },
      { label: 'academic award', value: 'Outstanding Improvement', ...statColors.lavender },
      { label: 'scholarship', value: '$1500/semester', ...statColors.gold },
      { label: 'capstone project', value: 'Best in History', ...statColors.coral }
    ]
  },
  Economics: null,
};