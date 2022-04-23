import React from 'react'
import "./componentcss/Topmenu.css"
import { FaAlignRight} from "react-icons/fa";
import logo from "./image/logo.png"
import {Image} from "react-bootstrap"
function Topmenu() {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

  return (
    <div>
        
<div className="topnav" id="myTopnav">
<a href="#home" className="active"><Image  src={logo}  style={{width:"50px",height:"30px"}}/></a>
  <a href="#home" >Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
  <FaAlignRight    className="fa fa-bars" />
  </a>
</div>

    </div>
  )
}

export default Topmenu