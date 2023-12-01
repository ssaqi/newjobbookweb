import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Homepage from './Pages/Home/index.js';
import Signupfrompage from './Pages/Signuppage/index.js';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Routes>
      <Route path="/" exact element={<Homepage />}/>
      {/* <Route path="/singup" element={<Signupfrompage/>}/> */}

      </Routes>
      
    </div>
  );
}

export default App;
