import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="about" />
            <h1>About Me</h1>
            <p>I am new developer coming from the science world where I mostly
                used Matlab,  and did some editing of files in JS, VB, python 
                and sometimes managed networks. Working as a technician on 
                Oceanographic research ships was engaging work that allowed me
                to meet interesting people, travel around the world, and 
                to enjoy water sports. 
            </p>
            <p>I enjoy learning and trying new things. I am now looking for a new place to live
                and work. For the first time in a decade, it'll be away from the coast. I look forward
                to more hiking and paddling! </p>
        </Layout>
    )
}

export default AboutPage