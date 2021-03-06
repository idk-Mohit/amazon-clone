import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Slider from "react-slick";
import styled from "styled-components";
import axios from "axios";

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
      <div key={index} className='ImageContainer'>
        <Link to={`/product/${data}/${ProductLink}`}>
          <img src={slide.image} alt="" />
        </Link>
      </div>
    )
  })

  const settings = {
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  return <>
    <CarouselContainer className="CarouselContainer">
      {heading && <h1>{heading}</h1>}
      <ArrowBackIosNewIcon className="MuiPrevIcon" />
      <Slider {...settings} >{List}</Slider>
      <ArrowForwardIosIcon className='MuiNextIcon' />
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
    width: 100%;
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
  .slick-next,.slick-prev {
    background-color: transparent;
    position: absolute;
    top: 50%;
    z-index: 50;
    width: 4.5rem;
    height: 100%;
    transition:300ms ease all;
    &:hover {
      border: 2px solid var(--gray);
      background-color: var(--lightgray);
      transition:300ms ease background-color;
    }
  }
  .slick-next {
    right:0;
  }
  .slick-prev{
    left:0;
  }
  .slick-next:before,.slick-prev:before{
    display: none;
  }
  /* Custom Icons */
  .MuiPrevIcon,.MuiNextIcon{
    opacity: 0;
    position: absolute;
    top:50%;
    background-color: transparent;
    z-index: 100;
    font-size: 2.5rem;
    pointer-events: none;
    transition: 300ms ease opacity; 
  }
  .MuiPrevIcon{
    left:1.8rem;
  }
  .MuiNextIcon{
    right:1.8rem;
  }

  &:hover{
    .MuiPrevIcon,.MuiNextIcon{
      opacity: 1;
      transition: 300ms ease opacity;
    }
  }
`;
