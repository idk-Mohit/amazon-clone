import styled from "styled-components";
import { TopNav, BottomNav } from "./index";
import React from "react";

const Header = () => {
  return (
    <MainHeader>
      <TopNav />
      <BottomNav />
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.header`
  color: var(--lightgray);
  z-index: 100;
  position: fixed;
  top:0;
  left: 0;
  right:0;
`;
