import axios from 'axios';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import React, { useEffect, useState } from 'react'
import { ListProductCard, FilterCard } from '../components';
import ProductListLoader from '../components/ProductList/ProductListLoader';

const ProductList = () => {
    const [FetchedProductList, setFtechedProductList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { name } = useParams()

    const FetchProductList = async (name) => {
        setIsLoading(true)
        let url = `https://amazon-scraper.chipmunk092000.workers.dev/search/${name}`
        const result = await axios({
            method: 'get',
            url
        })
        if (result.data.status) {
            setFtechedProductList(result.data.result)
            localStorage.setItem(`Fetched ${name}`, JSON.stringify(result.data.result))
            setIsLoading(false)
        }
        else {
            setFtechedProductList()
            setIsLoading(false)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        const storedList = JSON.parse(localStorage.getItem(`Fetched ${name}`))
        if (storedList === null || storedList?.length < 1) {
            // console.log('searching again')
            FetchProductList(name)
        }
        else {
            // console.log('localstore data')
            setFtechedProductList(storedList)
            setIsLoading(false)
        }
    }, [name])

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
        return <ListProductCard key={index} name={name} ProductLink={ProductLink} product={product} index={index} NewProductName={NewProductName} />
    })

    const paginationHandler = (e) => {
        let page = e.target.innerText
        window.scrollTo({ top: 0, behavior: 'auto' })
        FetchProductList(`${name}&page=${page}`)
    }

    return (
        <>
            <Container className='main-container'>
                <MainHeading>Search Result for <span>"{name}"</span></MainHeading>
                <InnerContainer>
                    <FilterCard />
                    < main >
                        {!isLoading && FetchedProductList.length < 1 ? <h1>Server currently down , please search again or try again some time later.</h1> : <h1>RESULTS</h1>}
                        <ul className='ProductList'>
                            {isLoading ?
                                <ProductListLoader />
                                :
                                list
                            }
                        </ul>
                        {/* Pagination */}
                        <PaginationContainer id='pagination'>
                            <Stack spacing={2}>
                                <Pagination count={5} color="primary" onChange={paginationHandler} />
                            </Stack>
                        </PaginationContainer>
                        {/* Pagination */}
                    </main>
                </InnerContainer>
            </Container>
        </ >
    )
}

export default ProductList

const Container = styled.div``
const InnerContainer = styled.section`
display: grid;
grid-template-columns: 25% auto;
grid-template-areas: "loader loader"
"aside main";
padding:0 1rem 1rem 0;

main{
    grid-area: main;
    margin-left: 1rem;
    .ProductList {
        display: flex;
        gap:.5rem;
        flex-direction: column;
    }
}
@media(max-width:768px){
    grid-template-columns: 1fr;
    grid-template-areas: "main";
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

    @media(max-width:768px){
        display: none;
    }
`
const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0;

    li{
        &:nth-of-type(1),&:nth-of-type(7){
            display: none;
        }
    }
    button{
        background-image: none;
        background-color: rgba(200,200,200,1);
    }
`