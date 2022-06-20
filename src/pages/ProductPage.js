import React, { useEffect, useState } from 'react'
import { Header, Footer } from '../components'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const ProductPage = () => {
    const { name, id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        const FetchedProducts = localStorage.getItem(`Fetched ${name}`)
        if (FetchedProducts) {
            const Productlist = JSON.parse(FetchedProducts)
            let list = Productlist.find(obj => obj.name === name)
            let newObj = list.product.find(obj => obj._id === id)
            setProduct(newObj)
        }
        else {
            // No List Found Get the list again via name example Mobile, laptops
            // Search the Database for the product
            // console.log('Searching the database')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Header />
            <Container>
                <ProductContainer>
                    <div id="ProductImage">
                        <img src={product.image} alt="" />
                    </div>
                    <div id="ProductData">
                        <h1>{product.name}</h1>
                    </div>
                </ProductContainer>
            </Container>
            <Footer />
        </>
    )
}

export default ProductPage

const Container = styled.section`
    margin-top: 105px ;
`
const ProductContainer = styled.div`
display: grid;
grid-template-columns: 40% auto;
grid-gap: 1rem;
 #ProductImage {
    min-height: 25rem;
    padding: 5rem;
        img {
    height: 15rem;
    transition: 300ms ease all;
    &:hover {
    display: absolute;
    transform: scale(1.2);
    cursor: crosshair;
    transition: 300ms ease all;
    }
    }
 }
`