import React, { useState } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

import '../assets/css/Offcanvas.css';
import PropTypes from 'prop-types';
import { IoLocation, IoPhonePortraitOutline, IoMail} from "react-icons/io5";

const Offcanvas = () => {
  const [isMobileMenuOpen,setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`offcanvas__area ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div class="off__wrapper">
        <div class="off-content">
          <div class="off__top ">
            
            <div className="mobile-menu-fix ">
             
            </div>
            <div class="offcanvas__map ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.85940833302!2d77.38821001508198!3d28.603994232429034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef9adb7ff33d%3A0x5e40a030fdeee53e!2sGrovy%20Optiva!5e0!3m2!1sen!2sae!4v1688221221438!5m2!1sen!2sae"
                width="100%"
                height="300"
                style={{ border: 0 }}
                title="map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div class="offcanvas-contact">
              <h4>Contact Info</h4>
              <ul >
                <li >
                  <div class="offcanvas__contact-icon">
                    <IoLocation />
                    <a target=" " href="https://www.google.com/maps/place/Grovy+Optiva,+A-5,+Block+A,+Sector+68,+Noida,+Basi+Bahuddin+Nagar,+Uttar+Pradesh+201301/@28.6012711,77.3894228,18z/data=!4m6!3m5!1s0x390cef9adb7ff33d:0x5e40a030fdeee53e!8m2!3d28.6012704!4d77.3894319!16s%2Fg%2F11h9rtzb5p">T - 121 & 124, A-5, Grovy Optiva, Sector 68,Gautam Budha Nagar, U.P - 203101, India</a>
                  </div>
                </li>
                <li class="d-flex align-items-center">
                  <div class="offcanvas__contact-icon ">
                    <IoPhonePortraitOutline /> 
                    <a href="tel:919999904050"><i class="fa fa-mobile" aria-hidden="true"></i>+91-99999 04050</a>
                  </div>
                  </li>
                <li class="d-flex align-items-center">
                  <div class="offcanvas__contact-icon ">
                    <IoMail/>
                    <a href="mailto:info@iflextec.in"><i class="fa fa-envelope-o" aria-hidden="true"></i>info@iflextec.in</a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="offcanvas__social">
              <ul>
                <li> <a href="https://www.facebook.com/" target=" " rel=" "><FaFacebookSquare /></a></li>
                <li> <a href="https://www.linkedin.com/" target=" " rel=" "><FaTwitterSquare /></a></li>
                <li> <a href="https://twitter.com/" target=" " rel=" "><FaInstagramSquare /></a></li>
                <li> <a href="https://www.facebook.com/" target=" " rel=" "><FaLinkedin /></a></li>
              </ul>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};
Offcanvas.propTypes = {
  menuItems: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Offcanvas;