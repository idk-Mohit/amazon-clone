import React from 'react'
import styled from 'styled-components'

const CircleSelectorIcon = () => {
    return (
        <Container className='circleSelector'>
            <InnerCircle className='innerCircleSelector' />
        </Container>
    )
}

export default CircleSelectorIcon

const Container = styled.div`
    width:22px;
    height: 22px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid var(--gray);
    position: absolute;
    left:1rem;
    top:1rem;
`
const InnerCircle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
`