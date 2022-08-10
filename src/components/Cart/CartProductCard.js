import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DeleteProduct, ProductHandler } from '../../Store';
import { useDispatch, useSelector } from 'react-redux'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { addItemToCart, removeItemFromCart } from '../../Store/Cart-Slice'

const CartProductCard = ({ product, quantity }) => {
    const dispatch = useDispatch()
    const Auth = useSelector(state => state.Auth)

    const totalQtyHandler = async (e) => {
        const selectValue = parseInt(e.target.value)
        const { id, category, quantity } = JSON.parse(e.target.title)
        const email = Auth.user.email
        if (selectValue > quantity) {
            let response = await ProductHandler(e, email)
            if (response)
                dispatch(addItemToCart({ id, quantity: selectValue - quantity, category }))
        }
        if (selectValue < quantity) {
            const response = await ProductHandler(e, email)
            if (response)
                dispatch(removeItemFromCart({ id, quantity: quantity - selectValue }))
        }
    }
    const deleteHandler = (e) => {
        let id = e.target.value
        let email = Auth.user.email
        let result = DeleteProduct(id, email)
        if (result)
            dispatch(removeItemFromCart({ id, quantity: 1 }))
    }
    return (
        <Container>
            <div className='flex'>
                <ProductImageContainer>
                    <Link to={`/product/${product.category}/${product.id}`} className='productImage'>
                        <Image src={product.image} alt="" />
                    </Link>
                </ProductImageContainer>
                <ProductData>
                    <Header>
                        <HeaderName className='flex'>
                            <Link className='productNameLink' to={`/product/${product.category}/${product.id}`}><h4>{product.name}</h4></Link>
                            <ProductPrice>&#8377;{product.price}</ProductPrice>
                        </HeaderName>
                        <span className='green-color'>In Stock</span>
                        <p>Eligible for FREE Shipping</p>
                    </Header>
                    <Buttons className='buttons desktopView flex'>
                        <ProductQty className="productQty">
                            <select name="addMore" id="addMore" defaultValue={quantity} onChange={totalQtyHandler} title={JSON.stringify({ id: product.id, category: product.category, quantity })} >
                                <option value="0">0 (delete)</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10+</option>
                            </select>
                            <ProgressiveWidth className="flex">Qty: <span className='flex'>{quantity} <ArrowDropDownIcon fontSize='small' /></span></ProgressiveWidth>
                        </ProductQty>
                        <button onClick={deleteHandler} value={product.id} >Delete</button>
                    </Buttons>
                </ProductData>
            </div>
            <Buttons className='buttons mobileView flex'>
                <ProductQty className="productQty">
                    <select name="addMore" id="addMore" defaultValue={quantity} onChange={totalQtyHandler} title={JSON.stringify({ id: product.id, category: product.category, quantity })} >
                        <option value="0">0 (delete)</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10+</option>
                    </select>
                    <ProgressiveWidth className="flex">Qty: <span className='flex'>{quantity} <ArrowDropDownIcon fontSize='small' /></span></ProgressiveWidth>
                </ProductQty>
                <button onClick={deleteHandler} value={product.id} >Delete</button>
            </Buttons>
        </Container>
    )
}

export default CartProductCard

const Container = styled.div`
    border-bottom:1px solid rgba(200,200,200,1);
    padding:.4rem;

    &:nth-of-type(1){
        border-top:1px solid rgba(200,200,200,1);
    }
    .mobileView{
        display: none;
    }
    @media(max-width:900px){
        gap:.4rem;
        .mobileView{
            display: flex;
            justify-content: center;
            margin: -5px auto 1rem;
        }
        .desktopView{
            display: none;
        }
    }
`
const ProductImageContainer = styled.div`
    > a {
        width:10rem;
        height: 10rem;
        position:relative;
        overflow:hidden;
        display: flex;
        justify-self: center;
        align-self: center;
    }
    margin-right: .4rem;
`
const Image = styled.img`
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    max-height: 100%;
`
const ProductData = styled.div`
    font-family: 'Amazon-light';
    font-size:0.9rem;
    padding:1rem 0;
    width: 100%;
`
const Header = styled.div`
    justify-content: space-between;
    p{
        color:var(--gray);
    }
    .green-color {
        color:var(--success-green);
        font-size:0.8rem;
        font-weight: 100;
        padding:1rem 0;
    }
    .productNameLink{
        color:var(--darkblue);
        h4{
            font-size: 1rem;
            margin-bottom:.5rem;
        }

        &:hover {
            color:var(--orange);
        }
    } 
`
const HeaderName = styled.div`
    width: 100%;
    gap:1rem;
    justify-content: space-between;
    flex-wrap: nowrap;
    h4{
        font-weight: 100;
    }
    .productNameLink{
        max-height: 43px;
        overflow:hidden;
    }

    @media (max-width:900px) {
        gap:.4rem;
        flex-direction: column;
        align-items: flex-start;
    }
`
const Buttons = styled.div`
    margin-top:.5rem;
    button {
        margin-left: 0.5rem;
        padding: 0rem 0.8rem;
        border-radius: 10px;
        background:none;
        background-color: #eeece8;
        color: #858282;
        border: 0.5px solid #cacaca;
        box-shadow: 0px 3px 5px 0px rgba(200,200,200,.6);
    }
`
const ProductQty = styled.div`
  display: flex;
  width: 80px;
  height: 40px;
  border: 1px solid white;
  border-radius: 3px;
  position: relative;
  border-radius: 4px;

#addMore{
  outline: none;
  border: none;
  position: absolute;
  height: 100%;
  width: 100%;
  cursor:pointer;
  border-radius: 8px;
}
`
const ProgressiveWidth = styled.div`
  position: relative;
  z-index: 10;
  background-color: #eeece8;
  color: #858282;
  height: 100%;
  width: 100%;
  pointer-events: none;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #cacaca;
  box-shadow: 0px 3px 5px 0px rgba(200,200,200,.6);
  border-radius: 10px;
  > span {
    justify-content: center;
    align-items:center;
    margin-left:5px;
  }
`
const ProductPrice = styled.div`
    text-align: end;
    font-family: 'Amazon-light';
    font-weight: 600;
    font-size: 1.1rem;

    @media (max-width:900px) {
       font-family: 'Amazon';
    }
`