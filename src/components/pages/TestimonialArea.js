import React from 'react';
import '../../assets/css/TestimonialArea.css'; 
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaCode,FaConnectdevelop, FaPenNib,FaFileCode,FaShoppingBag,FaMobile  } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';


const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scale = keyframes`
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  text-align: center;
  animation: ${fadeInUp} 1s ease-in-out;
`;

const Title = styled.h3`
  position: relative;
  display: inline-block;
  margin-bottom: 5px;
  &::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    content: "";
    width: 30px;
    height: 3px;
    display: inline-block;
    background-color: black;
    animation: ${scale} infinite 3s;
  }
`;

const Subtitle = styled.span`
  display: block;
  margin-bottom: 5px;
`;

const TestimonialArea = () => {
  
  
  return (
    <div class="testimonial__area ">
      <Container>
        <Row>
          <Col>
            <TitleWrapper className='ts-section__title-wrapper'>
              <Subtitle className='ts-section__subtitle'>PROMISE OF QUALITY</Subtitle>
              <Title className='ts-section__title ts-title-border'>WHAT WE DO</Title>
            </TitleWrapper>
          </Col>
        </Row>
        <Carousel  data-bs-theme="dark">
          <Carousel.Item interval={2000}>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <div className='icons'>
                    <FaCode/>
                  </div>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link> Read More <FaArrowRightLong/></Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>MIS Development</Card.Title>
                  <div className='icons'>
                    <FaConnectdevelop/>
                  </div>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link> Read More <FaArrowRightLong/></Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Ecommerce Solutions</Card.Title>
                  <div className='icons'>
                    <FaPenNib />
                  </div>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link> Read More <FaArrowRightLong/></Link>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>App Development</Card.Title>
                  <div className='icons'>
                    <FaFileCode/>
                  </div>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link> Read More <FaArrowRightLong/></Link>
                </Card.Footer>
              </Card>
              <Card> 
                <Card.Body>
                  <Card.Title>Digital Marketing</Card.Title>
                  <div className='icons'>
                    <FaShoppingBag/>
                  </div>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link> Read More <FaArrowRightLong/></Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Motion Videos</Card.Title>
                  <div className='icons'>
                    <FaMobile/>
                  </div>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link> Read More <FaArrowRightLong/></Link>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item> 
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>Outsource</Card.Title>
                  <div className='icons'>
                    <FaFileCode/>
                  </div>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link> Read More <FaArrowRightLong/></Link>
                </Card.Footer>
              </Card>
              <Card> 
                <Card.Body>
                  <Card.Title>UI/UX Design</Card.Title>
                  <div className='icons'>
                    <FaFileCode/>
                  </div>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link> Read More <FaArrowRightLong/></Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <div className='icons'>
                    <FaFileCode/>
                  </div>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link> Read More <FaArrowRightLong/></Link>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default TestimonialArea;
