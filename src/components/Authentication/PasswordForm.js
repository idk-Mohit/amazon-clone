import axios from "axios";
import ErrorModal from "./ErrorModal";
import styled from "styled-components";
import { UserContext } from "../../Store";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef, useContext } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AuthenticationWrapper from "./AuthenticationWrapper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const EmailForm = () => {
  const userCtx = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const passwordRef = useRef('');
  const redirect = useNavigate()

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const url = 'https://diverse-backend.herokuapp.com/login/passwordCheck'; //Production
    // const url = 'http://localhost:3001/login/passwordCheck' //development
    if (!userCtx.userName) {
      redirect('/signin/emailCheck')
    }
    else {
      const response = await axios({
        method: 'post',
        url: url,
        data: {
          username: userCtx.userName,
          password: passwordRef.current.value
        }
      });
      if (response.data.found) {
        userCtx.loginHandler(response.data.accessToken)
        localStorage.setItem('accessToken', response.data.accessToken)
        userCtx.userHandler(response.data)
        redirect('/')
      }
      else {
        setError(response.data.message)
      }
    }
    setIsLoading(false)
  }


  const [helpDropdown, setHelpDropDown] = useState(false);
  return (
    <AuthenticationWrapper>
      {error === '' ? '' : <ErrorModal error={error} />}
      <Container>
        <h1>Sign-In</h1>
        <InputSection>
          <form className="flex-column" onSubmit={formSubmitHandler}>
            {/* Label for Email Input */}
            <label htmlFor="password">Password</label>
            {/* username input */}
            <input type="password" id="password" name="password" ref={passwordRef} required />
            {!isLoading && <button type="submit">Sign-In</button>}
            {isLoading && <button className="loaderDiv flex"><div className="loader"></div></button>}
          </form>
          <div>
            {/* <p className="flex">
              <input type="checkbox" onChange={()=>} checked /> Keep me signed in. <Link to={'#'}>Details</Link>
            </p> */}
            <div
              className="help__dropdown"
              onClick={() => setHelpDropDown(!helpDropdown)}
            >
              <div className="flex">
                {helpDropdown ? (
                  <ArrowDropDownIcon fontSize="small" />
                ) : (
                  <ArrowRightIcon fontSize="small" />
                )}
                <Link to={"#"}>Need Help?</Link>
              </div>
              {helpDropdown && (
                <div className="help__dropdown__content">
                  <ul className="flex-column">
                    <Link to={"#"}>Forgot Password</Link>
                    <Link to={"#"}>Other Issues with Sign-In</Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </InputSection>
      </Container>
    </AuthenticationWrapper>
  );
};

export default EmailForm;

const Container = styled.section`
  margin: auto;
  position: relative;
  margin: 1rem auto;
  /* min-height: 95%; */
  max-width: 23rem;
  border: 1px solid var(--lightgray);
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  h1 {
    font-family: "Amazon-light";
    font-weight: 700;
    font-size: 1.8rem;
  }
`;

const InputSection = styled.section`
  > form {
    margin: 1rem 0;
    label {
      font-weight: 700;
      font-family: "Amazon-light";
      font-size: 0.85rem;
      margin-bottom: 0.3rem;
    }
    input {
      margin-bottom: 0.8rem;
      padding: 0.5rem;
      border: 1px solid var(--darkblue);
      border-radius: 3px;
      outline-color: var(--orange);
    }
    button {
      padding: 0.5rem;
    }
    button.loaderDiv{
      align-items: center;
      justify-content: center;
      padding: 3px;
    }
  }
  a {
    color: var(--blue);
    &:hover {
      color: var(--orange);
      text-decoration: underline;
    }
  }

  p {
    font-size: 0.8rem;
    align-items: center;
    gap:0.3rem;
    a {
      margin: 0 0.2rem;
    }
  }

  /* Help Dropdown */
  .help__dropdown {
    position: relative;
    display: inline-block;
    margin-top: 0.5rem;
    > div {
      align-items: center;
      margin-bottom: 0.2rem;
    }

    .MuiSvgIcon-root {
      margin-left: -5px;
    }

    a {
      font-size: 0.85rem;
      font-family: "Amazon-light";
      font-weight: 600;
    }

    .help__dropdown__content {
      width: max-content;
      a {
        margin: 0 0 0.15rem 1rem;
      }
    }
  }
`;
