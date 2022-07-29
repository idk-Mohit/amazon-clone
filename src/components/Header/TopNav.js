import React from "react";
import styled from "styled-components";
import TopNavSearch from "./TopNavSearch";
// Top Nav Element Imports
import { TopNavCart, TopNavLanguage, TopNavLocation, TopNavSignIn, TopNavReturnOrder, TopNavLogo } from './TopNavContainer'

const TopNav = () => {
  return (
    <TopNavContainer className='flex'>
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
  height: 60px;
  align-items: center;
  background-color: #131921;
  padding: 0.4rem 0.8rem;
  width: 100%;
  gap: 0.5rem;
  z-index: 100;

  a{
    display: flex;
  } 
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
  .nav--hover{
    cursor: pointer;
    align-items: center;
    margin:0 1px;
  }
`;

const TopNavLeftContainer = styled.div`
`;

const TopNavMiddleContainer = styled.div`
  flex-grow: 2;
  margin:0 .4rem;
`;

const TopNavRightContainer = styled.div``;




