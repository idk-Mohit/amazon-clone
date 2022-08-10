import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

// import { FreeMode } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";

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
      // <SwiperSlide key={index} className='ImageContainer'>
      //   <Link to={`/product/${data}/${ProductLink}`}>
      //     <img src={slide.image} alt="" loading="lazy" />
      //   </Link>
      // </SwiperSlide>
      <Item key={index} className='ImageContainer'>
        <Link to={`/product/${data}/${ProductLink}`}>
          <img src={slide.image} alt="" loading="lazy" />
        </Link>
      </Item>
    )
  })

  const settings = {
    className: "slider center variable-width",
    infinite: true,
    speed: 500,
    variableWidth: true,
    slidesToShow: 1,
    swipeToSlide: true,
  };

  return <>
    <CarouselContainer className="CarouselContainer">
      {heading && <h1>{heading}</h1>}
      <Slider {...settings}
      >{List}</Slider>
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
  transition: 300ms ease;

  h1 {
    margin:0 0 1rem 1.4rem;
    font-size: 1.6rem;
  }

  .slick-list{
    height: 165px !important;
  }

  .slick-arrow{
    border-radius: 8px;
    width: 3rem;
    height: 150px;
    align-items: center;
    display: flex;
    color:black;
    top:5rem;
    z-index: 10;
      &:hover{
        background-color: transparent;
        box-shadow: 0 5px 10px rgba(0,0,0,.3);
      }
  }
  .slick-prev{
    left:0;
  }
  .slick-next{
    right:0;
  }
 &:hover{
  transition: 300ms ease;
  .slick-prev,.slick-next{
    background-color: rgba(200,200,200,.5);
    &:before{
      color: black;
    }
  }
 }

 @media (max-width:768px) {
  .slick-arrow{
    display: none !important;
  }
 }
`;

const Item = styled.li`
  width: fit-content;
    height: 165px;
    display: grid;
    place-items: center;
    margin: 0 1rem;
    
    a{
      height: inherit;
        img {
        height: inherit;
        margin: auto;
      }
    }
`