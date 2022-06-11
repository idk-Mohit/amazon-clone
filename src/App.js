import React, { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Backdrop, SignIn, SignUp } from "./components/index";
import { Home, NotFound } from "./pages";
import styled from "styled-components";
import BackDropContext from "./Store/BackDrop-context";

function App() {
  const location = useLocation();
  const ctx = useContext(BackDropContext);

  useEffect(() => {
    ctx.deactiveBackdrop();
  }, [location]);
  return (
    <>
      <Container>
        {ctx.backDrop && <Backdrop />}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/notfound"} element={<NotFound />} />
          <Route path={"/signin"} element={<SignIn />} />
          <Route path={"/signup"} element={<SignUp />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  position: relative;
`;
