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
    if (localStorage.getItem(`Fetched ${data}`)) {
      let parsedData = JSON.parse(localStorage.getItem(`Fetched ${data}`))
      setCarouselData(parsedData)
    }
    else {
      const getData = async () => {
        const result = await axios({
          method: 'get',
          url: `https://amazon-scraper.tprojects.workers.dev/search/${data}`
        })
        if (result.data.status) {
          setCarouselData(result.data.result)
          localStorage.setItem(`Fetched ${data}`, JSON.stringify(result.data.result))
        }
      }
      getData()
      // setCarouselData(FetchDataCtx.FetchDataHandler(data))
    }

  }, [data])

  const List = carouselData.map((slide, index) => {
    let ProductLink = slide.query_url.split('/product/')[1];
    ProductLink = ProductLink.replaceAll('/', '~')
    return (
      <SwiperSlide key={index}>
        <Link to={`/product/${ProductLink}`}>
          <img src={slide.image} alt="" />
        </Link>
      </SwiperSlide>
    )
  })

  return <>
    <CarouselContainer>
      {heading && <h1>{heading}</h1>}
      <Swiper slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">{List}</Swiper>
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
`;
