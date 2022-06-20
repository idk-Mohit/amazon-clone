import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const MultipleShowCaseCard = ({ data }) => {
  const Images = data.data.map((item, index) => {
    return (
      <Link className="flex-column" to={`${item.imageLink}`} key={index}>
        <img src={item.image} alt="" />
        <span>{item.imageLinkText}</span>
      </Link>
    );
  });
  return (
    <CardContainer className="flex-column">
      <h1>{data.title}</h1>
      <ImageContainer>{Images}</ImageContainer>
      <Link to={`${data.footerLink}`} className="ShowCardFooterLink">
        {data.footerLinkText}
      </Link>
    </CardContainer>
  );
};

export default MultipleShowCaseCard;

const CardContainer = styled.div`
  height: fit-content;
  max-width: 21.25rem;
  padding: 1.5rem 1rem;
  box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  justify-content: space-between;
  border-radius: 5px;
  transition: 300ms all ease;

  &:hover {
    transform: translateY(-2px);
    transition: 300ms all ease;
  }

  h1 {
    font-size: 1.3rem;
    font-weight: 500;
  }

  a {
    color: var(--darkblue);
    font-size: 0.75rem;
    margin: 0;
  }

  .ShowCardFooterLink {
    color: var(--blue);
    font-size: 0.8rem;
    width: fit-content;

    &:hover {
      text-decoration: underline;
      color: var(--orange);
    }
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;
  margin: 1rem 0;

  a {
    width: 100%;
    text-align: center;
    transition: all 300ms ease;
    border-radius: 5px;
    background-color: transparent;
    img {
      width: inherit;
    }
    &:hover {
      box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
      transition: all 300ms ease;
    }
  }
`;
