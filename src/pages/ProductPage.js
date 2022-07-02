import axios from 'axios'
import LayOut from './LayOut'
import styled from 'styled-components'
import { Skeleton } from '@mui/material'
import Tilt from 'react-parallax-tilt';
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Accordian, ProductRating, PriceUI, BuyingSection, ItemCarousel } from '../components'


const ProductPage = () => {
    // const FetchDataCtx = useContext(FetchDataContext)
    const { id, category } = useParams();
    const [scale, setScale] = useState(1.15);
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
                setProduct('Product Not Found')
                setIsLoading(false)
            }
        }
        FetchProduct()
        // eslint-disable-next-line
    }, [id])


    let List = productFeatures.map((feature, index) => {
        return <li key={index}>{feature}</li>
    })


    return (
        <LayOut>
            <Container>
                <ItemCarouselContainer>
                    <h1>More of <span>{category}</span></h1>
                    <div><ItemCarousel data={category} /></div>
                </ItemCarouselContainer>
                <hr className='TopDivider' />
                {product === 'Product Not Found' ? <ProductContainer>
                    {product}
                </ProductContainer> : <ProductContainer>
                    <ProductImageDiv>
                        {isLoading ? <Skeleton variant='rectangular' width={"100%"} height={"100%"} /> :
                            <div className='flex-column'>
                                {product.image &&
                                    <Tilt scale={scale} transitionSpeed={2500}>
                                        <div className="tilt-scale">
                                            <img src={product.image} alt="" />
                                            <div className="header">
                                                <div id='ImageScaler'>
                                                    <div className="form">
                                                        <input
                                                            type="range"
                                                            min="0.7"
                                                            max="1.5"
                                                            step="0.01"
                                                            value={scale}
                                                            onChange={(ev) => setScale(parseFloat(ev.target.value))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </Tilt>}
                                < span > Hover to Zoom In</span>
                            </div>}
                    </ProductImageDiv>
                    <ProductData className='flex-column'>
                        {isLoading ? <Skeleton variant='rectangular' width={"100%"} height={"50%"} /> : <>{product.name && <Heading>{product.name}</Heading>}
                            <Link to={'#'} className='color-link'><span>Visit the Store</span></Link>
                            {product.rating_details.rating && <Link to={'#'} className='color-link'><ProductRating rating={product.rating_details.rating} /></Link>}
                            {product.rating_details.ratings_count && <Link to={'#'} className='color-link'><span>{product.rating_details.ratings_count} Ratings</span></Link>}</>}
                        <hr />
                        {isLoading ? <Skeleton variant='rectangular' width={"100%"} height={"100%"} /> : <PriceUI currentPrice={product.price} originalPrice={product.original_price} />}
                        {!isLoading && <>
                            <EMISection>
                                <Accordian />
                            </EMISection>
                            <ReplacementDiv>
                                <Link to={'#'} className='color-link'><span className='flex'>7-day replacement only <KeyboardArrowDownIcon fontSize='extrasmall' /></span></Link>
                                <div className='replacementDivPopUp'><p>This item can't be returned to Amazon, if the item is "No longer needed". For device related issues, please contact the brand directly for resolution.</p></div>
                            </ReplacementDiv>
                        </>}
                        {!isLoading &&
                            <Features>
                                <h3>About this item</h3>
                                <ul>{List}</ul>
                            </Features>
                        }
                    </ProductData>
                    {isLoading ? <Skeleton variant='rectangular' width={"100%"} height={"100%"} /> : <BuyingSection currentPrice={product.price} originalPrice={product.original_price} stock={product.in_stock} />}
                </ProductContainer>}
            </Container>
        </LayOut >
    )
}

export default ProductPage

const Container = styled.section`
    margin: 105px 1rem 2rem;
    font-family: 'Amazon-light';
    min-height: 70vh;

    hr.TopDivider{
        width: 95%;
        border: 1px solid rgba(200,200,200,.5);
        margin: 1rem auto;
        border-radius: 50px;
    }

`
const ProductContainer = styled.div`
display: grid;
grid-template-columns: 1.8fr 1fr .8fr;
grid-gap: .5rem;
`
const ItemCarouselContainer = styled.div`
display: grid;
grid-template-columns: auto 90%;
align-items: center;
grid-gap: .5rem;
h1{
    font-size: 1.4rem;
    span {
        font-size: 1.2rem;
        color:var(--orange);
    }
}
.CarouselContainer{
    margin: 0;
    .ImageContainer{
        height: 90px !important;
    }
    .slick-next,.slick-prev {
        width:3.8rem;
    }
    .MuiPrevIcon,.MuiNextIcon{
        font-size: 2rem;
        top:38%
    }
}
  

`

const ProductImageDiv = styled.div`
    top: 0;
    margin: auto;
    min-height: 25rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border:1px solid var(--lightgray);
    border-radius: 5px;
    div {
        margin:auto;
        text-align: center;
        width: 90%;
        align-items: center;
    }
    img {
        margin:5rem 0 4rem;
        max-height: 30rem;
        max-width: 100%;
        transition: 300ms ease all;
        cursor: pointer;
        &:hover {
            /* width: 90%; */
            transition: 300ms ease all;
            transform: scale(1.04);
        }
    }
    span{
        color:var(--gray)
    }
    .tilt-scale{
        position: relative;

        #ImageScaler {
            opacity: 0;
            position: absolute;
            top:50%;
            z-index: 100;
            transition: 200ms ease opacity;
        }

        &:hover{
            #ImageScaler{
                opacity: 1;
                transition: 200ms ease opacity;
            }
        }
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
const Heading = styled.h1`
    font-family: 'Amazon-light';
    font-weight: 600;
`
const EMISection = styled.div``
const ReplacementDiv = styled.div`
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
        right: 40%;
        padding: 1rem;
        border: 1px solid var(--lightgray);
        border-radius: 5px;
        background-color: white;
        display: none;
        box-shadow: 0px 3px 14px 0px rgba(0,0,0,.4);
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