import * as React from "react"
import { graphql,useStaticQuery } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slide from "./banner/Slide"
import { Container, Grid, styled, Typography } from "@mui/material"

const StyledDiv = styled("div")(() => ({
  background: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
  width: "100%",
  height: "100%"
}));

const Banner = () => {

  const {backgroundImage} = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: {eq: "banner-1.jpg"}) {
        id
        childImageSharp {
          gatsbyImageData(
          width: 2000, 
          quality: 90, 
          webpOptions: {quality: 90})
        }
      }
    }
  `);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    fade:true
  };

  const childSlide = () => {
    return(
      <StyledDiv>
        <Container sx={{
          padding: "12rem 0"
        }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h2" color="white">
                Somos la inmobiliaria en la que puedes confiar.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography color="white">
                Sin costos ocultos
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography color="white">
                Encuentra tu hogar fácil y rápido
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography color="white">
                Asesoría durante todo el proceso
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledDiv>
    )
  };

  return (
    <Slider {...settings} className="overflow-hidden">
      <Slide child={childSlide()} imageName="banner-1.png"/>
    </Slider>
  )
};

export default Banner;

//https://www.youtube.com/watch?v=d5i00ZN2Tuw