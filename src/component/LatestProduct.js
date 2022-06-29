import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import img1 from '../assets/images/latest1.jpg';
import img2 from '../assets/images/latest2.jpg';
import img3 from '../assets/images/latest3.jpg';
import img4 from '../assets/images/latest4.jpg';

const LatestProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
    return (
        <div>
            <section id="latest">
        {/* <i className="fa fa-chevron-left prv-arrow2" />
        <i className="fa fa-chevron-right nxt-arrow2" /> */}
        <div className="container">
          <div className="row">
            <div className="latest-main">
              <div className="heading2 text-center">
                <h2>latest Products</h2>
              </div>
              <div className="latest-item">
                <Slider {...settings}>
                <div className="gallery_product col-md-3">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img1} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>Samsung-GTS</p><span>$ 99.00</span>
                    <div className="clearfix" />
                  </div>
                  <div className="ratings">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half" />
                  </div>
                </div>
                <div className="gallery_product col-md-3">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img2} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>Samsung-Notebook</p><span>$ 99.00</span>
                    <div className="clearfix" />
                  </div>
                  <div className="ratings">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half" />
                  </div>
                </div>
                <div className="gallery_product col-md-3">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img3} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>iPhone-6sPlus</p><span>$ 99.00</span>
                    <div className="clearfix" />
                  </div>
                  <div className="ratings">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half" />
                  </div>
                </div>
                <div className="gallery_product col-md-3">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img4} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>HTC-Bluray 35</p><span>$ 99.00</span>
                    <div className="clearfix" />
                  </div>
                  <div className="ratings">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half" />
                  </div>
                </div>
                <div className="gallery_product col-md-3">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img2} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>Samsung-Notebook</p><span>$ 99.00</span>
                    <div className="clearfix" />
                  </div>
                  <div className="ratings">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half" />
                  </div>
                </div>
                <div className="gallery_product col-md-3">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img3} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>iPhone-6sPlus</p><span>$ 99.00</span>
                    <div className="clearfix" />
                  </div>
                  <div className="ratings">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half" />
                  </div>
                </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section> 
        </div>
    );
};

export default LatestProduct;