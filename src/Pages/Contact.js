import React from 'react';

const Contact = () => {
    return (
        <div>
               {/* About Banner Start */}
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="about-heading text-center">
                <h2>Contact</h2>
                <p><a href="/">home</a> <i className="fa fa-chevron-right" /><i className="fa fa-chevron-right" /> <span>contact</span></p>
              </div>
            </div>
          </div>
        </section>
        {/* About Banner End */}
        {/* Contact part Start */}
        <section id="account">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="contact">
                  <form>
                    <h3>Send us a Message</h3>
                    <div className="col-md-6 pl0 col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 email">
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" placeholder="Email" required />
                      </div>
                    </div>
                    <div className="col-md-6 pl0 col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" placeholder="Phone" required />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 location">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name223" name="name" placeholder="Location" required />
                      </div>
                    </div>
                    <div className="col-md-12 pl0">
                      <div className="form-group mb-0">
                        <textarea className="form-control" id="message" placeholder="Message" maxLength={140} rows={7} defaultValue={""} /> 
                        <div className="sub">
                          <button type="submit" className="btn"><i className="fa fa-paper-plane" /> </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-us">
                  <h3>Contact with us</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliua Ut enim.</p>
                  <p><i className="fa fa-map-marker" /> <a href="#">1234, Parkstreet Avenue, NewYork</a></p>
                  <p><i className="fa fa-phone" /><a href="tel:+12345678900">+123 456 78900</a> <a href="tel:+00987654321">, +009 876 54321</a></p>
                  <p><i className="fa fa-envelope" /><a href="mailto:info@e-feri.com">info@e-feri.com</a>,<a href="mailto:e-feri@info.com">e-feri@info.com</a></p>
                  <p><i className="fa fa-globe" /> <a href="https://www.e-feri.com" target="_blank">www.e-feri.com</a>,<a href="https://www.infoferi.com" target="_blank">www.infoferi.com</a> </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact part End */}
        </div>
    );
};

export default Contact;