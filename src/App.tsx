import React from 'react';
import './styles.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Comic from './components/Comic';
import Contact from './components/Contact';

const App: React.FC = () => (
    <div>
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Comic />
        <Contact />
    </div>
);

export default App;
