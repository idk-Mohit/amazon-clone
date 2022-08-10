import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { CartIcon } from '../../../assets/Images'
import { Link } from 'react-router-dom'

const TopNavCart = () => {
  const isCart = window.location.href;
  const Cart = useSelector(state => state.Cart)
  return (
    <Container className='nav--hover flex'>
      {isCart.includes('Cart') ?
        <div className="flex">
          <div className="CartIconContainer">
            <img src={CartIcon} alt='' />
            <span className="cartItem">{Cart.totalQuantity}</span>
          </div>
          <h4>Cart</h4></div>
        :
        <Link to={'/Cart'} className="flex">
          <div className="CartIconContainer">
            <img src={CartIcon} alt='' />
            <span className="cartItem">{Cart.totalQuantity}</span>
          </div>
          <h4>Cart</h4></Link>
      }
    </Container>
  )
}

export default TopNavCart

const Container = styled.div`
  h4 {
    margin-bottom: 1px !important;
    font-size: .9rem;
    @media(max-width:1024px){
      display:none;
    }
  }
  a,div {
    align-items: flex-end !important;
  }
  img {
    width: 2.3rem;
  }
.CartIconContainer{
  position:relative;
  .cartItem{
    position: absolute;
    text-align: center;
    width: 22px;
    height: 21px;
    background-color: #131921;
    border-radius: 1rem;
    top: -4px;
    left: 11px;
    font-size: 1rem;
    font-weight: 600;
    color: var(--orange);
  }
}
`