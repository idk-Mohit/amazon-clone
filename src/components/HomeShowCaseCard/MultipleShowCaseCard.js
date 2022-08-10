import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const MultipleShowCaseCard = ({ data }) => {
  const Images = data.data.map((item, index) => {
    return (
      <Link className="flex-column" to={`/productList/${item.imageLink}`} key={index}>
        <div className="innerImageContainer">
          <img src={item.image} alt="ProductImage" loading="lazy" />
        </div>
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
  height: 420px;
  max-width: 21.25rem;
  padding: 1rem 0;
  box-shadow: 3px 5px 10px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  justify-content: space-around;
  border-radius: 5px;
  position: relative;

  h1 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    padding:0 1rem;
  }

  a {
    color: var(--darkblue);
    font-size: 0.75rem;
    margin: 0;
  }

  .ShowCardFooterLink {
    position: absolute;
    bottom:1.25rem;
    left:1.25rem;
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
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  height:275px;
  padding: 0 1rem;
  margin-bottom: 2rem;
  overflow: hidden;
  position: relative;
  a {
    width: 49%;
    height: 50%;
    text-align: center;
    transition: all 300ms ease;
    border-radius: 2px;
    background-color: transparent;
    overflow: hidden;
    margin-bottom: 0.3rem;
    /* gap:1px; */
    .innerImageContainer{
      width: 100%;
      height: 102px;
      overflow: hidden;
      img {
      width: 100%;
      height: inherit;
    }
    }
    &:hover {
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 300ms ease;
    }
    span {
      margin-top: 0.3rem;
      font-size: .8rem;
    }
  }
`;
