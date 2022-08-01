import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopCarousel = ({ data }) => {
  const carouselSlides = data.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <DesktopView>
          <Link className='TopCarouselImageLink' to={`${item.DesktopLink}`}>
            <CarouselSlide bgImage={item.DesktopImage} />
          </Link>
        </DesktopView>
        <MobileView>
          <Link className='TopCarouselImageLink' to={`${item.MobileLink}`}>
            <img src={item.MobileImage} alt='carouselImage' />
          </Link>
        </MobileView>
      </SwiperSlide >
    );
  });
  return (
    <Carousel>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]} className="mySwiper slick-carousel-container">
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

 .swiper-pagination {
  display: none;
  position: absolute;
  bottom: 25%;
  height:fit-content;

  @media (max-width:1024px) {
    display:block;
  }
  @media(min-width:768px){
      bottom:30%
  }
 }

 @media (max-width:1024px) {
  .swiper-button-prev,.swiper-button-next,.main-carousel-button{
      display: none;
    }
 }
`;

const DesktopView = styled.div`
  @media (max-width:1024px) {
    display:none;    
  }
`
const MobileView = styled.div`
  display: none;

  img{
    width: 100%;
    height: 100%;
    mask-image: linear-gradient(to top, rgba(0, 0, 0, .3), rgba(0, 0, 0, 1));
  }
  @media (max-width:1024px){
    display: block;
  }
`

const CarouselSlide = styled.div`
  background-image: ${(props) => `url(${props.bgImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat; 
  height: 600px;
  width: 100%;
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;
