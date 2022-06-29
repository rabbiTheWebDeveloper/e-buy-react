import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';

const Brand2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
             {/* Banner2 Part Start */}
      <section id="banner-category">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single category">
                <h3 className="side-title text-center">Category</h3>
                <ul className="list-unstyled">
                  <li><a href title>fashion &amp; Lifestyle <span className="pull-right">158</span></a></li>
                  <li><a href title>electronics <span className="pull-right">129</span></a></li>
                  <li><a href title>sports &amp; games <span className="pull-right">155</span></a></li>
                  <li><a href title>bag &amp; shoes <span className="pull-right">169</span></a></li>
                  <li><a href title>health &amp; beauty <span className="pull-right">108</span></a></li>
                  <li><a href title>accesorries <span className="pull-right">209</span></a></li>
                  <li><a href title>digital software <span className="pull-right">209</span></a></li>
                  <li><a href title>camera<span className="pull-right">155</span></a></li>
                  <li><a href title>watches<span className="pull-right">168</span></a></li>
                  <li><a href title>mobile phones<span className="pull-right">170</span></a></li>
                  <li><a href title>sunglass<span className="pull-right">180</span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 ">
              <div className="banner-2">
                <i className="fa fa-chevron-left prv-arrow" />
                <i className="fa fa-chevron-right nxt-arrow" />
                <Slider {...settings} className="banner2-main">
                  <div className="banner2-item" style={{background: 'url(images/banner5.jpg) center no-repeat'}}>
                    <div className="banner2-text text-center">
                      <h3>Best Wooden</h3>
                      <h2>Chair &amp; Waredrobe</h2>
                      <a href="#">View More</a> <a href="#" className="pur">Purchase</a>
                    </div>
                  </div>
                  <div className="banner2-item" style={{background: 'url(images/banner6.jpg) center no-repeat'}}>
                    <div className="banner2-text text-center">
                      <h3>Best Wooden</h3>
                      <h2>Chair &amp; Waredrobe</h2>
                      <a href="#">View More</a> <a href="#" className="pur">Purchase</a>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner2 Part End */}
        </div>
    );
};

export default Brand2;