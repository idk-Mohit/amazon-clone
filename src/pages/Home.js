import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import {
  TopCarousel,
  carouselData,
  MultipleShowCaseCard,
  MultipleShowCaseData,
  SingleShowCaseCard,
  SignInFooter,
  MainPageLoader,
  // ItemCarousel
} from "../components";
import { useSelector } from 'react-redux'

const ItemCarousel = lazy(() => import('../components/ItemCarousel/ItemCarousel'))

const Home = () => {
  const Auth = useSelector(state => state.Auth)

  return (
    <>
      <Container className="main-container">
        <TopCarousel data={carouselData} />
        {/* OnTop CarouselDiv */}
        <div className="onTopCarouselDiv">
          <div className="Mobile__Carousel">
            <Suspense fallback={<MainPageLoader />}>
              <ItemCarousel data="Macbook" heading="Latest M2 Macbooks" />
            </Suspense>
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
            <Suspense fallback={<MainPageLoader />}>
              <ItemCarousel data="Apple-Watches" heading="Apple Watches" />
            </Suspense>
          </div>
          <div className="itemCarouselContainer">
            <Suspense fallback={<MainPageLoader />}>
              <ItemCarousel data="mobile" heading="Latest and Greatest Mobiles" />
            </Suspense>
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
            <SingleShowCaseCard
              title="Up to 75% off | Laptops, headphones &amp; more"
              button={false}
              link="/productList/Laptops"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/AugArt/Electronics/GW/D52498136_IN_CEPC_Electronics_GW_Graphics_PC_CC0.5x._SY304_CB630947424_.jpg"
              footerLinkText="See More"
            />
          </div>
          <div className="itemCarouselContainer">
            <Suspense fallback={<MainPageLoader />}>
              <ItemCarousel data="tv" heading='Decor your Livingroom' />
            </Suspense>
          </div>
          <Suspense fallback={<MainPageLoader />}>
            <ItemCarousel data="laptop" heading="Latest to improve Productivity" />
          </Suspense>
          {!Auth.isLoggedIn && <SignInFooter />}
        </div>
        {/* OnTop CarouselDiv */}
      </Container>
    </>
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
    @media(max-width:625px){
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
