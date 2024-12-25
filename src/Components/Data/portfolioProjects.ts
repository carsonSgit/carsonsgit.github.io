import { Project } from '../Interfaces/projects';

export const projects: Project[] = [
  {
    image: 'cropcare.webp',
    title: 'CropCare',
    languages: [
      { name: 'Python', backgroundColour: '#306998', textColour: '#FFFFFF' },
      { name: '.NET MAUI', backgroundColour: '#512BD4', textColour: '#FFFFFF' },
      { name: 'Raspberry Pi', backgroundColour: '#A22846', textColour: '#FFFFFF' },
      { name: 'IoT', backgroundColour: '#F0B323', textColour: '#FFFFFF' }
    ],
    description:
      "Developed an IoT container farm with leveraging Python, .NET MAUI, a Raspberry Pi, and Azure IoT hub for mobile monitoring and control. Our project was recognized as the top Capstone project in the history of my school's Computer Science program.",
    github: 'https://github.com/carsonSgit/CropCare',
    website: 'https://carsonsgit.github.io/cropcare-3d/',
  },
  {
    image: 'linky.webp',
    title: 'Linky',
    languages: [
      { name: 'Mantine', backgroundColour: '#4A5D23', textColour: '#FFFFFF' },
      { name: 'TypeScript', backgroundColour: '#3178C6', textColour: '#FFFFFF' },
      { name: 'RAG AI', backgroundColour: '#FF6161', textColour: '#FFFFFF' },
      { name: 'Vector DB', backgroundColour: '#4CBBF1', textColour: '#FFFFFF' }
    ],
    description:
      'Linky is a hackathon winning project made for <a href="https://www.marihacks.com/" target="_blank" rel="noopener noreferrer">MariHacks 2024</a> in under 24hrs. It is a web app that uses a RAG AI & a Vector DB to turn your links into your own chatbot letting you interact with your URLs!',
    github: 'https://github.com/carsonSgit/Linky',
    website: 'https://www.linky.im/',
  },
  {
    image: 'trademind.webp',
    title: 'TradeMind',
    languages: [
      { name: 'React', backgroundColour: '#61DAFB', textColour: '#000000' },
      { name: 'Python', backgroundColour: '#306998', textColour: '#FFFFFF' },
      { name: 'Machine Learning', backgroundColour: '#F7B731', textColour: '#FFFFFF' }
    ],
    description:
      'TradeMind is a project developed for <a href="https://launchlab.ai/" target="_blank" rel="noopener noreferrer">AI Launch Lab</a>\'s <a href="https://launchlab.ai/rd-program/" target="_blank" rel="noopener noreferrer">R&D Program</a>. It is a web app that uses machine learning to predict stock prices and provide insights to users.',
    github: 'https://github.com/carsonSgit/TradeMind',
    website: 'https://trademind.pages.dev/',
  },
  {
    image: 'pharmahacks2024.webp',
    title: 'Mice Neural Decoding',
    languages: [
      { name: 'Python', backgroundColour: '#306998', textColour: '#FFFFFF' },
      { name: 'Jupyter Notebook', backgroundColour: '#F2C800', textColour: '#000000' },
      { name: 'Machine Learning', backgroundColour: '#F7B731', textColour: '#FFFFFF' }
    ],
    description:
      'Mice Neural Decoding was a challenge at the <a href="https://pharmahacks.com/#welcome" target="_blank" rel="noopener noreferrer">PharmaHacks 2024</a> event. My group and I decoded mouse navigation decisions by analyzing L2/3 neuron activity in the retrosplenial cortex, following the findings of Tseng et al. (2022) in their Neuron Paper. Please read the README.md on the GitHub repo!',
    github: 'https://github.com/carsonSgit/Mice-Neural-Decoding-ML',
    website:
      'https://github.com/carsonSgit/Mice-Neural-Decoding-ML/blob/main/PharmaHacks%202024%20Neural%20Decoding%20Single%20File.ipynb',
  },
];
