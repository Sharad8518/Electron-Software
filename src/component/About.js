import React ,{useEffect}from 'react'
import {Container, Image,Row,Col} from"react-bootstrap"
import "./componentcss/About.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaGithub } from "react-icons/fa";
function About() {
  useEffect(()=>{
    AOS.init({duration:2000})
},[])
  return (
    <div>
   <Container style={{marginTop:"50px"}}>

<Row>
  <Col md={12}>
  <div className='mx-auto d-block'>
    <h3 data-aos="fade-up" style={{textAlign:"center" ,fontFamily:"DM sans",fontWeight:"600",fontSize:"35px"}}>SPECIFICATIONS</h3>
     <p style={{textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

  </div>
  
  </Col>


</Row>

     <Row>
       <Col md={4}>
       <div className='card  mx-auto d-block'data-aos="flip-left" >
  <div className='header'>
  <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{
position: "absolute",
width:"100px",
height: "100px",
objectFit: "cover",
marginTop: "50px",
marginLeft: "50%",
transform: "translateX(-50%)",
borderRadius:"50%"

  }} />
 <h2>Person</h2>
  </div>
  <div className='wave-container'></div>
  <div className='wave'></div>
  <div className='wave'></div>
  <div className='wave'></div>

<div className='icons'>
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
</div>
</div>

  </div>


       </Col>
       <Col md={4}>
       <div className='card  mx-auto d-block' data-aos="flip-left" >
  <div className='header'>
  <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{
position: "absolute",
width:"100px",
height: "100px",
objectFit: "cover",
marginTop: "50px",
marginLeft: "50%",
transform: "translateX(-50%)",
borderRadius:"50%"

  }} />
 <h2>Person</h2>
  </div>
  <div className='wave-container'></div>
  <div className='wave'></div>
  <div className='wave'></div>
  <div className='wave'></div>

<div className='icons'>
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
</div>
</div>

  </div>





       </Col>
       <Col md={4}  >
       <div className='card mx-auto d-block' data-aos="flip-left"  >
  <div className='header'>
  <Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{
position: "absolute",
width:"100px",
height: "100px",
objectFit: "cover",
marginTop: "50px",
marginLeft: "50%",
transform: "translateX(-50%)",
borderRadius:"50%"

  }} />
 <h2>Person</h2>
  </div>
  <div className='wave-container'></div>
  <div className='wave'></div>
  <div className='wave'></div>
  <div className='wave'></div>

<div className='icons'>
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
</div>
</div>

  </div>




       </Col>
 
  </Row>
  </Container>
    </div>
  )
}

export default About