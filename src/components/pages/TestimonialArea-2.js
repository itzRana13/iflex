import React from 'react';
import '../../assets/css/TestimonialArea-2.css'; 
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import Team from '../../assets/img/team-1.jpg'
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
                        <Subtitle className='ts-section__subtitle'>Testimonial</Subtitle>
                        <Title className='ts-section__title ts-title-border'>What people say</Title>
                    </TitleWrapper>
                </Col>
            </Row>
            <Carousel  data-bs-theme="dark" className='carousel-2'>
                <Carousel.Item interval={2000} >
                    <CardGroup>
                        <Card className='card2'>
                            <Card.Img variant="top" src={Team} />
                            <Card.Body>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card2'>
                            <Card.Img variant="top" src={Team} />
                            <Card.Body>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card2'>
                            <Card.Img variant="top" src={Team} />
                            <Card.Body>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <CardGroup>
                        <Card className='card2'>
                            <Card.Img variant="top" src={Team} />
                            <Card.Body>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card2'>
                            <Card.Img variant="top" src={Team} />
                            <Card.Body>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='card2'>
                            <Card.Img variant="top" src={Team} />
                            <Card.Body>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </Container>
    </div>  
  );
};

export default TestimonialArea;
