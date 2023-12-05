import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Homepage from './Pages/Home/index.js';
import Signupfrompage from './Pages/Signuppage/index.js';
import Loginfrompage from './Pages/Loginpage/index.js';
import Premiumpage from './Pages/Premiumpage/index.js';
import Traingpage from './Pages/Trainingpage/index.js';
import Jobpage from './Pages/Jobpage/index.js'

import { Routes, Route } from "react-router-dom";
import CreateResumepage from './Pages/Creatersumepage/index.js';

function App() {
  return (
    <div className="App">
    
      <Routes>
      <Route path="/" exact element={<Homepage />}/>
      <Route path="/singup" element={<Signupfrompage/>}/>
      <Route path="/login" element={<Loginfrompage/>}/>
      <Route path="/premium" element={<Premiumpage/>}/>
      <Route path="/training" element={<Traingpage/>}/>
      <Route path="/resume" element={<CreateResumepage/>}/>
      <Route path="/job" element={<Jobpage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
