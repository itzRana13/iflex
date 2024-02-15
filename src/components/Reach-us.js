import React from 'react';
import  Breadcrumb1  from '../assets/img/breadcrumb/breadcrumb-bg-4.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/pages.css';

const Contact = () => {
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
                <h3 className="breadcrumb__title">Reach us</h3>
                <div className="breadcrumb__list">
                  <span><a href="Home">Home</a></span>
                  <span className="dvdr">/</span>
                  <span>Reach us</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Breadcrumb area end */}
      {/* Contact-us section start */}
      <section className='contact__section'>
        <Container>
          <Row>
            <Col md={8} lg={8}>
              <div class="postbox__comment-form-2">
                <h3 class="postbox__comment-form-title">Write a comment</h3>
                <form action="#">
                  <Row class="row">
                    <Col lg={6} md={6}sm={12}>
                      <div class="postbox__comment-input">
                        <input type="text" placeholder="Your Name"/>
                      </div>
                    </Col>
                    <Col  lg={6} md={6}sm={12}>
                      <div class="postbox__comment-input">
                        <input type="email" placeholder="Your Email"/>
                      </div>
                    </Col>
                    <Col lg={12}sm={12}>
                      <div class="postbox__comment-input">
                        <input type="text" placeholder="Subject"/>
                      </div>
                    </Col>
                    <Col lg={12}sm={12}>
                      <div class="postbox__comment-input">
                        <textarea placeholder="Enter your Message ..."></textarea>
                      </div>
                    </Col>
                    <div>
                      <div class="postbox__comment-btn">
                        <button type="submit" class="bd-btn">Submit<span>&#10230;</span></button>
                      </div>
                    </div>
                  </Row>
                </form>
              </div>
            </Col>
            {/* Contact-details section start */}
            <Col md={4} lg={4} style={{ display: 'flex',alignItems:'center',marginBottom: '65px',}}>
              <div class="pt-inner-sidebar ">
                <div class="tp-pt__inner-step ">
                  <h4>Address</h4>
                  <span>T - 121 & 124, A-5, Groovy Optiva, Sector-68,
                    Gautam Budha Nagar, U.P - 203101, India
                  </span>
                </div>
                <div class="tp-pt__inner-step ">
                  <h4>Call us</h4>
                  <span><a href='tel:+91-9999904050'>+91-99999 04050</a></span>
                </div>
                <div class="tp-pt__inner-step">
                  <h4>Email us</h4>
                  <span> <a href='mailto:info@iflextec.in'>info@iflextec.in</a></span>
                </div>
              </div>
            </Col>
             {/* Contact-details section end */}
          </Row>
        </Container>
      </section>
      {/* Contact-us section end */}
      {/* Map section start */}
      <section className='map'>
        <Container fluid>
          <div class="contact__map">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.85940833302!2d77.38821001508198!3d28.603994232429034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef9adb7ff33d%3A0x5e40a030fdeee53e!2sGrovy%20Optiva!5e0!3m2!1sen!2sae!4v1688221221438!5m2!1sen!2sae"
              width="100%"
              height="500"
              style={{ border: 0 , marginBottom: '20px'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </section>
      {/* Map section end */}
    </main>
  );
};

export default Contact;