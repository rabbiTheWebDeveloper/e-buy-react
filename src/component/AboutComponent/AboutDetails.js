import React from 'react';
import img from "../../assets/images/about-details.jpg"

const AboutDetails = () => {
    return (
        <div>
            <section id="about-details">
        <div className="container">
          <div className="row">
            <div className="about-details-main">
              <div className="col-md-7">
                <div className="about-img">
                  <img src={img} alt="about-img" className="img-responsive" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="about-detail">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudtion ullamco laboris nisi ut aliquip ex ea comm. Duis aute irure dolor in reprehrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia desnt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                  <p>
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam uptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default AboutDetails;