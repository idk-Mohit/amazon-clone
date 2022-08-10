import React, { useState } from 'react'
import styled from 'styled-components'
import { EMI_Section_IMG } from '../../assets/Images'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Accordian = () => {
    const [show, setShow] = useState(false)
    return (
        <Container>
            <Heading className="div1 flex">
                <img src={EMI_Section_IMG} alt="" /> <span>Save Extra</span>  with 3 offers
            </Heading>
            <div className="div2"><span>No Cost EMI:</span>Avail No Cost EMI on select cards for orders above ₹3000</div>
            <div className="div3"><span>Bank Offers</span>Get 5% up to Rs. 2000 Instant Discount on Yes Bank Credit Card EMI transactions</div>
            {show && <div className="div4"><span>Partner Offers: </span>Get GST invoice and save up to 28% on business purchases</div>}
            <div className="div5 flex" onClick={() => setShow(prev => !prev)} >{show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} See 1 more</div>
        </Container>
    )
}

export default Accordian

const Container = styled.div`
    border: 1px solid rgba(200,200,200,.5);
    border-radius: 5px;
    margin: .7rem 0;
    font-size: .9rem;
    div {
        border: .5px solid rgba(200,200,200,.5);
        padding: .8rem .5rem;
        span{
            margin-right:.2rem;
            color:var(--orange);
        }
    }
    .div5{
        cursor: pointer;
        color:var(--blue);
        &:hover {
            color:var(--orange);
        }
    }
`
const Heading = styled.div`
    align-items: center;

    img{
        margin-right: .4rem;
    }
`