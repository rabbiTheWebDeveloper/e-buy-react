import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div>
             {/* Counter Part Start */}
      <section id="counter" className="counter">
        <div className="main_counter_area">
          <div className="overlay p-y-3">
            <div className="container">
              <div className="row">
                <div className="main_counter_content text-center white-text wow fadeInUp">
                  <div className="col-md-2">
                    <div className="single_counter p-y-2 m-t-1">
                    <CountUp start={0} end={261} delay={0}>
                          {({ countUpRef }) => (
                            <div>
                              <span className='fs-2' ref={countUpRef} />
                            </div>
                          )}
                        </CountUp>
                      {/* <h2 className="statistic-counter">261</h2> */}
                      <p>cup of tea</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="single_counter p-y-2 m-t-1">
                      <h2 className="statistic-counter">718</h2>
                      <p>product sold</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="single_counter p-y-2 m-t-1">
                      <h2 className="statistic-counter">999</h2>
                      <p>happy client</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="single_counter p-y-2 m-t-1">
                      <h2 className="statistic-counter">369</h2>
                      <p>total outlets</p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="single_counter p-y-2 m-t-1">
                      <h2 className="statistic-counter">209</h2>
                      <p>award win</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter End */}
        </div>
    );
};

export default Counter;