import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import PropertyCard from "./PropertyCard";
import Box from "@mui/material/Box";
import "./../styles/slick.css";

type SliderComponentType = {
  title: string;
  subtitle: string;
  settings?: any
}

const settings = {
  dots: false,
  slidesToShow: 4,
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

const PropertySlider = ({ title, subtitle }:SliderComponentType) => {
  const sliderRef = React.useRef();

  return(
    <>
      <Box sx={ {pl: 2} }>
        <Typography variant="subtitle1">{title}</Typography>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography sx={{fontWeight: 600, mb: 1}} variant="h5">{subtitle}</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={() => {
              // @ts-ignore
              sliderRef.current.slickPrev();
            }
            } component={ChevronLeft}/>
            <IconButton onClick={() => {
              // @ts-ignore
              sliderRef?.current?.slickNext()
            }} component={ChevronRight}/>
          </Grid>
        </Grid>
      </Box>

      <Slider ref={sliderRef} {...settings}>
        <Box sx={boxStyles}>
          <PropertyCard/>
        </Box>
        <Box sx={boxStyles}>
          <PropertyCard/>
        </Box>
        <Box sx={boxStyles}>
          <PropertyCard/>
        </Box>
        <Box sx={boxStyles}>
          <PropertyCard/>
        </Box>
        <Box sx={boxStyles}>
          <PropertyCard/>
        </Box>
        <Box sx={boxStyles}>
          <PropertyCard/>
        </Box>
      </Slider>
    </>
  )
}

export default React.forwardRef(PropertySlider);