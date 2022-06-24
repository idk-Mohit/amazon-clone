import React from "react";
import styled from "styled-components";
import LayOut from "./LayOut";

const NotFound = () => {
  return (
    <LayOut>
      <Container>
        <h1>NotFound</h1>
      </Container>
    </LayOut>
  );
};

export default NotFound;

const Container = styled.div`
  margin-top: 105px;
  text-align: center;

  h1 {
    padding: 2rem 0;
  }
`