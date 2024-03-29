import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from "@mui/icons-material/Search";
import { Pagination } from '../components';


const OrdersNReturn = () => {
    const SearchRef = useRef()

    const FormSubmitHandler = e => {
        e.preventDefault()
        console.log(SearchRef.current.value)
        alert(`This is a demo, Not everthing works?`)
    }

    return (
        <>
            <Container className="main-container">
                <InnerContainer className='padded-container'>
                    <LinkHeader className="link-paths flex">
                        <Link className='colored-link' to={'/yourAccount'}><span>Your Account</span></Link>
                        <KeyboardArrowRightIcon fontSize='small' color='#616060' />
                        <span className='orange'>Your Orders</span>
                    </LinkHeader>
                    <Main>
                        <MainHeader className="header flex">
                            <h2>Your Orders</h2>
                            <SearchForm onSubmit={FormSubmitHandler} className="searchSection flex">
                                <InputContainer className="inputContainer flex">
                                    <SearchIcon className='SearchIcon' fontSize='small' />
                                    <input type="text" placeholder='Search all orders' ref={SearchRef} required />
                                </InputContainer>
                                <button type="submit">Search Orders</button>
                            </SearchForm>
                        </MainHeader>
                        <Pagination />
                    </Main>
                </InnerContainer>
            </Container>
        </>
    )
}

export default OrdersNReturn

const Container = styled.div``
const InnerContainer = styled.div`
padding: 0;
`
const LinkHeader = styled.div`
    align-items: center;
    padding:.2rem 0 1rem;
    font-size:0.8rem;
    span {
        font-family:'Amazon-light';
        font-weight: 600;
    }
    .orange{
        color:var(--orange);
    }
    .MuiSvgIcon-root {
        fill: var(--gray);
        font-size: 14px;
        margin: 0 .2rem;
    }
`
const Main = styled.main``
const InputContainer = styled.div`
    align-items: center;
    height: inherit;
    position: relative;
    margin-right: .5rem;
    border-radius: 4px;
    width:18rem;
    input{
        border: 1px solid rgba(160,160,160,1);
        outline-color:aquamarine;
        height: 100%;
        width: 100%;
        padding-left:1.8rem;
        border-radius: 4px;
    }
    .SearchIcon {
        position:absolute;
        left:5px;
        pointer-events: none;
    }
`
const MainHeader = styled.div`
    justify-content: space-between;
    @media(max-width:900px){
        flex-direction: column;
        gap:5px;
    }
`
const SearchForm = styled.form`
    align-items: center;
    height: 2.2rem;

    button{
        height: 100%;
        padding:0 .8rem;
        border-radius: 20px;
        color:white;
        background: var(--darkblue);
        border: none;
    }
`