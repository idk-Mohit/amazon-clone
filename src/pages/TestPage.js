import React from 'react'
import styled from 'styled-components'
// import { BuyingSection } from '../components'

const TestPage = () => {
    return (
        <Container>
            <div className="relative">
                {/* <BuyingSection currentPrice={1000} originalPrice={100} /> */}
            </div>
        </Container>
    )
}

export default TestPage

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    .relative {
        position: relative;
    }
`