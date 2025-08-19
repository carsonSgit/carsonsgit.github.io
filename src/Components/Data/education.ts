import { EducationItem } from '../Interfaces/types';

export const education: EducationItem[] = [
  {
    date: 'September 2024 - Ongoing',
    title: 'Bachelors of Engineering Technology and Applied Sciences',
    institution: 'Memorial University of Newfoundland',
    description:
      'Currently getting prerequisite credits before transferring into the Bachelors of Computer Science while exploring the world of economics and finance in hopes of expanding my capabilities.',
    statsKey: 'Economics',
    link: 'https://www.concordia.ca/',
    hoverColors: {
      institution: '#8B0000', // Dark red placeholder
    },
  },
  {
    date: 'August 2021 - May 2024',
    title: 'Computer Science DEC',
    institution: 'John Abbott College',
    description:
      'Graduated with a focus on software/app/mobile development, including programming and IoT.',
    statsKey: 'Academics',
    link: 'https://www.johnabbott.qc.ca/',
    hoverColors: {
      institution: '#1E3A8A', // Blue placeholder
    },
  },
];
