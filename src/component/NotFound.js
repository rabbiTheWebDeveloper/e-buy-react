import React from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/images/404.png"

const NotFound = () => {
    return (
        <div>
             <section id="error-page">
        <div className="container">
          <div className="row">
            <div className="error text-center">
              <img src={img} alt={404} className="img-responsive" />
              <p>Oops! The page you are looking for is not established yet.</p>
              <Link to="/home">Go to Home</Link>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default NotFound;