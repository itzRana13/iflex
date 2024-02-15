import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Breadcrumb1  from '../../assets/img/breadcrumb/breadcrumb-bg-4.jpg'
import '../../assets/css/FormPopup.css'

const JobApplicationFormPopup = ({ onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      yearsOfExperience: '',
     // jobTitle: '',
      phoneNumber: '',
    //   linkedIn: '',
    //   coverLetter: '',
      resume: '',
      agreePrivacy: false
    });
  
    const handleChange = (e) => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      setFormData({
        ...formData,
        [e.target.name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission, e.g., send data to server
      console.log(formData);
      // Close the popup
      onClose();
    };
    const containerStyle = {
        backgroundImage: `url(${Breadcrumb1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return (
        <main>
            {/* Breadcrumb area start */}
            <section className="breadcrumb__section " style={containerStyle}>
                <Container style={{padding:'50px'}}>
                    <Row>
                        <Col xxl={12}>
                            <div className="breadcrumb__content ">
                                <h1 className="form__title" style={{textAlign:'center'}}>Fill this Form</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='apply_form'>
                <div className="popup" >
                    <div className="popup-inner" >
                        {/* <h2>Fill this Form</h2> */}
                        <form onSubmit={handleSubmit} className='form1' >
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            <label>Years of Experience:</label>
                            <input type="number" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} />
                            {/* <label>Current/Previous Job Title:</label>
                            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} /> */}
                            <label>Phone Number:</label>
                            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                            {/* <label>LinkedIn Account:</label>
                            <input type="text" name="linkedIn" value={formData.linkedIn} onChange={handleChange} /> */}
                            <label>Upload a Resume:</label>
                            <input type="file" name="resume" onChange={handleChange} />
                            <div>
                                <input type="checkbox" name="agreePrivacy" checked={formData.agreePrivacy} onChange={handleChange} required style={{width:'10%'}}/>
                                <label htmlFor="agreePrivacy">I have read and agree to the Privacy Notice</label>
                            </div>
                            <button type="submit" className='btn2'>Submit</button>
                            {/* <button onClick={onClose} >Close</button> */}
                        </form>
          
                    </div>
                </div>
            </section>
           
        </main>
    );
  };


export default JobApplicationFormPopup;
