import axios from 'axios'
import ErrorModal from './ErrorModal'
import styled from 'styled-components'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthenticationWrapper from './AuthenticationWrapper'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { i_alert_Icon } from '../../assets/Images'
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const enteredEmail = useRef()
    const enteredMobile = useRef()
    const enteredPassword = useRef()
    const enteredUserName = useRef()
    const [errorPresent, setIsErrorPresent] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
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
                username: enteredEmail
            }
        });
        if (response.data.found) {
            console.log(response)

            navigate("/signin/emailCheck", { replace: true });
        }
        else {
            console.log(response.data.message)
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
                <InnerContainer><h1>Create Account</h1>
                    <InputSection>
                        <form className="flex-column" onSubmit={formSubmitHandler}>
                            <div className="inputContainer">
                                <label htmlFor="name">Enter your Name</label>
                                <input type="text" id="name" name="name" ref={enteredUserName} required />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="mobile">Phone number</label>
                                <input type="number" id="mobile" name="mobile" ref={enteredMobile} required />
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" ref={enteredEmail} required />
                            </div>
                            <div className="inputContainer passwordInputDiv">
                                <label htmlFor="password">Password</label>
                                <input type={showPassword ? 'text' : 'password'} id="password" name="password" ref={enteredPassword} required />
                                <span onClick={() => setShowPassword(!showPassword)} className="passwordToggle">{showPassword ? <VisibilityIcon id="On" fontSize="small" /> : <VisibilityOffIcon id="Off" fontSize="small" />}</span>
                                <p className="information-alert flex">
                                    <img src={i_alert_Icon} alt='alertIcon' />
                                    Passwords must be at least 6 characters.
                                </p>
                            </div>
                            {!isLoading && <button type="submit">Continue</button>}
                            {isLoading && <button className="flex loaderDiv"><div className="loader"></div></button>}
                        </form>

                    </InputSection>
                    <hr className='form-footer-divider' />
                    <ExtraInformation>
                        <p>Already have an account? <Link className='colored-link' to={'/signin/emailCheck'}>Sign In <ArrowRightIcon fontSize='small' /></Link></p>
                        <p>Buying for work? <Link className='colored-link' to={'#'}> Create a free business account<ArrowRightIcon fontSize='small' /></Link></p>
                    </ExtraInformation>
                </InnerContainer>
            </Container>
        </AuthenticationWrapper>
    )
}

export default SignUp

const Container = styled.section`
  margin: auto;
  position: relative;
  margin: 1rem auto 2rem;
  height: auto;
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
.passwordInputDiv {
        position:relative;
        .passwordToggle{
            cursor: pointer;
            position:absolute;
            padding:0 1rem;
            top: 1.8rem;
            right:0;
            #On {
                fill: var(--blue) !important;
            }
            #Off{
                fill: var(--orange) !important;
            }
        }

        .information-alert{
            align-items: center;
            margin-top:0.6rem ;
            color:var(--gray);
            font-size: .8rem;
            img{
                margin-right: .3rem;
            }
            a{
                align-items: center;
                font-size: 0.8rem;
            }
        }
    }
 button {
      padding: 0.5rem;
    }
    button.loaderDiv{
      align-items: center;
      justify-content: center;
      padding: 3px;
    }
`;

const ExtraInformation = styled.div`
margin-top: 2rem;
    p{
        display: inline-flex;
        font-size: 13px;

        a{
            display: inline-flex;
            margin-left:0.2rem;
        }
    }
`