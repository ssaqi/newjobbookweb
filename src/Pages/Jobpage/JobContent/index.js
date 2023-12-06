import React, { useState } from 'react';
import './Styles.css';
import Companylogo from '../../../Assests/C.png';
import Bell from '../../../Assests/bellicon.png'
import ApplyModal from '../../../Components/Applyjobmodal';
import { Button } from 'react-bootstrap';

const jobsData = [
    {
        id: 1,
        title: 'Software Engineer',
        location: 'Austin, TX, US',
        description: 'Lorem ipsum dolor. With supporting text below as a natural lead-in to additional content. Be an early applicant.',
        imageUrl: Companylogo,
        postedDate: 'Software engineer in Austin, Texas',
    },
    {
        id: 2,
        title: 'Mobile Application',
        location: 'Austin, TX, US',
        description: 'Lorem ipsum dolor. With supporting text below as a natural lead-in to additional content. Be an early applicant.',
        imageUrl: Companylogo,
        postedDate: 'Software engineer in Austin, Texas',
    },
    {
        id: 3,
        title: 'Software Developer',
        location: 'Austin, TX, US',
        description: 'Lorem ipsum dolor. With supporting text below as a natural lead-in to additional content. Be an early applicant.',
        imageUrl: Companylogo,
        postedDate: 'Software engineer in Austin, Texas',
    },
    {
        id: 4,
        title: 'UI UX Designer',
        location: 'Austin, TX, US',
        description: 'Lorem ipsum dolor. With supporting text below as a natural lead-in to additional content. Be an early applicant.',
        imageUrl: Companylogo,
        postedDate: 'Software engineer in Austin, Texas',
    },
    {
        id: 5,
        title: 'Fluter Developer',
        location: 'Austin, TX, US',
        description: 'Lorem ipsum dolor. With supporting text below as a natural lead-in to additional content. Be an early applicant.',
        imageUrl: Companylogo,
        postedDate: 'Software engineer in Austin, Texas',
    },
    {
        id: 6,
        title: 'Laravel Developer',
        location: 'Austin, TX, US',
        description: 'Lorem ipsum dolor. With supporting text below as a natural lead-in to additional content. Be an early applicant.',
        imageUrl: Companylogo,
        postedDate: 'Software engineer in Austin, Texas',
    },
    {
        id: 7,
        title: 'Php Developer',
        location: 'Austin, TX, US',
        description: 'Lorem ipsum dolor. With supporting text below as a natural lead-in to additional content. Be an early applicant.',
        imageUrl: Companylogo,
        postedDate: 'Software engineer in Austin, Texas',
    },
    {
        id: 8,
        title: 'PowerBI Developer',
        location: 'Austin, TX, US',
        description: 'Lorem ipsum dolor. With supporting text below as a natural lead-in to additional content. Be an early applicant.',
        imageUrl: Companylogo,
        postedDate: 'Software engineer in Austin, Texas',
    },

    {
        id: 9,
        title: 'Laravel Developer',
        location: 'Austin, TX, US',
        description: 'Lorem ipsum dolor. With supporting text below as a natural lead-in to additional content. Be an early applicant.',
        imageUrl: Companylogo,
        postedDate: 'Software engineer in Austin, Texas',
    },
    {
        id: 10,
        title: 'Laravel Developer',
        location: 'Austin, TX, US',
        description: 'Lorem ipsum dolor. With supporting text below as a natural lead-in to additional content. Be an early applicant.',
        imageUrl: Companylogo,
        postedDate: 'Software engineer in Austin, Texas',
    },
    // Add more job objects as needed
];

