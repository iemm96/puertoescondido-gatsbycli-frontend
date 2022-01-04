import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./banner/Slide";
import { Box, Button, Container, Grid, styled, TextField, Typography } from "@mui/material"
// @ts-ignore
import IconHouseConst from "./../images/icons/icon-house-cost.svg";
// @ts-ignore
import IconFindHouse from "./../images/icons/icon-find-house.svg";
// @ts-ignore
import IconSupportHouse from "./../images/icons/icon-support-house.svg";

const StyledLinearBackgroundDiv = styled("div")(() => ({
  background: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
  width: "100%",
  height: "100%"
}));

const StyledIconTypographyDiv = styled("div")(() => ({
  display: 'flex',
  justifyContent: 'left',
  alignContent: 'center'
}));

const StyledH2 = styled(Typography)(() => ({
  '&::after': {
    content: '""',
    background: 'white',
    width: '20%',
    margin: '8px 0',
    height: 1,
    position:'relative',
    display: 'inherit',
  }
}));

const Banner = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    fade:true
  };

  return (
    <>
      <StyledLinearBackgroundDiv>
        <Container
          maxWidth="xl"
          sx={{
            padding: "12rem 0"
          }}
        >
          <div
            data-sal="slide-up"
            data-sal-delay="1200"
            data-sal-duration="600"
            data-sal-easing="ease"
          >
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <StyledH2 variant="h2" color="white">
                  Somos la inmobiliaria en la que puedes confiar.
                </StyledH2>
              </Grid>
            </Grid>
          </div>
          <Grid container maxWidth="lg" spacing={0}>
            <Grid item xs={2}>
              <StyledIconTypographyDiv>
                <IconHouseConst width={40}/>
                <Typography sx={{ml:2}} color="white">
                  Sin costos {<br/>} ocultos
                </Typography>
              </StyledIconTypographyDiv>
            </Grid>
            <Grid item xs={3}>
              <StyledIconTypographyDiv>
                <IconFindHouse size={48}/>
                <Typography color="white" sx={{ml:2}}>
                  Encuentra propiedades fácilmente
                </Typography>
              </StyledIconTypographyDiv>

            </Grid>
            <Grid item xs={3}>
              <StyledIconTypographyDiv>
                <IconSupportHouse size={48}/>
                <Typography color="white" sx={{ml:2}}>
                  Asesoría durante todo el proceso
                </Typography>
              </StyledIconTypographyDiv>
            </Grid>
          </Grid>
          <Grid container mt={2}>
            <Grid item sm={12}>
              <TextField sx={{
                width: 600,
                '& .MuiFilledInput-root': {
                  backgroundColor: '#EBF2FF',
                  borderRadius: 3.5,
                }
              }}
               variant="filled"
               InputProps={{
                 disableUnderline: true,
                 endAdornment: <Button color="primary" variant="contained">Buscar</Button>
               }}
               label="¿Qué tipo de propiedad estás buscando?"
               />
            </Grid>
          </Grid>
        </Container>
      </StyledLinearBackgroundDiv>
      <Slider {...settings} style={{overflow:'hidden', position:'absolute', zIndex:-1, height: '100%', width: '100%', top:0}}>
        <Slide imageName="banner-1.jpg"/>
        <Slide imageName="banner-2.jpg"/>
        <Slide imageName="banner-3.jpg"/>
      </Slider>
    </>
  )
};

export default Banner;
