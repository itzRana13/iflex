import React, { useState, useEffect,  useRef  } from 'react';
import '../assets/css/Header.css';
import Offcanvas from './Offcanvas';
import logo from '../assets/img/logo.png';
import { IoMdMenu, } from 'react-icons/io';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const dropdownButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowSubmenu(false);
  };
  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };
  const closeSubmenu = () => {
    setShowSubmenu(false);
  };
  const handleSubmenuClick = (e) => {
    // Stop the event propagation to prevent closing the submenu when clicking inside it
    e.stopPropagation();
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(e.target)
      ) {
        closeSubmenu();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`header__transparent ${isSticky ? 'header__sticky' : ''}`}>
      <div className='header__main'>
        <Container>
          <nav>
            <div className="logo">
              <a href='Home'><img src={logo} width="150" height="100" className="d-inline-block align-left" alt="Company Logo" /></a>
            </div>
            <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <IoMdMenu />
            </div>
            <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`} >
              <li className={`has-dropdown who-we-are ${showSubmenu ? 'show-submenu' : ''}`} ref={dropdownButtonRef}onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave}>
                <a href='##' onClick={toggleSubmenu} >What We Do </a>
                {showSubmenu && (
                  <div className='submenu' onClick={handleSubmenuClick}>
                    <li><a href="UIUXDesign">UI/UX Design</a></li>
                    <li><a href="WebDevelopment">Web Development</a></li>
                    <li><a href="MISDevelopment">MIS Development</a></li>
                    <li><a href="EcommerceSolutions">Ecommerce Solutions</a></li>
                    <li><a href="AppDevelopment">App Development</a></li>
                    <li><a href="DigitalMarketing">Digital Marketing</a></li>
                    <li><a href="MotionVideos">Motion Videos</a></li>
                    <li><a href="Outsource">Outsource Design/Development</a></li>
                  </div>
                )}
              </li>
              <li><a href="Ourwork">Our Work</a></li>
              <li><a href="Career">Career</a></li>
              <li><a href="Whoweare">Who we are</a></li>
              <li><a href="Reach-us">Reach us</a></li>
            </ul>
          </nav>
        </Container>
      </div>
      {isMenuOpen && <Offcanvas  onClose={closeMenu} />}
    </section>
  );
};

export default Header;
