import React from 'react'
import styled from 'styled-components'
import { ImageCard } from '../components'
import LayOut from './LayOut'

const YourAccount = () => {
    return (
        <LayOut>
            <Container className='main-container'>
                <InnerContainer className='padded-container'>
                    <h1>Your Account</h1>
                    <CardContainer>
                        <ImageCard title="Your Orders" subtitle='Track, return or buy things again' image={'https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png'} />
                        <ImageCard title="Login &amp; Security" subtitle='Edit login, name, and mobile number' image={'https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png'} />
                        <ImageCard title="Prime" subtitle='View benefits and payment settings' image={'https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png'} />
                        <ImageCard title="Your Addresses" subtitle='Edit addresses for orders and gifts' image={'https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png'} />
                        <ImageCard title="Payment Options" subtitle='Edit or add payment methods' image={'https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png'} />
                        <ImageCard title="Amazon Pay Balance" subtitle='Add money to your balance' image={'https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png'} />
                        <ImageCard title="Contact Us" image={'https://images-na.ssl-images-amazon.com/images/G/31/x-locale/cs/help/images/gateway/self-service/contact_us._CB623781998_.png'} />
                    </CardContainer>
                </InnerContainer>
            </Container>
        </LayOut>
    )
}

export default YourAccount

const Container = styled.div`
`
const InnerContainer = styled.div`
    > h1{
        font-weight: 100;
        font-size:1.8rem;
    }
`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin:1rem 0;
    box-sizing: border-box;
    grid-gap: 1rem;

    @media(max-width:1024px) {
          grid-template-columns: 1fr 1fr;
    }
    @media(max-width:768px) {
          grid-template-columns: 1fr;
    }
`