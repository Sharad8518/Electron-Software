import logo from './logo.svg';
import './App.css';
import {Container,Row,Col} from "react-bootstrap"
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
function App() {
  return (
    <div>
      <Home/>
      <br></br>
      <br></br>
   <About/>
   <br></br>
   <br></br>
   <Footer/>
    </div>
  );
}

export default App;
