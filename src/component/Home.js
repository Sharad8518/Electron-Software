import React, { useEffect } from 'react'
import imgone from './image/imgrone.png'
import imgsecond from './image/boat2.png'
import "./componentcss/style.css"
import {Image}from 'react-bootstrap'
import {Container,Row,Col,Button} from "react-bootstrap"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Topmenu from './Topmenu'

function Home() {
  useEffect(()=>{
      AOS.init({duration:2000})
  },[])
  return (
    <div className='box'>
      <Topmenu/>
     <Container>
       <Row>
         <Col md={6}>
          <h1 data-aos="fade-right" style={{marginTop:"100px",fontWeight:"900", color:"#fff"}}>Boat Power Of Sound</h1>
          <h4 style={{color:"#fff"}}>Stylish OverEar Headphones</h4>
    
          <p style={{color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        <Row>
        <Col md={12}  ><Button data-aos="fade-left" style={{marginLeft:"10px" ,backgroundColor:"transparent" ,color:"#000", borderRadius:"none" ,border:"2px solid black"}}   >More Details</Button>
        <Button  data-aos="fade-right" style={{ width:"130px",marginLeft:"10px" ,backgroundColor:"#fff" ,color:"#000", borderRadius:"none" ,border:"2px solid #fff"}}>Add Cart</Button>
        </Col>
       
        </Row>


         </Col>
         <Col md={6}>
         <Image data-aos="fade-left"   className="img-fluid" alt="Responsive image" src={imgsecond}/>
         </Col>

       </Row>
     



     </Container>

    </div>
  )
}

export default Home