import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div id='Home'>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;