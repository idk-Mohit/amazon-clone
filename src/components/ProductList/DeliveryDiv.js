import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import styled from 'styled-components';


const DeliveryDiv = () => {
    return (
        <Container>
            <p className='delivery-one'><DoneIcon className='AmazonprimeIcon' fontSize='small' /><span>prime </span> Get it by <strong>tomorrow</strong></p>
            <p>FREE Delivery by Amazon</p>
        </Container>
    )
}

export default DeliveryDiv

const Container = styled.div`
    p{
        font-family: 'Amazon-light';
        font-weight: 600;
        font-size: .9rem;
        gap: 3px;
    }
    .delivery-one{
        display: flex;
        align-items: center;
        span{
            font-family: 'Amazon';
            font-weight: 600;
            color: var(--blue);
        }
    }
    .AmazonprimeIcon {
        fill:var(--orange);
        margin: 3px -3px 0 0;
    }

    @media (max-width:1024px) {
        p{
            font-size:.8rem;
        }        
    }
`