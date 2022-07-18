import axios from "axios";
import styled from "styled-components";
import { ArrowUp } from './assets/Images'
import { useSelector, useDispatch } from 'react-redux'
import { loginHelper, userHelper } from './Store/AuthenticationHelper'
import { Home, NotFound, ProductPage, ProductList, Cart, Account, OrdersNReturn } from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import { Backdrop, EmailForm, PasswordForm, SignUpForm, PopUpbackDrop } from "./components/index";
import { disableBackDrop } from "./Store/backdrop-Slice";
import { Login, User } from './Store/Auth-Slice'
import { replaceCart } from "./Store/Cart-Slice";

var AppStart = true;

function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  const backdrop = useSelector(state => state.backdrop)
  const Auth = useSelector(state => state.Auth)
  const [showButton, setShowButton] = useState(false);

  const loginCheckHelper = useCallback(
    () => {
      let loggedIn = localStorage.getItem('isLoggedIn')
      let token = localStorage.getItem('accessToken')
      if (loggedIn || token) {
        if ((loggedIn === null || loggedIn === '0') && token) {
          localStorage.removeItem('isLoggedIn')
          localStorage.removeItem('accessToken')
          localStorage.removeItem('user')
          dispatch(Login(false))
          return;
        }
        if (token === '' || token === null) {
          localStorage.removeItem('isLoggedIn')
          localStorage.removeItem('accessToken')
          localStorage.removeItem('user')
          dispatch(Login(false))
          return
        }
        if (loggedIn === "1" && (token !== '' || token !== null)) {
          dispatch(Login(true))
          return
        }
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (AppStart) {
      // Waking up the backend server
      axios('https://diverse-backend.herokuapp.com/')
        .then(result => {
          if (result) {
            sessionStorage.setItem('backend', 'active')
          }
        })
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }
    AppStart = false
  }, []);

  // Setting User LoggedIn State and User Data
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    const loggedIn = localStorage.getItem('isLoggedIn')
    const userData = localStorage.getItem('user')
    const fetchData = async () => {
      const url = 'https://diverse-backend.herokuapp.com/fetchUserData' //Prdoduction
      // const url = 'http://localhost:3001/fetchUserData'
      const user = await axios({
        method: 'get',
        url: url,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      if (user) {
        loginHelper(accessToken)
        userHelper(user.data)
        dispatch(User(user.data))
        dispatch(Login(true))
      }
    }
    if (loggedIn === '1' && (accessToken !== null || accessToken !== '')) {
      if (userData === null || userData === undefined || userData === '') {
        fetchData()
      }
      else {
        dispatch(User(JSON.parse(userData)))
        loginCheckHelper()
      }
    }
  }, [location, dispatch, loginCheckHelper]);

  // Setting State Cart
  useEffect(() => {
    const getInitialCart = async () => {
      const response = await axios({
        method: 'get',
        url: `https://diverse-backend.herokuapp.com/fetchCart/${Auth.user._id}`, //Production
        // url: `http://localhost:3001/fetchCart/${Auth.user._id}`,
      })
      if (response) {
        const totalQty = await response.data.totalQuantity
        const newCart = await response.data.cart.map((item) => {
          return { id: item.productId, quantity: item.quantity, category: item.productCategory }
        })
        dispatch(replaceCart({ items: newCart, totalQuantity: totalQty }))
      }
      else {
        console.log('initialCart No user Found')
      }
    }
    if (Auth.isLoggedIn === true) {
      getInitialCart()
    }
    else {
      dispatch(replaceCart({ items: [], totalQuantity: 0 }))
    }
  }, [Auth.user._id, Auth.isLoggedIn, dispatch])

  // Scrolling To Top And Disabling The Backdrops if Open
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    dispatch(disableBackDrop())
  }, [location, dispatch])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
      {backdrop.backdrop && <Backdrop />}
      {backdrop.popupbackdrop && <PopUpbackDrop />}
      <Container>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/signin/emailCheck"} element={<EmailForm />} />
          <Route path={"/signin/passwordCheck"} element={<PasswordForm />} />
          <Route path={"/signup"} element={<SignUpForm />} />
          <Route path={"/product/:category/:id"} element={<ProductPage />} />
          <Route path={"/productList/:name"} element={<ProductList />} />
          <Route path={"/Cart"} element={<Cart />} />
          <Route path={"/yourAccount"} element={<Account />} />
          <Route path={"/order-history"} element={<OrdersNReturn />} />
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
