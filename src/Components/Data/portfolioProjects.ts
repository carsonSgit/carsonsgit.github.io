import { Project } from '../Interfaces/projects';

const languageColors = {
  Python: { backgroundColour: 'rgb(45, 55, 94)'},
  'C#': { backgroundColour: 'rgb(27, 84, 33)'},
  '.NET MAUI': { backgroundColour: 'rgb(87, 27, 127)'},
  RaspberryPi: { backgroundColour: 'rgb(163, 26, 138)'},
  IoT: { backgroundColour: 'rgb(52, 52, 52)'},
  Mantine: { backgroundColour: 'rgb(12, 149, 173)'},
  TypeScript: { backgroundColour: '#3160d6'}, 
  RAGAI: { backgroundColour: 'rgb(52, 52, 52)'},
  VectorDB: { backgroundColour: 'rgb(52, 52, 52)'},
  React: { backgroundColour: 'rgb(23, 52, 125)'}, 
  MachineLearning: { backgroundColour: 'rgb(52, 52, 52)'},
  JupyterNotebook: { backgroundColour: 'rgb(202, 101, 0)'},
  'Three.js': { backgroundColour: 'rgb(167, 3, 3)'},
  Tailwind: { backgroundColour: 'rgb(43, 200, 174)'},
  Zustand: { backgroundColour: 'rgb(52, 52, 52)'},
};



export const projects: Project[] = [
  {
    image: 'cropcare.webp',
    title: 'CropCare',
    languages: [
      { name: 'Python', ...languageColors.Python },
      { name: 'C#', ...languageColors['C#'] },
      { name: '.NET MAUI', ...languageColors['.NET MAUI'] },
      { name: 'Raspberry Pi', ...languageColors.RaspberryPi },
      { name: 'IoT', ...languageColors.IoT },
    ],
    description:
      "Developed an IoT container farm leveraging Python, .NET MAUI, a Raspberry Pi, and Azure's IoT hub for mobile monitoring and control. Our project was recognized as the best Capstone project in the history of the school's CS program.",
    github: 'https://github.com/carsonSgit/CropCare',
    website: 'https://carsonsgit.github.io/cropcare-3d/',
  },
  {
    image: 'linky.webp',
    title: 'Linky',
    languages: [
      { name: 'Mantine', ...languageColors.Mantine },
      { name: 'TypeScript', ...languageColors.TypeScript },
      { name: 'RAG AI', ...languageColors.RAGAI },
      { name: 'Vector DB', ...languageColors.VectorDB },
    ],
    description:
      'Linky is a hackathon winning project made for <a href="https://www.marihacks.com/" target="_blank" rel="noopener noreferrer">MariHacks 2024</a> in under 24hrs. It\'s a web app that using a RAG AI & Vector DB which converts page content from inputed links into the knowledge base of your own AI bot, letting you interact with URLs, making your learning experience more interactive and fun!',
    github: 'https://github.com/carsonSgit/Linky',
    website: 'https://www.linky.im/',
  },
  
  {
    image: 'empty.webp',
    title: 'Pathfinder',
    languages: [
      { name: 'Three.js', ...languageColors['Three.js'] },
      { name: 'React', ...languageColors.React },
      { name: 'TypeScript', ...languageColors.TypeScript },
      { name: 'Tailwind', ...languageColors.Tailwind },
      { name: 'GenAI', ...languageColors.RAGAI },
      { name: 'Zustand', ...languageColors.Zustand },

    ],
    description:
      'Made in 24hrs at <a href="https://www.conuhacks.io/" target="_blank" rel="noopener noreferrer">ConUHacks IX</a>, Pathfinder is a gamified AI career coach. Creating a world through Three.js, we used GenAI to generate personalized questions based off of your answers to help you find your career path.',
    github: 'https://github.com/xsachax/pathfinder_conuhacks-2025',
    website: 'https://www.pathfinderhelpsyoudecidewhereyouwantto.work/?',  
  },
  {
    image: 'pharmahacks2024.webp',
    title: 'Mice Neural Decoding',
    languages: [
      { name: 'Python', ...languageColors.Python },
      { name: 'Jupyter Notebook', ...languageColors.JupyterNotebook },
      { name: 'Machine Learning', ...languageColors.MachineLearning },
    ],
    description:
      'Done at <a href="https://pharmahacks.com/#welcome" target="_blank" rel="noopener noreferrer">PharmaHacks 2024</a>, we decoded mouse navigation decisions by analyzing L2/3 neuron activity in the retrosplenial cortex, following the findings of Tseng et al. (2022) in their Neuron Paper.',
    github: 'https://github.com/carsonSgit/Mice-Neural-Decoding-ML',
    website:
      'https://github.com/carsonSgit/Mice-Neural-Decoding-ML/blob/main/PharmaHacks%202024%20Neural%20Decoding%20Single%20File.ipynb',
  },
  
  {
    image: 'trademind.webp',
    title: 'TradeMind',
    languages: [
      { name: 'React', ...languageColors.React },
      { name: 'Python', ...languageColors.Python },
      { name: 'Machine Learning', ...languageColors.MachineLearning },
    ],
    description:
      'TradeMind is a project developed for <a href="https://launchlab.ai/" target="_blank" rel="noopener noreferrer">AI Launch Lab</a>\'s <a href="https://launchlab.ai/rd-program/" target="_blank" rel="noopener noreferrer">R&D Program</a>, recognized as the top project of ours & past cohorts. TradeMind is a web app that uses machine learning to predict stock prices based on various factors, and provide insights to users.',
    github: 'https://github.com/carsonSgit/TradeMind',
    website: 'https://trademind.pages.dev/',
  },
];
