import React from 'react';
import Blog from '../component/Blog';
import Featured from '../component/Featured';
import Footer from '../component/Footer';
import LatestProduct from '../component/LatestProduct';
import Nav from '../component/Nav';
import Newest from '../component/Newest';
import Service from '../component/Service';
import Upcomming from '../component/Upcomming';

const Home = () => {
    return (
        <div>
            <Service></Service>
            <Newest></Newest>
            <Featured></Featured>
            <Upcomming></Upcomming>
            <LatestProduct></LatestProduct>
            <Blog></Blog>
            
        </div>
    );
};

export default Home;