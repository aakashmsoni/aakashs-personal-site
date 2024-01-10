import * as React from "react"
import { Link } from "gatsby"
import "../styles/navbar.css"

export const Navbar = () => {
  return (
    <nav>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </div>
    </nav>
    
  )
}

