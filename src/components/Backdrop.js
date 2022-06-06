import React, { useContext } from "react";
import styled from "styled-components";
import BackDropContext from "../Store/BackDrop-context";

const BackDrop = () => {
  const backdrop = useContext(BackDropContext);
  return <Container onClick={backdrop.deactiveBackdrop}></Container>;
};

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export default BackDrop;
