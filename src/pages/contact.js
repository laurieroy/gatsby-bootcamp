import React from 'react'

import Header from '../components/header';
import Foooter from '../components/footer'

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <p>The best way to reach me is by email: laurieroy.dev@gmail.com</p>

            <p>Check me out on <a href="https://www.linkedin.com/in/laurie-roy/" target="_blank" rel="noreferrer" >LinkedIn</a></p>
            <Foooter />
        </div>
    )
}

export default ContactPage