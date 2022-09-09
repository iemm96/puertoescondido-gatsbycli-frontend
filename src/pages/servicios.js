import * as React from "react";
import Seo from "../components/seo";
import Container from "@mui/material/Container"
import { Box, Stack, Typography } from "@mui/material"
import Layout from "../components/layout"
import Grid from "@mui/material/Grid"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image"
import Button from "@mui/material/Button"
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import {graphql, navigate, useStaticQuery} from "gatsby"
import {Gallery} from "../components/common/Gallery";
import {Home} from "@mui/icons-material";
import StyledButton from "../styled/StyledButton";

const settings = {
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
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

const Servicios = () => {

  const {allFile} = useStaticQuery(graphql`
      query AllTopographyPhotos {
          allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "services/topography"}}) {
              nodes {
                  childImageSharp {
                      gatsbyImageData
                  }
                  relativePath
              }
          }
      }
  `);

  return(
    <>
      <Seo title="Servicios"/>
      <Layout persistentHeader={true}>
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex'
          }}
        >
          <Stack spacing={2} direction="column">
            <Typography align="center" sx={{ mt: 18 }} variant="h4">Servicios</Typography>
            <Typography align="center" sx={{ mt: 18 }} variant="subtitle1">Somos más que una Inmobiliaria, ¡Conoce todas las soluciones que tenemos para ti!</Typography>
          </Stack>
        </Box>
          <Container maxWidth="xl">
            <Grid
              sx={{ mt: 4 }}
              spacing={4}
              container
            >
              <Grid xs={ 12 } md={ 6 } order={{ xs: 2, md: 1 }} sx={{ justifyContent: 'center', display: 'flex' }} item>
                <Gallery data={ allFile.nodes } preview={ false }/>
              </Grid>
              <Grid xs={ 12 } md={ 6 } order={{ xs: 1, md: 2 }} item>
                <Stack
                  sx={{
                    display: 'flex',
                    justifyContent: 'left'
                  }}
                  direction="column"
                >
                  <Typography variant="h5">
                    Topografía
                  </Typography>
                  <Typography
                    sx={{ mt: 2 }}
                    variant="body2"
                  >
                    Empleo de equipo especializado para la MEDICIÓN exacta de áreas, alturas, relieve de un TERRENO.
                  </Typography>
                </Stack>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    mt: 4
                  }}
                >
                  Agendar cita
                </Button>
              </Grid>
            </Grid>
          </Container>
          <Box
            sx={{
                mt: 4,
                display: 'flex',
                justifyContent: 'center'
            }}
          >
              <StyledButton
                  onClick={ () => navigate( '/' ) }
                  startIcon={<Home/>}
              >
                  Volver al inicio
              </StyledButton>
          </Box>
      </Layout>
    </>
  )
}

export default Servicios;