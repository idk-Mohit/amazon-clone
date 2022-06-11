import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Amazon_Logo_Dark } from "../../assets/Images";

const AuthenticationWrapper = (props) => {
  return (
    <Container>
      <header className="flex">
        <Link to="/">
          <img src={Amazon_Logo_Dark} alt="" />
        </Link>
      </header>
      {props.children}
      <footer className="flex-column">
        <ul className="flex">
          <li>
            <Link to={"/"}>Conditions of Use</Link>
          </li>

          <li>
            <Link to={"/"}>Privacy Notice</Link>
          </li>

          <li>
            <Link to={"/"}>Help</Link>
          </li>
        </ul>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </Container>
  );
};

export default AuthenticationWrapper;

const Container = styled.section`
  header {
    padding: 1rem 0;
    justify-content: center;
    align-items: center;
    img {
      width: 6.7rem;
      height: 2rem;
    }
  }

  footer {
    background-color: rgba(200, 200, 200, 0.2);
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    padding: 1rem 0 4rem;

    p {
      color: var(--lightgray);
    }

    ul {
      gap: 2rem;
      a {
        color: var(--blue);
        &:hover {
          color: var(--orange);
          text-decoration: underline;
        }
      }
    }
  }
`;
