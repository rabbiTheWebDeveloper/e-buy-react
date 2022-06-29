import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import img from '../assets/images/banner1.jpg'

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
        <div>
      <section id="banner">
        {/* <i className="fa fa-chevron-left prv-arrow" />
        <i className="fa fa-chevron-right nxt-arrow" /> */}
        <Slider {...settings} className="banner-slider">
          <div className="banner-img" style={{background: 'url("https://i.ibb.co/6bv1LcC/banner1.jpg") no-repeat center', backgroundSize: 'cover'}}>
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
          <div className="banner-img" style={{background: 'url(../../../assets/images/banner2.jpg) no-repeat center', backgroundSize: 'cover'}}>
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
          <div className="banner-img" style={{background: 'url(../../../assets/images/banner3.jpg) no-repeat center', backgroundSize: 'cover'}}>
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
          <div className="banner-img" style={{background: 'url(../../../assets/images/banner4.jpg) no-repeat center', backgroundSize: 'cover'}}>
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