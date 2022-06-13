import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../Store/Context";

const BackDrop = () => {
  const ctx = useContext(Context);
  return <Container onClick={ctx.deactiveBackdrop}></Container>;
};

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export default BackDrop;
