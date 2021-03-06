import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import TopNavSearch from "./TopNavSearch";
import { Amazon_Logo, CartIcon, FlagImage } from "../../assets/Images";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { enableBackDrop, disableBackDrop, enablepopupBackdrop } from "../../Store/backdrop-Slice";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Logout } from '../../Store/Auth-Slice'
import { logoutHelper } from '../../Store/AuthenticationHelper'

const TopNav = () => {
  const Auth = useSelector(state => state.Auth)
  const Cart = useSelector(state => state.Cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isCart = window.location.href;

  const backdropEnableHandler = () => {
    dispatch(enableBackDrop())
  }

  const backdropDisableHandler = () => {
    dispatch(disableBackDrop())
  }

  const popUpBackDropHandler = () => {
    dispatch(enablepopupBackdrop())
  }

  const logoutHandler = () => {
    logoutHelper()
    dispatch(Logout())
    navigate('/signin/emailCheck', { replace: true })
  }
  return (
    <TopNavContainer className='flex'>
      <TopNavLeftContainer className="flex">
        <TopNavLogo className='nav--hover'>
          <Link to={'/'}>
            <img src={Amazon_Logo} alt='Nav_Logo' />
            <span>.in</span>
          </Link>
        </TopNavLogo>
        <TopNavLocation className="nav--hover flex"
          onClick={popUpBackDropHandler}
        >
          <LocationOnOutlinedIcon />
          <div className="flex-column">
            <span className='top__nav__hover__div-first'>{Auth.isLoggedIn ? `Deliver to ${Auth.user.name}` : 'Hello'}</span>
            <span className="top__nav__hover__div-second">Select Your Address</span>
          </div>
        </TopNavLocation>
      </TopNavLeftContainer>
      <TopNavMiddleContainer className="flex">
        <TopNavSearch />
      </TopNavMiddleContainer>
      <TopNavRightContainer className="flex">
        <TopNavLanguage className="flex nav--hover"
          onMouseEnter={backdropEnableHandler}
          onMouseLeave={backdropDisableHandler} >
          <div className="imageContainer flex">
            <img src={FlagImage} alt="" /> <span><ArrowDropDownIcon /></span>
          </div>
          <LanguageDropDown className="languageDropdown flex-column">
            <div className="input-radio-container">
              <input type="radio" name="langauge" id="english" />
              <label htmlFor="english">English</label>
            </div>
            <div className="input-radio-container">
              <input type="radio" name="langauge" id="hindi" />
              <label htmlFor="hindi">??????????????????</label>
            </div>
          </LanguageDropDown>
        </TopNavLanguage>
        <TopNavSignin className='flex nav--hover'
          onMouseEnter={backdropEnableHandler}
          onMouseLeave={backdropDisableHandler} >
          <Link to={Auth.isLoggedIn ? '/yourAccount' : '/signin/emailCheck'} className="flex-column">
            <span className="top__nav__hover__div-first">Hello, {Auth.isLoggedIn ? Auth.user.name : 'Sign in'}</span>
            <div className="flex">
              <span className="top__nav__hover__div-second">Accounts &amp; Lists</span>
              <ArrowDropDownIcon fontSize="small" />
            </div>
          </Link>
          <TopNavSigninDropDown className="dropdown" >
            <TopNavSigninDropDownContainer>
              {!Auth.isLoggedIn && <DropDownSignInBtn>
                <Link to={"/signin/emailCheck"}>
                  <button>Sign In</button>
                </Link>
                <p className="flex">
                  New Customer?
                  <Link to={"/signup"} className='colored-link'>
                    <span>Start Here.</span>
                  </Link>
                </p>
              </DropDownSignInBtn>}
              <DropDownList1>
                <h3>Your List</h3>
                <li>
                  <Link to={"/"}>{Auth.isLoggedIn ? Auth.user.name + "'s" : 'Create a'} Wish List</Link>
                </li>
                <li>
                  <Link to={"/"}>Wish from Any Website</Link>
                </li>
                <li>
                  <Link to={"/"}>Baby Wishlist</Link>
                </li>
                <li>
                  <Link to={"/"}>Discover Your Style</Link>
                </li>
                <li>
                  <Link to={"/"}>Explore Showroom</Link>
                </li>
              </DropDownList1>
              <DropDownList2>
                <h3>Your Account</h3>
                <li>
                  <Link to={"/yourAccount"}>Your Account</Link>
                </li>
                <li>
                  <Link to={"/"}>Your Orders</Link>
                </li>
                <li>
                  <Link to={"/"}>Your Wish List</Link>
                </li>
                <li>
                  <Link to={"/"}>Your Recommendations</Link>
                </li>
                <li>
                  <Link to={"/"}>Your Prime Membership</Link>
                </li>
                <li>
                  <Link to={"/"}>Your Prime Video</Link>
                </li>
                <li>
                  <Link to={"/"}>Your Subscribe &amp; Save Items</Link>
                </li>
                <li>
                  <Link to={"/"}>Memberships &amp; Subscriptions</Link>
                </li>
                <li>
                  <Link to={"/"}>Your Amazon Business Account</Link>
                </li>
                <li>
                  <Link to={"/"}>Your Seller Account</Link>
                </li>
                <li>
                  <Link to={"/"}>Manage Your Content and Devices</Link>
                </li>
                {Auth.isLoggedIn && <li onClick={logoutHandler} >
                  <Link to={'#'}>Sign Out</Link>
                </li>}
              </DropDownList2>
            </TopNavSigninDropDownContainer>
          </TopNavSigninDropDown>
        </TopNavSignin>
        <TopNavReturnOrder className="nav--hover flex">
          <Link to={Auth.isLoggedIn ? '/order-history' : '/signin/emailCheck'} className="flex-column">
            <span className="top__nav__hover__div-first">Returns</span>
            <span className="top__nav__hover__div-second">&amp; Orders</span></Link>
        </TopNavReturnOrder>
        <TopNavCart className='nav--hover '>
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
        </TopNavCart>
      </TopNavRightContainer>
    </TopNavContainer >
  );
};

export default TopNav;

const TopNavContainer = styled.nav`
  height: 60px;
  align-items: center;
  background-color: #131921;
  padding: 0.4rem 0.8rem;
  width: 100%;
  gap: 0.5rem;
  z-index: 100;

  a{
    display: flex;
  } 
  .top__nav__hover__div-first{
    font-size: 0.7rem;
    color:rgba(200,200,200,1);
    padding-bottom: 0.1rem;
  }
  .top__nav__hover__div-second{
    font-size: 0.8rem;
    font-family: 'Amazon-light';
    font-weight: 900;
    letter-spacing: .5px;
  }
  .nav--hover{
    cursor: pointer;
    align-items: center;
    margin:0 1px;
  }
`;

const TopNavLeftContainer = styled.div`
`;

const TopNavLogo = styled.div`
  padding: 0.7rem 0.4rem 0.2rem;
  img {
    width:6rem;
  }
`

const TopNavLocation = styled.div`
  align-items: center;
`

const TopNavMiddleContainer = styled.div`
  flex-grow: 2;
  margin:0 .4rem;
`;

const TopNavRightContainer = styled.div``;

const TopNavLanguage = styled.div`
    position:relative;
    .imageContainer{
      align-items: flex-end;
      img{
        width:2rem;
      }
      .MuiSvgIcon-root{
          font-size: 1.2rem;
          margin-right: -5px;
        }
    }

    &:hover {
      .languageDropdown{
        opacity:1;
        pointer-events: all;
        transition:ease 300ms;
      }
    }
`
const LanguageDropDown = styled.div`
    opacity:0;
    position:absolute;
    top:2.98rem;
    right:-1rem;
    width: 10rem;
    padding:1rem;
    pointer-events: none;
    background-color: white;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
    z-index: 90;
    color: black;
    cursor: default;
    transition:ease 300ms;
    border-radius: 3px;
    border: 1px solid var(--lightgray);

    div{
      display: flex;
      align-items: center;
      cursor:pointer;
      label{
        margin-left: .5rem;
        font-size: .9rem;
        color:var(--gray);
        cursor:pointer;

        &:hover{
          text-decoration: underline;
        }
      }

      input{


        &:hover{

        }
      }

      &:hover{
        
      }
    }
`

const TopNavSignin = styled.div`
position: relative;
span{
  padding-bottom: 0 !important;
}
> a > div {
  align-items: center;
  .MuiSvgIcon-root{
          font-size: 1.2rem;
          margin-right: -5px;
        }
}
&:hover {
  .dropdown{
      opacity:1;
      pointer-events: all;
  }
}
`
const TopNavSigninDropDown = styled.div`
  opacity:0;
  pointer-events: none;
  position: absolute;
  top: 2.98rem;
  right: -1rem;
  padding: 1rem;
  background-color: white;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
  z-index: 90;
  color: black;
  cursor: default;
  transition:ease 300ms;
  border-radius: 3px;
  border: 1px solid var(--lightgray);
  span{
    margin-left:0.4rem;
  }
`
// TopNavBarDropDown....
const TopNavSigninDropDownContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "button button"
  "list1 list2";
  width:28rem;
  align-items: flex-start;
`
const DropDownSignInBtn = styled.div`
  grid-area: button;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom:1rem;
  border-bottom:1px solid rgba(200,200,200,.5);
  button {
    width: 12rem;
    padding: 0.5rem;
    margin-bottom: 0.6rem;
  }
  p {
    font-size: 0.7rem;
  }
`
const DropDownList1 = styled.ul`  
  grid-area: list1;
  align-items: flex-start;
  padding: 0 1rem;
  a{
    color:var(--gray);
    font-size:0.8rem;
    margin:0.5rem 0;
    &:hover{
      color:var(--orange);
      text-decoration: underline;
    }
  }
`
const DropDownList2 = styled(DropDownList1)`
  grid-area: list2;
  border-left: 1px solid rgba(200,200,200,.5);
`;


// TopNavBarDropDown....


const TopNavReturnOrder = styled.div``

const TopNavCart = styled.div`
 h4 {
    margin-bottom: 1px !important;
    font-size: .9rem;
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
    height: 15px;
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

