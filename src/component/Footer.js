import React from 'react'
import "./componentcss/footer.css"
import boat from "./image/boat2.png"

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
    <div  className='waved waved1'>
      
    </div>
    <div  className='waved waved2'></div>
    <div  className='waved  waved3'></div>
    <div className='waved waved4'></div>
    </div>
  )
}

export default Footer