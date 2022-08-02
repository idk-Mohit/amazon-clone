import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DeliveryDiv from './DeliveryDiv';
import ProductPriceDiv from './ProductPriceDiv';

const ProductCard = ({ name, ProductLink, product, NewProductName }) => {
    return (
        <Container>
            <Link to={`/product/${name}/${ProductLink}`} className="ProductViaImageLink flex" >
                <ImageContainer>
                    <img src={product.image} alt="" />
                </ImageContainer>
            </Link>
            <DataContainer>
                <Link to={`/product/${name}/${ProductLink}`}><ProductName className='product-name'>{NewProductName}</ProductName></Link>
                <ProductPriceDiv name={name} ProductLink={ProductLink} product={product} />
                <span className='productNote'>Flat INR 6000 Off on HDFC Bank Cards</span>
                <DeliveryDiv />
            </DataContainer>
        </Container>
    )
}

export default ProductCard

const Container = styled.div`
    display: grid;
    grid-template-columns: 30% auto;
    grid-gap: 1rem;
    border: 1px solid rgba(200,200,200,.4);
    border-radius: 5px;

.ProductViaImageLink{
    width: 100%;
    max-height:218px;
     height: auto;
    justify-content:center;
    overflow: hidden;
    @media (max-width:1024px) {
     
    }
}
`

const ImageContainer = styled.div` 
    width: inherit;
    height: inherit;
    position: relative;
img {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    max-height: 100%;
}
`
const DataContainer = styled.div`
padding: 1rem 1rem 1rem 0;
max-height: 218px;
a{
    color:black;
    &:hover {
        color:var(--orange)
    }
}
    .productNote {
        color: gray;
        font-size: .8rem;
    }
`
const ProductName = styled.h1`
    margin-bottom: .4rem;
    overflow: hidden;
    font-family: 'Amazon-light';
    font-weight: 600;
    font-size: 18px;

    @media (max-width:1024px) {
        font-size: 14px;
    }
`
