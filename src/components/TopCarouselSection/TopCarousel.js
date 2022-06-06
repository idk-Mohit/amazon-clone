import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const TopCarousel = ({ data }) => {
  const carouselSlides = data.map((item, index) => {
    return (
      <Link className='TopCarouselImageLink' key={index} to={`${item.link}`}>
        <CarouselSlide bgImage={item.image} />
      </Link>
    );
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  return (
    <Carousel>
      <ArrowBackIosNewIcon
        fontSize="large"
        className="main-prev-icon main-carousel-button"
      />
      <Slider {...settings} className="slick-carousel-container">
        {carouselSlides}
      </Slider>
      <ArrowForwardIosIcon
        fontSize="large"
        className="main-next-icon main-carousel-button"
      />
    </Carousel>
  );
};

export default TopCarousel;

const Carousel = styled.div`
  margin: auto;
  color: white;
  position: relative;

  /* Carousel Custom Button Styling */
  .main-carousel-button {
    position: absolute;
    top: 6.5rem;
    fill: black;
    pointer-events: none;
    z-index: 2;
  }

  .main-prev-icon {
    left: 1.2rem;
  }

  .main-next-icon {
    right: 1.2rem;
  }

  /* Slick Carousel Navigation Styling */
  .slick-carousel-contianer {
    position: relative;
  }
  .slick-dots {
    display: none !important;
  }
  .slick-arrow {
    background-color: transparent;
    width: 5rem;
    height: 16.8rem;
    position: absolute;
    top: 134px;
    &::after,
    ::before {
      content: "";
    }
    &:hover {
      border: 2px solid white;
      border-radius: 2px;
    }
  }
  .slick-prev {
    /* position: absolute; */
    left: 0;
    z-index:2;
  }
  .slick-next {
    /* position: absolute; */
    right: 0;
    z-index:2;
  }
`;

const CarouselSlide = styled.div`
  background-image: ${(props) => `url(${props.bgImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;
