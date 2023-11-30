import React from 'react'
import IMG from '../../../Assests/Icon.png'
import IMG1 from '../../../Assests/lcon1.png'
import IMG2 from '../../../Assests/Icon2.png'

function Contentpage() {
    return (

        <div className='container' style={{marginTop:"50px"}}>
            <div className="cardnh" style={{ width: "100%", marginTop: "20px" }}>
                <h1 className='card-title text-center' style={{ fontSize: 48, fontWeight: "700", color: "#005049" }}>
                    More Easier to find a job <br />
                    <span style={{ color: "#005049" }}>with our platform</span></h1>
                {/* <img src={IMG1} className="card-img-top" alt="..."  /> */}
                <div className="card-body">
                    <h3 className='card-title text-center' style={{ fontSize: 18, fontWeight: "700", color: "#005049", marginTop: "20px" }}>
                        Neuralink-like Personalization
                    </h3>
                    <p className="card-text text-center" style={{ color: "#706D6E", fontSize: 22, marginTop: "20px" }} >
                        Neuralink-like Personalization

                        Imagine having a Neuralink-like connection to our platform,
                        where it understands your unique talents and aspirations.
                        We provide personalized job recommendations that align perfectly
                        with your skills and ambitions, empowering you to reach for the stars in your career.
                    </p>
                </div>
                <br />
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100" style={{border:"none"}}>
        <center>
      <img src={IMG} className="card-img-top" alt="..."  style={{width:"100px",height:"80px",marginTop:"20px"}} />
      </center>
      <div className="card-body">
        <h5 className="card-title">Easy Applying</h5>
        <p className="card-text">
        The process fo applying for job is easy and fast
        </p>
      </div>
  
    </div>
  </div>
  <div className="col">
    <div className="card h-100" style={{border:"none"}}>
        <center>
      <img src={IMG1} className="card-img-top" alt="..."  style={{width:"100px",height:"80px",marginTop:"20px"}} />
      </center>
      <div className="card-body">
        <h5 className="card-title">Many Vacancies</h5>
        <p className="card-text">
        There are many job vacancies from various company.
        </p>
      </div>
     
    </div>
  </div>
  <div className="col">
    <div className="card h-100" style={{border:"none"}}>
        <center>
      <img src={IMG2} className="card-img-top" alt="..." style={{width:"100px",height:"80px",marginTop:"20px"}} />
      </center>
      <div className="card-body">
        <h5 className="card-title">Best Support</h5>
        <p className="card-text">
        We provide full support for job seeker to achieve better result
        </p>
      </div>
    
    </div>
  </div>
</div>


        </div>

    )
}

export default Contentpage