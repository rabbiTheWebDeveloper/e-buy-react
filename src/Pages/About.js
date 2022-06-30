import React from 'react';
import AboutBanner from '../component/AboutComponent/AboutBanner';
import AboutDetails from '../component/AboutComponent/AboutDetails';
import Counter from '../component/AboutComponent/Counter';
import '../assets/css/About.css'

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <AboutDetails/>
            <Counter/>
        </div>
    );
};

export default About;