import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignInFooter = () => {
  return (
    <Footer className="flex-column">
      <p>See personalized Recommendations</p>
      <Link to={"/signin/emailCheck"}>
        <button>Sign In</button>
      </Link>
      <p className="SignUpLink">
        New Customer? <Link to={"/signUp"}>Start Here</Link>
      </p>
    </Footer>
  );
};

export default SignInFooter;

const Footer = styled.footer`
  width: 100%;
  align-items: center;
  background-color: white;
  padding: 2rem;
  border-radius: 5px;

  p {
    font-family: "Amazon-light";
    font-size: 0.9rem;
  }
  button {
    padding: 0.5rem;
    width: 14rem;
    margin: 0.4rem;
    font-weight: 600;
    border: 1px solid var(--orange);
    border-radius: 3px;
    text-shadow: 0 1px 0 #ffe093;
    background-color: var(--yellow);
    cursor: pointer;
  }
  .SignUpLink {
    font-size: 0.8rem;
    a {
      color: var(--blue);
      font-size: 0.8rem;
      font-family: "Amazon-light";
      font-weight: 500;
      :hover {
        color: var(--orange);
        text-decoration: underline;
      }
    }
  }
`;
