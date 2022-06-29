import React from 'react'
import styled from 'styled-components'
import { alertIcon } from '../../assets/Images'

const ErrorModal = (props) => {
    return (
        <Container className='flex'>
            <img src={alertIcon} alt="" />
            <div className='flex-column'>
                <h3>There was a problem</h3>
                <p>
                    {props.error}
                </p>
            </div>
        </Container>
    )
}

export default ErrorModal

const Container = styled.div`
    border: 1px solid var(--red);
    border-radius: 3px;
    max-width: 23rem;
    padding: 1rem;
    margin:auto;
    justify-content: space-evenly;
    align-items: center;
    /* gap: 1rem; */
    img {
        width: 4rem;
    }
    div {
        gap:0.1rem;
        h3 {
            color:var(--red);
            font-weight: 100;
        }
        p{
            color:var(--gray);
            font-size:1rem;
        }
    }
    
`