import React from 'react';
import img1 from "../assets/images/blog1.jpg";
import img2 from "../assets/images/blog2.jpg";
import img3 from "../assets/images/blog3.jpg";

const Blog = () => {
    return (
        <div>
            <section id="blog">
        <div className="container">
          <div className="row">
            <div className="heading4 text-center">
              <h2>our blog</h2>
            </div>
            <div className="blog-main">
              <div className="col-md-4 col-sm-4">
                <div className="blog-item">
                  <div className="blog-img">
                    <img src={img1} alt="blog-img" className="img-responsive" />
                    <div className="overlay3">
                      <h4><i className="fa fa-calendar" /> 26 October 2017</h4>
                      <a href="blog-details.html"><i className="fa fa-link" /> </a>
                      <p><span><i className="fa fa-user" /> By: Admin </span> <span><i className="fa fa-user" />  2.5k Likes </span> <span><i className="fa fa-comment" /> 1.5k comments </span></p><p>
                      </p></div>
                  </div>
                  <div className="blog-details">
                    <h3>Best E-commerce I’d shopping yet</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing andg industry. Lorem Ipsum has been the indusy's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p> 
                    <a href="blog-details.html">read more <i className="fa fa-long-arrow-right" /> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="blog-item">
                  <div className="blog-img">
                    <img src={img2} alt="blog-img" className="img-responsive" />
                    <div className="overlay3">
                      <h4><i className="fa fa-calendar" /> 26 October 2017</h4>
                      <a href="blog-details.html"><i className="fa fa-link" /> </a>
                      <p><span><i className="fa fa-user" /> By: Admin </span> <span><i className="fa fa-user" />  2.5k Likes </span> <span><i className="fa fa-comment" /> 1.5k comments </span></p><p>
                      </p></div>
                  </div>
                  <div className="blog-details">
                    <h3>I’m satisfy with their services</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing andg industry. Lorem Ipsum has been the indusy's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p> 
                    <a href="blog-details.html">read more <i className="fa fa-long-arrow-right" /> </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="blog-item">
                  <div className="blog-img">
                    <img src={img3} alt="blog-img" className="img-responsive" />
                    <div className="overlay3">
                      <h4><i className="fa fa-calendar" /> 26 October 2017</h4>
                      <a href="blog-details.html"><i className="fa fa-link" /> </a>
                      <p><span><i className="fa fa-user" /> By: Admin </span> <span><i className="fa fa-user" />  2.5k Likes </span> <span><i className="fa fa-comment" /> 1.5k comments </span></p><p>
                      </p></div>
                  </div>
                  <div className="blog-details">
                    <h3>I’ll never forget their hospitality</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing andg industry. Lorem Ipsum has been the indusy's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p> 
                    <a href="blog-details.html">read more <i className="fa fa-long-arrow-right" /> </a>
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

export default Blog;