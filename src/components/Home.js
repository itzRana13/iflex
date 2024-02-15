import React from 'react';
import '../assets/css/Home.css'
import  Breadcrumb1  from '../assets/img/breadcrumb/slider-1.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import 'animate.css';
import About1 from '../assets/img/about/about-1.jpg';
import TestimonialArea from './pages/TestimonialArea';
import ContactForm from './pages/contactform';
import TestimonialArea2 from './pages/TestimonialArea-2';



function Home() {
  const containerStyle = {
    backgroundImage: `url(${Breadcrumb1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <main>
      {/* Slider_Section_start */}
      <section class="slider__section">
        <div class="slider__active slider__wrapper swiper-container">
          <div class="swiper-wrapper">
            <div className="Home__section include-bg" style={containerStyle}>
              <Container>
                <Row>
                  <Col>
                    <div className="slider-content">
                      <h3 className="slider__title animate__animated animate__fadeInUp animate__delay-0.5s">
                        Transform your customer experience <br /> with our engaging digital solutions.
                      </h3>
                      <div className="slider__btn animate__animated animate__fadeInUp animate__delay-0.9s">
                        <a href="Whoweare" className="bd-btn">
                          Read More <span>&#10230;</span>
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </section>
      {/* Slider_Section_end */}
      {/* Home_Section_start */}
      <section className='Home__section-2'>
        <Container className='containerr' >
          <Row className='bg-s'>
            <Col className='colm'>
              <div className="services__item animate__animated animate__fadeInUp animate__delay- 1.1s ">
                <div className="services__content ">
                  <h3 className="services__title"><a href="javascript:void(0)">Web<br/>Development </a></h3>
                </div>
              </div>
            </Col>
            <Col className='colm'>
              <div className="services__item animate__animated animate__fadeInUp animate__delay-1.3s">
                <div className="services__content ">
                  <h3 className="services__title"><a href="javascript:void(0)">Mobile<br/>Application</a></h3>
                </div>
              </div>
            </Col>
            <Col className='colm'>
              <div className="services__item animate__animated animate__fadeInUp animate__delay-1.6s">
                <div className="services__content ">
                  <h3 className="services__title"><a href="javascript:void(0)">Digital<br/>Marketing</a></h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Home_Section_start */}
      {/* Home_about_Section_start */}
      <section className='Home-about'>
        <Container>
          <div class="section__title-wrapper">
            <span class="section__subtitle section__subtitle-lg ">Why Choose us</span>
            <h3 class="section__title section__title-lg ">How We Help You Grow</h3>        
          </div>
          <Row>
            <Col>
              <div class="feature-img">
                <img src={About1} alt=""/>
              </div>
            </Col>
            <Col>
              <Row >
                <Col lg={12} md={12}>  
                  <div class="feature__item ">
                    <div class="feature-content">
                      <h3 class="feature-title">Proven Expertise and Customised Strategies</h3>
                      <p class="feature-text">We are committed to meeting your business goals through precise, customised, effective strategies. With a track record of delivering Success with proven expertise personalised as per business needs. </p>
                    </div>
                  </div>
                </Col>
                <Col lg={12} md={12}>  
                  <div class="feature__item ">
                    <div class="feature-content">
                      <h3 class="feature__title">Quality is Our Signature/ Quality Perfection Assured</h3>
                      <p class="feature__text">Uncompromising quality consistently delivers business thrives in the digital space. We take pride in delivering high-quality results, making your online presence and overall business growth.</p>
                    </div>
                  </div>
                </Col>
                <Col lg={12} md={12}>  
                  <div class="feature__item ">
                    <div class="feature-content">
                      <h3 class="feature-title">Broad Industry Expertise </h3>
                      <p class="feature-text">A versatile team of digital experts featuring graphic artists, web designers, developers, copywriters, and strategists collaborate seamlessly across industries.</p>
                    </div>
                  </div>
                </Col>
                <Col lg={12} md={12}>  
                  <div class="feature__item ">
                    <div class="feature-content">
                      <h3 class="feature-title">Cutting-edge Techniques </h3>
                      <p class="feature-text">We aim to emerge with continuous trends and technology. Make Digital Success with us & secure your digital Success.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className='home-we-do'>
        <Container>
          <div class="section__title-wrapper">
            <span class="section__subtitle section__subtitle-lg mb-10">Creative Inc</span>
            <h3 class="section__title section__title-lg mb-25">You're Welcome </h3>        
          </div>
          <Row>

          </Row>
        </Container>
      </section> */}
      <section className="testimonial-area-section">
        <TestimonialArea />
      </section>
      {/* Contact__Section */}
      <section className='contact-form'>
        <ContactForm/>
      </section>
      
      {/* Testimonial__section-2 */}
      <section className="testimonial-area-section">
        <TestimonialArea2 />
      </section>
    </main>
  );
}

export default Home;
