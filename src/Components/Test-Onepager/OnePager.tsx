import React from 'react';
import Hero from '../Home/Hero/Hero';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import About from '../About/About';

const OnePager: React.FC = () => {
    return (
        <div>
            <Hero />
            <Projects />
            <Experience />
            <About />
        </div>
    );
};

export default OnePager;