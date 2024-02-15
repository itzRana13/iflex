import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/css/contactform.css'


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };
  
    return (
        <section className='contact-form-section'>
            <Container>
                <Row>
                    <Col>
                        <div className="contact-form-info mb-30 wow fadeInUp">
                            <h3 className="contact-form-title text-white">WANT TO START A PROJECT?</h3>
                            <span>It's Simple </span>
                        </div>
                    </Col>
                    <Row>
                        <Col className="txt-center">
                            <div className="postbox__comment-form ">
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
                                            <div className="postbox__comment-input">
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    className="in"
                                                    name="name"
                                                    value={formData.name}
                                                 onChange={handleChange}
                                                />
                                            </div>
                                        </Col>
                                        <Col className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
                                            <div className="postbox__comment-input">
                                                <input
                                                    type="text"
                                                    placeholder="Company Name"
                                                    name="companyName"
                                                   value={formData.companyName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </Col>
                                        <Col className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
                                            <div className="postbox__comment-input">
                                                <input
                                                    type="text"
                                                    placeholder="Phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </Col>
                                        <Col className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
                                            <div className="postbox__comment-input">
                                                <input
                                                    type="email"
                                                    placeholder="Your Email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </Col>
                                        <Col className="col-xxl-12">
                                            <div className="postbox__comment-input">
                                                <textarea
                                                    placeholder="Enter your Message ..."
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </Col>
                                        <Col className="col-xxl-12 txt-left">
                                            <div className="postbox__comment-input">
                                                <h4>{' '}
                                                    <input
                                                        type="file"
                                                        id="myFile"
                                                        name="filename"
                                                        className="pt-18"
                                                    ></input>
                                                </h4>
                                                <p>File must be less than 5 MB.</p>
                                            </div>
                                        </Col>
                                        <Col className="col-xxl-12">
                                            <div className="postbox__comment-btn">
                                                <button type="submit" className="bd-btn"> Submit<span>&#10230;</span></button>
                                                <p>By submitting this form I give my consent for Iflexion to
                                                    process my personal data pursuant to Iflexion Privacy and
                                                    Cookies Policy.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </section>
    );
};

export default ContactForm;
