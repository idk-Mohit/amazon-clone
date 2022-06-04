import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const BottomNav = () => {
  return (
    <BottomNavContainer className="flex">
      <ul className="flex">
        <li>
          <Link to={"/"} className="flex link__icons">
            <MenuOutlinedIcon /> All
          </Link>
        </li>
        <li>
          <Link to={"/"}>Best Sellers</Link>
        </li>
        <li>
          <Link to={"/"}>Mobiles</Link>
        </li>
        <li>
          <Link to={"/"}>Customer Service</Link>
        </li>
        <li>
          <Link to={"/"}>Today's Deals</Link>
        </li>
        <li>
          <Link to={"/"}>Fashion</Link>
        </li>
        <li>
          <Link to={"/"}>Electronics</Link>
        </li>
        <li>
          <Link to={"/"} className="flex link__icons">
            Prime <ArrowDropDownIcon fontSize="small" />
          </Link>
        </li>
        <li>
          <Link to={"/"}>Home &amp; Kitchen</Link>
        </li>
        <li>
          <Link to={"/"}>Amazon Pay</Link>
        </li>
        <li>
          <Link to={"/"}>New Releases</Link>
        </li>
        <li>
          <Link to={"/"}>Computers</Link>
        </li>
        <li>
          <Link to={"/"}>Books</Link>
        </li>
        <li>
          <Link to={"/"}>Coupons</Link>
        </li>
        <li>
          <Link to={"/"}>Toys &amp; Games</Link>
        </li>
      </ul>
    </BottomNavContainer>
  );
};

export default BottomNav;

const BottomNavContainer = styled.nav`
  background-color: #232f3e;
  overflow: hidden;
  height: 45px;
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
`;
