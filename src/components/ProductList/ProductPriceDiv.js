import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductPriceDiv = ({ name, ProductLink, product }) => {
    return (
        <Container className='flex-column product-price-div'>
            <Link to={`/product/${name}/${ProductLink}`}><p className='current-price flex'><span className='price-symbol'>&#8377;</span>{product.price}</p></Link>
            <p>From<span className='price-symbol'>&#8377;</span><span className='original-price'>{product.original_price}</span></p>
        </Container>
    )
}

export default ProductPriceDiv

const Container = styled.div`
    .price-symbol{
        font-size: .9rem;
        color: var(--orange);
        margin: .1rem;
    }
    .current-price{
        font-size: 1.3rem;
        color: var(--orange);
    }
    .original-price{
        text-decoration: line-through;
        color: gray;
    }

    @media (max-width:1024px) {
        .current-price{
            font-size: 1.1rem;
        }
        .original-price{
            font-size:.85rem;
        }
    }
`