import React from 'react'
import './Style.css'
function Mainbannar() {
   return (
      <>
        <div className="card main">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0" style={{ marginTop: 90 }}>
            <div className="card-body">
             
              <h1 className="card-title big">Discover </h1>
                 <h4 className="card-title head"> Your Path to Success</h4>

            <div className='containercontry'>
            
             <div>
               <input type='text'
               placeholder='Job title or keywords'
               className='form-control'
               />
             </div>
             <div className='line'>

             </div>
             <div>
             <input type='text'
               placeholder='Country'
               className='form-control'
               />
             </div>

             <button className='btn btn-success arrowbtn'>
             <svg xmlns="http://www.w3.org/2000/svg" width="46" height="36" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" className='arrowicon'>
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
             </button>

            </div>
            </div>
          </div>
        </div>
      </div>

      </>
   )
}

export default Mainbannar
