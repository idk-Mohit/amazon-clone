import React from 'react'
import styled from 'styled-components'
import { dotLoader } from '../../assets/Images'

const SubTotalAmount = ({ totalQty, loading, price }) => {
    return (
        <Container>
            <h4>{`Subtotal (${totalQty} item) :`}
                <span className='priceSymbol'>&#8377;</span>
                {loading ? <PriceLoader src={dotLoader} alt='' /> : price}
            </h4>
        </Container>
    )
}

export default SubTotalAmount

const Container = styled.div`
        margin: 1rem 0;
    .priceSymbol {
        color:var(--orange);
        margin:0 2px;
    }
    h4 {
        font-family: 'amazon-light';
        font-size: 1.3rem;
        display:flex;
        flex-wrap:wrap;
        align-items: center;
    }
`

const PriceLoader = styled.img`
    width:1.5rem;
    margin:0 .5rem;
`