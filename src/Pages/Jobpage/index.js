import React from 'react'
import Nav from '../../Config/Navigation'
import Footer from '../../Components/Footer'
import BorderPremium from '../Premiumpage/Borderpremiumpage'
import Jobcontent from './JobContent'

function Jobspage() {
  return (
    <div>
      <Nav/>
      <BorderPremium/>
      <Jobcontent/>
      <Footer/>
    </div>
  )
}

export default Jobspage
