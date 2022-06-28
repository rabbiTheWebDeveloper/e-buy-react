import React from 'react';
import footer from '../Assets/images/footer-logo.png';

const Footer = () => {
    return (
        <div>
              <section id="footer">
       <div class="footer-bg">
           <div class="container">
               <div class="row">
                   <div class="footer-main">
                       <div class="col-md-3 col-sm-6">
                           <div class="footer-logo">
                               <a href="#"><img src={footer} alt="footer-logo" class="img-responsive"/></a>
                               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                               <p>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                           </div>
                       </div>
                       <div class="col-md-3 col-sm-6">
                           <div class="contact">
                            <h2>Contact us</h2>
                               <p><i class="fa fa-map-marker"></i> <a href="#">1234, Parkstreet Avenue, NewYork</a> </p>
                               <p><i class="fa fa-phone"></i> <a href="tel:+12345678900">+123 456 78900</a>,<a href="tel:+00987654321"> +009 876 54321</a> </p>
                               <p><i class="fa fa-envelope"></i> <a href="mailto:info@e-feri.com">info@e-feri.com</a>,<a href="mailto:e-feri@info.com"> e-feri@info.com</a> </p>
                               <p><i class="fa fa-globe"></i> <a href="www.e-feri.com">www.e-feri.com</a>,<a href="www.infoferi.com">www.infoferi.com</a> </p>
                           </div>
                       </div>
                       <div class="col-md-2 col-sm-6">
                           <div class="account">
                              <h2>my account</h2>
                               <a href="my-account.html">my account</a>
                               <a href="shopping-cart.html">wishlist</a>
                               <a href="shopping-cart.html">shopping cart</a>
                               <a href="#">compare</a>
                               <a href="checkout.html">checkout</a>
                           </div>
                       </div>
                       <div class="col-md-4 col-sm-6">
                           <div class="newsletter">
                               <h2>Sign Up For Newsletter</h2>
                                   <form>
                                       <div class="input-group">
                                            <input id="1" class="form-control" type="text" name="search" placeholder="Your Mail" required/>
                                            <span class="input-group-btn">
                                            <button class="btn btn-success" type="submit">Submit</button>
                                            </span>
                                       </div>
                                   </form>
                               <div class="footer-social">
                                   <h3>follow us on</h3>
                                   <a href="#"><i class="fa fa-facebook"></i></a>
                                   <a href="#"><i class="fa fa-twitter"></i></a>
                                   <a href="#"><i class="fa fa-pinterest-p"></i></a>
                                   <a href="#"><i class="fa fa-behance"></i></a>
                                   <a href="#"><i class="fa fa-linkedin"></i></a>
                               </div>
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

export default Footer;