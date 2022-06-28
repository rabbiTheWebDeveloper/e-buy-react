import React from 'react';
import AboutBanner from '../component/AboutComponent/AboutBanner';
import AboutDetails from '../component/AboutComponent/AboutDetails';
import Counter from '../component/AboutComponent/Counter';

const About = () => {
    return (
        <div>
            <h2>About comming soon</h2>
            <AboutBanner></AboutBanner>
            <AboutDetails/>
            <Counter/>
        </div>
    );
};

export default About;