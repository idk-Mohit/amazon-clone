import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { Amazon_Logo } from "../../assets/Images";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useSelector } from "react-redux";

const TopFooter = () => {
  const Auth = useSelector(state => state.Auth)
  return (
    <TopFooterContainer>
      <FooterMainLinks className="flex">
        <div className="footer__mainlinks">
          <h3>Get to Know Us</h3>
          <ul>
            <li>
              <Link to={"/"}>About Us</Link>
            </li>
            <li>
              <Link to={"/"}>Careers</Link>
            </li>
            <li>
              <Link to={"/"}>Press Releases</Link>
            </li>
            <li>
              <Link to={"/"}>Amazon Cares</Link>
            </li>
            <li>
              <Link to={"/"}>Gift a Smile</Link>
            </li>
            <li>
              <Link to={"/"}>Amazon Science</Link>
            </li>
          </ul>
        </div>
        <div className="footer__mainlinks">
          <h3>Connect with Us</h3>
          <ul>
            <li>
              <Link to={"/"}>Facebook</Link>
            </li>
            <li>
              <Link to={"/"}>Instagram</Link>
            </li>
            <li>
              <Link to={"/"}>Twitter</Link>
            </li>
          </ul>
        </div>
        <div className="footer__mainlinks">
          <h3>Make Money with Us</h3>
          <ul>
            <li>
              <Link to={"/"}>Sell on Amazon</Link>
            </li>
            <li>
              <Link to={"/"}>Sell under Amazon Accelerator</Link>
            </li>
            <li>
              <Link to={"/"}>Amazon Global Selling</Link>
            </li>
            <li>
              <Link to={"/"}>Become an Affiliate</Link>
            </li>
            <li>
              <Link to={"/"}>Fulfillment by Amazon</Link>
            </li>
            <li>
              <Link to={"/"}>Advertise Your Products</Link>
            </li>
            <li>
              <Link to={"/"}>Amazon Pay on Merchants</Link>
            </li>
          </ul>
        </div>
        <div className="footer__mainlinks">
          <h3>Let Us Help You</h3>
          <ul>
            <li>
              <Link to={"/"}>COVID-19 and Amazon</Link>
            </li>
            <li>
              <Link to={"/"}>Your Account</Link>
            </li>
            <li>
              <Link to={"/"}>Returns Centre</Link>
            </li>
            <li>
              <Link to={"/"}>100% Purchase Protection</Link>
            </li>
            <li>
              <Link to={"/"}>Amazon App Download</Link>
            </li>
            <li>
              <Link to={"/"}>Amazon Assistant Download</Link>
            </li>
            <li>
              <Link to={"/"}>Help</Link>
            </li>
          </ul>
        </div>
      </FooterMainLinks>
      <FooterCountries className="footer__countries flex-column">
        <div className="flex">
          {/* Footer Logo */}
          <Link to={"/"}>
            <img src={Amazon_Logo} alt="Amazon Logo" />
          </Link>
          {/* Footer Logo */}
          {/* Footer Language Selector */}
          <Link to={"/"}>
            <FooterLanguageButton className="Footer__language__button flex">
              <LanguageIcon fontSize="small" /> English
              <span className="flex-column">
                <ArrowDropUpIcon fontSize="small" />
                <ArrowDropDownIcon fontSize="small" />
              </span>
            </FooterLanguageButton>
          </Link>
          {/* Footer Language Selector */}
        </div>
        {/* Countries */}
        <CountriesList className="flex">
          <li>
            <Link to={"/"}>Australia</Link>
          </li>
          <li>
            <Link to={"/"}>Brazil</Link>
          </li>
          <li>
            <Link to={"/"}>Canada</Link>
          </li>
          <li>
            <Link to={"/"}>China</Link>
          </li>
          <li>
            <Link to={"/"}>France</Link>
          </li>
          <li>
            <Link to={"/"}>Germany</Link>
          </li>
          <li>
            <Link to={"/"}>Italy</Link>
          </li>
          <li>
            <Link to={"/"}>Japan</Link>
          </li>
          <li>
            <Link to={"/"}>Mexico</Link>
          </li>
          <li>
            <Link to={"/"}>Netherlands</Link>
          </li>
          <li>
            <Link to={"/"}>Poland</Link>
          </li>
          <li>
            <Link to={"/"}>Singapore</Link>
          </li>
          <li>
            <Link to={"/"}>Spain</Link>
          </li>
          <li>
            <Link to={"/"}>Turkey</Link>
          </li>
          <li>
            <Link to={"/"}>United Arab Emirates</Link>
          </li>
          <li>
            <Link to={"/"}>United Kingdom</Link>
          </li>
          <li>
            <Link to={"/"}>United States</Link>
          </li>
        </CountriesList>
      </FooterCountries>
      <MobileView className='flex'>
        <ul className="flex-column">
          <li><Link to={'/'}>{Auth.isLoggedIn ? `${Auth.user.name}'s` : 'Your'} Amazon.in</Link></li>
          <li><Link to={'#'}>Amazon Pay</Link></li>
          <li><Link to={'#'}>Wish List</Link></li>
          <li><Link to={Auth.isLoggedIn ? `/` : '/signin/emailCheck'}>Your Account</Link></li>
          <li><Link to={Auth.isLoggedIn ? '/order-history' : '/signin/emailCheck'}>Returns</Link></li>
          <li><Link to={'#'}>Customer Service</Link></li>
        </ul>
        <ul className='flex-column'>
          <li><Link to={Auth.isLoggedIn ? '/order-history' : '/signin/emailCheck'}>Your Orders</Link></li>
          <li><Link to={'#'}>Amazon App Download</Link></li>
          <li><Link to={'#'}>Find a WishList</Link></li>
          <li><Link to={'#'}>Your Recently viewed Items</Link></li>
          <li><Link to={'#'}>Sell</Link></li>
        </ul>
      </MobileView>
    </TopFooterContainer>
  );
};

