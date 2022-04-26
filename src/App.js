import logo from './logo.svg';
import './App.css';
import {Container,Row,Col} from "react-bootstrap"
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import Information from './component/Information';
function App() {
  return (
    <div>
  
      <Home/>
      <br></br>
      <br></br>
   <About/>
   <br></br>
   <Information/>
   <br></br>
   
   <Footer/>
    </div>
  );
}

export default App;
