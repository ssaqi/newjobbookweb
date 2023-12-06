// ApplyModal.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import IMG from '../../Assests/profilementor.png'
import Download from '../../Assests/Download.png'

import './Styles.css'

const ApplyModal = ({ showModal, handleCloseModal, jobTitle, imageUrl }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [resumeFile, setResumeFile] = useState(null);
    const [resumeFileName, setResumeFileName] = useState('');

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };
    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        setResumeFile(file);
        setResumeFileName(file.name);
    };

    const handleDownloadResume = () => {
       
        const url = URL.createObjectURL(resumeFile);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf'; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className='container'>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <div className='container'>
                        <Modal.Title>Apply for {imageUrl || jobTitle || 'Job'}</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>

                        {currentStep === 1 && (
                            <>

                                <div className='d-flex companyprofile'>
                                    <img src={IMG} style={{ width: '40%' }} alt='Company Logo' />
                                    <h6 className='text-center ' style={{ fontSize: 13 }}>Alex Hudson <br /> <span style={{ fontSize: 9 }}>{jobTitle}</span> </h6>
                                </div>

                                <hr />
                                <label>First Name</label>
                                <div className='input-group mb-3'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='First Name'
                                    />
                                </div>
                                <label>Last Name</label>
                                <div className='input-group mb-3'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Last Name'
                                    />
                                </div>

                                <label>Phone Number</label>
                                <div className='input-group mb-3'>
                                    <input
                                        type="number"
                                        className='form-control'
                                        placeholder='Phone Number'
                                    />
                                </div>
                                <label>Email Address</label>
                                <div className='input-group mb-3'>
                                    <input
                                        type="email"
                                        className='form-control'
                                        placeholder='Email Address'
                                    />
                                </div>
                            </>
                        )}
                        {currentStep === 2 && (
                            <>
                                <h6>Home address</h6>
                                <hr />
                                <label>Street address line  1</label>
                                <div className='input-group mb-3'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Street address line  1'
                                    />
                                </div>
                                <label>City</label>
                                <div className='input-group mb-3'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='City'
                                    />
                                </div>
                                <label>State</label>
                                <div className='input-group mb-3'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='State'
                                    />
                                </div>
                                <label>Zip / Postal code</label>
                                <div className='input-group mb-3'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='266'
                                    />
                                </div>
                            </>
                        )}
                        {currentStep === 3 && (
                                  <>
                                  <h6>Resume</h6>
                                  <p>Be sure to include an upload resume *</p>
                                  <hr />
                                  <div className='d-flex align-items-center justify-content-between'>
                                      <div className='mb-3 '>
                                          <label className='custom-upload-btn'>
                                              PDF
                                              <input type="file" onChange={handleResumeUpload} />
                                          </label>
                                      </div>
                                      {resumeFile && (
                                          <div className='mb-3'>
                                              <span>{resumeFileName}</span>
                                              <Button  variant='secondary' onClick={handleDownloadResume} style={{width:"18rem",padding:10,backgroundColor:"#fff",border:"none"}}>
                                                  <img
                                                  src={Download}
                                                  style={{width:"10%"}}
                                                  />
                                              </Button>
                                          </div>
                                      )}
                                  </div>
                              </>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {currentStep > 1 && (
                        <Button variant='secondary' onClick={handleBack}>
                            Back
                        </Button>
                    )}
                    {currentStep < 2 && (
                        <Button variant='secondary' onClick={handleNext}>
                            Back
                        </Button>
                    )}
                    {currentStep < 3 && (
                        <Button variant='primary' onClick={handleNext}>
                            Next
                        </Button>
                    )}
                    {currentStep === 3 && (
                        <Button variant='success' onClick={handleCloseModal}>
                            Submit Application
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ApplyModal;
