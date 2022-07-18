import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LayOut from './LayOut'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Pagination } from '../components';


const OrdersNReturn = (props) => {
    return (
        <LayOut>
            <Container className="main-container">
                <InnerContainer className='padded-container'>
                    <div className="link-paths flex">
                        <Link className='colored-link' to={'/yourAccount'}><span>Your Account</span></Link>
                        <KeyboardArrowRightIcon fontSize='small' color='#616060' />
                        <span className='orange'>Your Orders</span>
                    </div>
                    <div>
                        <Pagination />
                    </div>
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