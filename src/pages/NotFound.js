import React from "react";
import styled from "styled-components";
import LayOut from "./LayOut";

const NotFound = () => {
  return (
    <LayOut>
      <Container className="main-container">
        <h1>NotFound</h1>
      </Container>
    </LayOut>
  );
};

export default NotFound;

const Container = styled.div`
  text-align: center;

  h1 {
    padding: 2rem 0;
  }
`