import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import TestimonialCard from "./TestimonialCard"
import Box from "@mui/material/Box"

const settings = {
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        centerPadding: '15%',
        slidesToShow: 1,
        infinite: false,
      }
    }
  ]
};

const boxStyles = {
  margin: {
    xs: 1,
  },
  p: {
    xs: '0 1rem 0 0'
  },
  width: '100%'
}

const PropertySlider = () => {
  const sliderRef = React.useRef();

  return(
    <>
      <Typography variant="subtitle1">Testimonios</Typography>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography sx={{fontWeight: 600, mb: 5}} variant="h5">La opinión de nuestros clientes</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => {
              // @ts-ignore
            sliderRef?.current?.slickPrev()
          }} component={ChevronLeft}/>
          <IconButton onClick={() => {
            // @ts-ignore
            sliderRef?.current?.slickNext()
          }} component={ChevronRight}/>
        </Grid>
      </Grid>
      <Slider ref={sliderRef} {...settings}>
        <Box sx={boxStyles}>
          <TestimonialCard/>
        </Box>
        <Box sx={boxStyles}>
          <TestimonialCard/>
        </Box>
      </Slider>
    </>
  )
}

export default React.forwardRef(PropertySlider);