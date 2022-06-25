import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopCarousel = ({ data }) => {
  const carouselSlides = data.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <Link className='TopCarouselImageLink' to={`${'#'}`}>
          <CarouselSlide bgImage={item.image} />
        </Link>
      </SwiperSlide >
    );
  });
  return (
    <Carousel>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper slick-carousel-container">
        {carouselSlides}
      </Swiper>
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
 .swiper-button-prev,.swiper-button-next{
  position: absolute;
  top:1.45rem;
  width: 4.5rem;
  height: 16.5rem;
  background-color: transparent;
  color:black;
  &:hover{
    border:2px solid white;
  }
 }
 .swiper-button-next{
    right: 0;
 }
 .swiper-button-prev{
  left: 0;
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
