import styled from "styled-components";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Amazon_Logo } from "../../assets/Images";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TopNavSearch from "./TopNavSearch";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { backDropContext, UserContext } from "../../Store";

const TopNav = () => {
  const backDropCtx = useContext(backDropContext);
  const userCtx = useContext(UserContext)
  return (
    <TopNavContainer className="flex">
      {/* Top Nav Left Side */}
      <TopNavLeft className="flex top-nav-child">
        {/* Top Nav Logo */}
        <div className="nav__logo nav--hover ">
          <Link to={"/"} className="flex">
            <img src={Amazon_Logo} alt="Amazon Logo" /> <span>.in</span>
          </Link>
        </div>
        {/* Top Nav Logo */}
        {/* Top Nav Address */}
        <div className="nav__address nav--hover">
          <Link to={"/"} className="flex-column">
            <span className="nav__address__first nav__span__first">Hello</span>
            <span className="nav__address__second nav__span__second">
              <LocationOnOutlinedIcon />
              Select your address
            </span>
          </Link>
        </div>
        {/* Top  Nav Address */}
      </TopNavLeft>
      {/* Top Nav Left Side */}
      {/* Top Nav Middle */}
      <TopNavMiddle className="flex top-nav-child">
        {/* Top Nav Middle Search Bar */}
        <TopNavSearch />
      </TopNavMiddle>
      {/* Top Nav Middle */}
      <TopNavRight className="flex top-nav-child">
        {/* <div className="nav--hover nav__language"></div> */}

        <div
          className="nav--hover nav__signIn nav__signIn__dropDown"
          onMouseEnter={backDropCtx.enableBackDrop}
          onMouseLeave={backDropCtx.disableBackDrop}
        >
          <Link to={userCtx.isLoggedIn ? '#' : '/signin/emailCheck'} className="flex-column" >
            <span className="nav__span__first">Hello, {userCtx.isLoggedIn ? userCtx.user.name : 'Sign in'}</span>
            <span className="nav__span__second flex">
              Accounts &amp; Lists <ArrowDropDownIcon />
            </span>
          </Link>
          <div className="nav__signIn__dropDown__content">
            <div>
              {!userCtx.isLoggedIn && <div className="dropdown__signin">
                <Link to={"/signin/emailCheck"}>
                  <button>Sign In</button>
                </Link>
                <p>
                  New Customer?
                  <Link to={"/signup"}>
                    <span>Start Here.</span>
                  </Link>
                </p>
              </div>}
              <ul className="dropdown__list">
                <h3>Your List</h3>
                <li>
                  <Link to={"/"}>{userCtx.isLoggedIn ? userCtx.user.name + "'s" : 'Create a'} Wish List</Link>
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
              </ul>
              <ul className="dropdown__account">
                <h3>Your Account</h3>
                <li>
                  <Link to={"/"}>Your Account</Link>
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
                  <Link to={"/"}>Your Subscribe & Save Items</Link>
                </li>
                <li>
                  <Link to={"/"}>Memberships & Subscriptions</Link>
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
                {userCtx.isLoggedIn && <li onClick={userCtx.logoutHandler} >
                  <Link to={'#'}>Sign Out</Link>
                </li>}
              </ul>
            </div>
          </div>
        </div>
        <div className="nav--hover nav__orders">
          <Link to={"/"} className="flex-column">
            <span className="nav__span__first">Returns</span>
            <span className="nav__span__second">&amp; Orders</span>
          </Link>
        </div>
        <div className="nav--hover nav__cart">
          <Link to={"/"} className="flex-column">
            <span className="nav__span__second flex">
              <ShoppingCartOutlinedIcon fontSize="large" />
              Cart
            </span>
          </Link>
        </div>
      </TopNavRight>
    </TopNavContainer >
  );
};

export default TopNav;

const TopNavContainer = styled.nav`
  height: 60px;
  align-items: center;
  background-color: #0f1111;
  padding: 0.4rem 0.8rem;
  width: 100%;
  gap: 0.5rem;
  z-index: 100;

  .nav__span__first {
    font-size: 0.75rem;
    color: #cecaca;
  }
  .nav__span__second {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    align-items: center;
    width: max-content;
  }
`;
const TopNavLeft = styled.div`
  align-items: center;
  /* NavLogo */
  .nav__logo {
    padding: 0.7rem 0.4rem 0.2rem;
    img {
      width: 6.5rem;
      height: 2rem;
    }
    span {
      margin: 0.2rem 0 0.2rem 0;
      font-size: 0.95rem;
    }
  }
  /* Nav Address */
  .nav__address {
    justify-content: center;
    .nav__span__first {
      margin-left: 1.5rem;
    }
    .nav__span__second {
      margin-top: -10px;
    }
  }
`;
const TopNavMiddle = styled.div`
  flex-grow: 2;
`;
const TopNavRight = styled.div`
  .nav__signIn__dropDown {
    position: relative;
    display: inline-block;

    .nav__signIn__dropDown__content {
      display: none;
      position: absolute;
      top: 3rem;
      right: -1px;
      padding: 1rem 2rem;
      background-color: white;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
      z-index: 90;
      color: black;

      ul {
        h3 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0.5rem 0;
        }
        a {
          font-size: 0.9rem;
          font-family: "Amazon-light";
          color: black;
          &:hover {
            color: var(--orange);
            text-decoration: underline;
          }
        }
      }

      div {
        display: grid;
        width: 25rem;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "signin signin" "yourlist youraccount";

        .dropdown__signin {
          grid-area: signin;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 0.5rem;
          button {
            width: 10rem;
            padding: 0.5rem;
            margin-bottom: 0.6rem;
          }
          p {
            font-size: 0.7rem;
            a {
              color: var(--blue);
              margin-left: 0.2rem;
              &:hover {
                text-decoration: underline;
                color: var(--orange);
              }
            }
          }
        }
        .dropdown__list {
          grid-area: yourlist;
        }
        .dropdown__account {
          grid-area: youraccount;
        }
      }
    }

    &:hover {
      .nav__signIn__dropDown__content {
        display: block;
        transition: 300ms ease;
      }
    }
  }
  .nav__cart {
    .nav__span__second {
      align-items: flex-end;
      font-weight: 600;
      letter-spacing: 1xpx;
    }
  }
`;
