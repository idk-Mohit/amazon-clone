import axios from "axios";
import ErrorModal from "./ErrorModal";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationWrapper from "./AuthenticationWrapper";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { userNameHelper } from "../../Store/AuthenticationHelper";
import { useDispatch } from "react-redux/es/exports";
import { UserName } from "../../Store/Auth-Slice";

const EmailForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [enteredUserName, setEnteredUserName] = useState('')
  const [errorPresent, setIsErrorPresent] = useState('')
  const [helpDropdown, setHelpDropDown] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.getItem('username') && setEnteredUserName(localStorage.getItem('username'));
  }, [])

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const url = 'https://diverse-backend.herokuapp.com/login/emailCheck';// Production
    // const url = 'http://localhost:3001/login/emailCheck' //development

    const response = await axios({
      method: 'post',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        username: enteredUserName
      }
    });
    if (response.data.found) {
      userNameHelper(response.data.user)
      dispatch(UserName(response.data.user))
      navigate("/signin/passwordCheck", { replace: true });
    }
    else {
      setIsErrorPresent(response.data.message)
    }
    setIsLoading(false)
  }

  return (
    <AuthenticationWrapper>
      {errorPresent !== '' &&
        <ErrorModal error={errorPresent} />
      }
      <Container>
        <InnerContainer><h1>Sign In</h1>
          <InputSection>
            <form className="flex-column" onSubmit={formSubmitHandler}>
              <div className="inputContainer">
                <label htmlFor="username">Email or mobile phone number</label>
                <input type="text" id="username" name="username" onChange={(e) => setEnteredUserName(e.target.value)} value={enteredUserName} required />
              </div>
              {!isLoading && <button type="submit">Continue</button>}
              {isLoading && <button className="flex loaderDiv"><div className="loader"></div></button>}
            </form>
            <TermCondition>
              <p>
                By continuing, you agree to Amazon's
                <Link className="colored-link" to={"/"}>Condition's of Use</Link>and
                <Link className="colored-link" to={"/"}>Privacy Notice</Link>
              </p>
            </TermCondition>
            <Needhelp onClick={() => setHelpDropDown(!helpDropdown)}>
              <div className="flex">
                {helpDropdown ? (
                  <ArrowDropDownIcon fontSize="small" />
                ) : (
                  <ArrowRightIcon fontSize="small" />
                )}
                <Link className="colored-link" to={"#"}>Need Help?</Link>
              </div>
              {helpDropdown && (
                <div className="help__dropdown__content">
                  <ul className="flex-column">
                    <Link className="colored-link" to={"#"}>Forgot Password</Link>
                    <Link className="colored-link" to={"#"}>Other Issues with Sign-In</Link>
                  </ul>
                </div>
              )}
            </Needhelp>
          </InputSection>
          <hr className='form-footer-divider' />
          <ExtraInformation>
            <div className="line-through-div">
              <span>New to Amazon?</span>
            </div>
            <Link to={'/signup'}><button className="gray-button">Create your Amazon Account</button></Link>
          </ExtraInformation>
        </InnerContainer>
      </Container>
    </AuthenticationWrapper >
  );
};

export default EmailForm;

const Container = styled.section`
  margin: auto;
  position: relative;
  margin: 1rem auto 3rem;
  max-width: 23rem;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  
`;

const InnerContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  h1 {
    font-family: "Amazon-light";
    font-weight: 700;
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }

  hr{
    margin:1rem 0;
    border-color: rgba(200,200,200,.4);
  }
`

const InputSection = styled.section`
.inputContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8rem;

    input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid var(--darkblue);
        border-radius: 3px;
        outline-color: var(--orange);
    }
    label {
        font-weight: 700;
        font-family: "Amazon-light";
        font-size: 0.85rem;
        margin-bottom: 0.3rem;
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
`;

const TermCondition = styled.div`
margin-top: 1rem;
  p{
    font-size: 0.8rem;
    letter-spacing: 0;

    a{
      margin:0 .3rem;
    }
  }
`
const Needhelp = styled.div`
  margin: 1rem 0 0 -5px;
  position: relative;
  display: inline-block;
  div {
    align-items: center;
    font-size: 0.8rem;

    ul {
      margin-left: 1rem;
      padding: .3rem;
    }
  }
`
const ExtraInformation = styled.div`
margin-top: 1rem;
    p{
        display: inline-flex;
        font-size: 13px;

        a{
            display: inline-flex;
            margin-left:0.2rem;
        }
    }

    button.gray-button {
      background: var(--lightgray);
      border-color: #adb1b8 #a2a6ac #8d9096;
      padding:.5rem;
      border-radius: 3px;
      width: 100%;
    }

    .line-through-div {
      text-align: center;
    position: relative;
    top: 2px;
    padding-top: 1px;
    margin-bottom: 14px;
    line-height: 0;
     &::after{
      content: "";
      width: 100%;
      background-color: transparent;
      display: block;
      height: 1px;
      border-top: 1px solid #e7e7e7;
      position: absolute;
      top: 50%;
      margin-top: -1px;
      z-index: 1;
     }
      span{
        line-height: 1;
      font-size: 12px;
      color: #767676;
      font-weight: 400;
      z-index: 2;
      position: relative;
      display: inline-block;
      background-color: #fff;
      padding: 0 8px 0 7px;
      }
    }
`


