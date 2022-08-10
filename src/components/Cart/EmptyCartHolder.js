import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SignInFooter from '../SignInFooter'
import { EmptyCartBg } from '../../assets/Images'

const CartHolder = () => {
    return (
        <>
            <Container>
                <InformationDiv>
                    <ImageContainer>
                        <img src={EmptyCartBg} alt="" />
                        {/* <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" /> */}
                    </ImageContainer>
                    <AsideDataContainer>
                        <h2>Your Amazon Cart is empty</h2>
                        <Link to={"productList/Today's Deals"} className='colored-link'>
                            {"Shop today’s deals"}
                        </Link>
                        <LoginButton>
                            <Link to='/signin/emailCheck'><button className='signinbtn'>Sign in to your account</button></Link>
                            <Link to={'/signup'}><button className='signupbtn'>Sign up now</button></Link>
                        </LoginButton>
                    </AsideDataContainer>
                </InformationDiv>
                <EmptyDiv></EmptyDiv>
                <p>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
                    Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
                </p>
            </Container>
            <SignInFooter />
        </>
    )
}

export default CartHolder


const Container = styled.div`
min-height: 70vh;
padding: 1.5rem;
background: rgba(200,200,200,.4);
display: flex;
flex-direction: column;
gap: 1rem;

p{
    font-size: 0.8rem;
    width: 75%;
    min-width: 25rem;
}
@media (max-width:900px) {
    p{
        min-width:auto;
        width: 100%;
    }
}
`

const InformationDiv = styled.div`
width: 75%;
min-width: 25rem;
display: grid;
grid-template-columns: 30% auto;
grid-gap: 1rem;
background: white;
padding: 3rem 1rem;
align-items: center;
a {
    font-size: 0.9rem;
}
@media (max-width:900px) {
    min-width: auto;
    grid-template-columns: 1fr;
    width:100%;  
    justify-content:center;  
}
`
const ImageContainer = styled.div`
width: 100%;
justify-content:center;  
    img{
        width: inherit;
    } 
  @media (max-width:900px) {
    max-width:40%;
  } 
`
const AsideDataContainer = styled.div``
const LoginButton = styled.div`
    display: flex;
    gap:1rem;
    margin: 1rem 0;

    button{
        border-radius: 10px;
        padding:.5rem;
        letter-spacing: .5px;
        &:hover{
            box-shadow: 0px 2px 8px 0px rgba(0,0,0,.1);
        }
    }
    .signinbtn{
        background: #FFD814;
        border-color: #FCD200;
    }
    .signupbtn{
        background: white;
        border-color: rgba(200,200,200,1);
    }
`
const EmptyDiv = styled.div`
width: 75%;
min-width: 25rem;
padding: 2rem;
background: white;
@media (max-width:900px) {
    min-width: auto;
    width:100%;    
}
`