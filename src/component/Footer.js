import React from 'react'
import "./componentcss/footer.css"
import boat from "./image/boat2.png"
import Wave from 'react-wavify'
import { FaBluetooth,FaCog, FaBatteryHalf,FaItunesNote} from "react-icons/fa";
import {Container,Row,Col,Image} from "react-bootstrap"

function Footer() {
  return (
    <div className='boxFooter'>
   <Container >
    <Row>
    <Col md={3}  style={{marginTop:"100px"}}>
      <div >
       <FaBluetooth  class=" mx-auto d-block" style={{width:"50px",height:"50px",color:"#fff"}}  />
    <p class=" mx-auto d-block" style={{textAlign:"center",fontSize:"13px",color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
    </div>

    <div >
       <FaCog  class=" mx-auto d-block" style={{width:"50px",height:"50px",color:"#fff"}}  />
    <p class=" mx-auto d-block" style={{textAlign:"center",fontSize:"13px",color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
    </div>

    </Col>
    <Col md={6} style={{marginTop:"100px"}} >
     <Image className="img-fluid" alt="Responsive image" src={boat}/>
    </Col>
    <Col md={3}  style={{marginTop:"100px"}}  >
    <div >
       <FaBatteryHalf  class=" mx-auto d-block"  style={{width:"50px",height:"50px",color:"#fff"}} />
    <p class=" mx-auto d-block" style={{textAlign:"center",fontSize:"13px",color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
    </div>
    <div >
       <FaItunesNote  class=" mx-auto d-block"  style={{width:"50px",height:"50px",color:"#fff"}} />
    <p class=" mx-auto d-block" style={{textAlign:"center",fontSize:"13px",color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
    </div>

    </Col>
    </Row>
   </Container>
   
   
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
  )
}

export default Footer