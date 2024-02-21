import React from 'react'
import TestimonialArea from './TestimonialArea';
import ContactForm from './contactform';
import About1 from '../../assets/img/about/about-1.jpg';
import  Breadcrumb1  from '../../assets/img/breadcrumb/breadcrumb-bg-1.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/css/pages.css'
import 'animate.css';



function WebDevelopment() {
  const containerStyle = {
    backgroundImage: `url(${Breadcrumb1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <main>
      {/* Breadcrumb area start */}
      <section className="breadcrumb__section" style={containerStyle}>
        <Container style={{padding:'50px'}}>
          <Row>
            <Col xxl={12}>
              <div className="breadcrumb__content">
                <h3 className="breadcrumb__title">Web Development</h3>
                <div className="breadcrumb__list">
                  <span><a href="Home">Home</a></span>
                  <span className="dvdr">/</span>
                  <span>Web Development</span>
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
                <span class=" pg-section__subtitle-lg ">Web Development</span>
                <h3 class="pg-section__title-lg ">Web Development Services with <br/> IFLEX Technologies</h3>
                <p>Let's Explore The Ultimate Ecommerce Service with IFLEX TECHNOLOGIES. </p>
                <p class="mb-25">We Craft and Build Cutting-Edge Web-Based Solutions that Elevate your Client's Experience, Delivered with an Engaging user Experience.
                  One Step Solutions of Mobile APPLICATION Development Expertise, serving both consumer and enterprise markets
                </p>    
              </div>
            </Col>
          </Row>
          <Row className='spl-box'>
            <Col className='col-box'>
              <div class="pg-services__item animate__animated animate__fadeInUp animate__delay- 1.1s">
                <div class="pg-services__content ">
                  <h3 class="pg-services__title"><a href="##">Web Application<br/> Development </a></h3>
                </div>
              </div>
            </Col>
            <Col className='col-box'>
              <div class="pg-services__item animate__animated animate__fadeInUp animate__delay-1.3s">
                <div class="pg-services__content ">
                  <h3 class="pg-services__title"><a href="##">Mobile Application<br/> Development </a></h3>
                </div>
              </div>
            </Col>
            <Col className='col-box'>
              <div class="pg-services__item animate__animated animate__fadeInUp animate__delay-1.6s">
                <div div class="pg-services__content ">
                  <h3 class="pg-services__title"><a href="##">Digital <br/>Marketing</a></h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* About us section end */}
      <section className="contact-section">
        <ContactForm/>
      </section>
      <section className="testimonial-area-section">
        <TestimonialArea />
      </section>
    </main>
  )
}

export default WebDevelopment;