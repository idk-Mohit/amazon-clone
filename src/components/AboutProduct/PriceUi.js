import React from 'react'
import styled from 'styled-components'
import EMICard from './EMICard'
import HelpIcon from '@mui/icons-material/Help';

const PriceUi = ({ currentPrice, originalPrice }) => {
    return (
        <Container className='product-price-div'>
            {currentPrice === originalPrice ?
                <div className="flex"><p className="priceHeader">Price </p><span className='price-symbol'>&#8377;</span><i className='currentPrice'>{currentPrice}</i></div>
                :
                <>
                    <div className='flex'>
                        <p className="priceHeader">M.R.P.:</p><span className='price-symbol'>&#8377;</span><i className='originalPrice'>{originalPrice}</i>
                    </div>
                    <div className='flex'>
                        <p className="priceHeader">Deal Price:</p><span className='price-symbol'>&#8377;</span><span className='currentPrice'>{currentPrice}</span>
                    </div>
                </>}
            <div className='flex'>
                <p className="priceHeader"></p><span className='note'>Inclusive of all taxes</span>
            </div>
            <div className='flex EMIHoverDiv'>
                <p className="priceHeader">EMI Options</p>
                <span className='note flex'>No cost EMI available <HelpIcon fontSize='small' /></span>
                <EMICard />
            </div>
        </Container>
    )
}

export default PriceUi

const Container = styled.div`
 color:var(--gray);

div {
line-height: 1.5;
}
.priceHeader {
    width: 5rem;
    margin-right: 0.4rem;
    display: flex;
    justify-content: flex-end;
}
.price-symbol{
    font-size: 1rem;
    color: var(--orange);
}
.originalPrice {
    text-decoration: line-through;
}
.currentPrice{
    color:var(--orange);
    font-size:1.2rem;
    font-weight: 600;
}
.note {
    color:var(--darkblue);
    font-size: 0.9rem;
    align-items: center;
    .MuiSvgIcon-root{
        margin-left: 0.2rem;
        cursor: pointer;
    }
}
.EMIHoverDiv{
    p{
        color:var(--blue);
        font-size: 14px;
    }
    width:fit-content;
    cursor: pointer;
    &:hover > div{
        display: block;
    }
}
`