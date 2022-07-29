import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LayOut from './LayOut'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from "@mui/icons-material/Search";
import { Pagination } from '../components';


const OrdersNReturn = () => {
    const SearchRef = useRef()

    const FormSubmitHandler = e => {
        e.preventDefault()
        console.log(SearchRef.current.value)
        alert(`This is a demo, Why did u search ?`)
    }

    return (
        <LayOut>
            <Container className="main-container">
                <InnerContainer className='padded-container'>
                    <div className="link-paths flex">
                        <Link className='colored-link' to={'/yourAccount'}><span>Your Account</span></Link>
                        <KeyboardArrowRightIcon fontSize='small' color='#616060' />
                        <span className='orange'>Your Orders</span>
                    </div>
                    <Main>
                        <div className="header flex">
                            <h2>Your Orders</h2>
                            <form onSubmit={FormSubmitHandler} className="searchSection flex">
                                <div className="inputContainer flex">
                                    <SearchIcon className='SearchIcon' fontSize='small' />
                                    <input type="text" placeholder='Search all orders' ref={SearchRef} required />
                                </div>
                                <button type="submit">Search Orders</button>
                            </form>
                        </div>
                        <Pagination />
                    </Main>
                </InnerContainer>
            </Container>
        </LayOut>
    )
}

export default OrdersNReturn

const Container = styled.div``
const InnerContainer = styled.div`
padding: 0;
.link-paths{
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
}
`
const Main = styled.main`
    .header {
        justify-content: space-between;
    }
    .searchSection {
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
    }
    .inputContainer{
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
    }

`