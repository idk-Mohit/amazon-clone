import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// import ItemCarouselData from "./ItemCarouselData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import FetchDataContext from "../../Store/FetchData-Context";
import { Loading } from '../../assets/Images'

const ItemCarousel = ({ data, heading }) => {
  const [carouselData, setCarouselData] = useState([])
  const FetchDataCtx = useContext(FetchDataContext)
  useEffect(() => {
    if (localStorage.getItem(`Fetched ${data}`)) {
      let parsedData = JSON.parse(localStorage.getItem(`Fetched ${data}`))
      setCarouselData(parsedData)
    }
    else {
      setCarouselData(FetchDataCtx.FetchDataHandler(data))
    }
    //eslint-disable-next-line
  }, [])

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

  const CarouselData = carouselData.map((item, index) => {
    const slides = item.product.map((slide, index) => {
      return (<Link to={`/product/${item.name}/${slide._id}`} key={index}>
        <img src={slide.image} alt="" />
      </Link>)
    })
    return (
      <CarouselContainer key={index}>
        <ArrowBackIosNewIcon
          fontSize="large"
          className="main-prev-icon main-carousel-button"
        />
        <h1>{heading}</h1>
        <Slider {...settings}>{slides}</Slider>
        <ArrowForwardIosIcon
          fontSize="large"
          className="main-next-icon main-carousel-button"
        />
      </CarouselContainer>
    )
  })

  return <>
    {carouselData.length === 0 && <div>{Loading}</div>}
    {carouselData.length !== 0 && <div>{CarouselData}</div>}
  </>;
};

export default ItemCarousel;

const CarouselContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background-color: white;
  position: relative;
  h1 {
    margin:0 0 1rem 1.4rem;
    font-size: 1.6rem;
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
    z-index: 2;
  }

  .main-prev-icon {
    left: 1.9rem;
    display: none;
  }

  .main-next-icon {
    right: 1.9rem;
    display: none;
  }

  /* Slick Carousel Navigation Styling */
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
    z-index: 1;
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
    display: none !important;
  }
  .slick-next {
    /* position: absolute; */
    right: 0;
    display: none !important;
  }

  &:hover {
    .slick-prev,
    .main-prev-icon,
    .slick-next,
    .main-next-icon {
      display: block !important;
      animation: fade 300ms ease;
    }
  }
`;
