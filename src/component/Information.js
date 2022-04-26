import React,{useEffect} from 'react'
import "./componentcss/Information.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Container,Row,Col,Button} from"react-bootstrap"

function Information() {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
  return (
    <div >
  
  <Container fluid >
    <Row>

    <Col md={6} className='boxIn'>
    <h4  style={{textAlign:"center", marginTop:"150px",color:"#fff"}} >What is Lorem Ipsum?</h4>
    <p style={{textAlign:"center",color:"#fff"}} data-aos="fade-right" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <Button className="mx-auto d-block" style={{background:"transparent" ,width:"150px",border:"2px solid #fff",borderRadius:"50px"}}  data-aos="fade-right">Read More</Button>
    </Col> 
    <Col md={6}  className='boxInsd' >
    <h4  style={{textAlign:"center", marginTop:"150px",color:"#fff"}}>What is Lorem Ipsum?</h4>
    <p style={{textAlign:"center",color:"#fff"}}  data-aos="fade-left" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <Button className="mx-auto d-block" style={{background:"transparent" ,width:"150px",border:"2px solid #fff",borderRadius:"50px"}}  data-aos="fade-left">Read More</Button>
    </Col>

    </Row>

  </Container>


    </div>
  )
}

export default Information