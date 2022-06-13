import { useState, createContext } from "react";

const BackDropContext = createContext({
  user: '',
  userMobile: '',
  isLoggedIn: false,
  backDrop: false,
  activateBackdrop: () => { },
  deactiveBackdrop: () => { },
  userMobileHandler: () => { },
  userHandler: () => { },
  loginHandler: () => { },
  logoutHandler: () => { },
});

export const BackDropContextProvider = (props) => {
  const [backDrop, setBackDrop] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userMobile, setUserMobile] = useState('')
  const [user, setUser] = useState('')

  // Handler....
  // BackDrop
  const activateBackdrop = () => {
    setBackDrop(true);
  };
  const deactiveBackdrop = () => {
    setBackDrop(false);
  };

  // Log In Handlers
  const loginHandler = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', 1)
  }
  const userMobileHandler = (number) => {
    setUserMobile(number)
  }

  const userHandler = (user) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }

  return (
    <BackDropContext.Provider
      value={{ backDrop, activateBackdrop, deactiveBackdrop, isLoggedIn, userMobile, loginHandler, userMobileHandler, user, userHandler, logoutHandler }}
    >
      {props.children}
    </BackDropContext.Provider>
  );
};

export default BackDropContext;
