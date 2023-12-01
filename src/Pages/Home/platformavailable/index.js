import React from 'react'
import Demo from '../../../Assests/demo.png'
import './Styles.css'
function Availableplatform() {
  return (
    <div className='container-fluid '>
 <div className="card" style={{ width: "100%",border:"none",marginTop:"30px" }}>
 <div className="card " style={{border:"none"}}>
 <div className="card-body ms-auto platform" >
  <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card" style={{backgroundColor:"#0DC3B1",border:"none"}}>
      <div className="card-body">
        <img
        src={Demo}
        style={{width:"50%",height:"80%"}}
        />
      </div>
    </div>
  </div>
  <div className="col-sm-4 my-5">
    <div className="card"  style={{backgroundColor:"#0DC3B1",border:"none"}}>
      <div className="card-body">
        <h1 className="card-title text-start text-white">Let’s start joining us and get a job</h1>
        <p className="card-text text-start text-white">
        Let’s join our platform at jobs me for an experience in finding a job that is easier and matches what you are looking for 
        </p>
        <a href="#" className="btn btn-success apply1">
        Join now
        </a>

        <a href="#" style={{marginLeft:"40px",color:"#fff"}}>
        Learn more
        </a>

      </div>
    </div>
  </div>
</div>

  </div>
</div>

  
</div>

    </div>
  )
}

export default Availableplatform
