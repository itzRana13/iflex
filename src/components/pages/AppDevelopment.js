import React from 'react'
import TestimonialArea from './TestimonialArea';
import ContactForm from './contactform';
import About1 from '../../assets/img/about/about-1.jpg';
import  Breadcrumb1  from '../../assets/img/breadcrumb/breadcrumb-bg-1.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/css/pages.css';

function AppDevelopment() {
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
                <h3 className="breadcrumb__title">App Development</h3>
                <div className="breadcrumb__list">
                  <span><a href="Home">Home</a></span>
                  <span className="dvdr">/</span>
                  <span>App Development</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Breadcrumb area end */}
    
      {/* Services area start */}
     
      {/* Services area end */}

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
                <span class=" pg-section__subtitle-lg ">APP DEVELOPMENT</span>
                <h3 class="pg-section__title-lg ">Development Services with <br/> IFLEX Technologies</h3>
                <p>Strategic Android consultations and holistic iOS approaches – Iflex Technologies delivers custom solutions that set industry benchmarks </p>
                <p class="mb-25">IFLEX Technologies excels in both Android and iOS mobile app development, offering strategic consultation, user-centric design, and custom solutions. 
                  For Android, they provide insightful development consultations, captivating UI/UX design, and extensive custom application development across various devices.
                  Their full-cycle approach ensures excellence in smartphones, tablets, wearables, and Android TV. On the iOS front, Iflex Technologies stands out with a holistic approach, emphasising meticulous analysis, innovative design, and unparalleled user experiences. 
                  Clients benefit from transformative digital experiences and high-impact applications, solidifying Iflex Technologies as a reliable partner in the dynamic landscape of mobile app development.
                </p>    
              </div>
            </Col>
          </Row>
          <Row className='spl-box'>
            <Col className='col-box'>
              <div class="pg-services__item animate__animated animate__fadeInUp animate__delay- 1.1s">
                <div class="pg-services__content ">
                  <h3 class="pg-services__title"><a href="#">Web Application<br/> Development </a></h3>
                </div>
              </div>
            </Col>
            <Col className='col-box'>
              <div class="pg-services__item animate__animated animate__fadeInUp animate__delay-1.3s">
                <div class="pg-services__content ">
                  <h3 class="pg-services__title"><a href="#">Mobile Application<br/> Development </a></h3>
                </div>
              </div>
            </Col>
            <Col className='col-box'>
              <div class="pg-services__item animate__animated animate__fadeInUp animate__delay-1.6s">
                <div div class="pg-services__content ">
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

export default AppDevelopment;