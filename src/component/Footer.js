import React,{useEffect} from 'react'
import "./componentcss/footer.css"
import boat from "./image/boat2.png"
import Wave from 'react-wavify'
import beach from './image/beachimg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBluetooth,FaCog, FaBatteryHalf,FaGithub,FaLinkedinIn,FaInstagram,FaFacebookF,FaItunesNote,} from "react-icons/fa";
import {Container,Row,Col,Image} from "react-bootstrap"

function Footer() {
  useEffect(()=>{
    AOS.init({duration:2000})
},[])
  return (
    <div className='boxFooter'>
   <Container >
    <Row>
    <Col md={3}  style={{marginTop:"100px"}}>
      <div data-aos="fade-right">
       <FaBluetooth  class=" mx-auto d-block" style={{width:"50px",height:"50px",color:"#fff"}}  />
    <p class=" mx-auto d-block" style={{textAlign:"center",fontSize:"13px",color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
    </div>

    <div data-aos="fade-right">
       <FaCog  class=" mx-auto d-block" style={{width:"50px",height:"50px",color:"#fff"}}  />
    <p class=" mx-auto d-block" style={{textAlign:"center",fontSize:"13px",color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
    </div>

    </Col>
    <Col md={6} style={{marginTop:"100px"}} >
     <Image className="img-fluid" alt="Responsive image" data-aos="fade-down"  src={boat}/>
    </Col>
    <Col md={3}  style={{marginTop:"100px"}}  >
    <div data-aos="fade-left">
       <FaBatteryHalf  class=" mx-auto d-block"  style={{width:"50px",height:"50px",color:"#fff"}} />
    <p class=" mx-auto d-block" style={{textAlign:"center",fontSize:"13px",color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
    </div>
    <div  data-aos="fade-left" >
       <FaItunesNote  class=" mx-auto d-block"  style={{width:"50px",height:"50px",color:"#fff"}} />
    <p class=" mx-auto d-block" style={{textAlign:"center",fontSize:"13px",color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
    </div>

    </Col>
    </Row>
    <br></br>
    <br></br> <br></br>
    <br></br>
    <Row>
      <Col>
      <div className='icons' style={{marginTop:"-100px"}}>
  <div className='fa'>
<FaFacebookF  style={{color:"#fff"}} className="iconf" />
</div>
<div  className='fa'>
<FaInstagram style={{color:"#fff"}} className="iconf"  />
</div>
<div className='fa'>
<FaLinkedinIn style={{color:"#fff"}} className="iconf"  />
</div>
<div className='fa'>
<FaGithub style={{color:"#fff"}} className="iconf"/>
</div></div>
      </Col>
    </Row>
   </Container>
   
   <div  style={{background:"#3f460f",marginBottom:"0px"}}>
    

       
   
    <Wave mask="url(#mask)" fill="#353535" style={{position:"absolute",marginBottom:"0px"}} >
  <defs>
   
    <linearGradient id="gradient" gradientTransform="rotate(150)">
      <stop offset="0" stopColor="white" />
      <stop offset="0.5" stopColor="black" />
    
    </linearGradient>
    <mask id="mask">
      <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />
    </mask>
  </defs>
</Wave> 
</div>

    </div>
  )
}

export default Footer