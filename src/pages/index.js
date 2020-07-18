import React from "react"
import { Link } from 'gatsby'

import Header from '../components/header'
import Foooter from '../components/footer'

const IndexPage = () => {
  return (
    <div>
      <Header />

      <h1>Hello.</h1>
      <h2>I'm Laurie, a full-stack developer searching for my next adventure.</h2>

    
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
      <Foooter />
    </div>
  )
}

export default IndexPage