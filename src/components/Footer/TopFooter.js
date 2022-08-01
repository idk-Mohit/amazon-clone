import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { Amazon_Logo } from "../../assets/Images";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const TopFooter = () => {
  return (
    <TopFooterContainer>
      <FooterMainLinks className="flex">
        <KnowUs className="footer__mainlinks__knowUs">
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
        </KnowUs>
        <Connect className="footer__mainlinks__connect">
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
        </Connect>
        <MakeMoney className="footer__mainlinks__makemoney">
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
        </MakeMoney>
        <HelpYou className="footer__mainlinks__helpyou">
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
        </HelpYou>
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
          <li><Link to={'/order-history'}>Track and Manage Your Orders</Link></li>
          <li><Link to={'/order-history'}>Buy Again</Link></li>
          <li><Link to={'/order-history'}>Return Centre</Link></li>
          <li><Link to={'/order-history'}>Delivery Speeds &amp; Charges</Link></li>
          <li><Link to={'/'}>Customer Service</Link></li>
        </ul>
        <ul className='flex-column'>
          <li><Link to={'#'}>Lists</Link></li>
          <li><Link to={'#'}>Recommendations</Link></li>
          <li><Link to={'#'}>Browsing History</Link></li>
          <li><Link to={'#'}>Subscribe and Save</Link></li>
          <li><Link to={'#'}>Your Prime Membership</Link></li>
          <li><Link to={'#'}>Your Memberships and Subscriptions(YMS)</Link></li>
          <li><Link to={'#'}>See all account</Link></li>
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
  /* padding: 1.5rem .5rem; */
  }
`
const FooterMainLinks = styled.div`
    justify-content: space-around;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(200, 200, 200, 0.267);
    @media(max-width:1024px){
    display:none;
  }
`
const KnowUs = styled.div`
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
`
const HelpYou = styled(KnowUs)``
const Connect = styled(KnowUs)``
const MakeMoney = styled(KnowUs)``
const FooterCountries = styled.div`
  padding: 2rem 3rem;
  align-items: center;
  > div {
    gap: 1rem;
    margin: 1rem;
    align-items: center;
    img {
      width: 5.5rem;
      height: 1.8rem;
    }
    }
  @media(max-width:1024px){
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
  justify-content:flex-start;
  flex-wrap:wrap;
  align-items:center;  

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

  @media(max-width:1024px){
    display:flex;
  }
`