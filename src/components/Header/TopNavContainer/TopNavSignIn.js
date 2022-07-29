import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Logout } from '../../../Store/Auth-Slice'
import { logoutHelper } from '../../../Store/AuthenticationHelper'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { disableBackDrop, enableBackDrop } from '../../../Store/backdrop-Slice'

const TopNavSignIn = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Auth = useSelector(state => state.Auth)

    const backdropEnableHandler = () => {
        dispatch(enableBackDrop())
    }

    const backdropDisableHandler = () => {
        dispatch(disableBackDrop())
    }

    const logoutHandler = () => {
        logoutHelper()
        dispatch(Logout())
        navigate('/signin/emailCheck', { replace: true })
    }

    return (
        <Container className='flex nav--hover' onMouseEnter={backdropEnableHandler}
            onMouseLeave={backdropDisableHandler}>
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
                            <Link to={Auth.isLoggedIn ? "/yourAccount" : '/signin/emailCheck'}>Your Account</Link>
                        </li>
                        <li>
                            <Link to={Auth.isLoggedIn ? "/order-history" : "/signin/emailCheck"}>Your Orders</Link>
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
        </Container>
    )
}

export default TopNavSignIn

const Container = styled.div`
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