export default TopFooter;

const TopFooterContainer = styled.footer`
  background-color: #232f3e;
  color: white;
  padding:3rem 3rem 1rem;
  border-bottom: 1px solid rgba(200, 200, 200, 0.267);
  @media(max-width:1024px){
  padding: 3rem 1rem;
  }
`
const FooterMainLinks = styled.div`
    max-width: 1500px;
    margin:auto;
    justify-content: space-around;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(200, 200, 200, 0.267);
    @media(max-width:768px){
    display:none;
  }
  .footer__mainlinks{
    h3 {
        font-weight: 500;
        margin: 1rem 0;
        font-size: 1rem;
    }
    li {
      margin: 0.5rem 0;
      a {
        font-size: 0.85rem;
        font-weight: 400;
        color: var(--lightgray);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
const FooterCountries = styled.div`
  padding: 2rem 3rem;
  align-items: center;
  max-width: 1500px;
  margin: auto;
  > div {
    gap: 1rem;
    margin: 1rem;
    align-items: center;
    img {
      width: 5.5rem;
      height: 1.8rem;
    }
    }
  @media(max-width:768px){
    display:none;
  }
`
const FooterLanguageButton = styled.div`
  gap: 0.5rem;
      align-items: center;
      border: 1px solid #dcdcdc7f;
      padding: 0.3rem;
      border-radius: 4px;
      margin-top: -10px;
      color: var(--lightgray);
      font-size: 0.9rem;

      span {
        .MuiSvgIcon-root {
          margin: -5px 0;
        }
      }

      &:hover {
        border-color: white;
      }
`
const CountriesList = styled.ul`
      width: 90%;
      margin: auto;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;

      li a {
        font-size: 0.8rem;
        font-family: "Amazon-light";
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }
`

const MobileView = styled.div`
  display:none;
  width:100%;
  justify-content:space-between;
  flex-wrap:wrap;
  gap:1.4rem;
  li {
    margin: 0.5rem 0;
    a {
      display: flex;
      font-size: 0.85rem;
      font-weight: 400;
      color: var(--lightgray);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media(max-width:768px){
    display:flex;
  }
`