function Jobcontent() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };
    const handleApplyClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-sm-6 mb-3 mb-sm-0'>
                    <div className='card jobcard'>
                        <div className='card-body'>
                            <div className='d-flex'>
                                <div className=' d-flex card-footer text-body-secondary'>
                                    {selectedJob ? selectedJob.postedDate : 'Software engineer in Austin, Texas' }
                                   <div className='d-flex mx-5' style={{justifyContent:"center",alignItems:"center"}}>
                                     <img
                                     src={Bell}
                                     style={{width:"20%",height:"20%",marginBottom:"15px"}}
                                     />
                                    <p className='text-center mx-1' style={{fontSize:"12px"}}>Job alert</p>
                                  
                                   </div>
                                   <div className='d-flex'  style={{justifyContent:"center",alignItems:"center"}}>
                                   <p className=''>iocn</p>
                                    <p className='text-end mx-1 '>Job alert</p>
                                  
                                   </div>
                                </div>
                            </div>
                            {jobsData.map((job) => (
                                <div key={job.id} className='card mb-3' onClick={() => handleJobClick(job)}>
                                    <div className='card-body'>
                                        <div className='d-flex mx-3 m-3'>
                                        
                                            <div>
                                                <h5 className='card-title text-start mx-3'>{job.title}</h5>
                                                <p className='card-title text-start mx-3' style={{ marginTop: '-6px' }}>
                                                    {job.location}
                                                </p>
                                                <p className='card-title text-start mx-3' style={{ marginTop: '-10px' }}>
                                                    {job.description}
                                                </p>
                                                <p className='card-title text-start mx-3' style={{ marginTop: '-10px' }}>
                                                    {job.postedDate}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='col-sm-6'>
                    {selectedJob && (
                        <div className='card' style={{ border: "none" }}>
                            <div className='card-body'>
                                <div className='d-flex mx-3 m-3'>
                                    <div className='companyprofile'>
                                        <img src={selectedJob.imageUrl} style={{ width: '40%', marginTop: '10px' }} alt='Company Logo' />
                                    </div>
                                    <div>
                                        <h5 className='card-title text-start mx-3'>{selectedJob.title}</h5>
                                        <p className='card-title text-start mx-3' style={{ marginTop: '-6px' }}>
                                            {selectedJob.location}
                                        </p>
                                        <p className='card-title text-start mx-3' style={{ marginTop: '-10px' }}>
                                            {selectedJob.description}
                                        </p>
                                        <p className='card-title text-start mx-3' style={{ marginTop: '-10px' }}>
                                            {selectedJob.postedDate}
                                        </p>

                                    </div>
                                </div>
                                <a href='#' className='btn btn-success recent me-3'>
                                    Save
                                </a>
                                {selectedJob && (
                            <Button variant='success' className='recent mx-2' onClick={handleApplyClick}>
                                Apply
                            </Button>
                        )}
                                <div className='d-flex my-3 '>
                                    <div className='view'>
                                        <h6 className='card-title text-start mx-3'>Job</h6>
                                        <li className='card-title text-start mx-2'>applicant</li>
                                        <li className='card-title text-start mx-2'>Mid Senior level</li>
                                    </div>


                                    <div className='view mx-2'>
                                        <h6 className='card-title text-start mx-3'>Company</h6>
                                        <li className='card-title text-start mx-2'>1005-5000 employees</li>
                                        <li className='card-title text-start mx-2'>Outsourcing/Offshoring</li>
                                    </div>
                                    <div className='view mx-2'>
                                        <h6 className='card-title text-start mx-3'>Connection</h6>
                                        <li className='card-title text-start mx-2'>You have 0 connection at
                                            this company</li>
                                        <li className='card-title text-start mx-2'>Add</li>
                                    </div>

                                </div>
                                <div>
                                    <h3 className='card-title text-start mx-2'>Job description</h3>
                                    <div className="row" >
                                        <div className="col-sm-6 mb-3 mb-sm-0" >
                                            <div className="card" style={{ border: "none" }}>
                                                <div className="card-body">
                                                    <h5 className='card-title text-start mx-2'>Summary</h5>
                                                    <p className='card-title text-start mx-2'>
                                                        We are seeking a passionate and dedicated Demo Specialist to help us spread the word about our amazing products.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0" >
                                            <div className="card" style={{ border: "none" }}>
                                                <div className="card-body">
                                                    <h5 className='card-title text-start mx-2'>Seniority Level</h5>
                                                    <p className='card-title text-start mx-2'>
                                                        Mid Senior level
                                                    </p>

                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0" >
                                            <div className="card" style={{ border: "none" }}>

                                                <div className="card-body">
                                                    <h5 className='card-title text-start mx-1'>Duties and Responsibilities</h5>
                                                    <p className='card-title text-start mx-2'>
                                                        <li>Set up and break down display and presentation tables</li>
                                                        <li> Provide information and marketing materials to customers</li>
                                                        <li>Present products in a clean and organized manner</li>
                                                        <li>Answer customer questions about the benefits of our products</li>
                                                    </p>

                                                </div>

                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card" style={{ border: "none" }}>
                                                <div className="card-body">
                                                    <h5 className='card-title text-start mx-1'>Industry</h5>
                                                    <p className='card-title text-start mx-2'>
                                                        Outsourcing/Offshoring

                                                    </p>

                                                </div>
                                            </div>

                                            <div className="card" style={{ border: "none" }}>
                                                <div className="card-body">
                                                    <h5 className='card-title text-start mx-1'>Employment</h5>
                                                    <p className='card-title text-start mx-2'>
                                                        Full-time

                                                    </p>

                                                </div>
                                            </div>
                                            <div className="card" style={{ border: "none" }}>
                                                <div className="card-body">
                                                    <h5 className='card-title text-start mx-1'>Job Functions</h5>
                                                    <p className='card-title text-start mx-2'>
                                                        Engineering

                                                    </p>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <ApplyModal
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                    jobTitle={selectedJob ? selectedJob.title : ''}
                />

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Jobcontent;
