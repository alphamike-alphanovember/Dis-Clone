import React from "react";
import styled from "styled-components";

import Slider from "react-slick"; //https://react-slick.neostack.com/docs/get-started
import "slick-carousel/slick/slick.css"; //for coursel
import "slick-carousel/slick/slick-theme.css";

function Imgslider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="./images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-scales.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default Imgslider;

const Carousel = styled(Slider)`
  margin: 20px;

  ul li button {
    &:before {
      opacity: 0.75;
      color: rgb(83, 98, 99);
      font-size: 10px;
    }
  }

  li.slick-active button::before {
    color: whitesmoke;
    font-size: 10px;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
  .slick-slide {
    width: 550px;
  }
`;

const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    height: 100%;
    width: 99%;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    cursor: pointer;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
