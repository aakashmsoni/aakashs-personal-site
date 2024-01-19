import * as React from "react"
import { Link } from "gatsby"
import "../styles/navbar.css"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useRef, useEffect } from "react"
import { Modal } from "./Modal"

export function Navbar() {
  // USE STATE HOOK FOR RESUME MODAL
  const [isShowResumeVisible, setIsShowResumeVisible] = useState(false);

  // USE STATE HOOK FOR HAMBURGER NAV
  const [nav, showNav] = useState(false);
  
  // CLOSE RESUME MODAL
  const handleClose = () => {
    setIsShowResumeVisible(false);
  }

  // HIDE TOP NAV ON DOWN SCROLL
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  scrollFunction();
  }

  // SHOW HAMBURGER NAV ICON ON DOWN SCROLL
  function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("hamburgerIcon").style.right = "20px";} else {
        document.getElementById("hamburgerIcon").style.right = "-50px";
        showNav(false);
      }
    }
  

  return (
    <nav id="navbar">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="#about">About</Link>
          <Link to="#skills">Toolkit</Link>
          <Link to="/projects">Projects</Link>
          <Link to="" onClick={() => setIsShowResumeVisible(true)}>Resume</Link> 
          <Modal show={isShowResumeVisible} onClose={handleClose}>
            <iframe src="https://cloudpdf.io/view/dbDdm_xHs" style={{width:750, height:650}} frameborder="0" title="resume"></iframe>
          </Modal>
          
          <button id="hamburgerIcon" className="hamburgerIcon" onClick={() => showNav(!nav)}>
            <span style={nav === true ? {transform: "rotate(45deg)"} : {transform: "rotate(0)"}}></span>
            <span style={nav === true ? {opacity: "0"} : {opacity: "1"}}></span>
            <span style={nav === true ? {transform: "rotate(-45deg)"} : {transform: "rotate(0)"}}></span>
          </button>
          <div id="hamburgerLinks" className="hamburgerLinks" style={nav === true ? {transform: "translateX(0)"} : {transform: "translateX(100%)"}}>
            <Link to="/" >Home</Link>
            <Link to="#about" >About</Link>
            <Link to="#skills">Toolkit</Link>
            <Link to="/projects" >Projects</Link>
            <Link to="" onClick={() => setIsShowResumeVisible(true)}>Resume</Link> 
          </div>
        </div>
    </nav>
    
  )
}

