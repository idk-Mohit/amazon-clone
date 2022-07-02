import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React, { useContext } from "react";
import { backDropContext } from "../../Store";

const BottomNav = () => {
  const backdrop = useContext(backDropContext);
  return (
    <BottomNavContainer className="flex">
      <ul className="flex">
        <li>
          <Link to={"/"} className="flex link__icons">
            <MenuOutlinedIcon /> All
          </Link>
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
        <li
          className="prime"
          onMouseEnter={backdrop.enableBackDrop}
          onMouseLeave={backdrop.disableBackDrop}
        >
          <Link to={"/"} className="prime backdrop">
            <div className="flex link__icons">
              Prime <ArrowDropDownIcon fontSize="small" />
            </div>
            <div className="prime__dropdownContent">
              <img
                src={
                  "https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB442254244_.jpg"
                }
                alt=""
              />
            </div>
          </Link>
        </li>
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
          <Link to={"/productList/Book"}>Books</Link>
        </li>
        <li>
          <Link to={"/productList/coupons"}>Coupons</Link>
        </li>
        <li>
          <Link to={"/productList/toys and games"}>Toys &amp; Games</Link>
        </li>
      </ul>
    </BottomNavContainer>
  );
};

export default BottomNav;

const BottomNavContainer = styled.nav`
  background-color: #232f3e;
  overflow: visible;
  height: 45px;
  z-index: 100;
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
  ul {
    padding: 0.2rem 0;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;

    li {
      padding: 0.4rem;
      font-size: 0.9rem;
      border: 1px solid transparent;
      border-radius: 2px;
      width: max-content;

      &:hover {
        border-color: white;
      }
    }

    .link__icons {
      align-items: center;
      justify-content: center;
    }
  }

  .prime {
    position: relative;
    display: inline-block;
    .prime__dropdownContent {
      display: none;
      position: absolute;
      top: 1.5rem;
      left: -0.45rem;
      padding: 1rem;
      background-color: white;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
      z-index: 90;
      /* right: 0; */
      img {
        width: 20rem;
        height: 20rem;
      }
    }
    &:hover {
      .prime__dropdownContent {
        display: block;
        transition: 300ms ease;
        animation: fadeAway 1s ease;
      }
    }
  }
`;
