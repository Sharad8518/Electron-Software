import React from 'react'
import imgone from './image/imgrone.png'
import imgsecond from './image/imgsec.png'
import "./style.css"
import {Image}from 'react-bootstrap'
import {Container,Row,Col,Button} from "react-bootstrap"

function Home() {
  return (
    <>
      
  
   
    
     <h2 style={{textAlign:"center", marginTop:"100px",fontFamily:"DM Sans",fontWeight:"500"}}>Faster Bill Software in very low prize</h2>
    <Container   style={{marginTop:"50px"}}>
        <Row>
        <Col md={6}>
          
          <h3 style={{textAlign:"center"}}  >Information Of Software</h3>
          
          <p  style={{textAlign:"center"}}   >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the</p>
         
          
          </Col>
        <Col md={6}><Image class="img-fluid" alt="Responsive image" src={imgsecond}/></Col>
        </Row>
       </Container>
     
     
   
</>

  )
}

export default Home