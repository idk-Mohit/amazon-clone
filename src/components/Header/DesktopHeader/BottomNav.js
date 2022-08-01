import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { enableBackDrop, disableBackDrop } from "../../../Store/backdrop-Slice";
import { useDispatch } from "react-redux";
import MainBurgerMenu from "../BurgerMenu/MainBurgerMenu";


const BottomNav = () => {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const dispatch = useDispatch()

  const backdropEnableHandler = () => {
    dispatch(enableBackDrop())
  }

  const backdropDisableHandler = () => {
    setBurgerStatus(false)
    dispatch(disableBackDrop())
  }
  const BurgerMenuOpenHandler = () => {
    document.querySelector('body').style.overflowY = 'hidden'
    setBurgerStatus(true)
  }
  const BurgerMenuCloseHandler = () => {
    document.querySelector('body').style.overflowY = 'auto'
    setBurgerStatus(false)
  }
  return (
    <BottomNavContainer className="flex">
      <List className="flex">
        <li>
          <MainBurgerMenuBtn className="flex link__icons MainBurgerMenuBtn" onClick={BurgerMenuOpenHandler}>
            <MenuOutlinedIcon fontSize="small" /> All
          </MainBurgerMenuBtn>
        </li>
        <li>
          <Link to={"/productList/Best Sellers"}>Best Sellers</Link>
        </li>
        <li>
          <Link to={"/productList/mobile"}>Mobiles</Link>
        </li>
        <li>
          <Link to={"/productList/Television"}>Television</Link>
        </li>
        <li>
          <Link to={"/productList/Today's deals"}>Today's Deals</Link>
        </li>
        <li>
          <Link to={"/productList/Fashion"}>Fashion</Link>
        </li>
        <li>
          <Link to={"/productList/electronics"}>Electronics</Link>
        </li>
        <Prime onMouseEnter={backdropEnableHandler}
          onMouseLeave={backdropDisableHandler}>
          <Link to='/' className="flex link__icons">
            Prime <ArrowDropDownIcon className="arrowIcon" />
          </Link>
          <PrimeDropDown className="dropdown">
            <Link to='/signin/emailCheck'><img
              src={
                "https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB442254244_.jpg"
              }
              alt=""
            /></Link>
          </PrimeDropDown>
        </Prime>
        <li>
          <Link to={"/productList/Kitchen"}>Home &amp; Kitchen</Link>
        </li>
        <li>
          <Link to={"/productList/Amazon pay"}>Amazon Pay</Link>
        </li>
        <li>
          <Link to={"/productList/New Releases"}>New Releases</Link>
        </li>
        <li>
          <Link to={"/productList/Computer"}>Computers</Link>
        </li>
        <li>
          <Link to={"/productList/Furniture"}>Furniture</Link>
        </li>
        <li>
          <Link to={"/productList/coupons"}>Coupons</Link>
        </li>
        <li>
          <Link to={"/productList/toys and games"}>Toys &amp; Games</Link>
        </li>
      </List>
      <MainBurgerMenu status={burgerStatus} Close={BurgerMenuCloseHandler} />
    </BottomNavContainer>
  );
};

export default BottomNav;

const BottomNavContainer = styled.nav`
  background-color: #232f3e;
  overflow: visible;
  height: 45px;
  z-index: 100;
  padding: 0 .5rem;
  ::-webkit-scrollbar {
    height: 3px;
    /* display: none; */
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b1b1b8;
    border-radius: 20px;
    border: none;

    &:hover {
      background-color: #8f8f92;
      transform: scale(1.5);
    }
  }
`
const List = styled.ul`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;

  li {
    width: max-content;
   
    a,span{
      padding: 0.4rem;
    font-size: 0.9rem;
    border: 1px solid transparent;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
      border-color: white;
    }
    }
  }

  .link__icons {
    align-items: center;
    justify-content: center;
  }
`
const Prime = styled.li`
  position: relative;
  display: inline-block;

  .arrowIcon{
    width: 16px;
    height: 16px;
    margin: -4px -4px -4px 0;
  }

  &:hover {
    .dropdown {
      opacity: 1;
      pointer-events: all;
    }
  }
    
`
const PrimeDropDown = styled.div`
      opacity:0;
      pointer-events: none;
      position: absolute;
      top: 2rem;
      left: -0.45rem;
      padding: 1rem;
      background-color: white;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
      z-index: 90;
      transition:ease 300ms;
      img {
        width: 20rem;
        height: 20rem;
      }
`
const MainBurgerMenuBtn = styled.span`
`