import * as React from "react"
import { Link } from "gatsby"
import "../styles/navbar.css"
import { StaticImage } from "gatsby-plugin-image"

export const Navbar = () => {
  return (
    <nav>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="">Resume</Link> 
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

