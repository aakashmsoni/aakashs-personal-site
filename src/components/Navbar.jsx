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


  return (
    <nav>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="" onClick={() => setIsShowResumeVisible(true)}>Resume</Link> 
          <Modal show={isShowResumeVisible} onClose={handleClose}>
            <iframe src="https://cloudpdf.io/view/dbDdm_xHs" style={{width:750, height:650}} frameborder="0"></iframe>
          </Modal>
          <a href="https://www.linkedin.com/in/aakashmsoni/">
            <StaticImage src="../images/linkedin.png" alt="linkedin" width={22} />
          </a>
          <a href="https://www.github.com/aakashmsoni/">
            <StaticImage src="../images/github.png" alt="linkedin" width={22} />
          </a>
        </div>
    </nav>
    
  )
}

