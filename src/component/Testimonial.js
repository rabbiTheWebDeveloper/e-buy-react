import React from 'react';
import  '../assets/css/Testimonial.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import img1 from '../assets/images/testimonial1.png';
import img2 from '../assets/images/testimonial2.png';
import img3 from '../assets/images/testimonial1.png';
import img4 from '../assets/images/testimonial2.png';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4
  };
    return (
        <div>
            <section id="testimonial">
        <div className="heading3 text-center">
          <h2>testimonial</h2>
        </div>
        <div className="testimonial-bg">
          {/* <i className="fa fa-chevron-left prv-arrow3" />
          <i className="fa fa-chevron-right nxt-arrow3" /> */}
          <div className="container">
            <div className="row">
              <Slider {...settings} className="testimonial-main">
                <div className="col-md-6">
                  <div className="testimonial-item">
                    <div className="col-md-3 test-img">
                      <img src={img1} alt="testimonial-img" className="img-responsive" />
                    </div>
                    <div className="col-md-9 test-details">
                      <h2>Shahin Alom</h2>
                      <h3>Sketch Artist</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and stry. Lorem sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a ive centuries, but also the leap into electronic.</p>
                      <h4>Shahin Alom</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-item">
                    <div className="col-md-3 test-img">
                      <img src={img2} alt="testimonial-img" className="img-responsive" />
                    </div>
                    <div className="col-md-9 test-details">
                      <h2>Mahadi Tahsan</h2>
                      <h3>Software Developer</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and stry. Lorem sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a ive centuries, but also the leap into electronic.</p>
                      <h4>mahadi tahsan</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-item">
                    <div className="col-md-3 test-img">
                      <img src={img3} alt="testimonial-img" className="img-responsive" />
                    </div>
                    <div className="col-md-9 test-details">
                      <h2>Shohan Hossain</h2>
                      <h3>Software Developer</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and stry. Lorem sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a ive centuries, but also the leap into electronic.</p>
                      <h4>Shohan Hossain</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-item">
                    <div className="col-md-3 test-img">
                      <img src={img4} alt="testimonial-img" className="img-responsive" />
                    </div>
                    <div className="col-md-9 test-details">
                      <h2>Sujon Saha</h2>
                      <h3>Graphic Designer</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and stry. Lorem sum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a ive centuries, but also the leap into electronic.</p>
                      <h4>Aminul Islam</h4>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Testimonial;