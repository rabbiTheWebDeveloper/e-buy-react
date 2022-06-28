import React from 'react';
import Zoom from 'react-reveal/Zoom';

const MyAccount = () => {
    return (
        <div>
            <Zoom>
            <section id="account">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="login-account">
                <h3>login your account</h3>
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Username" required />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" name="name" placeholder="Password" required />
                  </div>
                  <div className="tahsan3">
                    <div className="checkbox chek2 checkbox-success check33">
                      <input id="checkbox111" type="checkbox" />
                      <label htmlFor="checkbox111">Remember me</label>
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                  <div className="procd">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="register">
                <h3>Register Now <a href="#">(If don’t have any account)</a></h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 login-account">
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" placeholder="Name" required />
                      </div>
                    </div>
                    <div className="col-md-6 login-account">
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" placeholder="E-mail" required />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 login-account">
                      <div className="form-group">
                        <input type="password" className="form-control" name="name" placeholder="Password" required />
                      </div>
                    </div>
                    <div className="col-md-6 login-account">
                      <div className="form-group">
                        <input type="password" className="form-control" name="name" placeholder="Confirm Password" required />
                      </div>
                    </div>
                  </div>    
                  <div className="tahsan3 tahsan5">
                    <div className="checkbox chek2 checkbox-success check33">
                      <input id="checkbox113" type="checkbox" />
                      <label htmlFor="checkbox113"> I accept all the term and conditions, including privacy policy</label>
                    </div>
                  </div>
                  <div className="register-now">
                    <div className="procd">
                      <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Zoom>
        </div>
    );
};

export default MyAccount;