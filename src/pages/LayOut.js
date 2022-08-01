import React from 'react'
import { Footer, Header } from '../components'
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