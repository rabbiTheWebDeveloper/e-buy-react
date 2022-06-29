import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import img1 from '../assets/images/brand1.png';
import img2 from '../assets/images/brand2.png';
import img3 from '../assets/images/brand3.png';
import img4 from '../assets/images/brand4.png';
import img5 from '../assets/images/brand5.png';


const Brand = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
    return (
        <div>
    <section id="brand">
        <i className="fa fa-chevron-left prv-arrow4" />
        <i className="fa fa-chevron-right nxt-arrow4" /> 
        
        <div className="container">
          <div className="row">
            <Slider {...settings} className="brand-slider">
              <div className="col-md-2">
                <a href="#">
                  <div className="brand-item">
                    <img src={img1} alt="brand" className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#">
                  <div className="brand-item">
                    <img src={img2} alt="brand" className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#">
                  <div className="brand-item">
                    <img src={img3} alt="brand" className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#">
                  <div className="brand-item">
                    <img src={img3} alt="brand" className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#">
                  <div className="brand-item">
                    <img src={img4} alt="brand" className="img-responsive" />
                  </div>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#">
                  <div className="brand-item">
                    <img src={img5} alt="brand" className="img-responsive" />
                  </div>
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Brand;