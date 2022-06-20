import React, { useContext } from "react";
import styled from "styled-components";
import { backDropContext } from "../Store";

const BackDrop = () => {
  const backDropCtx = useContext(backDropContext);
  return <Container onClick={backDropCtx.disableBackDrop}></Container>;
};

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export default BackDrop;
