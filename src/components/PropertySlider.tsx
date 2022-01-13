import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropertyCard from "./PropertyCard"
import { Grid, IconButton, Typography } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

const settings = {
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const PropertySlider = () => {
  const sliderRef = React.useRef();

  return(
    <>
      <Typography variant="h6">¡Tu mejor opción!</Typography>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography sx={{fontWeight: 600, mb: 5}} variant="h5">Propiedades destacadas</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => sliderRef?.current?.slickPrev()} component={ChevronLeft}/>
          <IconButton onClick={() => sliderRef?.current?.slickNext()} component={ChevronRight}/>
        </Grid>
      </Grid>
      <Slider ref={sliderRef} {...settings}>
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
    </>
  )
}

export default React.forwardRef(PropertySlider);