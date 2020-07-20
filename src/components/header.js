import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <title>Laurie Roy</title>
            <h1>
              <Link className={headerStyles.title}>
                Laurie Roy
              </Link>
            </h1> 
            <nav>
              <ul className={headerStyles.navList}>
                <li>
                  <Link className={headerStyles.link} to="/index">Home</Link> 
                </li>
                <li>
                  <Link className={headerStyles.link} to="/blog">Blog</Link>
                </li>
                <li>
                  <Link className={headerStyles.link} to="/about">About Me</Link> 
                </li>
                <li>
                  <Link className={headerStyles.link} to="/contact">Contact Me</Link>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header