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
                <span class=" pg-section__subtitle-lg ">E-commerce Services</span>
                <h3 class="pg-section__title-lg ">E-commerce Services with <br/> IFLEX Technologies</h3>
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
          <Row className='spl-box'>
            <Col className='col-box'>
              <div class="pg-services__item animate__animated animate__fadeInUp animate__delay- 1.1s">
                <div class="pg-services__content ">
						      <p>Lorem ipsum dolor sit</p>
                  <h3 class="pg-services__title"><a href="#">Web Application<br/> Development </a></h3>
                </div>
              </div>
            </Col>
            <Col className='col-box'>
              <div class="pg-services__item animate__animated animate__fadeInUp animate__delay-1.3s">
                <div class="pg-services__content ">
						      <p>Lorem ipsum dolor sit</p>
                  <h3 class="pg-services__title"><a href="#">Mobile Application<br/> Development </a></h3>
                </div>
              </div>
            </Col>
            <Col className='col-box'>
              <div class="pg-services__item animate__animated animate__fadeInUp animate__delay-1.6s">
                <div div class="pg-services__content ">
						      <p>Lorem ipsum dolor sit</p>
                  <h3 class="pg-services__title"><a href="#">Digital <br/>Marketing</a></h3>
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