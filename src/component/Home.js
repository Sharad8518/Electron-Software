import React from 'react'
import imgone from './image/imgrone.png'
import imgsecond from './image/imgsec.png'
import "./style.css"
import {Image}from 'react-bootstrap'
import {Container,Row,Col,Button} from "react-bootstrap"

function Home() {
  return (
    <div className='box'>

     <Container>
       <Row>
         <Col md={6}>
          <h1  style={{marginTop:"100px",fontWeight:"900", color:"#fff"}}>Beats Studio3</h1>
          <h4 style={{color:"#fff"}}>Stylish OverEar Headphones</h4>
    
          <p style={{color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        <Row>
        <Col md={12}  ><Button style={{marginLeft:"10px" ,backgroundColor:"transparent" ,color:"#000", borderRadius:"none" ,border:"2px solid black"}}   >More Details</Button>
        <Button  style={{ width:"130px",marginLeft:"10px" ,backgroundColor:"#fff" ,color:"#000", borderRadius:"none" ,border:"2px solid #fff"}}>Add Cart</Button>
        </Col>
       
        </Row>


         </Col>
         <Col md={6}>
         <Image className="img-fluid" alt="Responsive image" src={imgsecond}/>
         </Col>
       </Row>
     </Container>

    </div>
  )
}

export default Home