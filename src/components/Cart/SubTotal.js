import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GreenTickIcon } from '../../assets/Images'
import SubTotalAmount from './SubTotalAmount'

const SubTotal = ({ totalQty, price, loading }) => {
    const clickHandler = () => {
        alert('This Functionality is currently in progress')
    }
    return (
        <Container>
            <Note>
                <div className="image">
                    <img src={GreenTickIcon} alt="" />
                </div>
                <div className="data">
                    <p>
                        <span>Your order is eligible for FREE Delivery.</span>
                        <br />
                        Select this option at checkout.
                        <Link className='colored-link' to={'#'}>Details</Link>
                    </p>
                </div>
            </Note>
            <SubTotalAmount totalQty={totalQty} price={price} loading={loading} />
            <button onClick={clickHandler}>Proceed to Buy</button>
        </Container>
    )
}

export default SubTotal

const Container = styled.aside`
    background: white;
    padding: 1rem;
    border-radius: 5px;
    height: fit-content;
    button {
        width: 100%;
    border-radius: 10px;
    padding:.5rem;
    letter-spacing: .5px;
    background: #FFD814;
    border-color: #FCD200;
    &:hover{
        box-shadow: 0px 2px 8px 0px rgba(0,0,0,.1);
    }
}
`
const Note = styled.div`
display: flex;
align-items: center;
font-size: 0.75rem;
    img {
        width:1.5rem;
        margin-right: 0.2rem;
    }
    p{
        font-family: 'Amazon-light';
        font-weight: 600;
    }
    span{
        color:var(--success-green);
    }
    a{
        margin-left: 2px;
    }
`