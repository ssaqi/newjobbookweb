import React from 'react';
import './Styles.css';
import IMG from '../../../Assests/microsoft.png';
import IMG1 from '../../../Assests/apple.png';
import IMG2 from '../../../Assests/google.png';
import IMG3 from '../../../Assests/dell.png';
import IMG4 from '../../../Assests/ibm.png';
import IMG5 from '../../../Assests/slack.png';
import LocationIcon from '../../../Assests/locationicon.png';
function AvailableJobs() {
  const jobData = [
    { id: 1, title: 'Microsoft', location: 'Washington, USA', count: "save", imageUrl: IMG, description: "Senior UX Developer" },
    { id: 2, title: 'Apple', location: 'California, USA', count: "save", imageUrl: IMG1,description: "Flutter Developer" },
    { id: 3, title: 'Google', location: ' Bangalore, India', count: "save", imageUrl: IMG2, description: "Product Designer" },
    { id: 4, title: 'Dell Inc.', location: 'Chennai, India', count: "save", imageUrl: IMG3, description: "3D Artist" },
    { id: 5, title: '  IBM', location: 'New York, USA', count: "save", imageUrl: IMG4, description: "Web Developer" },
    { id: 6, title: '  Slack', location: 'Washington, USA', count: "save", imageUrl: IMG5, description: "Java Programmer" },
    // Add more job data objects as needed
  ];
const JobCard = ({ title, location, count, imageUrl,description }) => {
    return (
      <div className="col">
        <div className="card crdbdy">
          <div className="card-body cdbody" >
            <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between", alignItems: "center" }}>
              <img src={imageUrl} alt={`${title} profile`} style={{ width: "40px", height: "40px", borderRadius: "50%", }} />
              <p className='card-tittle text-start' style={{marginRight:"140px",fontSize:15,fontWeight:"bold",padding:10}}>{title}</p>
              <div style={{display:"flex",flexDirection:"row", }}>
                <div>
                  
                <button className="btn btn-outline-success save"> {count}</button>
                </div>
              
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginTop: "-20px",marginLeft:"12%" }}>
              <img src={LocationIcon} alt="location icon" style={{ width: "10px", height: "10px", marginTop: "-5px",alignItems:"center" }} />
              <span style={{fontSize:12,marginTop:"-10px",marginLeft:"0.2rem"}}>{location}</span>
            </div>
            <hr/>
            <div style={{display:"flex",flexDirection:"column"}}>
            <p className='text-start' style={{ marginTop: "10px" }}>{description}</p>
                <p className='text-start' style={{ marginTop: "-10px",fontSize:12,fontWeight:"700" }}>Full time <span>Onsite</span></p>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"-20px"}}>
              <p>5 days ago</p>
              <button className="btn btn-success apply">Apply now</button>
            </div> 
          </div>
        </div>
      </div>

    );
  };


  return (
    <div className="cardnh" style={{ width: "100%" }}>
      <h1 className='card-title text-start p-3 my-5 mx-3' style={{ fontSize: 48, fontWeight: "700", color: "#005049" }}>
        Choose Our Available Jobs
      </h1>
      <br />
      <div className='container-fluid  buttoncon'>
        <div>
          <h6 className='text-start mx-5'>Find the following job that suits you and apply now</h6>
        </div>
        <div style={{ marginRight: "60px" }} >
          <button type="button" className="btn btn-success mx-5 recent">
            Recent
          </button>
          <button type="button" className="btn btn-outline-success save">
            Popular
          </button>
        </div>
      </div>

      <div className='container-fluid '>
        <div className='container d-flex' style={{ marginTop: 50 }} >
          <div className="row row-cols-1 row-cols-md-3 g-4">
          {jobData.map((job) => (
              <JobCard key={job.id} title={job.title} location={job.location} count={job.count} imageUrl={job.imageUrl} description={job.description} />
            ))}
          </div>
        </div>
        <p style={{marginTop:"120px"}}>Show all jobs</p>
      </div>
    </div>
  );
}

export default AvailableJobs;
