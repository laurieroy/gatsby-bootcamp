import React from "React"

import Header from './header'
import Foooter from './footer'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Foooter />
        </div>
    )
}

export default Layout