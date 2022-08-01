import React, { useEffect } from "react";
import styled from "styled-components";
import TopNavSearch from "./TopNavSearch";
// Top Nav Element Imports
import {
  TopNavCart,
  TopNavLanguage,
  TopNavLocation,
  TopNavSignIn,
  TopNavReturnOrder,
  TopNavLogo
} from '../HeaderItems'

const TopNav = () => {

  useEffect(() => {
    let DesktopTopNav = document.querySelector('.DesktopTopNav').style
    document.addEventListener('scroll', () => {
      if (window.scrollY > 105) {
        DesktopTopNav.position = 'fixed'
      }
      else {
        DesktopTopNav.position = 'relative'
      }
    })
  }, [])
  return (
    <TopNavContainer className='DesktopTopNav flex'>
      <TopNavLeftContainer className="flex">
        <TopNavLogo />
        <TopNavLocation />
      </TopNavLeftContainer>
      {/* Top Nav Middle Container */}
      <TopNavMiddleContainer className="flex">
        <TopNavSearch />
      </TopNavMiddleContainer>
      {/* Top Nav Right Container */}
      <TopNavRightContainer className="flex">
        <TopNavLanguage />
        <TopNavSignIn />
        <TopNavReturnOrder />
        <TopNavCart />
      </TopNavRightContainer>
    </TopNavContainer >
  );
};

export default TopNav;

const TopNavContainer = styled.nav`
  top: 0;
  height: 60px;
  align-items: center;
  background-color: #131921;
  padding: 0.4rem 0.8rem;
  width: 100%;
  gap: 0.5rem;
  z-index: 100;

  
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
`;

const TopNavLeftContainer = styled.div`
`;

const TopNavMiddleContainer = styled.div`
  flex-grow: 2;
  margin:0 .4rem;
`;

const TopNavRightContainer = styled.div``;




