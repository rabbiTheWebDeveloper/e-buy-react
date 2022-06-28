import React from 'react';
import footer from '../assets/images/footer-logo.png';
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card4.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";

const Footer = () => {
    return (
        <div>
               <section id="footer">
        <div className="footer-bg">
          <div className="container">
            <div className="row">
              <div className="footer-main">
                <div className="col-md-3 col-sm-6">
                  <div className="footer-logo">
                    <a href="#"><img src={footer} alt="footer-logo" className="img-responsive" /></a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <p>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="contact">
                    <h2>Contact us</h2>
                    <p><i className="fa fa-map-marker" /> <a href="#">1234, Parkstreet Avenue, NewYork</a> </p>
                    <p><i className="fa fa-phone" /> <a href="tel:+12345678900">+123 456 78900</a>,<a href="tel:+00987654321"> +009 876 54321</a> </p>
                    <p><i className="fa fa-envelope" /> <a href="mailto:info@e-feri.com">info@e-feri.com</a>,<a href="mailto:e-feri@info.com"> e-feri@info.com</a> </p>
                    <p><i className="fa fa-globe" /> <a href="www.e-feri.com">www.e-feri.com</a>,<a href="www.infoferi.com">www.infoferi.com</a> </p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6">
                  <div className="account">
                    <h2>my account</h2>
                    <a href="my-account.html">my account</a>
                    <a href="shopping-cart.html">wishlist</a>
                    <a href="shopping-cart.html">shopping cart</a>
                    <a href="#">compare</a>
                    <a href="checkout.html">checkout</a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="newsletter">
                    <h2>Sign Up For Newsletter</h2>
                    <form>
                      <div className="input-group">
                        <input id={1} className="form-control" type="text" name="search" placeholder="Your Mail" required />
                        <span className="input-group-btn">
                          <button className="btn btn-success" type="submit">Submit</button>
                        </span>
                      </div>
                    </form>
                    <div className="footer-social">
                      <h3>follow us on</h3>
                      <a href="#"><i className="fa fa-facebook" /></a>
                      <a href="#"><i className="fa fa-twitter" /></a>
                      <a href="#"><i className="fa fa-pinterest-p" /></a>
                      <a href="#"><i className="fa fa-behance" /></a>
                      <a href="#"><i className="fa fa-linkedin" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="footer-btm">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="copywright">
                <p>Copyright © 2017. All right reserved by <a href="https://www.softitcare.com/">Soft IT Care</a></p>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="payment text-right">
                <img src={card1} alt="card" className="img-responsive" />
                <img src={card2} alt="card" className="img-responsive" />
                <img src={card3} alt="card" className="img-responsive" />
                <img src={card4} alt="card" className="img-responsive" />
                <img src={card5} alt="card" className="img-responsive" />
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Footer;