import React from 'react'
import styled from 'styled-components'

const FilterCard = () => {
    return (
        <Container>
            <h1>Filter</h1>
            <h3>Price</h3>
            <FilterPrice>
                <li>Under <span>&#8377;</span>1,000</li>
                <li><span>&#8377;</span>1,000 - <span>&#8377;</span>5,000</li>
                <li><span>&#8377;</span>5,000 - <span>&#8377;</span>10,000</li>
                <li><span>&#8377;</span>10,000 - <span>&#8377;</span>20,000</li>
            </FilterPrice>
        </Container>
    )
}

export default FilterCard

const Container = styled.aside`
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
    @media(max-width:768px){
        display: none;
    }
`
const FilterPrice = styled.ul`
    padding: 1rem;
    li{
        cursor: pointer;
        margin-bottom: .2rem;

        &:hover {
            color:var(--orange);
        }
    }
`