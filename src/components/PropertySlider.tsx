import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropertyCard from "./PropertyCard"
import { styled } from "@mui/material"
import { ChevronLeft } from "@mui/icons-material"

const StyledArrowDiv = styled('div')(() => ({
  width: 40,
  height: 40,
  backgroundColor: "red"
}));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <ChevronLeft color="primary"/>
    </div>
  );
}

const settings = {
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: (<StyledArrowDiv><ChevronLeft fontSize="medium"/></StyledArrowDiv>),
  prevArrow: <SamplePrevArrow />
};

const PropertySlider = () => {
  return(
    <Slider {...settings}>
      <PropertyCard/>
      <PropertyCard/>
      <PropertyCard/>
      <PropertyCard/>
      <PropertyCard/>
      <PropertyCard/>
      <PropertyCard/>
      <PropertyCard/>
      <PropertyCard/>
      <PropertyCard/>
      <PropertyCard/>
    </Slider>
  )
}

export default PropertySlider;