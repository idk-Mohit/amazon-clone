import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ReplacementUi = () => {
    return (
        <Container>
            <div>
                <Link to={'#'} className='color-link'><span className='flex'>7-day replacement only <KeyboardArrowDownIcon fontSize='extrasmall' /></span></Link>
                <div className='replacementDivPopUp'><p>This item can't be returned to Amazon, if the item is "No longer needed". For device related issues, please contact the brand directly for resolution.</p></div>
            </div>
        </Container >
    )
}

export default ReplacementUi

const Container = styled.div`
    position: relative;
    a {
        width: fit-content;
        span{
            width: fit-content;
            align-items: center;
            gap: .4rem;
        }
    }

    &:hover .replacementDivPopUp{
        display: block;
    }
    .replacementDivPopUp{
        position: absolute;
        width: 100%;
        top: 1rem;
        z-index: 10;
        right: 40%;
        padding: 1rem;
        border: 1px solid var(--lightgray);
        border-radius: 5px;
        background-color: white;
        display: none;
        box-shadow: 0px 3px 14px 0px rgba(0,0,0,.4);
    }

`