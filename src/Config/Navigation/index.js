import React from 'react'
import LOGO from '../../Assests/logo.png'
import './Style.css'
import { Link } from 'react-router-dom'

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
                                <Link to={"/"}
                                 className="nav-link" aria-current="page" href="#">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/job'} className="nav-link" href="#">
                                    Jobs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/training'} className="nav-link" href="#">
                                    Training
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={'/premium'} className="nav-link " href="#" >
                                    Premium
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/resume'} className="nav-link " href="#">
                                    Create Resume
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <>
                               <Link to={'/singup'}>
                               <button type="button" className="btn btn-success btnnn" >
                                Sign Up
                                </button>
                                </Link> 
                                
                                <Link to={'/login'}>
                                <button type="button" className="btn btn-success btnnn" style={{marginLeft:"20px"}}>
                                Login
                                </button>
                                </Link>
                            </>

                        </form>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Nav
