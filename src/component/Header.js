import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import '../assets/css/Header.css';

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4
  };
    return (
        <div>
      <section id="banner">
        {/* <i className="fa fa-chevron-left prv-arrow" />
        <i className="fa fa-chevron-right nxt-arrow" /> */}
        <Slider {...settings} className="banner-slider">
          <div id='banner-img1' className="banner-img" >
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="banner-content">
                    <h1>2017</h1>
                    <h2>Trendy Design</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting stry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <a href="#">View More</a>
                    <a className="pur" href="#">Purchase</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='banner-img2' className="banner-img">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="banner-content">
                    <h1>2017</h1>
                    <h2>Trendy Design</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting stry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <a href="#">View More</a>
                    <Link className="pur" to="#">Purchase</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='banner-img3' className="banner-img">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="banner-content">
                    <h1>2017</h1>
                    <h2>Trendy Design</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting stry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <a href="#">View More</a>
                    <a className="pur" href="#">Purchase</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='banner-img4' className="banner-img">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="banner-content">
                    <h1>2017</h1>
                    <h2>Trendy Design</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting stry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <a href="#">View More</a>
                    <a className="pur" href="#">Purchase</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section> 
        </div>
    );
};

export default Header;