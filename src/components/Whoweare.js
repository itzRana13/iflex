import React, { useState, useEffect } from 'react';
import  Breadcrumb1  from '../assets/img/breadcrumb/breadcrumb-bg-4.jpg'
import Container from 'react-bootstrap/Container';
import About1 from '../assets/img/about/about-1.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/pages.css';
import ContactForm from './pages/contactform';
import About from '../assets/img/home-bg.webp'
import { FaGear, FaUserTie, FaLayerGroup, FaTrophy, FaBook, FaMusic, FaCode, FaComputer} from "react-icons/fa6";


const Whoweare = () => {
  const containerStyle = {
    backgroundImage: `url(${Breadcrumb1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
 // Static counter values
 const staticCounters = {
  plugins: 256,
  clients: 1256,
  projects:1653,
  awards: 27,
};

// State for animated counters
const [animatedCounters, setAnimatedCounters] = useState({
  plugins: 0,
  clients: 0,
  projects: 0,
  awards: 0,
});

useEffect(() => {
  const interval = setInterval(() => {
    setAnimatedCounters(prevCounters => ({
      plugins: Math.min(prevCounters.plugins + 1, staticCounters.plugins),
      clients: Math.min(prevCounters.clients + 1, staticCounters.clients),
      projects: Math.min(prevCounters.projects + 1, staticCounters.projects),
      awards: Math.min(prevCounters.awards + 1, staticCounters.awards),
    }));
  }, 10);

  return () => clearInterval(interval);
}, [staticCounters]);


  return (
    <main>
      {/* Breadcrumb area start */}
      <section className="breadcrumb__section" style={containerStyle}>
        <Container style={{padding:'50px'}}>
          <Row>
            <Col xxl={12}>
              <div className="breadcrumb__content">
                <h3 className="breadcrumb__title">Who We Are</h3>
                <div className="breadcrumb__list">
                  <span><a href="Home">Home</a></span>
                  <span className="dvdr">/</span>
                  <span>Who We Are</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Breadcrumb area end */}

      {/* About us section start */}
      <section className='details'>
        <Container className='cont'>
          <Row>
            <Col>
              <div class="abt-section-img">
                <img src={About1} alt=""/>
              </div>
            </Col>
            <Col>
              <div class="pg-section__title-wrapper">
                <span class=" pg-section__subtitle-lg ">IFLEX TECHNOLOGY </span>
                <h3 class="pg-section__title-lg ">We Are Iflex Technology  <br/>With 15+  years of Trust</h3>
                <p>Let's Explore The Ultimate Ecommerce Service with IFLEX TECHNOLOGIES. </p>
                <p class="mb-25">In today's digital era, e-commerce is the need of the hour and has become the heartbeat of business.
                  Whether you are a startup looking to elevate an online presence or an established business house seeking to venture into the bigger market, the right e-commerce solution is a must for your success. 
                  At IFLEX TECHNOLOGIES, we offer a wide range of cutting-edge e-commerce solutions that help you achieve your goal by increasing revenue and enhancing the overall customer experience. Let's turn your vision into reality and embark on a journey of digital success today.
                  With years of experience, we have a deep understanding of the e-commerce world.We have witnessed the evolution of the e-commerce industry and stayed at the forefront of technological advancements. 
                  Our professional teams excel in providing customized solutions, which include – Magento Development, WooCommerce Development, OpenCart Development, and ZenCart Development. 
                  We understand that every business is unique, and our e-commerce solutions are tailored to meet the specific requirements and goals of your brand. Whether you require a full-fledged online store, a mobile app, or a seamless payment gateway integration, we've covered everything under one umbrella.
                  Let's venture into the e-commerce world. Contact us today to discuss how our experience can take your e-commerce game to the next level. Let the world witness the next chapter of your success story.
                </p>    
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* About us section end */}
      
      {/* counter section start   */}
      <section className='counter__section'>
        <Container>
          <div className='counter__border'>
            <Row>
              {Object.entries(animatedCounters).map(([key, value]) => (
                <Col lg={3} md={6} key={key}>
                  <div className='counter__item '>
                    <div className='counter__icon'>
                      {key === 'plugins' && <span><FaGear /></span>}
                      {key === 'clients' && <span><FaUserTie /></span>}
                      {key === 'projects' && <span><FaLayerGroup /></span>}
                      {key === 'awards' && <span><FaTrophy /></span>}
                    </div>
                    <div className='counter__info'>
                      <span className='counter'>{value}</span>
                      <h3 className='counter__title'>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
      {/* counter section end */}
      {/* Contact__Section */}
      <section className='contact-form'>
        <ContactForm/>
      </section>
      {/* Contact__Section_End */}
      {/* Description_AboutUs_Section */}
      <section className='about-us'>
        <Container>
          <Row>
            <Col lg={8}>
              <div class="section__title-wrapper ">
                <span class="section__subtitle section__subtitle-lg ">Why Choose us</span>
                <h3 class="section__title section__title-lg mb-25">Because we are best</h3>
                <p class="mb-25">
                  Lorem ipsum dolor sit amet conse cotur adip isicing elit sed do eiu smod tempor incid idunt labore
                  arale tomader majhe ki keu ase bondhu Lorem ipsum dolor 
                </p>
              </div>
              <div class="feature__item-wrapper">
                <Row>
                  <Col lg={6} md={6} >  
                    <div class="feature__item ">
                      <div class="feature__icon">
                        <span>< FaBook /></span>
                      </div>
                      <div class="feature__content">
                        <h3 class="feature__title">Full Responsive</h3>
                        <p>Lorem ipsum dolor sit amet Lorem um dolor sit gamet, conse tomader</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6} >  
                    <div class="feature__item ">
                      <div class="feature__icon">
                        <span><FaMusic /></span>
                      </div>
                      <div class="feature__content">
                        <h3 class="feature__title">Unlimited Fun</h3>
                        <p>Lorem ipsum dolor sit amet Lorem um dolor sit gamet, conse tomader</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6} >  
                    <div class="feature__item">
                      <div class="feature__icon">
                        <span><FaCode/></span>
                      </div>
                      <div class="feature__content">
                        <h3 class="feature__title">Online Shopping</h3>
                        <p>Lorem ipsum dolor sit amet Lorem um dolor sit gamet, conse tomader</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6} >  
                    <div class="feature__item ">
                      <div class="feature__icon">
                        <span><FaComputer/></span>
                      </div>
                      <div class="feature__content">
                        <h3 class="feature__title">Total Security</h3>
                        <p>Lorem ipsum dolor sit amet Lorem um dolor sit gamet, conse tomader</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4}  >
              <div class="feature__img">
                <img src={About} alt=""/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Description_AboutUs_Section_End */}
      {/* Brand_Section_start */}
      <section className="brand__section ">
        <Container>
          <Row className=" gx-0">
            <Col md={3} lg={2}>
              <div class="brand__item">
                <img src="assets/img/brand/brand-1.png" alt=""/>
              </div>
            </Col>
            <Col md={3} lg={2}>
              <div class="brand__item">
                <img src="assets/img/brand/brand-2.png" alt=""/>
              </div>
            </Col>
            <Col md={3} lg={2}>
              <div class="brand__item">
                <img src="assets/img/brand/brand-3.png" alt=""/>
              </div>
            </Col>
            <Col md={3} lg={2}>
              <div class="brand__item">
                <img src="assets/img/brand/brand-4.png" alt=""/>
              </div>
            </Col>
            <Col md={3} lg={2}>
              <div class="brand__item">
                <img src="assets/img/brand/brand-5.png" alt=""/>
              </div>
            </Col>
            <Col md={3} lg={2}>
              <div class="brand__item">
                <img src="assets/img/brand/brand-6.png" alt=""/>
              </div>
            </Col>
            <Col md={3} lg={2}>
              <div class="brand__item">
                <img src="assets/img/brand/brand-7.png" alt=""/>
              </div>
            </Col>
            <Col md={3} lg={2}>
              <div class="brand__item">
                <img src="assets/img/brand/brand-8.png" alt=""/>
              </div>
            </Col>
            <Col md={3} lg={2}>
              <div class="brand__item">
                <img src="assets/img/brand/brand-9.png" alt=""/>
              </div>
            </Col>
            <Col md={3} lg={2}>
              <div class="brand__item">
                <img src="assets/img/brand/brand-10.png" alt=""/>
              </div>
            </Col>
            <Col md={3} lg={2}>
              <div class="brand__item">
                <img src="assets/img/brand/brand-11.png" alt=""/>
              </div>
            </Col>
            <Col md={3} lg={2}>
              <div class="brand__item">
                <img src="assets/img/brand/brand-12.png" alt=""/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Brand_Section_start */}
    </main>
  );
};


export default Whoweare;