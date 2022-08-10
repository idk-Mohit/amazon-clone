import styled from "styled-components";
import { TopNav, BottomNav } from "./index";
import React from "react";
import MobileTopNav from "./Header/MobileHeader/MobileTopNav";
import TopNavSearch from "./Header/DesktopHeader/TopNavSearch";
import MobileBottomNav from "./Header/MobileHeader/MobileBottomNav";

const Header = () => {
  return (
    <MainHeader className="MainHeader">
      <DesktopHeaderContainer>
        <TopNav />
        <BottomNav />
      </DesktopHeaderContainer>
      <MobileHeaderContainer>
        <MobileTopNav />
        <div id="searchBarContainer">
          <TopNavSearch />
        </div>
        <MobileBottomNav />
      </MobileHeaderContainer>
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.header`
  color: var(--lightgray);
  z-index: 100;
  width: 100%;
  min-width:60rem;
  position: relative;

  @media (max-width:1024px) {
    min-width:auto;
  }
  @media (max-width:768px) {
    min-width:auto;
  }
`;

const MobileHeaderContainer = styled.div`
  height: 185px;
  display: none;
  background-color: #232f3e;
  box-sizing: border-box;

  #searchBarContainer{
    padding: 0 .8rem;
  }
  @media (max-width:768px) {
    display: block;
  }
`

const DesktopHeaderContainer = styled.div`
  @media (max-width:768px) {
    display: none;
  }
`