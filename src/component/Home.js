import React from 'react'
import imgone from './image/imgrone.png'
import imgsecond from './image/imgsec.png'
import "./style.css"
import {Image}from 'react-bootstrap'
import {Container,Row,Col,Button} from "react-bootstrap"

function Home() {
  return (
    <div>
    <h2 style={{textAlign:"center", marginTop:"100px",fontFamily:"DM Sans",fontWeight:"500"}}>Faster Bill Software in very low prize</h2>
<Container style={{marginTop:"50px"}}>
    <Row>
    <Col md={6}>
      
      <h3 style={{fontFamily:"Dm Sans",textAlign:"center",marginTop:"50px"}}  >Information Of Software</h3>
      
      <p  style={{fontFamily:"Dm Sans", textAlign:"center"    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the</p>
      <Row>

      <Col>
         <Button style={{width:"200px",background:"black",fontFamily:"Dm sans" ,borderRadius:"20px"}} className="mx-auto d-block"   >See Demo</Button>
      </Col>
      <Col>
        <Button style={{width:"200px" ,background:"black",fontFamily:"Dm sans",borderRadius:"20px"  }} className="mx-auto d-block"  >Start work</Button>
      </Col>
      </Row>
      
      </Col>
    <Col md={6} ><Image src={imgsecond} className="mx-auto d-block imgBox"  style={{width:"470px",height:"100"}}  /></Col>
    </Row>
   </Container>

    </div>
  )
}

export default Home