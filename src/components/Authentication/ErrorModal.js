import React from 'react'
import styled from 'styled-components'

const ErrorModal = (props) => {
    return (
        <Container className='flex-column'>
            <h3>There was a problem</h3>
            <p>
                {props.error}
            </p>
        </Container>
    )
}

export default ErrorModal

const Container = styled.div`
    border: 1px solid red;
    border-radius: 3px;
    width: 20rem;
    padding: 1rem;
    margin:auto;
    justify-content: center;
    align-items: center;

    h3 {
        color:red;
    }
`