import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';

const BuyingSection = ({ currentPrice, originalPrice, stock }) => {
    const [exchange, setExchange] = useState('2')
    let fullDate = new Date().toDateString().split(' ')
    let date = +fullDate[2]
    date += 3
    fullDate.splice(2, 1, date)
    fullDate = fullDate.join(' ')

    const ExchangeHandler = (e) => {
        setExchange(e.target.value)
    }

    return (
        <Container>
            <div className={`${exchange === '2' && 'inactive'} main-heading`}>
                <input type="radio" name="exchange" id="withExchange" onClick={ExchangeHandler} value={'1'} />
                <label htmlFor="withExchange">With Exchange</label>
                <div className='paddingContainer'>Up to <span className='currency-symbol'>&#8377;</span>{Math.round((15 / 100 * currentPrice))}.00 off</div>
            </div>
            {/* <h2 className='main-heading'><RadioButtonUncheckedIcon /> Without Exchange</h2> */}
            <div className={`${exchange === '1' && 'inactive'} main-heading`}>
                <input type="radio" name="exchange" id="withoutExchange" onClick={ExchangeHandler} value={'2'} defaultChecked />
                <label htmlFor="withoutExchange">Without Exchange</label>
                <div className="paddingContainer">
                    {
                        currentPrice === originalPrice ?
                            <Price className='flex'>
                                <p className='currentPrice'><span className='currency-symbol'>&#8377;</span><strong>{currentPrice}</strong></p>
                            </Price>
                            :
                            <Price className='flex'>
                                <p className='currentPrice'><span className='currency-symbol'>&#8377;</span><strong>{currentPrice}</strong></p>
                                <p className='originalPrice'><span className='currency-symbol'>&#8377;</span><i>{originalPrice}</i></p>
                            </Price>
                    }
                </div>
                <DeliveryTime className='paddingContainer'>
                    <span>Free Delivery <strong>{fullDate}.</strong></span><br />
                    <p>Or Fastest Delivery <strong>Today</strong>.</p>
                </DeliveryTime>

                <DeliveryAddress className='paddingContainer'>
                    <Link to={'#'} className='flex'><LocationOnIcon />Select delivery location</Link>
                </DeliveryAddress>
                <ExtraInfo>
                    {stock && <div className='paddingContainer'><span>In Stock.</span></div>}
                    {!stock && <div className='paddingContainer'><span>Currently Unavailable.f</span></div>}
                </ExtraInfo>
                <Buttons className='paddingContainer flex-column'>
                    <button id='addtoCartButton'>Add to Cart</button>
                    <button id='buyNowButton'>Buy Now</button>
                </Buttons>
                <SecureTransaction className="paddingContainer flex">
                    <LockIcon /><Link to={'#'}>Secure Transaction</Link>
                </SecureTransaction>
            </div>
        </Container >
    )
}

export default BuyingSection

const Container = styled.div`
    max-width: 20rem;
    border: 1px solid rgba(200,200,200,1);
    height: fit-content;
    border-radius: 10px;
    .main-heading{
        font-size: 1rem;
        padding:.8rem 1rem;
        .paddingContainer{
            color: var(--orange);
            margin-left:1.5rem;
        }
        label {
            font-size: 1rem;
            margin:0.8rem 2rem .8rem .5rem;
            cursor: pointer;
        }
        input{
            margin: 0.5rem 0;
        }
    }
    .inactive{
        background-color: rgba(200,200,200,.6)
    }
`
const Price = styled.div`
    gap:0.4rem;
    font-size: 1.1rem;
    .currency-symbol {
        color:var(--orange)
    }
    .originalPrice{
        span{
            color:var(--gray);
        }
        i{
            text-decoration: line-through;
        }
    }
    .currentPrice{
        color:var(--orange);
    }
`
const DeliveryTime = styled.div`
margin: 1rem 0;
    span{
        color:var(--blue);
        strong{
            color: black;
        }
    }
    p{
        color:black;
        margin-top:1rem;
    }
`

const DeliveryAddress = styled.div`
    a{
        align-items: center;
        color:var(--blue);
        &:hover{
            color:var(--orange);
        }
        .MuiSvgIcon-root{
            fill:black;
        }
    }
`
const ExtraInfo = styled.div`
    div{
        margin: 1rem 0;
        span{
            color:var(--green);
            font-size: 1.3rem;
        }
    }
`

const Buttons = styled.div`
gap: .5rem;
margin: 1rem 0;
    button{
        width: 100%;
        padding: .7rem;
        border-radius: 50px;
        border: none;
    }
    #addtoCartButton{
        background: #f7ca00;
        &:hover{
            background: #ecc101;
        }
    }
    #buyNowButton{
        background: #fa8900;
        &:hover{
            background: #eb8100
        }
    }
`
const SecureTransaction = styled.div`
align-items: center;
    a{
        color:var(--blue);
        margin-left: 0.4rem;
    }
`