import React from 'react';
import { Link } from 'react-router-dom';
import logoss from '../assets/images/logo.png';
import '../assets/css/Nav.css'


const Nav = () => {
    return (
        <div>
             {/* Header Part Start */}
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="header-content">
                <div className="col-md-4">
                  <div className="header-left">
                    <div className="sel-box">
                      <select className="bdr">
                        <option>ENG</option>
                        <option>BAN</option>
                        <option>ESP</option>
                      </select>
                    </div>
                    <div className="sel-box">
                      <select>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                      </select>
                    </div>
                    <div className="sel-box">
                      <a href="tel:+12345678900">Toll Free: +123 4567 8900</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-md-offset-4">
                  <div className="header-right text-right">
                    <ul>
                      <li>
                        <a href="shopping-cart.html"><i className="fa fa-heart" /> Wishlist</a>
                      </li>
                      <li>
                        <Link to="/my-account"><i className="fa fa-user" /> My Account</Link>
                      </li>
                      <li>
                        <Link to="/my-account">Login / Register</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header Part End */}
        {/* mobile menu end */}     
        <nav className="mobile-menu hidden">
          <a href="/">
            <img src={logoss} alt="logo" />
          </a>
          <ul>
            <li className>
              <a href="/">
                Home
              </a>
              <ul>
                <Link className to="/home">Home 1</Link>
                <Link className to="/home2">Home 2</Link>
              </ul>
            </li>
            <li className>
              <a className href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Shop
              </a>
              <ul>
                <a className href="product-grid-view.html">Product Grid View</a>
                <a className href="product-grid-view-with-sidebar.html">Product Grid View With Sidebar</a>
                <a className href="product-list-view-with-sidebar.html">Product List View With Sidebar</a>
                <a className href="product-details.html">Product Details</a>
              </ul>
            </li>
            <li className>
              <a className href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pages
              </a>
              <ul>
                <a className href="about.html">About</a>
                <a className href="shopping-cart.html">Cart</a>
                <a className href="checkout.html">Checkout</a>
                <a className href="my-account.html">Login</a>
                <a className href="my-account.html">Register</a>
                <a className href="shopping-cart.html">Whislist</a>
                <a className href="404.html">404</a>
              </ul>
            </li>
            <li className>
              <a className href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Blog
              </a>
              <ul>
                <a className href="blog-grid-view.html">Blog Grid View</a>
                <a className href="blog-grid-with-sidebar.html">Blog Grid View With Sidebar</a>
                <a className href="blog-grid-list-view.html">Blog List View With Sidebar</a>
                <a className href="blog-details.html">Blog Details</a>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        {/* mobile menu end */}   
        {/* Navbar Part Start */}   
        <nav className="navbar navbar-default hidden-xs">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="/">
                <img src={logoss} alt="logo" className="img-responsive" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                {/*            <li class="active"><a href="index.html">Home</a></li>*/}
                {/*            <li><a href="product-grid-view.html">Men</a></li>*/}
                {/*            <li><a href="product-grid-view-with-sidebar.html">Women</a></li>*/}
                {/*            <li><a href="product-list-view-with-sidebar.html">Accesorries</a></li>*/}
                {/*            <li><a href="blog-grid-view.html">Blog</a></li>*/}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/home">Home 1</Link>
                    <Link className="dropdown-item" to="/home2">Home 2</Link>
                  </div>
                </li>
                <li><Link className="dropdown-item" to="/about">About</Link></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Shop
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="product-grid-view.html">Product Grid View</a>
                    <a className="dropdown-item" href="product-grid-view-with-sidebar.html">Product Grid View With Sidebar</a>
                    <a className="dropdown-item" href="product-list-view-with-sidebar.html">Product List View With Sidebar</a>
                    <a className="dropdown-item" href="product-details.html">Product Details</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pages
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="shopping-cart.html">Cart</a>
                    <a className="dropdown-item" href="checkout.html">Checkout</a>
                    <a className="dropdown-item" href="my-account.html">Login</a>
                    <a className="dropdown-item" href="my-account.html">Register</a>
                    <a className="dropdown-item" href="shopping-cart.html">Whislist</a>
                    <a className="dropdown-item" href="404.html">404</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Blog
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="blog-grid-view.html">Blog Grid View</a>
                    <a className="dropdown-item" href="blog-grid-with-sidebar.html">Blog Grid View With Sidebar</a>
                    <a className="dropdown-item" href="blog-grid-list-view.html">Blog List View With Sidebar</a>
                    <a className="dropdown-item" href="blog-details.html">Blog Details</a>
                  </div>
                </li>
                <li><Link to="/contact">Contact</Link></li>
              </ul> 
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <form className="search-form">
                    <div className="form-group has-feedback">
                      <input type="text" className="form-control" name="search" id="search" placeholder="search" />
                      <span className="glyphicon glyphicon-search form-control-feedback" />
                    </div>
                  </form>
                </li>
                <li className="tahsan"><span><a href="#"><i className="fa fa-shopping-bag" /> 2 Items</a>
                  </span>
                  <div className="items text-left">
                    <div className="items-total">
                      <p>You have <span>02 items</span> in your shopping bag</p>
                    </div>
                    <div className="item-choose-main">
                      <div className="item-choose">
                        <ul>
                          <li>
                            <img src="images/items1.png" alt="item1" className="img-responsive" />
                          </li>
                          <li>
                            <h3>T-shirt for Women</h3>
                            <p>Price : $ 99.00</p>
                            <p>Qty :  02</p>
                          </li>
                          <li>
                            <i className="fa fa-trash-o" />
                          </li>
                        </ul>
                      </div>
                      <div className="item-choose">
                        <ul>
                          <li>
                            <img src="images/items2.png" alt="item1" className="img-responsive" />
                          </li>
                          <li>
                            <h3>T-shirt for Women</h3>
                            <p>Price : $ 99.00</p>
                            <p>Qty :  02</p>
                          </li>
                          <li>
                            <i className="fa fa-trash-o" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="total-price">
                      <h3>Total <span>$ 500.00</span></h3>
                    </div>
                    <div className="items-check text-center">
                      <a href="#">view cart</a>
                      <a className="check-out" href="#">Checkout</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar Part End */}
        {/* mobile logo start */}      
        <nav className="navbar-default visible-xs">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="logo" className="img-responsive" />
              </a>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <form className="search-form">
                    <div className="form-group has-feedback">
                      <input type="text" className="form-control" name="search" placeholder="search" />
                      <span className="glyphicon glyphicon-search form-control-feedback" />
                    </div>
                  </form>
                </li>
                <li className="tahsan"><span><a href="#"><i className="fa fa-shopping-bag" /> 2 Items</a>
                  </span>
                  <div className="items text-left">
                    <div className="items-total">
                      <p>You have <span>02 items</span> in your shopping bag</p>
                    </div>
                    <div className="item-choose-main">
                      <div className="item-choose">
                        <ul>
                          <li>
                            <img src="images/items1.png" alt="item1" className="img-responsive" />
                          </li>
                          <li>
                            <h3>T-shirt for Women</h3>
                            <p>Price : $ 99.00</p>
                            <p>Qty :  02</p>
                          </li>
                          <li>
                            <i className="fa fa-trash-o" />
                          </li>
                        </ul>
                      </div>
                      <div className="item-choose">
                        <ul>
                          <li>
                            <img src="images/items2.png" alt="item1" className="img-responsive" />
                          </li>
                          <li>
                            <h3>T-shirt for Women</h3>
                            <p>Price : $ 99.00</p>
                            <p>Qty :  02</p>
                          </li>
                          <li>
                            <i className="fa fa-trash-o" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="total-price">
                      <h3>Total <span>$ 500.00</span></h3>
                    </div>
                    <div className="items-check text-center">
                      <a href="#">view cart</a>
                      <a className="check-out" href="#">Checkout</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* mobile logo end */}
  
            
           
        </div>
    );
};

export default Nav;