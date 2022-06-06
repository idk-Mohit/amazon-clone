import styled from "styled-components";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Amazon_Logo } from "../../assets/Images";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TopNavSearch from "./TopNavSearch";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BackDropContext from "../../Store/BackDrop-context";

const TopNav = () => {
  const backdrop = useContext(BackDropContext);
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
          className="nav--hover nav__signIn"
          onMouseEnter={backdrop.activateBackdrop}
          onMouseLeave={backdrop.deactiveBackdrop}
        >
          <Link to={"/"} className="flex-column">
            <span className="nav__span__first">Hello, Sign in</span>
            <span className="nav__span__second flex">
              Accounts &amp; Lists <ArrowDropDownIcon />{" "}
            </span>
          </Link>
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
    </TopNavContainer>
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
  .nav__cart {
    .nav__span__second {
      align-items: flex-end;
      font-weight: 600;
      letter-spacing: 1xpx;
    }
  }
`;
