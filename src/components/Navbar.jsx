import * as React from "react"
import { Link } from "gatsby"
import "../styles/navbar.css"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useRef, useEffect } from "react"
import { Modal } from "./Modal"

export function Navbar() {
  const [isShowResumeVisible, setIsShowResumeVisible] = useState(false);

  const handleClose = () => {
    setIsShowResumeVisible(false);
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  }

  return (
    <nav id="navbar">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="#about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="" onClick={() => setIsShowResumeVisible(true)}>Resume</Link> 
          <Modal show={isShowResumeVisible} onClose={handleClose}>
            <iframe src="https://cloudpdf.io/view/dbDdm_xHs" style={{width:750, height:650}} frameborder="0" title="resume"></iframe>
          </Modal>
          <a href="https://www.linkedin.com/in/aakashmsoni/">
            <StaticImage src="../images/linkedin.png" alt="linkedin" width={22} className="icons" />
          </a>
          <a href="https://www.github.com/aakashmsoni/">
            <StaticImage src="../images/github.png" alt="linkedin" width={22} className="icons" />
          </a>
        </div>
    </nav>
    
  )
}

