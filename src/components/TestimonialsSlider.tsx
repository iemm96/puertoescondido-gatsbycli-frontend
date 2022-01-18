import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import PostCard from "./PostCard"

const settings = {
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const PropertySlider = () => {
  const sliderRef = React.useRef();

  return(
    <>
      <Typography variant="h6">Testimonios</Typography>
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
        <PostCard/>
        <PostCard/>
      </Slider>
    </>
  )
}

export default React.forwardRef(PropertySlider);