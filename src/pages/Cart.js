import axios from 'axios'
import LayOut from './LayOut'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartHolder } from '../components'
import { GreenTickIcon } from '../assets/Images'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../Store/Cart-Slice'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Cart = () => {
    const dispatch = useDispatch()
    const Auth = useSelector(state => state.Auth)
    const Cart = useSelector(state => state.Cart)
    const [priceToPay, setPriceToPay] = useState(0)
    const [ProductList, setProductList] = useState([])
    const [productQty, setProductQty] = useState(0)

    const fetchProduct = async (id) => {
        console.log('Fetching Product, id :', id)
        const fetchedProduct = await axios({
            method: 'get',
            url: `https://amazon-scraper.chipmunk092000.workers.dev/product/${id.replaceAll(`~`, '/')}`
        })
        return fetchedProduct.data.product_detail
    }

    const CartHandler = async (data, url) => {
        const response = await axios({
            method: 'post',
            url: url,
            data: data
        })
        return response
    }

    useEffect(() => {
        function setCart() {
            Cart.items.forEach(async (product) => {
                console.log('Online Cart', product)
                let ProductData = await fetchProduct(product.id)
                if (ProductData.name !== '')
                    setProductList(prev => [...prev, {
                        name: ProductData.name,
                        image: ProductData.image,
                        price: ProductData.price,
                        id: product.id,
                        category: product.category,
                        quantity: product.quantity
                    }])
                setProductQty(product.quantity)
            })
        }
        if (Cart.items.length > 0) {
            setCart()
        }
        return () => {
            setProductList([])
        }
    }, [Cart])

    useEffect(() => {
        var PricePayable = 0;
        ProductList.forEach(product => {
            PricePayable += product.price * product.quantity
        })
        setPriceToPay(PricePayable)
    }, [ProductList])

    const deleteHandler = async (e) => {
        let id = e.target.value
        console.log('deleteHandler', e.target.value)
        let data = {
            email: Auth.user.email,
            productId: id,
            quantity: 1
        }
        let url = 'https://diverse-backend.herokuapp.com/removeFromCart' //Production
        // let url = 'http://localhost:3001/removeFromCart' // development
        const result = await CartHandler(data, url)
        if (result) dispatch(removeItemFromCart({ id, quantity: 1 }))
    }

    const totalQtyHandler = async (e) => {
        const selectValue = parseInt(e.target.value)
        const { id, category } = JSON.parse(e.target.title)
        console.log('Product Info', id, category, e.target.title)
        if (selectValue > productQty) {
            let data = {
                email: Auth.user.email,
                productCategory: category,
                productId: id,
                quantity: selectValue - productQty
            }
            let url = 'https://diverse-backend.herokuapp.com/addToCart' //Production
            // let url = 'http://localhost:3001/addToCart' //Developmemt
            const response = await CartHandler(data, url)
            if (response)
                dispatch(addItemToCart({ id, quantity: selectValue - productQty }))
        }
        if (selectValue < productQty) {
            let data = {
                email: Auth.user.email,
                productId: id,
                quantity: productQty - selectValue
            }
            let url = 'https://diverse-backend.herokuapp.com/removeFromCart' //Production
            // let url = 'http://localhost:3001/removeFromCart'
            const response = await CartHandler(data, url)
            if (response)
                dispatch(removeItemFromCart({ id, quantity: productQty - selectValue }))
        }
        setProductQty(e.target.value)
    }

    return (
        <LayOut>
            {!Auth.isLoggedIn ?
                <CartHolder />
                :
                <Container>
                    <ProductHolder classname='flex-column'>
                        {Cart.items.length < 1 ?
                            <NoProduct>
                                {/* No Product In Cart */}
                                <h1>Your Amazon Cart is empty.</h1>
                                <p>Check your Saved for later items below or <Link className='colored-link' to={'/'}>continue shopping.</Link></p>
                            </NoProduct>
                            :
                            (
                                <Products>
                                    {/* If Cart has Product */}
                                    <h1>Shopping Cart</h1>
                                    <span className='PriceHeader'>Price</span>
                                    {ProductList.map((product, index) => {
                                        console.log(product)
                                        return <Item key={index}>
                                            <Link to={`/product/${product.category}/${product.id}`} className='productImage'>
                                                <img src={product.image} alt="" />
                                            </Link>
                                            <div className="productData flex">
                                                <div className='flex-column'>
                                                    <div>
                                                        <Link className='productNameLink' to={`/product/${product.category}/${product.id}`}><h4>{product.name}</h4></Link>
                                                        <span className='green-color'>In Stock</span>
                                                        <p>Eligible for FREE Shipping</p>
                                                    </div>
                                                    <Buttons className='buttons flex'>
                                                        <ProductQty className="productQty">
                                                            <select name="addMore" id="addMore" defaultValue={product.quantity} onChange={totalQtyHandler} title={JSON.stringify({ id: product.id, category: product.category })} >
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
                                                            <div className="progressive_width flex">Qty: <span className='flex'>{product.quantity} <ArrowDropDownIcon fontSize='small' /></span></div>
                                                        </ProductQty>
                                                        <button onClick={deleteHandler} value={product.id} >Delete</button>
                                                    </Buttons>
                                                </div>
                                                <span>&#8377;{product.price}</span>
                                            </div>
                                        </Item>
                                    })}
                                    <SubTotalAmount className='TotalFooter' >
                                        <h4>{`Subtotal (${Cart.totalQuantity} item) :`}<span className='priceSymbol'>&#8377;</span>{priceToPay} </h4>
                                    </SubTotalAmount>
                                </Products>)
                        }
                    </ProductHolder>
                    <SubTotal>
                        <Note>
                            <div className="image">
                                <img src={GreenTickIcon} alt="" />
                            </div>
                            <div className="data">
                                <p>
                                    <span>Your order is eligible for FREE Delivery.</span>
                                    <br />
                                    Select this option at checkout.
                                    <Link className='colored-link' to={'#'}>Details</Link>
                                </p>
                            </div>
                        </Note>
                        <SubTotalAmount>
                            <h4>{`Subtotal (${Cart.totalQuantity} item) :`}<span className='priceSymbol'>&#8377;</span>{priceToPay} </h4>
                        </SubTotalAmount>
                        <button>Proceed to Buy</button>
                    </SubTotal>
                </Container >
            }
        </LayOut >
    )
}

