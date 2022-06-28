import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import styled from "styled-components";
// import { Loading } from '../../assets/Images'
import axios from "axios";
// import { FetchDataContext } from "../../Store";

const ItemCarousel = ({ data, heading }) => {
  const [carouselData, setCarouselData] = useState([])
  useEffect(() => {
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
      let parsedData = JSON.parse(localStorage.getItem(`Fetched ${data}`))
      if (parsedData.length < 1) {
        getData()
      }
      setCarouselData(parsedData)
    }
    else {
      getData()
    }
    return function cleanup() {
      if (carouselData.length < 1) {
        getData()
      }
    }
    // eslint-disable-next-line
  }, [data])

  const List = carouselData.map((slide, index) => {
    let ProductLink = slide.query_url.split('/product/')[1];
    ProductLink = ProductLink.replaceAll('/', '~')
    return (
      <SwiperSlide key={index} className='ImageContainer'>
        <Link to={`/product/${ProductLink}`}>
          <img src={slide.image} alt="" />
        </Link>
      </SwiperSlide>
    )
  })

  return <>
    <CarouselContainer className="CarouselContainer">
      {heading && <h1>{heading}</h1>}
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >{List}</Swiper>
    </CarouselContainer>
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
  .swiper{
    height:12rem;
  }
  div > div  {
    a{
      img{
        height: 10rem;
      }
    }
  }

  .ImageContainer{
    width: 100%;
    padding: 1rem;
    display: grid;
    place-items: center;
    img {
      width: 100%;
    }
  }
`;
