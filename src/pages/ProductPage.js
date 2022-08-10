import axios from 'axios'
import styled from 'styled-components'
import { Skeleton } from '@mui/material'
import { BoxLoader } from '../assets/Images'
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { ProductRating, ItemCarousel } from '../components'
import { ImageMagnifier, NoProductFound, PriceUI, BuyingSection, Accordion, ReplacementUi } from '../components/AboutProduct'

const ProductPage = () => {
    const { id, category } = useParams();
    const [product, setProduct] = useState()
    const [productFeatures, setProductFeatures] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        const FetchProduct = async () => {
            const result = await axios({
                method: 'get',
                url: `https://amazon-scraper.chipmunk092000.workers.dev/product/${id.replaceAll(`~`, '/')}`
            })
            if (result.data.product_detail !== null) {
                setProduct(result.data.product_detail)
                if (result.data.product_detail !== null) {
                    if (result.data.product_detail.features) setProductFeatures(result.data.product_detail.features)
                }
                setIsLoading(false)
            }
            else {
                setProduct(false)
                setIsLoading(false)
            }
        }
        FetchProduct()
    }, [id])

    let List = productFeatures.map((feature, index) => {
        return <li key={index}>{feature}</li>
    })

    return (
        <>
            <Container className='main-container'>
                <ItemCarouselContainer>
                    <h1>More of <span>{category}</span></h1>
                    <div><ItemCarousel data={category} /></div>
                </ItemCarouselContainer>
                <hr className='TopDivider' />
                {product === false ?
                    <NoProductFound />
                    :
                    <ProductContainer>
                        <ProductImageDiv>
                            {isLoading ?
                                <Skeleton variant='rectangular' width={"100%"} height={"100%"} />
                                :
                                (product.image &&
                                    <ImageMagnifier image={product.image} />
                                )
                            }
                        </ProductImageDiv>
                        {
                            isLoading ?
                                <LoadingDiv>
                                    <img src={BoxLoader} alt="" />
                                </LoadingDiv>
                                :
                                <ProductDataContainer>
                                    <ProductData className='flex-column'>
                                        <Heading>
                                            <div>
                                                {product.name && <h2>{product.name}</h2>}
                                                <Link to={'#'} className='color-link'><span>Visit the Store</span></Link>
                                            </div>
                                            <div>
                                                {product.rating_details.rating && <Link to={'#'} className='color-link'><ProductRating rating={product.rating_details.rating} /></Link>}
                                                {product.rating_details.ratings_count && <Link to={'#'} className='color-link'><span>{product.rating_details.ratings_count} Ratings</span></Link>}
                                            </div>
                                        </Heading>
                                        <hr />
                                        <PriceUI currentPrice={product.price} originalPrice={product.original_price} />
                                        <Accordion />
                                        <ReplacementUi />
                                        <Features>
                                            <h3>About this item</h3>
                                            <ul>{List}</ul>
                                        </Features>
                                    </ProductData>
                                    <BuyingSection currentPrice={product.price} originalPrice={product.original_price} stock={product.in_stock} />
                                </ProductDataContainer>
                        }
                    </ProductContainer>
                }
            </Container>
        </ >
    )
}

export default ProductPage

const Container = styled.section`
padding: 0 1rem 1rem;
    hr.TopDivider{
        width: 100%;
        border: 1px solid rgba(200,200,200,.5);
        margin: 1rem auto;
        border-radius: 50px;
    }

`
const ProductContainer = styled.div`
position: relative;
display: grid;
grid-template-columns: .9fr 1fr;
grid-gap: .5rem;
    @media (max-width:900px) {
        grid-template-columns: 1fr;
    }
`
const ItemCarouselContainer = styled.div`
display: grid;
grid-template-columns: auto 90%;
align-items: center;
grid-gap: .5rem;
padding:.5rem;
h1{
    font-size: 1.4rem;
    span {
        font-size: 1.2rem;
        color:var(--orange);
    }
}
.CarouselContainer{
    margin: 0;
    padding: 0;
    .slick-list{
        height: 80px !important;
    }
    .ImageContainer{
        height: 80px !important;
    }
    .slick-arrow{
        display: none !important;
    }
}
  
@media (max-width: 768px) {
    display:none ;
}
`

const ProductImageDiv = styled.div`
    min-height: 25rem;
    text-align: center;
    z-index: 10;
    @media (max-width:900px) {
        min-height: 15rem;
    }
`
const ProductDataContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    @media (max-width:900px) {
        grid-template-columns: 1fr;
    }
`
const ProductData = styled.div`
border:1px solid var(--lightgray);
    border-radius: 5px;
    padding: 0.5rem;
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
const Heading = styled.div`
    background-color: white;
    h2{
        font-family: 'Amazon-light';
        font-weight: 600;
    }
    ::-webkit-scrollbar{
        display:none;
    }
    @media(max-width:768px){
        position: absolute;
        top:0;
        left:0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        z-index: 10;
        gap:10px;
        max-height: 45px;
        overflow: auto;
        h2,a,span{
            font-size: .8rem !important;   
        }
    }
`
const Features = styled.ul`
margin:1rem 0;
    ul {
        padding: .5rem 0 .5rem 1.5rem;
        li {
            list-style: disc;
            font-weight:100;
            letter-spacing: .1px;
            margin-bottom:0.5rem;
        }
}    
`
const LoadingDiv = styled.div`
    min-height: 20rem;
    display: grid;
    place-items: center;
    img{
        width: 2.5rem;
    }
`