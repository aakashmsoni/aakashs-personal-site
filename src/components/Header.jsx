import * as React from "react"
import { Link } from "gatsby"
import "../styles/header.css"

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    </header>
    
  )
}

