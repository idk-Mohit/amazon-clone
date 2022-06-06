import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer, Backdrop } from "./components/index";
import { Home, NotFound } from "./pages";
import styled from "styled-components";
import BackDropContext from "./Store/BackDrop-context";

function App() {
  const ctx = useContext(BackDropContext);
  return (
    <>
      <Header />
      <Container>
        {ctx.backDrop && <Backdrop />}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/notfound"} element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  position: relative;
`;
