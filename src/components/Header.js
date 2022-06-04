import styled from "styled-components";
import { TopNav, BottomNav } from "./index";

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
`;
