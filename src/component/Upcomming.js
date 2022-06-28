import React from 'react';
import img from '../assets/images/macbook.png'

const Upcomming = () => {
    return (
        <div>
                  <section id="upcoming">
        <div className="upcoming-bg">
          <div className="container">
            <div className="row">
              <div className="upcoming-main">
                <div className="col-md-6">
                  <div className="upcoming-product-img">
                    <img src={img} alt="macbook" className="img-responsive" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="upcoming-prouct-details">
                    <h3>New Product</h3>
                    <h2>Microsoft Surface Pro</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loremsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It hasived not only five centuries, with the release of Letraset sheets.</p>
                  </div>
                  <div className="luanch">
                    <h2>launch in</h2>
                    <div className="coundown_res">
                      <div className="count-item text-center">
                        <div className="coun">
                          <div className="coun_time">
                            <h2 id="day"></h2>
                            <p>days</p>
                          </div>
                        </div>
                      </div>
                      <div className="count-item text-center">
                        <div className="coun">
                          <div className="coun_time">
                            <h2 id="hour" />
                            <p>hours</p>
                          </div>
                        </div>
                      </div>
                      <div className="count-item text-center">
                        <div className="coun">
                          <div className="coun_time">
                            <h2 id="month" />
                            <p>mins</p>
                          </div>
                        </div>
                      </div>
                      <div className="count-item text-center">
                        <div className="coun">
                          <div className="coun_time">
                            <h2 id="second" />
                            <p>sec</p>
                          </div>
                        </div>
                      </div>
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

export default Upcomming;