import React from "react";
import styled from "styled-components";
import {
  TopCarousel,
  carouselData,
  MultipleShowCaseCard,
  MultipleShowCaseData,
  SingleShowCaseCard,
} from "../components";

const Home = () => {
  return (
    <Container>
      <TopCarousel data={carouselData} />
      <div className="cardContainer">
        <MultipleShowCaseCard data={MultipleShowCaseData[0]} />
        <MultipleShowCaseCard data={MultipleShowCaseData[1]} />
        <MultipleShowCaseCard data={MultipleShowCaseData[2]} />
        <SingleShowCaseCard
          title="Sign in for your best experience"
          button={true}
          buttonText="Sign in securely"
          buttonLink="/login"
        />
        <MultipleShowCaseCard data={MultipleShowCaseData[3]} />
        <MultipleShowCaseCard data={MultipleShowCaseData[4]} />
        <SingleShowCaseCard
          title="Pay your credit card bills on Amazon"
          button={false}
          footerLink="/"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"
          footerLinkText="Pay Now"
        />
        <MultipleShowCaseCard data={MultipleShowCaseData[5]} />
        <MultipleShowCaseCard data={MultipleShowCaseData[5]} />
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  .cardContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: -350px;
    padding: 1rem 1rem 5rem;
    width: 100%;
    justify-content: space-evenly;
    justify-items: center;
    /* align-items: center; */
    gap: 1.5rem;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(200, 200, 200, 1)
    );

    div:last-child {
      display: none;
    }

    @media (max-width: 1150px) {
      grid-template-columns: repeat(3, 1fr);
      div:last-child {
        display: block;
      }
    }
  }
`;
