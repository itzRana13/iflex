import React, { useState }  from 'react';
import  Breadcrumb1  from '../assets/img/breadcrumb/breadcrumb-bg-4.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/pages.css';
import { FaBriefcase } from "react-icons/fa6";
import JobApplicationForm from '../components/pages/JobApplicationForm'
import { useHistory } from 'react-router-dom';

const Career= () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Declare isPopupOpen state
  const history = useHistory(); 

  const containerStyle = {
    backgroundImage: `url(${Breadcrumb1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleApplyNowClick = () => {
    // Navigate to the form page when button is clicked
    history.push('/JobApplicationForm');
  };
  return (
    <main>
      {/* Breadcrumb area start */}
      <section className="breadcrumb__section " style={containerStyle}>
        <Container style={{padding:'50px'}}>
          <Row>
            <Col xxl={12}>
              <div className="breadcrumb__content ">
                <h3 className="breadcrumb__title">Career</h3>
                <div className="breadcrumb__list">
                  <span><a href="Home">Home</a></span>
                  <span className="dvdr">/</span>
                  <span>Career</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Breadcrumb area end */}

      {/* Career section start */}
      <div className='Career__section'>
        <Container>
          {/* <Row>
            <Col>
            <h3 className="job__title">Available Jobs</h3>
            </Col>
          </Row> */}
          <Container className='cont'>
            <Row>
              <Col >
                <Row className='job__content'>
                  <Col >
                    <div className='job__text'>
                      <h4><FaBriefcase/><span>UI/UX Developer</span></h4>
                      <p>lore nx ncjkcdsnc cjcsncksn c hjc ccs b hibisbsnkc jwjsbjnc bnjksbcn</p>
                    </div>
                    <div className='job__tags'>
                      <ul>
                        <li>Fulltime</li>
                        <li>Design</li>
                        <li>WFH/Onsite</li>
                      </ul>
                    </div>
                  </Col>
                  <Col style={{display:'inline-flex',alignItems:'center',justifyContent:'end' }}>
                    <button onClick={handleApplyNowClick} className="btn">Apply Now</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className='cont'>
            <Row>
              <Col >
                <Row className='job__content'>
                  <Col >
                    <div className='job__text'>
                      <h4><FaBriefcase/><span>UI/UX Developer</span></h4>
                      <p>lore nx ncjkcdsnc cjcsncksn c hjc ccs b hibisbsnkc jwjsbjnc bnjksbcn</p>
                    </div>
                    <div className='job__tags'>
                      <ul>
                        <li>Fulltime</li>
                        <li>Design</li>
                        <li>WFH/Onsite</li>
                      </ul>
                    </div>
                  </Col>
                  <Col style={{display:'inline-flex',alignItems:'center',justifyContent:'end' }}>
                    <button onClick={handleApplyNowClick} className="btn">Apply Now</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className='cont'>
            <Row>
              <Col >
                <Row className='job__content'>
                  <Col >
                    <div className='job__text'>
                      <h4><FaBriefcase/><span>Backend Developer</span></h4>
                      <p>lore nx ncjkcdsnc cjcsncksn c hjc ccs b hibisbsnkc jwjsbjnc bnjksbcn</p>
                    </div>
                    <div className='job__tags'>
                      <ul>
                        <li>Fulltime</li>
                        <li>Design</li>
                        <li>WFH/Onsite</li>
                      </ul>
                    </div>
                  </Col>
                  <Col style={{display:'inline-flex',alignItems:'center',justifyContent:'end' }}>
                    <button onClick={handleApplyNowClick} className="btn">Apply Now</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container><Container className='cont'>
            <Row>
              <Col >
                <Row className='job__content'>
                  <Col >
                    <div className='job__text'>
                      <h4><FaBriefcase/><span>UI/UX Developer</span></h4>
                      <p>lore nx ncjkcdsnc cjcsncksn c hjc ccs b hibisbsnkc jwjsbjnc bnjksbcn</p>
                    </div>
                    <div className='job__tags'>
                      <ul>
                        <li>Fulltime</li>
                        <li>Design</li>
                        <li>WFH/Onsite</li>
                      </ul>
                    </div>
                  </Col>
                  <Col style={{display:'inline-flex',alignItems:'center',justifyContent:'end' }}>
                    <button onClick={handleApplyNowClick} className="btn">Apply Now</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className='cont'>
            <Row>
              <Col >
                <Row className='job__content'>
                  <Col >
                    <div className='job__text'>
                      <h4><FaBriefcase/><span>UI/UX Developer</span></h4>
                      <p>lore nx ncjkcdsnc cjcsncksn c hjc ccs b hibisbsnkc jwjsbjnc bnjksbcn</p>
                    </div>
                    <div className='job__tags'>
                      <ul>
                        <li>Fulltime</li>
                        <li>Design</li>
                        <li>WFH/Onsite</li>
                      </ul>
                    </div>
                  </Col>
                  <Col style={{display:'inline-flex',alignItems:'center',justifyContent:'end' }}>
                    <button onClick={handleApplyNowClick} className="btn">Apply Now</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className='cont'>
            <Row>
              <Col >
                <Row className='job__content'>
                  <Col >
                    <div className='job__text'>
                      <h4><FaBriefcase/><span>UI/UX Developer</span></h4>
                      <p>lore nx ncjkcdsnc cjcsncksn c hjc ccs b hibisbsnkc jwjsbjnc bnjksbcn</p>
                    </div>
                    <div className='job__tags'>
                      <ul>
                        <li>Fulltime</li>
                        <li>Design</li>
                        <li>WFH/Onsite</li>
                      </ul>
                    </div>
                  </Col>
                  <Col style={{display:'inline-flex',alignItems:'center',justifyContent:'end' }}>
                    <button onClick={handleApplyNowClick} className="btn">Apply Now</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>

      </div>
      {/* Popup form */}
      {isPopupOpen && <JobApplicationForm onClose={togglePopup} />}
      {/* Career section end */}
    </main>
  );
};


export default Career;
