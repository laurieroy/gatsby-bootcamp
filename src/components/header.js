import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <title>Laurie Roy</title>
            <h1>Laurie Roy</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/index">Home</Link> 
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/about">About Me</Link> 
                </li>
                <li>
                  <Link to="/contact">Contact Me</Link>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header