import React from 'react'
import { Header, Footer } from '../components'
const LayOut = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default LayOut