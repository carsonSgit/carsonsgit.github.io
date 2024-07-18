import React from 'react';
import Hero from './Components/Home/Hero/Hero';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

const Home = () => <></>;
const About = () => <></>;
const Projects = () => <></>;
const Contact = () => <></>;

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Hero />
    </div>
  );
};

export default App;
