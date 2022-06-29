import axios from "axios";
import styled from "styled-components";
import { ArrowUp } from './assets/Images'
import { Home, NotFound, ProductPage, ProductList } from "./pages";
import { backDropContext, UserContext } from "./Store";
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Backdrop, EmailForm, PasswordForm } from "./components/index";

function App() {
  const location = useLocation();
  const backdropCtx = useContext(backDropContext);
  const UserCtx = useContext(UserContext);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Waking up the backend server
    axios('https://diverse-backend.herokuapp.com/')
      .then(result => {
        if (result) console.log('Backend Active')
      })
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    // Fetching User Data 
    const accessToken = localStorage.getItem('accessToken')
    if ((accessToken !== undefined || accessToken !== '') && accessToken) {
      const fetchData = async () => {
        const url = 'https://diverse-backend.herokuapp.com/fetchUserData' //Prdoduction
        // const url = 'http://localhost:3001/fetchUserData'  // Development
        const user = await axios({
          method: 'get',
          url: url,
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        })
        if (user) {
          console.log(user)
          UserCtx.loginHandler(accessToken)
          UserCtx.userHandler(user.data)
        }
      }
      fetchData()
    }// eslint-disable-next-line
  }, []);

  useEffect(() => {
    backdropCtx.disableBackDrop(); // eslint-disable-next-line
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
      <Container>
        {backdropCtx.backDrop && <Backdrop />}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/signin/emailCheck"} element={<EmailForm />} />
          <Route path={"/signin/passwordCheck"} element={<PasswordForm />} />
          <Route path={"/product/:id"} element={<ProductPage />} />
          <Route path={"/productList/:name"} element={<ProductList />} />
          <Route path={"/notfound"} element={<NotFound />} />
        </Routes>
        {showButton && (
          <button onClick={scrollToTop} id={'scrollToTopButton'}>
            <img src={ArrowUp} alt="" />
          </button>
        )}
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  position: relative;

  #scrollToTopButton {
    position: fixed;
    bottom: 1rem;
    right:1rem;
    z-index: 1000;
    /* padding: 1rem; */
    width:2.5rem;
    height: 2.5rem;
    border-radius: 50px;
    display: grid;
    place-items: center;
  }
`;
