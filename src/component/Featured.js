import React from 'react';
import img1 from '../assets/images/featured1.jpg';
import img2 from '../assets/images/featured2.jpg';
import img3 from '../assets/images/featured3.jpg';
import img4 from '../assets/images/featured4.jpg';

const Featured = () => {
    return (
        <div>
             <section id="featured">
        <div className="container">
          <div className="row">
            <div className="featured-main">
              <div className="heading text-center">
                <h2>featured Products</h2>
              </div>
              <div className="featured-filter">
                <div className="text-center">
                  <button className="btn btn-default active filter-button" data-filter="all">All</button>
                  <button className="btn btn-default filter-button" data-filter="men">men</button>
                  <button className="btn btn-default filter-button" data-filter="women">women</button>
                  <button className="btn btn-default filter-button" data-filter="child">children</button>
                  <button className="btn btn-default filter-button" data-filter="access">accesorries</button>
                </div>
                <div className="gallery_product col-md-3 col-sm-4 filter men">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img1} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>Woolen T-Shirt</p><span>$ 99.00</span>
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
                <div className="gallery_product col-md-3 col-sm-4 filter women">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img3} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>Woolen T-Shirt Ash</p><span>$ 99.00</span>
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
                <div className="gallery_product col-md-3 col-sm-4 filter men access">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img4} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>T-Shirt for Women</p><span>$ 99.00</span>
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
                <div className="gallery_product col-md-3 col-sm-4 filter women child">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img2} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>Silk Skirt</p><span>$ 99.00</span>
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
                <div className="gallery_product col-md-3 col-sm-4 filter men">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img1} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>Woolen T-Shirt</p><span>$ 99.00</span>
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
                <div className="gallery_product col-md-3 col-sm-4 filter women access">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img4} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>T-Shirt for women</p><span>$ 99.00</span>
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
                <div className="gallery_product col-md-3 col-sm-4 filter men">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img2} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>Silk Skirt</p><span>$ 99.00</span>
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
                <div className="gallery_product col-md-3 col-sm-4 filter women child">
                  <div className="featured-product">
                    <a href="product-details.html"><img src={img3} alt="featured-product-img" className="img-responsive" /></a>
                    <div className="overlay2 text-center">
                      <a href="#"><i className="fa fa-heart" /></a> 
                      <a href="#"><i className="fa fa-random" /></a> 
                      <a href="#"><i className="fa fa-shopping-basket" /></a> 
                    </div>
                  </div>
                  <div className="feat-details">
                    <p>Woolen T-Shirt ash</p><span>$ 99.00</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Featured;