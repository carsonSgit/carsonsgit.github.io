import { Project } from '../Interfaces/projects';

const languageColors = {
  Python: { backgroundColour: 'rgb(27, 84, 33)', textColour: '#A3D8D0' },
  '.NET MAUI': { backgroundColour: 'rgb(87, 27, 127)', textColour: '#D0A7FF' },
  RaspberryPi: { backgroundColour: 'rgb(163, 26, 138)', textColour: '#FFD8D8' },
  IoT: { backgroundColour: 'rgb(52, 52, 52)', textColour: '#F2FF8C' },
  Mantine: { backgroundColour: 'rgb(12, 149, 173)', textColour: '#B8F5A9' },
  TypeScript: { backgroundColour: '#3160d6', textColour: '#B0E9F6' }, 
  RAGAI: { backgroundColour: 'rgb(52, 52, 52)', textColour: '#FFB1B1' },
  VectorDB: { backgroundColour: 'rgb(52, 52, 52)', textColour: '#A7D4F2' },
  React: { backgroundColour: 'rgb(23, 52, 125)', textColour: '#B0E4E1' }, 
  MachineLearning: { backgroundColour: 'rgb(52, 52, 52)', textColour: '#F5C157' },
  JupyterNotebook: { backgroundColour: 'rgb(202, 101, 0)', textColour: '#F1D456' },
};



export const projects: Project[] = [
  {
    image: 'cropcare.webp',
    title: 'CropCare',
    languages: [
      { name: 'Python', ...languageColors.Python },
      { name: '.NET MAUI', ...languageColors['.NET MAUI'] },
      { name: 'Raspberry Pi', ...languageColors.RaspberryPi },
      { name: 'IoT', ...languageColors.IoT },
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
      { name: 'Mantine', ...languageColors.Mantine },
      { name: 'TypeScript', ...languageColors.TypeScript },
      { name: 'RAG AI', ...languageColors.RAGAI },
      { name: 'Vector DB', ...languageColors.VectorDB },
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
      { name: 'React', ...languageColors.React },
      { name: 'Python', ...languageColors.Python },
      { name: 'Machine Learning', ...languageColors.MachineLearning },
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
      { name: 'Python', ...languageColors.Python },
      { name: 'Jupyter Notebook', ...languageColors.JupyterNotebook },
      { name: 'Machine Learning', ...languageColors.MachineLearning },
    ],
    description:
      'Mice Neural Decoding was a challenge at the <a href="https://pharmahacks.com/#welcome" target="_blank" rel="noopener noreferrer">PharmaHacks 2024</a> event. My group and I decoded mouse navigation decisions by analyzing L2/3 neuron activity in the retrosplenial cortex, following the findings of Tseng et al. (2022) in their Neuron Paper. Please read the README.md on the GitHub repo!',
    github: 'https://github.com/carsonSgit/Mice-Neural-Decoding-ML',
    website:
      'https://github.com/carsonSgit/Mice-Neural-Decoding-ML/blob/main/PharmaHacks%202024%20Neural%20Decoding%20Single%20File.ipynb',
  },
];
