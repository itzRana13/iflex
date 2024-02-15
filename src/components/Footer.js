import React from 'react';
import '../assets/css/Footer.css';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoIosMail, IoIosCall } from "react-icons/io";
import logo from '../assets/img/logo-f.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Footer = () => {
  return (
    <footer>
      <div className="footer-area ">
        <Container>
          <Row className="row1">
            {/* Column 1 */}  {/* Contact Info */}
            <Col lg={4}>
              <div className="logo">
                <a href='Home'><img src={ logo }width="150" height="100" className="d-inline-block align-left" alt="Logo"/></a>
              </div>
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Contact Info</h3>
                </div>
                <ul className="footer-contact-info">
                  <p>
                    <span>
                      <i className="ri-map-pin-fill"></i> T - 121 & 124, A-5, Groovy Optiva, Sector-68, <br/> Gautam-BudhaNagar, U.P - 203101, India
                    </span>
                  </p>
                  <li>
                    <span><IoIosCall/>
                      <i className="ri-phone-fill"></i> <a href='tel:+91-9999904050'>+91-99999 04050</a>
                    </span>
                  </li>
                  <li>
                    <span><IoIosMail />
                      <i className="ri-mail-line"></i> <a href='mailto:info@iflextec.in'>info@iflextec.in</a>
                    </span>
                  </li>
                </ul>
              </div>
              {/* Social Media */}
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Social Media</h3>
                </div>
                <ul className="footer-social-media">
                  <li>
                    <a href="https://www.facebook.com/"  rel="noreferrer">
                      <FaFacebookSquare />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/"  rel="noreferrer">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/"  rel="noreferrer">
                      <FaTwitterSquare />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" rel="noreferrer">
                      <FaInstagramSquare />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Quick Links</h3>
                </div>
                <ul className="footer-quick-links">
                  <li>
                    <a href="Whoweare">About Us</a>
                  </li>
                  <li>
                    <a href="OurWork">Our Services</a>
                  </li>
                  <li>
                    <a href="OurWork">Our Work</a>
                  </li>
                  <li>
                    <a href="Reach-us">Contact Us</a>
                  </li>
                  <li>
                    <a href="Career">Career</a>
                  </li>
                  <li>
                    <a href="Reach-us">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </Col>
            {/* Column 2 */}
            <Col lg={3}>
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>WHAT WE DO</h3>
                </div>
                <ul className="footer-quick-links">
                  <li>
                    <a href="UIUXDesign">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="WebDevelopment">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="MISDevelopment">
                      MIS Development
                    </a>
                  </li>
                  <li>
                    <a href="EcommerceSolutions">
                    Ecommerce Solutions
                    </a>
                  </li>
                  <li>
                    <a href="AppDevelopment">
                      App Development
                    </a>
                  </li>
                  <li>
                    <a href="DigitalMarketing">
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="MotionVideos">
                      Motion Videos
                    </a>
                  </li>
                  <li>
                    <a href="Outsource">
                      Outsource
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            {/* Column 3 */}
            <Col lg={2}>
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>TECHNOLOGIES</h3>
                </div>
                <ul className="footer-quick-links">
                  <li>
                    <a href="#">PHP</a>
                  </li>
                  <li>
                    <a href="#">Frontend</a>
                  </li>
                  <li>
                    <a href="#">Backend</a>
                  </li>
                  <li>
                    <a href="#">Cloud</a>
                  </li><li>
                    <a href="#">Mobile Platforms</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          {/* Copyright Area */}
          <div className="copyright-area">
            <Row>
              <Col sm={6} md={6} lg={6} >
                <p>All rights reserved&copy; {new Date().getFullYear()}  IFLEX TECHNOLOGIES</p>
              </Col>
              {/*<div className="col-lg-6 col-md-6 col-sm-6">
                <ul className="footer-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>*/} 
            </Row>
          </div>
        </Container>
      </div> 
    </footer>
  );
};
export default Footer;
