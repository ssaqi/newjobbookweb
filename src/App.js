import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Footer from './Components/Footer/index.js';
import Nav from './Config/Navigation/index.js';
import Homepage from './Pages/Home/index.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <Footer/>
    </div>
  );
}

export default App;