export default Cart

const Container = styled.section`
    margin-top: 105px;
    background: #EAEDED;
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 75% auto;
    grid-gap: 1rem;
`
const ProductHolder = styled.div``
const NoProduct = styled.div`
    background: white;
    padding:2rem 1rem;
    border-radius: 1px;
    
    h1 {
        font-family: 'Amazon-light';
        font-weight: 600;
        margin-bottom: .4rem;
    }
    p{
        font-weight: 100;
        font-size: 0.9rem;
    }
`

const Products = styled(NoProduct)`
    .PriceHeader{
       display:flex;
       justify-content:flex-end;
       color:var(--gray);
    }
    .TotalFooter{
        display:flex;
        justify-content: flex-end;
    }
`
const Item = styled.div`
    display: grid;
    grid-template-columns: 11rem auto;
    grid-gap:1rem;
    border-bottom:1px solid rgba(200,200,200,1);
    padding:.4rem;

    &:nth-of-type(1){
        border-top:1px solid rgba(200,200,200,1);
    }
    .productImage{
        width:10rem;
        height: 10rem;
        position:relative;
        overflow:hidden;
        display: flex;
        justify-content: center;
        img{
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            max-width: 100%;
            max-height: 100%;
        }
    }

    .productData{
        display:grid;
        grid-template-columns: 70% auto;
        grid-gap: 0.4rem;
        font-family: 'Amazon-light';
        font-size:0.9rem;
        padding:1rem 0;
        > div {
            justify-content: space-between;
            .productNameLink{
                color:var(--darkblue);
                h4{
                    font-size: 1rem;
                }

                &:hover {
                    color:var(--orange);
                }
            }
            
            .green-color {
                color:var(--success-green);
                font-size:0.8rem;
                font-weight: 100;
                padding:1rem 0;
            }
            p{
                color:var(--gray);
            }
        }
        
        span{
            text-align: end;
        }
        
    }
`
const Buttons = styled.div`
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
}

.progressive_width{
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
}
`

const SubTotal = styled.aside`
    background: white;
    padding: 1rem;
    border-radius: 5px;
    height: fit-content;
    button {
        width: 100%;
    border-radius: 10px;
    padding:.5rem;
    letter-spacing: .5px;
    background: #FFD814;
    border-color: #FCD200;
    &:hover{
        box-shadow: 0px 2px 8px 0px rgba(0,0,0,.1);
    }
}
`
const Note = styled.div`
display: flex;
align-items: center;
font-size: 0.75rem;
    img {
        width:1.5rem;
        margin-right: 0.2rem;
    }
    p{
        font-family: 'Amazon-light';
        font-weight: 600;
    }
    span{
        color:var(--success-green);
    }
    a{
        margin-left: 2px;
    }
`

const SubTotalAmount = styled.div`
    margin: 1rem 0;
    .priceSymbol {
        color:var(--orange);
        margin:0 2px;
    }
h2 {
    font-family: 'amazon-light';
    font-size: 1.4rem;
}

`