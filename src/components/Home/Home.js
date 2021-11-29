import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div id='Home'>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
        </div>
    );
};

export default Home;