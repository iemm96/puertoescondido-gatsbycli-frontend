import * as React from "react";
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import PropertyCard from "./PropertyCard";
import Box from "@mui/material/Box";
import "./../styles/slick.css";
import Container from "@mui/material/Container"

type SliderComponentType = {
  title: string;
  subtitle: string;
  settings?: any;
  data?: any;
}

const boxStyles = {
  p: {
    xs: '0 1rem 0 0'
  },
  width: '100%',
}


const PropertySlider = ({ title, subtitle, data  }:SliderComponentType) => {
  const [ swiperDef, setSwiperDef ] = React.useState<any>( [] );
  const [ swiperState, setSwiperState ] = React.useState<any>( {
    isBeginning: true,
    isEnd: false
  } );

  const arrowButtonStyles = {
    borderRadius: 2,
    height: 40,
  }
  return(
      <>
        <Container maxWidth="xl" sx={ {pl: 2} }>
          <Typography variant="subtitle1">{title}</Typography>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography sx={{fontWeight: 600, mb: 1}} variant="h5">{subtitle}</Typography>
            </Grid>
            <Grid item>
              <IconButton
                  sx={ arrowButtonStyles }
                  disabled={ swiperState.isBeginning }
                  onClick={ () => swiperDef ? swiperDef.slidePrev() : '' }
              >
                <ChevronLeft/>
              </IconButton>
              <IconButton
                  sx={{
                    borderRadius: 2,
                    height: 40
                  }}
                  disabled={ swiperState.isEnd }
                  onClick={ () => swiperDef ? swiperDef.slideNext() : '' }
              >
                <ChevronRight/>
              </IconButton>
            </Grid>
          </Grid>
          <Swiper
              modules={[ Scrollbar ]}
              slidesPerView="auto"
              spaceBetween={ 10 }
              centeredSlides={ false }
              onSlideChange={ () => {
                setSwiperState( {
                  isEnd: swiperDef.isEnd,
                  isBeginning: swiperDef.isBeginning
                } );
              } }
              onSwiper={ (swiper) => {
                setSwiperDef( swiper );
                setSwiperState( {
                  isEnd: false,
                  isBeginning: true
                });
              }}
              breakpoints={{
                "640": {
                  "slidesPerView": 2,
                  "spaceBetween": 10
                },
                "768": {
                  "slidesPerView": 2,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 4,
                  "spaceBetween": 10
                }
              }}
              freeMode={true}
          >
            { ( data && data.length > 0 ) && data.map( (item, index ) => (
                <SwiperSlide>
                  <Box key={index} sx={boxStyles}>
                    <PropertyCard key={ index } data={ item }/>
                  </Box>
                </SwiperSlide>

            )) }
          </Swiper>

        </Container>

      </>
  )
}

export default React.forwardRef(PropertySlider);