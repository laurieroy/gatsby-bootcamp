import React from "React"


import Header from './header'
import Foooter from './footer'


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