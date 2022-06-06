import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import ItemCarouselData from "./ItemCarouselData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";

const ItemCarousel = ({ data }) => {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const CarouselData = ItemCarouselData.map((item, index) => {
    if (Object.keys(item).toString() === data) {
      const heading = Object.keys(item).toString();
      const list = Object.values(item)[0].map((item, index) => {
        return (
          <Link to={`${item.link}`} key={index}>
            <img src={item.image} alt="" />
          </Link>
        );
      });
      return (
        <CarouselContainer key={index}>
          <ArrowBackIosNewIcon
            fontSize="large"
            className="main-prev-icon main-carousel-button"
          />
          <h1>{heading}</h1>
          <Slider {...settings}>{list}</Slider>
          <ArrowForwardIosIcon
            fontSize="large"
            className="main-next-icon main-carousel-button"
          />
        </CarouselContainer>
      );
    }
    return null;
  });

  return <>{CarouselData}</>;
};

export default ItemCarousel;

const CarouselContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background-color: white;
  position: relative;
  h1 {
    margin-bottom: 1rem;
  }

  div {
    img {
      margin: 0 1rem;
    }
  }

  /* Carousel Custom Button Styling */
  .main-carousel-button {
    position: absolute;
    top: 9rem;
    fill: black !important;
    pointer-events: none;
    /* z-index: 1; */
  }

  .main-prev-icon {
    left: 1.9rem;
  }

  .main-next-icon {
    right: 1.9rem;
  }

  /* Slick Carousel Navigation Styling */
  .slick-carousel-contianer {
  }
  .slick-slider.slider {
    max-height: 15rem !important;
    position: relative;
  }
  .slick-dots {
    display: none !important;
  }
  .slick-arrow {
    position: absolute;
    background-color: var(--lightgray);
    background-color: white;
    /* z-index: 1; */
    width: 4rem;
    height: 7rem;
    top: 6rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: all 300ms ease;
    &::after,
    ::before {
      content: "";
    }
    &:hover {
      background-color: white;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
      transition: all 300ms ease;
    }
  }
  .slick-prev {
    /* position: absolute; */
    left: 0;
  }
  .slick-next {
    /* position: absolute; */
    right: 0;
  }
`;
