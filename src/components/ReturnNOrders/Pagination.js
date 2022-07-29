import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Pagination = () => {
    const [pageNumber, setPageNumber] = useState('1')

    const PaginationHandler = (e) => {
        let clickedParentItem = e.target.parentElement
        let ItemsArr = [...document.querySelectorAll('.Item')]
        ItemsArr.forEach((item, index) => {
            item.classList.remove('active');
            clickedParentItem.classList.add('active')
        })
        setPageNumber(e.target.ariaLabel)
    }
    return (
        <Container className='flex-column' >
            <InnerContainer className="flex">
                <Orders className='Item active'>
                    <h4 className='colored-link' aria-label='1' onClick={PaginationHandler}>Orders</h4>
                    {pageNumber === '1' &&
                        <MainData>
                            <p className='Note'>No Data Found</p>
                        </MainData>}
                </Orders>
                <BuyAgain className='Item' >
                    <h4 className='colored-link' aria-label='2' onClick={PaginationHandler}>Buy Again</h4>
                    {pageNumber === '2' &&
                        <MainData>
                            <p className='Note'>No Products Bought Yet.<Link to='/' className='colored-link'>Try Here</Link></p>
                        </MainData>
                    }
                </BuyAgain>

                <NotYetShipped className='Item' ><h4 className='colored-link' aria-label='3' onClick={PaginationHandler}>Not Yet Shipped</h4>
                    {pageNumber === '3' &&
                        <MainData>
                            <p className='Note'>Looking for an order? All of your orders have been dispatched.</p>
                        </MainData>
                    }
                </NotYetShipped>
                <CancelledOrders className='Item' ><h4 className='colored-link' aria-label='4' onClick={PaginationHandler}>Cancelled Orders</h4>
                    {pageNumber === '4' && <MainData>
                        <p className='Note'> We aren't finding any cancelled orders (for orders placed in the last 6 months).</p>
                    </MainData>}
                </CancelledOrders>
            </InnerContainer >
            <hr />
        </Container >
    )
}

export default Pagination

const Container = styled.ul`
position:relative;
    h4{
    font-family: 'amazon-light';
    padding: 0 .5rem .5rem;
    font-size:.9rem;
    }
    hr{
    margin-top:1px;
    border-color: rgba(200,200,200,.3);
    }
    .active{
    box-shadow: 0 2px 0px 0px var(--orange);
    h4.colored-link{
    color:black !important;
    text-decoration: none !important;
    }
    z-index: 2;
    }
`
const InnerContainer = styled.div`
    margin: 1.5rem 0 0 1rem;
    gap: 1rem;
`
const Orders = styled.li``
const BuyAgain = styled(Orders)``
const NotYetShipped = styled(Orders)``
const CancelledOrders = styled(Orders)``

const MainData = styled.div`
    position: absolute;
    top: 3.5rem;
    left: 0;
    padding: 1rem 0;
    width:100%;
    .Note{
        padding:2rem 0;
        width:100%;
        font-size: 1.4rem;
        text-align: center;

        a{
            margin:.5rem;
            font-size:1rem;
        }
    }
`