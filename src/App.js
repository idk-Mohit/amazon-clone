import React, { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Backdrop, EmailForm, PasswordForm } from "./components/index";
import { Home, NotFound } from "./pages";
import styled from "styled-components";
import Context from "./Store/Context";

function App() {
  const location = useLocation();
  const ctx = useContext(Context);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('user')))
    if (localStorage.getItem('stayLoggedIn')) {
      console.log('yeahhhh')
      ctx.loginHandler();
      ctx.userHandler(JSON.parse(localStorage.getItem('user')))
    } else {
      return
    }
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    ctx.deactiveBackdrop(); // eslint-disable-next-line
  }, [location]);
  return (
    <>
      <Container>
        {ctx.backDrop && <Backdrop />}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/notfound"} element={<NotFound />} />
          <Route path={"/signin/emailCheck"} element={<EmailForm />} />
          <Route path={"/signin/passwordCheck"} element={<PasswordForm />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  position: relative;
`;
