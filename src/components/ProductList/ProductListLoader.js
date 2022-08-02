import { Skeleton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const ProductListLoader = () => {
    var list = []
    for (let i = 0; i < 5; i++) {
        list.push(<li key={i}>
            <Skeleton variant="rectangular" width={"100%"} height={209} />
            <div className="loadingDataDiv flex-column">
                <Skeleton variant="rectangular" width={"100%"} height={"20%"} />
                <Skeleton variant="rectangular" width={"50%"} height={"15%"} />
                <Skeleton variant="rectangular" width={"100%"} height={"40%"} />
            </div>
        </li>)
    }
    return (
        <Container>
            {list}
        </Container>
    )
}

export default ProductListLoader

const Container = styled.div`
    li {
    display: grid;
    grid-template-columns: auto 70%;
    grid-gap: 1rem;
    border: 1px solid rgba(200,200,200,.4);
    border-radius: 5px;
    margin-bottom: 1rem;

    .loadingDataDiv{
        justify-content: space-between;
        padding: 1rem 1rem 1rem 0;
    }
} 
`