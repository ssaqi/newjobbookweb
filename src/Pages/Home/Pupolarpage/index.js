import React from 'react';
import './Styles.css';
import ICON from '../../../Assests/categeryicon.png'
import ICONn from '../../../Assests/locationIco.png'
import Search from '../../../Assests/seachIcon.png'
const JobCard = ({ title, count }) => {
    return (
        <div className="col">
            <div className="card brdr">
                <div className="card-body" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <h6>{title}</h6>
                    <div className='con'>
                        <p className="card-text">{count}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Popularjob() {
    const jobData = [
        { id: 1, title: 'Full Stack Developer', count: 90 },
        { id: 2, title: 'UI/UX Designer', count: 450 },
        { id: 3, title: 'iOS Developer', count: 299 },
        { id: 4, title: 'Frontend Developer', count: 75 },
        { id: 5, title: 'Frontend Developer', count: 75 },
        { id: 6, title: 'Full Stack Developer', count: 90 },
        { id: 7, title: 'Frontend Developer', count: 75 },
        { id: 8, title: 'Frontend Developer', count: 75 },
        { id: 9, title: 'Frontend Developer', count: 75 },
        { id: 10, title: 'Frontend Developer', count: 75 },
        { id: 11, title: 'Frontend Developer', count: 75 },
        { id: 12, title: 'Frontend Developer', count: 75 },
        { id: 13, title: 'Frontend Developer', count: 75 },
        { id: 14, title: 'Frontend Developer', count: 75 },
        // Add more job data objects as needed
    ];


    return (
        <div className='containerStyle'>
            <div className="cardnh" style={{ width: "100%", }}>
                <h1 className='card-title text-center' style={{ fontSize: 48, fontWeight: "700", color: "#005049" }}>
                    Looking for a job now
                </h1>
                <br />
                <h6>Type in the name of the position, company or job category you are looking for</h6>

                <center>
                    <div className='containerjob' >

                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div className='icon'>
                                <img
                                 src={ICON}
                                 style={{width:"20px",marginTop:5}}
                                />
                            </div>
                            <input type='text'
                                placeholder='Category'
                                className='form-control'
                                style={{ border: "none", marginLeft: "20px" }}
                            />
                        </div>
                        <div className='line'>

                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div className='icon'>
                            <img
                                 src={ICONn}
                                 style={{width:"14px",marginTop:5}}
                                />
                            </div>
                            <input type='text'
                                placeholder='Location'
                                className='form-control'
                                style={{ border: "none", marginLeft: "20px" }}
                            />
                        </div>

                        <div className='searchbtn'>
                        <button type="button" className="btn btn-success searchbtn">
                        <img
                                 src={Search}
                                 style={{width:"14px",marginTop:5}}
                                />
                         <span style={{marginLeft:5}}>Search</span>
                        </button>
                        </div>

                    </div>
                </center>
            </div>
            <div style={{ marginTop: 50 }}>
                <h5>Popular Jobs</h5>
            </div>
            <div className='container d-flex' style={{ marginTop: 50 }} >
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {jobData.map((job) => (
                        <JobCard key={job.id} title={job.title} count={job.count} />
                    ))}
                </div>

            </div>
            <div style={{ marginTop: 50 }}>
                <h5>More Categories </h5>
            </div>
        </div>



    );
}

export default Popularjob;
