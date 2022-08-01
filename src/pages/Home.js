import React from "react";
import styled from "styled-components";
import {
  TopCarousel,
  carouselData,
  MultipleShowCaseCard,
  MultipleShowCaseData,
  SingleShowCaseCard,
  SignInFooter,
  ItemCarousel
} from "../components";
import { useSelector } from 'react-redux'
import LayOut from "./LayOut";
// import ReactLazyTest from "../components/ReactLazyTest";

const Home = () => {
  const Auth = useSelector(state => state.Auth)

  return (
    <LayOut>
      <Container className="main-container">
        <TopCarousel data={carouselData} />
        {/* OnTop CarouselDiv */}
        <div className="onTopCarouselDiv">
          <div className="Mobile__Carousel">
            <ItemCarousel data="mobile" heading="Latest and Greatest Mobiles" />
          </div>
          <div className="cardContainer">
            <MultipleShowCaseCard data={MultipleShowCaseData[0]} />
            <MultipleShowCaseCard data={MultipleShowCaseData[1]} />
            <MultipleShowCaseCard data={MultipleShowCaseData[2]} />
            {!Auth.isLoggedIn ? <SingleShowCaseCard
              title="Sign in for your best experience"
              button={true}
              buttonText="Sign in securely"
              buttonLink="/signin/emailCheck"
            /> : ''}
            <MultipleShowCaseCard data={MultipleShowCaseData[3]} />
            <MultipleShowCaseCard data={MultipleShowCaseData[4]} />
            <SingleShowCaseCard
              title="Pay your credit card bills on Amazon"
              button={false}
              link={'#'}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"
              footerLinkText="Pay Now"
            />
            {/* <MultipleShowCaseCard data={MultipleShowCaseData[5]} /> */}
            {/* <MultipleShowCaseCard data={MultipleShowCaseData[6]} /> */}
          </div>
          <div className="itemCarouselContainer">
            <ItemCarousel data="mobile accessories" heading="Mobile Accessories" />
          </div>
          <div className="itemCarouselContainer">
            <ItemCarousel data="mobile" heading="Latest and Greatest Mobiles" />
          </div>
          <div className="cardContainer">
            {/* <MultipleShowCaseCard data={MultipleShowCaseData[6]} /> */}
            <SingleShowCaseCard
              title="Effective dishwashing for Indian cooking"
              button={false}
              link="/productList/dishwasher"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/DW_CC_-_March_379x304._SY304_CB655397356_.jpg"
              footerLinkText="See More"
            />
            {/* <MultipleShowCaseCard data={MultipleShowCaseData[6]} /> */}
            <SingleShowCaseCard
              title="Up to 50% off | Chimneys"
              button={false}
              link="/productList/chimneys"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Chimney_GW_CC_379x304._SY304_CB427965740_.jpg"
              footerLinkText="See More"
            />
          </div>
          <div className="itemCarouselContainer">
            <ItemCarousel data="tv" heading='Decor your Livingroom' />
          </div>
          <ItemCarousel data="laptop" heading="Latest to improve Productivity" />
          {!Auth.isLoggedIn && <SignInFooter />}
        </div>
        {/* OnTop CarouselDiv */}
      </Container>
    </LayOut>
  );
};

export default Home;

const Container = styled.section`
  background-color: var(--lightgray);
  .cardContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-evenly;
    justify-items: center;
    gap: 1.5rem;
    @media (max-width: 1150px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width:768px){
      grid-template-columns: 1fr 1fr;
    }
    @media(max-width:425px){
      grid-template-columns: 1fr;
    }
  }

  .onTopCarouselDiv {
    margin-top: -350px;
    z-index: 1;
    position: relative;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--lightgray));
    padding: 1rem 1rem;
    width: 100%;

    @media (max-width:1024px) {
        margin-top:-25%;
    }
  }

  /* Mobile Styling */
  .Mobile__Carousel {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
