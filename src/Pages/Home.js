import React from 'react';
import Blog from '../component/Blog';
import Featured from '../component/Featured';
import Footer from '../component/Footer';
import Header from '../component/Header';
import LatestProduct from '../component/LatestProduct';
import Nav from '../component/Nav';
import Newest from '../component/Newest';
import Service from '../component/Service';
import Testimonial from '../component/Testimonial';
import Upcomming from '../component/Upcomming';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Newest></Newest>
            <Featured></Featured>
            <Upcomming></Upcomming>
            <LatestProduct></LatestProduct>
            <Testimonial></Testimonial>
            <Blog></Blog>
            
        </div>
    );
};

export default Home;