import React from 'react'
import Mainbannar from '../../Components/Mainbanner'
import Clientpage from './Clientpage'
import Worthpage from './Worthpage'
import Contentpage from './Contentpage'
import Popularjob from './Pupolarpage'
import Availablejobs from './Availablejob'
import Availableplatform from './platformavailable'
import Aboutapplication from './Applicationavailable'


function Homepage() {
  return (
    <div>
      <Mainbannar/>
      <Clientpage/>
      <Worthpage/>
      <Contentpage/>
      <Popularjob/>
      <Availablejobs/>
      <Availableplatform/>
      <Aboutapplication/>
    </div>
  )
}

export default Homepage
