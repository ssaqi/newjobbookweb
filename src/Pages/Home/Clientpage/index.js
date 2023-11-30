import React from 'react'
import './Style.css'
import IMG from '../../../Assests/Company logo (1).png'
import IMG1 from '../../../Assests/Company logo (2).png'
import IMG2 from '../../../Assests/Company logo (3).png'
import IMG3 from '../../../Assests/Company logo (4).png'
import IMG4 from '../../../Assests/Company logo (5).png'
import IMG6 from '../../../Assests/Companylogo.png'

function Clientpage() {
  return (
    <div className='container'>
      <h5 className='text-center' style={{color:"#005049"}}>
      Supported by 5k+ Companies
      </h5>
    
    <div className='d-flex dis my-5'>
       <div className='logo'>
        <img
        src={IMG}
        style={{width:"100%",height:"100%"}}
        />
       </div>

       <div className='logo'>
        <img
        src={IMG1}
        style={{width:"100%",height:"100%"}}
        />
       </div>


       <div className='logo'>
        <img
        src={IMG2}
        style={{width:"100%",height:"100%"}}
        />
       </div>


       <div className='logo'>
        <img
        src={IMG3}
        style={{width:"100%",height:"100%"}}
        />
       </div>


       <div className='logo'>
        <img
        src={IMG4}
        style={{width:"100%",height:"100%"}}
        />
       </div>



       <div className='logo'>
        <img
        src={IMG6}
        style={{width:"100%",height:"100%"}}
        />
       </div>

      
    </div>

    </div>
  )
}

export default Clientpage
