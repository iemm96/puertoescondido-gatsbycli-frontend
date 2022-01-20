import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./banner/Slide";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import {styled} from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Search from "@mui/icons-material/Search";

import Fade from 'react-reveal/Fade';
// @ts-ignore
import IconHouseConst from './../images/icons/icon-house-cost.svg';
// @ts-ignore
import IconFindHouse from './../images/icons/icon-find-house.svg';
// @ts-ignore
import IconSupportHouse from './../images/icons/icon-support-house.svg';
// @ts-ignore
import IconResidential from './../images/icons/residential.svg';
// @ts-ignore
import IconCultivation from './../images/icons/cultivation.svg';
// @ts-ignore
import IconClimate from './../images/icons/climate.svg';
// @ts-ignore
import IconBluePrint from './../images/icons/blueprint.svg';

import useTheme from "@mui/material/styles/useTheme"
import useWindowDimensions from "../hooks/useWindowDimensions"
import ResidentialIcon from "./common/icons/ResidentialIcon"
import CultivationIcon from "./common/icons/CultivationIcon"
import ClimateIcon from "./common/icons/ClimateIcon"
import BluePrintIcon from "./common/icons/BluePrintIcon"

const StyledLinearBackgroundDiv = styled("div")(() => ({
  background: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
  width: "100%",
  height: "100%"
}));

const StyledIconTypographyDiv = styled("div")(() => ({
  display: 'flex',
  justifyContent: 'left',
  alignContent: 'center',
}));

const StyledH2 = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
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

const StyledTypesButtonMobile = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  width: '100%',
  textTransform: 'none',
  boxShadow: 'none',
  flex: 1,
  backgroundColor: theme.palette.primary.main,
  color: 'white'
}));

const StyledTypesButton = styled(Button)(() => ({
  borderRadius: 0,
  boxShadow: 'none',
  flex: 1
}));

const Banner = () => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

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
            padding: {
              xs: '18rem 1rem 2rem 1rem',
              md: '12rem 0'
            }
          }}
        >
          <Fade bottom>
            <Grid container spacing={1}>
              <Grid item xs={ 12 } md={8}>
                <StyledH2 variant="h2" color="white">
                  Somos la inmobiliaria en la que puedes confiar.
                </StyledH2>
              </Grid>
            </Grid>
          </Fade>
          <Grid
            sx={{
              display: {
                xs: 'none',
                md: 'inline'
              }
            }}
            container
            maxWidth="lg"
            spacing={0}
          >
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
            <Grid item xs={12} md={4}>
              <InputLabel sx={{ color: 'white' }} shrink htmlFor="search-property-input">
                ¿Qué tipo de propiedad estás buscando?
              </InputLabel>
              <TextField
                id="search-property-input"
                sx={{
                  '& .MuiFilledInput-root': {
                    paddingRight: 0,
                    backgroundColor: '#EBF2FF',
                    borderRadius: 3.5,
                  }
                }}
               variant="filled"
               InputProps={{
                 disableUnderline: true,
                 endAdornment: <IconButton sx={{ backgroundColor: theme.palette.primary.main }}><Search sx={{ color:'white' }}/></IconButton>
               }}
               placeholder="Cerca de la playa, rancho, terreno, etc."
               />
            </Grid>
          </Grid>
        </Container>
      </StyledLinearBackgroundDiv>
      {
        width < 480 ?
          <Box
            sx={{
              backgroundColor: '#F7F6F4',
              p: 2
            }}
          >
            <Grid container spacing={1}>
              <Grid xs={6} item>
                <StyledTypesButtonMobile
                  startIcon={<ResidentialIcon  width={24}/>}
                  variant="contained"
                >
                  Fraccionamientos
                </StyledTypesButtonMobile>
              </Grid>
              <Grid xs={6} item>
                <StyledTypesButtonMobile
                  startIcon={<CultivationIcon  width={24}/>}
                  variant="contained"
                >
                  Ranchos
                </StyledTypesButtonMobile>
              </Grid>
              <Grid xs={6} item>
                <StyledTypesButtonMobile
                  startIcon={<ClimateIcon  width={24}/>}
                  variant="contained"
                >
                  Terrenos
                </StyledTypesButtonMobile>
              </Grid>
              <Grid xs={6} item>
                <StyledTypesButtonMobile
                  startIcon={<BluePrintIcon  width={24}/>}
                  variant="contained"
                >
                  Lotificaciones
                </StyledTypesButtonMobile>
              </Grid>
            </Grid>
          </Box>
          :
          <></>
      }
      <Box sx={{
        display: {
          xs: 'none',
          md: 'flex'
        }
      }}>
        <StyledTypesButton
          sx={{
            borderRight: '1px solid white',
          }}
          startIcon={<IconResidential width={40}/>}
          color="primary"
          variant="contained"
        >
          Fraccionamientos
        </StyledTypesButton>
        <StyledTypesButton
          sx={{
            borderRight: '1px solid white'
          }}
          startIcon={<IconCultivation width={40}/>}
          color="primary"
          variant="contained"
        >
          Ranchos
        </StyledTypesButton>
        <StyledTypesButton
          sx={{
            borderRight: '1px solid white'
          }}
          startIcon={<IconClimate width={40}/>}
          color="primary"
          variant="contained"
        >
          Terrenos
        </StyledTypesButton>
        <StyledTypesButton
          startIcon={<IconBluePrint width={40}/>}
          color="primary"
          variant="contained"
        >
          Lotificaciones
        </StyledTypesButton>
      </Box>
      <Slider {...settings} style={{overflow:'hidden', position:'absolute', zIndex:-1, height: '100%', width: '100%', top:0}}>
        <Slide imageName="banner-1.jpg"/>
        <Slide imageName="banner-2.jpg"/>
        <Slide imageName="banner-3.jpg"/>
      </Slider>
    </>
  )
};

export default Banner;
