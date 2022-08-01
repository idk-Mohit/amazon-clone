import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LanguageIcon from "@mui/icons-material/Language";
import { logoutHelper } from "../../Store/AuthenticationHelper";
import { Logout } from "../../Store/Auth-Slice";

const BottomFooter = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Auth = useSelector(state => state.Auth)

  const logoutHandler = () => {
    logoutHelper()
    dispatch(Logout())
    navigate('/signin/emailCheck', { replace: true })
  }

  const navigateHandler = () => {
    if (Auth.isLoggedIn) logoutHandler()
    else navigate('/signin/emailCheck')
  }
  return (
    <BottomFooterContainer>
      <FooterMainLinks className="bottom__footer__mainlinks">
        <List>
          <li>
            <Link to={"/"}>
              <h4>AbeBooks</h4>
              <p>
                Books, art <br />
                &apm; collectibles
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>Amazon Web Services</h4>
              <p>
                Scalable Cloud
                <br />
                Computing Services
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>Audible</h4>
              <p>
                Download
                <br />
                Audio Books
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>DPReview</h4>
              <p>
                Digital
                <br />
                &amp;Photography
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>IMDB</h4>
              <p>
                Movies, TV
                <br />
                &amp; Celebrities
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>Shopbop</h4>
              <p>
                Designer
                <br />
                Fashion Brands
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>Amazon Business</h4>
              <p>
                Everything For
                <br />
                Your Business
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>Prime Now</h4>
              <p>
                2-Hour Delivery
                <br />
                on Everyday Items
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <h4>Amazon Prime Music</h4>
              <p>
                90 million songs, ad-free
                <br />
                Over 15 million podcast episodes
              </p>
            </Link>
          </li>
        </List>
      </FooterMainLinks>
      <FooterCopyRights>
        <ul className="mobileView flex-column">
          <li><Link to='#' className="flex"><LanguageIcon fontSize="small" />English</Link></li>
          <li><Link to='#'>Switch Account</Link></li>
          <li onClick={navigateHandler}><Link to='#'>{Auth.isLoggedIn ? 'Sign Out' : 'Sign In'}</Link></li>
        </ul>
        <ul className="flex">
          <li>
            <Link to={"/"}>Conditions of Use &amp; Sale</Link>
          </li>
          <li>
            <Link to={"/"}>Privacy Notice</Link>
          </li>
          <li>
            <Link to={"/"}>Inertest-Based Ads</Link>
          </li>
          <li>&#169; 1996-2022,Amazon.com, Inc. or its affilites</li>
        </ul>
      </FooterCopyRights>
    </BottomFooterContainer >
  );
};

export default BottomFooter;

const BottomFooterContainer = styled.footer`
  background-color: #131a22;
  padding: 2rem 3rem;
`;

const FooterMainLinks = styled.div`

`
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  padding: 3rem;
  flex-wrap: wrap;
  gap: 2rem;
  a {
    h4 {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--lightgray);
    }
    p {
      color: #b6b3b38d;
      font-size: 0.7rem;
    }

    &:hover {
      text-decoration: underline;
    }  
}
  @media (max-width:1024px) {
      display:none ;
    }
`

const FooterCopyRights = styled.div`
  ul {
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      li {
        font-size: 0.75rem;
        font-weight: 500;
        color: white;
        font-family: "Amazon-light";
        a {
          font-family: "Amazon-light";
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  
  .mobileView{
    align-items: center;
    display: none;
    margin-bottom: 1rem;

    a,li{
      align-items:center;
      gap:5px;
      font-size: 1rem;
    }

    @media(max-width:1024px){
      display: flex;
    }
  }
`