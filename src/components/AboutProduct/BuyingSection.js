import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { addItemToCart } from '../../Store/Cart-Slice'
import axios from 'axios';
import CircleSelectorIcon from './CircleSelectorIcon'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LockIcon from '@mui/icons-material/Lock';

const BuyingSection = ({ currentPrice, originalPrice, stock }) => {
    const { category, id } = useParams()
    const navigate = useNavigate()
    const Auth = useSelector(state => state.Auth)
    const dispatch = useDispatch()
    // const [exchange, setExchange] = useState('2')
    // const Auth = useSelector(state => state.Auth)
    //Creating Fake Delivery Date ...
    const newDate = (days) => {
        let date = new Date().toDateString().split(' ')
        let newDate = [...date]
        let temp = parseInt(newDate[2]) + days
        newDate.splice(2, 1, temp)
        newDate = newDate.join(' ')
        return newDate
    }
    //Creating Fake Delivery Date ...

    const AddToCartHandler = async () => {
        const response = await axios({
            method: 'post',
            url: `https://diverse-backend.onrender.com/addToCart`,
            // url: 'http://localhost:3001/addToCart',
            data: {
                email: Auth.user.email,
                productCategory: category,
                productId: id,
                quantity: 1
            }
        })
        if (response) {
            dispatch(addItemToCart({ id, quantity: 1, category }))
        }
        navigate('/Cart')
    }
    const SigninHandler = () => {
        navigate('/signin/emailCheck', { replace: true })
    }

    const RemoveActive = () => {
        let Items = [...document.querySelectorAll('li.accordion__item')];
        Items.forEach((item) => {
            item.classList.remove('active')
            item.querySelector('.accordion__content').style.maxHeight = null
        })
    }

    const ExchangeHandler = (e) => {
        let ClickedItem = e.target.closest('li')
        RemoveActive()
        ClickedItem.classList.toggle('active')
        let AccordianContent = ClickedItem.querySelector('.accordion__content')
        const scrollHeight = AccordianContent.scrollHeight
        AccordianContent.style.maxHeight = `${scrollHeight}px`
    }

    return (
        <>
            <Container className='accordion flex-column'>
                <ul className='accordion__list'>
                    <Item1 className='accordion__item' onClick={ExchangeHandler}>
                        <Heading className='accordion__heading'>
                            <InputHeading className='accordion__inputHeading'>
                                <CircleSelectorIcon className='circleSelector' />
                                <span>With Exchange</span>
                            </InputHeading>
                            <div className='accordion__textHeading'>
                                <span className='accordion__textHeading--orange'>Up to <i className='priceSymbol'>&#8377;</i>{Math.round((15 / 100 * currentPrice))}.00 off</span>
                            </div>
                        </Heading>
                        <Content className='accordion__content flex-column'>
                            <button className='accordion__button--white flex'>Choose Product to Exchange <span><KeyboardArrowRightIcon /></span></button>
                            <Link to='#' className='colored-link'>How does Exchange Work?</Link>
                        </Content>
                    </Item1>
                    <Item2 className='accordion__item active' onClick={ExchangeHandler}>
                        <Heading>
                            <div className='accordion__inputHeading'>
                                <CircleSelectorIcon className='circleSelector' />
                                <span>With Out Exchange</span>
                            </div>
                            <div className='accordion__textHeading'>
                                {currentPrice === originalPrice ?
                                    <span className="accordion__textHeading--orange line-thorugh"><i className='priceSymbol'>&#8377;</i>{currentPrice}</span>
                                    :
                                    <>
                                        <span className='accordion__textHeading--orange'><i className='priceSymbol'>&#8377;</i>{currentPrice}.00</span>
                                        <span className='accordion__textHeading--gray line-through'><i className='priceSymbol'>&#8377;</i><strong>{originalPrice}</strong></span>
                                    </>
                                }
                            </div>
                        </Heading>
                        <Content className='accordion__content'>
                            <div className="deliverDetails flex-column">
                                <p><Link to='#' className='colored-link'>FREE delivery </Link><strong>{newDate(3)} </strong> <Link to={'#'} className='colored-link'>Details</Link></p>
                                <p>Or fastest delivery <strong>Tomorrow {newDate(1)}</strong></p>
                                <span className='flex deliveryLocation'><LocationOnOutlinedIcon className='Icon' /> <Link to="#" className='colored-link'>Select delivery location</Link></span>
                                <span className='green'>In Stock</span>
                            </div>
                            <Buttons>
                                <button onClick={Auth.isLoggedIn ? AddToCartHandler : SigninHandler} className="yellow">Add To Cart</button>
                                <button className="orange">Buy Now</button>
                                <div className='flex-column'>
                                    <span className="colored-link flex"><LockIcon />Secure Transaction</span>
                                    <span className='flex'>
                                        <input type="checkbox" name="addgift" id="Gift" />
                                        <label htmlFor="Gift">Add gift options</label>
                                    </span>
                                </div>
                            </Buttons>
                        </Content>
                    </Item2>
                </ul>
                <hr />
                <Footer className='flex-column'>
                    <button className='gray'>Add to Wish List</button>
                    <span>Have one to sell?</span>
                    <button className='white'>Sell on Amazon</button>
                </Footer>
            </Container>
        </>
    )
}

