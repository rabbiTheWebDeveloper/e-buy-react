import React from 'react';
import img1 from '../assets/images/newest1.jpg';
import img2 from '../assets/images/newest2.jpg';
import img3 from '../assets/images/newest3.jpg';

const Newest = () => {
    return (
        <div>
             <section id="newest">
        <div className="container">
          <div className="row">
            <div className="newest-main">
              <div className="col-md-4 col-sm-4">
                <div className="newest-item">
                  <img src={img1} alt="newest1" className="img-responsive" />
                  <div className="overlay1 text-center">
                    <h2>new</h2>
                    <h3>jeans shirt</h3>
                    <a href="#">shop now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="newest-item">
                  <img src={img2} alt="newest1" className="img-responsive" />
                  <div className="overlay1 text-center">
                    <h2>2017</h2>
                    <h3>women's glass</h3>
                    <a href="#">shop now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="newest-item">
                  <img src={img3} alt="newest1" className="img-responsive" />
                  <div className="overlay1 text-center">
                    <h2>best</h2>
                    <h3>mens Shirt</h3>
                    <a href="#">shop now</a>
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

export default Newest;