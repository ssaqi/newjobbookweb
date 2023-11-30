import React from 'react'
import LOGO from '../../Assests/logo.png'
import './Style.css'

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={LOGO} onResize={"center"} style={{ width: "80%", height: "80%" }} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Jobs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Test
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" >
                                    Premium
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">
                                    Create Resume
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <>
                                <button type="button" className="btn btn-success btnnn" >
                                Sign Up
                                </button>
                                <button type="button" className="btn btn-success btnnn" style={{marginLeft:"20px"}}>
                                Login
                                </button>
                            </>

                        </form>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Nav