export default BuyingSection

const Container = styled.div`
    width:275px;
    height: fit-content;
    hr{
        margin:10px 0;
        border-color: rgba(200,200,200,.3);
    }

    ul{
        border-radius: 8px;
        border: 1px solid rgba(200,200,200,.7);
    }

    .accordion__item{
       &.active{
        background-color: white;
        .circleSelector{
            background: #007185;
        }
        .accordion__content{
            max-height: initial;
            margin-top:1rem;
        }
       }
    }
    @media (max-width:900px) {
        width:100%;
    }
`
const Item1 = styled.li`
    padding: 0.8rem 1rem 0.8rem 3rem;
    position: relative;
    cursor:pointer;
    background-color:#e9e9e9;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom:1px solid rgb(200,200,200,1);

    .priceSymbol{
        margin-right: 4px;
    }
    .MuiSvgIcon-root{
        font-size:1.2rem;
        fill:var(--gray);
        margin: -2px;
    }
    button{
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: .75rem;
        margin-bottom: .5rem;

        @media(max-width:900px){
            padding: 1rem 1rem;
        }
    }
    a{
        font-size: .9rem;
    }

    &:hover{
        &:not(.active){
            .circleSelector{
                background: #60b5c4;
            }
        }
    }
`
const Item2 = styled(Item1)`
    border-radius: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

const Heading = styled.span`
    .accordion{
        &__textHeading{
            display:flex;
            gap:5px;
            font-size:.9rem;

            &--orange{
                color:var(--orange);
                font-weight:600;
            }
            &--gray{
                color:var(--gray);
            }
        }
    } 
`
const InputHeading = styled.div`
    span{
        font-size: .9rem;
    }
`
const Content = styled.div`
    max-height:0;
    overflow:hidden;
    transition: max-height 300ms ease;
    pointer-events: all;
    .deliverDetails{
        font-size: .9rem;
        gap:.8rem;
        strong{
            font-size: .9rem;
        }
        .deliveryLocation{
            gap:.5rem;
            align-items: center;
            .Icon{
                margin:0;
            }
        }
        .green{
            color:var(--green);
            font-size: 1rem;
        }
    }
    .accordion__button{
        &--white{
            border-radius: 8px;
            background: white;
            border: 1px solid rgb(200,200,200,1);
            box-shadow: 5px 5px 10px #f7fafa;
            justify-content: space-between;
            align-items: center;
            &:hover{
                background: #f7fafa;
            }
        }
    }
`
const Buttons = styled.div`
    margin: .8rem 0;
    div{
        margin:.4rem 0;
        gap: .3rem;

        span{
            gap:8px;
            align-items: center;
        }
    }
    button{
        border-radius: 20px;
        border: none;
    }
    .yellow{
        background: var(--yellow);
        &:hover{
            background:#e7bd00;
        }
    }

    .orange{
        background:#fa8900;
        &:hover{
            background: #e47d00;
        }
    }
`
const Footer = styled.div`
align-items: center;
gap:5px;
    button{
        padding: 8px 15px;
        width:100%;
        &.gray{
            background-image: linear-gradient(to bottom, rgb(255,255,255,.5), rgb(200,200,200,.5));
            border:1px solid rgba(150,150,150,.5);
        }
        &.white{
            background: white;
            width: fit-content;
            border:1px solid rgba(200,200,200,1);
            border-radius: 10px;
            color:rgb(0,0,0,.7);

            &:hover{
                background:#e9e9e9;
                box-shadow: 0px 5px 10px #e9e9e9;
            }
        }  
    }
    span{
        font-size:.8rem;
        letter-spacing: 0px;
        color:rgb(0,0,0,.5);
    }
`