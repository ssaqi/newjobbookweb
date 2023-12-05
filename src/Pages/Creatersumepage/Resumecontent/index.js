import React from 'react';
import './Styles.css'

function Resumecontent() {
    return (
        <div className='container-fluid'>
            <div className='card-body'>
                <h2 className='card-title text-center my-5'>Create Resume</h2>
            </div>

            <div className='container' style={{ height: '220px', backgroundColor: '#30BDB0' }}>
                <div className='row'>
                    <div className='col'>
                        {/* Name input */}
                        <div data-mdb-input-init='' className='form-outline'>
                            <div className='row'>
                                    <span className="text-start mx-2 text-white my-2">First Name</span>
                                <div className="input-group my-2">
                                    <input type="text" aria-label="First name" placeholder='First Name' className="form-control  " />

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        {/* Name input */}
                        <div data-mdb-input-init='' className='form-outline'>
                            <div className='row'>
                                    <span className="text-start mx-2 text-white my-2">Last Name</span>
                                <div className="input-group my-2">
                                    <input type="text" aria-label="First name" placeholder='Last Name' className="form-control" />

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='col'>
                        {/* Email input */}
                        <div data-mdb-input-init='' className='form-outline'>
                            <div className='row'>
                                    <span className="text-start mx-2 text-white my-2">Email</span>
                                <div className="input-group my-2">
                                    <input type="email" aria-label="email" placeholder='email@gmail.com' className="form-control" />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col my-2'>
                        {/* Name input */}
                        <div data-mdb-input-init='' className='form-outline'>
                            <div className='row'>
                                    <span className="text-start mx-2 text-white my-2">Date of Birth</span>
                                <div className="input-group my-2">
                                    <input type="date" aria-label="First name" placeholder='Date of Birth' className="form-control" />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-5' style={{ height: '90px', backgroundColor: '#30BDB0' }}>
                <div className='row'>
                            <span className='text-start mx-2 text-white my-2'>ID Card Number :</span>
                    <div className='col'>
                        <div className='input-group'>
                            <input type='text' aria-label='First name' placeholder='9 Digit Number'  className='form-control' />
                        </div>
                    </div>
                </div>

            </div>

            <div className='container d-flex justify-content-space between my-5' style={{ height: '400px', backgroundColor: '#30BDB0' }}>
              
            </div>
            
         <div className='container'>
         <div className="d-grid gap-2 col-2 mx-auto">
                <button className="btn btn-outline-success" type="button">
                    Submit
                </button>
                <button className="btn btn-success" type="button">
                   Upload Resume
                </button>
            </div>
         </div>
         
        </div>

    );
}

export default Resumecontent;
