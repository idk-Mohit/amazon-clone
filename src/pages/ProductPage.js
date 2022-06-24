import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import LayOut from './LayOut'
import { Loading } from '../assets/Images'
import { EMI_Section_IMG } from '../assets/Images'

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState()
    // const productId = id.replaceAll(`~`, '/')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        const FetchProduct = async () => {
            const result = await axios({
                method: 'get',
                url: `https://amazon-scraper.tprojects.workers.dev/product/${id.replaceAll(`~`, '/')}`
            })
            if (result.status) {
                console.log(result.data.product_detail)
                setProduct(result.data.product_detail)
                setIsLoading(false)
            }
            else {
                setProduct('Some Error Occured, Please Search Again!')
                setIsLoading(false)
            }
        }
        FetchProduct()
        // eslint-disable-next-line
    }, [])



    return (
        <LayOut>
            <Container>
                {
                    isLoading ? <div className='flex'><Loader src={Loading} alt="" /></div>
                        :
                        <ProductContainer>
                            <ProductImageDiv>
                                <img src={product.image} alt="" />
                            </ProductImageDiv>
                            <ProductData className='flex-column'>
                                <Heading>{product.name}</Heading>
                                <Link to={'#'} className='color-link'><span>Visit the Store</span></Link>
                                {product.rating_details.rating && <Link to={'#'} className='color-link'><span>Rating : {product.rating_details.rating}</span></Link>}
                                {product.rating_details.ratings_count && <Link to={'#'} className='color-link'><span>{product.rating_details.ratings_count} Ratings</span></Link>}
                                <hr />
                                <ProductPriceDiv className='product-price-div'>
                                    <p className='current-price flex'><span className='price-symbol'>&#8377;</span>{product.price}</p>
                                    <p>From <span className='price-symbol'>&#8377;</span><span className='original-price'>{product.original_price}</span></p>
                                    <span>Inclusive of all taxes <br />No cost EMI available</span>
                                </ProductPriceDiv>
                                <EMISection>
                                    <Accordian>
                                        <div><img src={EMI_Section_IMG} alt="" /></div>
                                    </Accordian>
                                </EMISection>
                            </ProductData>
                        </ProductContainer>}
            </Container>
        </LayOut>
    )
}

export default ProductPage

const Container = styled.section`
    margin: 105px 1rem 2rem;
    font-family: 'Amazon-light';
    min-height: 70vh;
`
const ProductContainer = styled.div`
display: grid;
grid-template-columns: 40% auto;
grid-gap: 2rem;
padding-top: 1rem;
`
const Loader = styled.img`
    margin:2rem auto;
    width: 5rem;
    height: 5rem;
`

const ProductImageDiv = styled.div`
    margin: auto;
    padding: 4rem 1rem;
    width: 100%;
    img {
        width: inherit;
        transition: 300ms ease all;
        cursor: pointer;
        &:hover {
            transition: 300ms ease all;
            transform: scale(1.1);
        }
    }
`
const ProductData = styled.div`
    hr{
        margin: 0.3rem;
        border: 1px solid rgba(200,200,200,.4);
    }
    .color-link {
    span{
    color: var(--blue);
    font-family: 'Amazon-light';
    font-size: 0.9rem;
    font-weight:600;
    }

    &:hover {
        span{
        color: var(--orange);
    text-decoration: underline;
        }

    }
}
`
const Heading = styled.h1`
    font-family: 'Amazon-light';
    font-weight: 600;
`
const ProductPriceDiv = styled.div`
    .price-symbol{
        font-size: 1rem;
        color: var(--orange);
        margin: .3rem .1rem 0 0;
    }
    .current-price{
        font-size: 1.8rem;
    }
    .original-price{
        text-decoration: line-through;
        color: gray;
        margin-bottom: 1rem;
    }
`
const EMISection = styled.div``
const Accordian = styled.div``