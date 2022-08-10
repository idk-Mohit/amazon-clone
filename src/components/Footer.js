import React from "react";
import styled from "styled-components";
import { TopFooter, BottomFooter } from "./index";

const Footer = () => {
  return (
    <Container className='MainFooter'>
      <TopFooter />
      <BottomFooter />
    </Container>
  );
};

export default Footer;

const Container = styled.footer``
