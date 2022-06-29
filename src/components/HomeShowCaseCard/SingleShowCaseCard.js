import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingleShowCaseCard = (props) => {
  return (
    <CardContainer className="flex-column">
      <h1>{props.title}</h1>
      {props.button && (
        <Link className="SingleShowCaseCard__button" to={`${props.buttonLink}`}>
          {props.buttonText}
        </Link>
      )}
      {props.image && (
        <div>
          <Link to={`${props.link}`}> <img src={props.image} alt="" /></Link>
        </div>
      )
      }
      {
        props.link && (
          <Link to={`${props.link}`} className="ShowCardFooterLink">
            {props.footerLinkText}
          </Link>
        )
      }
    </CardContainer >
  );
};

export default SingleShowCaseCard;

const CardContainer = styled.div`
  /* justify-content: sapce; */
  height: 420px;
          max-width: 21.25rem;
          padding: 1.5rem 1rem;
          box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.1);
          background-color: white;
          z-index: 1;
          justify-content: space-between;
          gap: 1rem;
          border-radius: 5px;
          transition: 300ms all ease;

          &:hover {
            transform: translateY(-5px);
          transition: 300ms all ease;
  }

          h1 {
            font-size: 1.3rem;
          font-weight: 500;
    /* margin-bottom: 1rem; */
  }

          div {
            width: 100%;
          height: 250px;
          img {
            width: 100%;
          height: 100%;
    }
  }

          .SingleShowCaseCard__button {
            width: 100%;
          background-color: var(--yellow);
          color: black;
          border: none;
          padding: 0.8rem 1rem;
          border-radius: 18px;
          text-align: center;
  }

          .ShowCardFooterLink {
            /* margin-top: 1rem; */
            color: var(--blue);
          font-size: 0.8rem;
          width: fit-content;

          &:hover {
            text-decoration: underline;
          color: var(--orange);
    }
  }
          `;
