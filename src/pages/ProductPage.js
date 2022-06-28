import axios from 'axios'
import LayOut from './LayOut'
import styled from 'styled-components'
import { Loading } from '../assets/Images'
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Accordian, ProductRating, PriceUI, BuyingSection } from '../components'


const ProductPage = () => {
    // const FetchDataCtx = useContext(FetchDataContext)
    const { id } = useParams();
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
            if (result.status) {
                console.log(result.data.product_detail)
                setProduct(result.data.product_detail)
                setProductFeatures(result.data.product_detail.features)
                setIsLoading(false)
            }
            else {
                setProduct('Some Error Occured, Please Search Again!')
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
                {
                    isLoading ? <div className='flex'><Loader src={Loading} alt="" /></div>
                        :
                        <>

                            <ProductContainer>
                                <ProductImageDiv>
                                    {product.image && <img src={product.image} alt="" />}
                                    <span>Hover to Zoom In</span>
                                </ProductImageDiv>
                                <ProductData className='flex-column'>
                                    {product.name && <Heading>{product.name}</Heading>}
                                    <Link to={'#'} className='color-link'><span>Visit the Store</span></Link>
                                    {product.rating_details.rating && <Link to={'#'} className='color-link'><ProductRating rating={product.rating_details.rating} /></Link>}
                                    {product.rating_details.ratings_count && <Link to={'#'} className='color-link'><span>{product.rating_details.ratings_count} Ratings</span></Link>}
                                    <hr />
                                    <PriceUI currentPrice={product.price} originalPrice={product.original_price} />
                                    <EMISection>
                                        <Accordian />
                                    </EMISection>
                                    <ReplacementDiv>
                                        <Link to={'#'} className='color-link'><span className='flex'>7-day replacement only <KeyboardArrowDownIcon fontSize='extrasmall' /></span></Link>
                                        <div className='replacementDivPopUp'><p>This item can't be returned to Amazon, if the item is "No longer needed". For device related issues, please contact the brand directly for resolution.</p></div>
                                    </ReplacementDiv>
                                    <Features>
                                        <h3>About this item</h3>
                                        <ul>{List}</ul>
                                    </Features>
                                </ProductData>
                                <BuyingSection currentPrice={product.price} originalPrice={product.original_price} stock={product.in_stock} />
                            </ProductContainer>
                        </>
                }
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
grid-template-columns: 1.8fr 1fr .8fr;
grid-gap: .5rem;
padding-top: 3rem;
`
const Loader = styled.img`
    margin:2rem auto;
    width: 5rem;
    height: 5rem;
`

const ProductImageDiv = styled.div`
    top: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: grid;
    place-items: center;
    padding:2rem 0;
    border:1px solid var(--lightgray);
    border-radius: 5px;
    img {
        max-width:100%;
        max-height: 30rem;
        transition: 300ms ease all;
        cursor: pointer;
        &:hover {
            /* width: 90%; */
            transition: 300ms ease all;
            transform: scale(1.1);
        }
    }
    span{
        color:var(--gray)
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