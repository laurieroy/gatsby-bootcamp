import React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>The best way to reach me is by email: laurieroy.dev@gmail.com</p>

            <p>Check me out on <a href="https://www.linkedin.com/in/laurie-roy/" target="_blank" rel="noreferrer" >LinkedIn</a></p>
        </Layout>
    )
}

export default ContactPage