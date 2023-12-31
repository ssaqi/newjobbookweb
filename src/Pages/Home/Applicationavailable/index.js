import React from 'react';
import MOCKUP from '../../../Assests/mockup.png';
import Googleplay from '../../../Assests/googleplay.png';
import Appstore from '../../../Assests/Appstore.png';
import './Styles.css';

function Aboutapplication() {
  return (
    <div className='container-fluid my-5' style={{ backgroundColor: "#C3EEE9" }}>
      <div className="card my-5" style={{ backgroundColor: "#C3EEE9", border: "none" }}>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0 my-5">
            <div className="card" style={{ backgroundColor: "#C3EEE9", border: "none" }}>
              <div className="card-body">
                <h1 className="card-title text-start mx-5">Download Our Free Mobile app Today</h1>
                <p className="card-text text-start mx-5">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
              <div className='container text-start mx-4 playstorebutton'>
                <a href="#" className="btn ">
                  <img
                    src={Googleplay}
                    className='googlebutton'
                  />
                </a>
                <a href="#" className="btn ">
                  <img
                    src={Appstore}
                    className='googlebutton'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-flex justify-content-center align-items-center">
            <div className="card" style={{ backgroundColor: "#C3EEE9", border: "none" }}>
              <div className="card-body">
                <img
                  src={MOCKUP}
                  className='image'
                  alt="Mockup"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutapplication;
