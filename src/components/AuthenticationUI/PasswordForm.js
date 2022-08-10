import axios from "axios";
import ErrorModal from "./ErrorModal";
import styled from "styled-components";
import { useSelector } from 'react-redux'
import { loginHelper } from '../../Store/AuthenticationHelper'
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AuthenticationWrapper from "./AuthenticationWrapper";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PasswordForm = () => {
  // const userCtx = useContext(UserContext)
  const Auth = useSelector(state => state.Auth)
  const [isLoading, setIsLoading] = useState(false)
  const [errorPresent, setIsErrorPresent] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const passwordRef = useRef('');
  const redirect = useNavigate()
  const [helpDropdown, setHelpDropDown] = useState(false);

  var username = Auth.username || localStorage.getItem('username');

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const url = 'https://diverse-backend.herokuapp.com/login/passwordCheck'; //Production
    // const url = 'http://localhost:3001/login/passwordCheck' //development
    if (username === '') {
      redirect('/signin/emailCheck', { replace: true })
    }
    else {
      const response = await axios({
        method: 'post',
        url: url,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          username: username,
          password: passwordRef.current.value
        }
      });
      if (response.data.found) {
        loginHelper(response.data.accessToken)
        redirect('/')
      }
      else {
        setIsErrorPresent(response.data.message)
      }
    }
    setIsLoading(false)
  }

  const usernameChangeHandler = () => {
    redirect('/signin/emailCheck', { replace: true })
  }

  return (
    <AuthenticationWrapper>
      {errorPresent !== '' &&
        <ErrorModal error={errorPresent} />
      }
      <Container>
        <h1>Sign-In</h1>
        <InputSection>
          <form className="flex-column" onSubmit={formSubmitHandler}>
            {/* Label for Email Input */}
            <span className="username">{username} <strong onClick={usernameChangeHandler} >Change</strong></span>
            <label htmlFor="password">Password</label>
            {/* username input */}
            <div className="inputContainer">
              <input type={showPassword ? 'text' : 'password'} id="password" name="password" ref={passwordRef} required />
              <span onClick={() => setShowPassword(!showPassword)} className="passwordToggle">{showPassword ? <VisibilityIcon id="On" fontSize="small" /> : <VisibilityOffIcon id="Off" fontSize="small" />}</span>
            </div>
            {!isLoading && <button type="submit">Sign-In</button>}
            {isLoading && <button className="loaderDiv flex"><div className="loader"></div></button>}
          </form>
          <div>
            <p className="flex">
              <input type="checkbox" /> Keep me signed in. <Link to={'#'}>Details</Link>
            </p>
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

export default PasswordForm;

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
  .username{
    margin-bottom:.5rem;

    strong {
      cursor: pointer;
      color:var(--blue);
      font-weight:100;
    }
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
    .inputContainer {
      position:relative;
      .passwordToggle {
        cursor: pointer;
        position:absolute;
        right:0;
        top:7px;
        padding: 0 1rem;
        #On {
          fill: var(--blue) !important;
        }
        #Off{
          fill: var(--orange) !important;
        }
      }
        input {
      width: 100%;
      margin-bottom: 0.8rem;
      padding: 0.5rem;
      border: 1px solid var(--darkblue);
      border-radius: 3px;
      outline-color: var(--orange);
      }
    }
    button {
      padding: 0.5rem;
    }
    button.loaderDiv{
      align-items: center;
      justify-content: center;
      padding: 3px;
      .loader{
        width: 26px;
        height: 26px;
      }
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
