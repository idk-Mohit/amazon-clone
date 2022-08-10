import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NoProduct = () => {
    return (
        <Container>
            <h1>Your Amazon Cart is empty.</h1>
            <p>Check your Saved for later items below or <Link className='colored-link' to={'/'}>continue shopping.</Link></p>
        </Container>
    )
}

export default NoProduct

const Container = styled.div`
    background: white;
    padding:2rem 1rem;
    border-radius: 1px;
    
    h1 {
        font-family: 'Amazon-light';
        font-weight: 600;
        margin-bottom: .4rem;
    }
    p{
        font-weight: 100;
        font-size: 0.9rem;
    }
`