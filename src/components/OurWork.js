import React from 'react';
import  Breadcrumb1  from '../assets/img/breadcrumb/breadcrumb-bg-4.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/pages.css';


const Work = () => {
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
                <h3 className="breadcrumb__title">Our Work</h3>
                <div className="breadcrumb__list">
                  <span><a href="Home">Home</a></span>
                  <span className="dvdr">/</span>
                  <span>Our Work</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Breadcrumb area end */}

      {/* About us section start */}
      <div className='bd-contact__section '>
        <Container>
          <Row>
            <Col>
              <div>
                <h1>404: Page Not Found</h1>
                <p>The requested page does not exist.</p>
              </div>
            </Col>
            <Col>
       
            </Col>
          </Row>
        </Container>
      </div>
      {/* About us section end */}
    </main>
  );
};


export default Work;