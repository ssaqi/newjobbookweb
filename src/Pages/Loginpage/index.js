import React from 'react'
import LOGO from '../../Assests/logo.png'
import SideImg from '../../Assests/loginsideimg.png'
import IMG from '../../Assests/imagelogin.png'
import Facebook from '../../Assests/facebook.png'
import GOOGLE from '../../Assests/googleiconbtn.png'

function Loginfrompage() {
    return (

        <div className='continer mainconsignup'>
            <div className='container mainDiv'>
                <div className='container my-3'>
                    <div className="row" style={{ border: "none" }} >
                        <div className="col-sm-6 mb-3 mb-sm-0  "
                         >
                            <div className="card card-no-border" style={{ backgroundColor: "#82DFC0", opacity: "0.9", border: "none" }} >
                                <div className="card-body card-no-border cdimg"  >
                                    <h5 className="card-title text-start">
                                        <img
                                            src={LOGO}
                                            style={{ width: "50%", height: "80%" }}
                                        />
                                    </h5>

                                    <img
                                        src={SideImg}
                                        style={{ width: "60%", height: "60%" }}
                                        className="card-text text-center my-5"
                                    />


                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 card-no-border-radius">
                            <div className="card" style={{ border: "none" }}>
                                <div className="card-body">
                                    <div className='text-end singinbtn'>
                                        <h6 className='card-title me-3'>Already have an account?</h6>
                                        <button className='btn btn-outline-success popular'>
                                            SINGIN
                                        </button>
                                    </div>
                                    <h1 className="card-title text-start mx-2">
                                        <img
                                            src={IMG}
                                            style={{ width: "8%" }}


                                        />
                                    </h1>
                                    <h1 className="card-title text-start mx-2">Log in to your Account</h1>
                                    <h6 className="card-title text-start mx-2">Welcome back! Select method to log in</h6>


                                    <div className='my-5'>
                                        <button type="button" className="btn btn-outline-success mx-3">
                                            <img
                                            src={GOOGLE}
                                            style={{width:"20px",height:"20px",marginRight:"5px"}}
                                            />
                                            Large button
                                        </button>
                                        <button type="button" className="btn btn-outline-success">
                                        <img
                                            src={Facebook}
                                            style={{width:"11px",height:"18px",marginRight:"5px"}}
                                            /> Large button
                                        </button>
                                    </div>
                                    <h5>Create account with</h5>

                                    <div className='container my-4'>

                                        <div className="mb-3">
                                            <h5 htmlFor="exampleFormControlInput1" className="form-label text-start">
                                                Email address
                                            </h5>
                                            <input
                                                type="email"
                                                className="form-control inp "
                                                id="exampleFormControlInput1"
                                                placeholder="name@example.com"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <h5 htmlFor="exampleFormControlInput1" className="form-label text-start">
                                                Password
                                            </h5>
                                            <input
                                                type="password"
                                                className="form-control inp"
                                                id="exampleFormControlInput1"
                                                placeholder="password"
                                            />
                                        </div>

                                    </div>

                                </div>

                                <button className="btn btn-outline-success mx-4 ">
                                    login
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Loginfrompage
