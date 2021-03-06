import React from "react"
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Laurie, a full-stack developer searching for my next adventure.</h2>

      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
     
    </Layout>
  )
}

export default IndexPage