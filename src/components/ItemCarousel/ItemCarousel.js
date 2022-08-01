import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/navigation";

const ItemCarousel = ({ data, heading }) => {
  const [carouselData, setCarouselData] = useState([])

  useEffect(() => {
    var savedProducts = []
    const getData = async () => {
      const result = await axios({
        method: 'get',
        url: `https://amazon-scraper.chipmunk092000.workers.dev/search/${data}`
      })
      if (await result.data.status) {
        setCarouselData(result.data.result)
        localStorage.setItem(`Fetched ${data}`, JSON.stringify(result.data.result))
      }
    }
    if (localStorage.getItem(`Fetched ${data}`)) {
      savedProducts = JSON.parse(localStorage.getItem(`Fetched ${data}`))
    }

    if (savedProducts.length < 1) {
      getData()
    }
    else {
      setCarouselData(savedProducts)
    }
    // eslint-disable-next-line
  }, [data])

  const List = carouselData.map((slide, index) => {
    let ProductLink = slide.query_url.split('/product/')[1];
    ProductLink = ProductLink.replaceAll('/', '~')
    return (
      <SwiperSlide key={index} className='ImageContainer'>
        <Link to={`/product/${data}/${ProductLink}`}>
          <img src={slide.image} alt="" loading="lazy" />
        </Link>
      </SwiperSlide>
    )
  })

  // const settings = {
  //   className: "slider variable-width",
  //   infinite: true,
  //   centerMode: true,
  //   centerPadding: "100px",
  //   slidesToShow: 2,
  //   swipeToSlide: true,
  //   variableWidth: true,
  //   autoplay: true,
  //   speed: 1000,
  //   autoplaySpeed: 5000,
  //   cssEase: "linear"
  // };

  return <>
    <CarouselContainer className="CarouselContainer">
      {heading && <h1>{heading}</h1>}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={2}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        freeMode={true}
        // navigation={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >{List}</Swiper>
    </CarouselContainer>
  </>;
};

export default ItemCarousel;

const CarouselContainer = styled.div`
  position: relative;
  margin: 1rem 0;
  padding: 1rem;
  background-color: white;
  height: auto;

  h1 {
    margin:0 0 1rem 1.4rem;
    font-size: 1.6rem;
  }
   .ImageContainer{
    width: fit-content;
    height: 165px;
    display: grid;
    place-items: center;
    padding: 0 1rem;
    
        a{
          height: inherit;
            img {
            height: inherit;
          }
        }
  }

  .swiper-button-prev,.swiper-button-next{
    border-radius: 8px;
    width: 3rem;
    height: 150px;
    align-items: center;
    display: flex;
    color:black;
    top:28px;
      &:hover{
        background-color: transparent;
        box-shadow: 0 5px 10px rgba(0,0,0,.3);
      }
 }

 &:hover{
  .swiper-button-prev,.swiper-button-next{
    background-color: rgba(200,200,200,.5);
  }
 }

 @media (max-width:768px) {
  .swiper-button-prev,.swiper-button-next{
    display: none;
  }
 }
`;
