import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FetchDataContext } from '../Store'
import { Loading } from '../assets/Images';
import DoneIcon from '@mui/icons-material/Done';
import LayOut from './LayOut';


const ProductList = () => {
    const FetchDataCtx = useContext(FetchDataContext);
    const [FetchedProductList, setFtechedProductList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        var query = '';
        if (FetchDataCtx.APIFetchProductsQuery === '') {
            query = localStorage.getItem('FetchDataQuery')
            FetchDataCtx.FetchDataQueryHandler(localStorage.getItem('FetchDataQuery'))
        }
        else {
            query = FetchDataCtx.APIFetchProductsQuery
        }

        const FetchProductList = async (query) => {
            const result = await axios({
                method: 'get',
                url: `https://amazon-scraper.tprojects.workers.dev/search/${query}`
            })
            if (result.data.status) {
                setFtechedProductList(result.data.result)
                setIsLoading(false)
            }
            else {
                setIsLoading(false)
                setFtechedProductList()
            }
        }

        FetchProductList(query)
    }, [FetchDataCtx])

    const list = FetchedProductList.map((product, index) => {
        let ProductLink = product.query_url.split('/product/')[1];
        ProductLink = ProductLink.replaceAll('/', '~')
        var NewProductName = ''
        if (product.name.split(' ').length > 15) {
            NewProductName = `${product.name.split(' ').slice(0, 15).join(' ')} ...`
        }
        else {
            NewProductName = product.name
        }
        return <List key={index}>
            <Link to={`/product/${ProductLink}`} className="ProductViaImageLink" >
                <ImageContainer>
                    <img src={product.image} alt="" />
                </ImageContainer>
            </Link>
            <DataContainer>
                <Link to={`/product/${ProductLink}`} ><ProductName className='product-name'>{NewProductName}</ProductName></Link>
                <ProductPriceDiv className='flex-column product-price-div'>
                    <p className='current-price flex'><span className='price-symbol'>&#8377;</span>{product.price}</p>
                    <p>From<span className='price-symbol'>&#8377;</span><span className='original-price'>{product.original_price}</span></p>
                </ProductPriceDiv>
                <span className='productNote'>Flat INR 6000 Off on HDFC Bank Cards</span>
                <DeliveryDiv>
                    <p className='delivery-one'><DoneIcon className='AmazonprimeIcon' fontSize='small' /><span>prime </span> Get it by <strong>tomorrow</strong></p>
                    <p className='delivery-two'>FREE Delivery by Amazon</p>
                </DeliveryDiv>
            </DataContainer>
        </List>
    })

    return (
        <LayOut>
            <Container>
                <MainHeading>Search Result for <span>"{FetchDataCtx.APIFetchProductsQuery}"</span></MainHeading>
                <InnerContainer>
                    {isLoading && <div className='flex loader' ><Loader src={Loading} /></div>}
                    {!isLoading && <aside>
                        <h1>Filter</h1>
                        <h3>Price</h3>
                        <ul className='filterPrice'>
                            <li>Under <span>&#8377;</span>1,000</li>
                            <li><span>&#8377;</span>1,000 - <span>&#8377;</span>5,000</li>
                            <li><span>&#8377;</span>5,000 - <span>&#8377;</span>10,000</li>
                            <li><span>&#8377;</span>10,000 - <span>&#8377;</span>20,000</li>
                        </ul>
                    </aside>}
                    {!isLoading &&
                        < main >
                            {FetchedProductList.length < 1 && <h1>No Data Found with keyword <span style={{ color: '#c7511f' }}>"{FetchDataCtx.APIFetchProductsQuery}"</span></h1>}
                            <ul>{list}</ul>
                        </main>
                    }
                </InnerContainer>
            </Container>
        </LayOut >
    )
}

export default ProductList

const Container = styled.div`
margin-top: 105px;
min-height: 70vh;
`
const Loader = styled.img`
    margin:2rem auto;
    width: 5rem;
    height: 5rem;
`
const InnerContainer = styled.section`
display: grid;
grid-template-columns: 25% auto;
grid-template-areas: "loader loader"
"aside main";
grid-gap: 1rem;
padding:0 1rem 1rem 0;

.loader {
    grid-area: loader;
}

aside {
    grid-area: aside;
    border: 1px solid rgba(200,200,200,.4);
    h1{
        margin-bottom: .5rem;
        background-color: var(--lightgray);
        padding:1rem;
        width:100%;
    }
    h3{
        font-size: 0.9rem;
        margin-left:1rem;
    }

    ul{
        padding: 1rem;
        li{
            cursor: pointer;
            margin-bottom: .2rem;

            &:hover {
                color:var(--orange);
            }
        }
    }
}

main{
    grid-area: main;
    ul{
        gap:1rem;
    }
}

ul {
    display: flex;
    flex-direction: column;
}
`
const MainHeading = styled.h1`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    padding: .4rem 0 .5rem .5rem;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2);
    span {
        color: var(--orange);
    }
`
const List = styled.li`
/* height: 14rem; */
display: grid;
grid-template-columns: auto 70%;
grid-gap: 1rem;
border: 1px solid rgba(200,200,200,.4);
border-radius: 5px;

.ProductViaImageLink{
    width: inherit;
    height: inherit;
}
`
const ImageContainer = styled.div` 
width: 100%;
height: inherit;
/* transition: 300ms ease all; */
img {
    width:inherit;
    transition: 300ms ease all;
}
&:hover img{
    transform: scale(1.1);
    transition: 300ms ease all;
}
`
const DataContainer = styled.div`
padding: 1rem 0;
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
    /* height: 2em;
    line-height: 1em; */
    margin-bottom: .4rem;
    overflow: hidden;
    font-weight: 500;
    font-size: 1.2rem;
`
const ProductPriceDiv = styled.div`
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
    
`

const DeliveryDiv = styled.div`
    p{
        font-family: 'Amazon-light';
        font-weight: 600;
    }
    .delivery-one{
        display: flex;
        align-items: center;
        margin: .1rem 0;
        span{
            font-family: 'Amazon';
            font-weight: 600;
            color: var(--blue);
            margin-right: 0.4rem;
        }
    }
    .delivery-two{
        font-size: 0.9rem;
    }
    .AmazonprimeIcon {
        fill:var(--orange);
        margin: 3px -3px 0 0;
    }
    strong {
        margin: 0 .2rem;
    }
`