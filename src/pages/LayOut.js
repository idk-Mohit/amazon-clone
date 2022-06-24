import React, { useEffect } from 'react'
import { Header, Footer } from '../components'

const LayOut = (props) => {

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default LayOut