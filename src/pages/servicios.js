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
import { graphql, useStaticQuery } from "gatsby"

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

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img_puerto_escondido.JPG" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 700) {
            ...GatsbyImageSharpFixed
          }
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
              <Grid item>
                <StaticImage
                  src="../images/img_puerto_escondido.JPG"
                  formats={['auto']}
                  style={{
                    width: 300,
                    height: 220,
                    borderRadius: 4
                  }}
                  quality={100}
                  fixed={data.file.childImageSharp.fixed}
                  alt="Puerto escondido"
                />
                <Box
                  sx={{
                    position: 'relative',
                    width: 632,
                    p: 2
                  }}
                >
                  <Slider {...settings}>
                    <Box
                      sx={{
                        position: 'relative',
                        width: 100,
                        height: 100,
                        borderRadius: 4
                      }}
                    >
                      <StaticImage
                        src="../images/img_puerto_escondido.JPG"
                        formats={['auto']}
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 4
                        }}
                        quality={100}
                        alt="Puerto escondido"
                      />
                    </Box>
                    <Box
                      sx={{
                        position: 'relative',
                        width: 100,
                        height: 100,
                        borderRadius: 4
                      }}
                    >
                      <StaticImage
                        src="../images/img_puerto_escondido.JPG"
                        formats={['auto']}
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 4
                        }}
                        quality={100}
                        alt="Puerto escondido"
                      />
                    </Box>
                    <Box
                      sx={{
                        position: 'relative',
                        width: 100,
                        height: 100,
                        borderRadius: 4
                      }}
                    >
                      <StaticImage
                        src="../images/img_puerto_escondido.JPG"
                        formats={['auto']}
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 4
                        }}
                        quality={100}
                        alt="Puerto escondido"
                      />
                    </Box>
                    <Box
                      sx={{
                        position: 'relative',
                        width: 100,
                        height: 100,
                        borderRadius: 4
                      }}
                    >
                      <StaticImage
                        src="../images/img_puerto_escondido.JPG"
                        formats={['auto']}
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 4
                        }}
                        quality={100}
                        alt="Puerto escondido"
                      />
                    </Box>
                    <Box
                      sx={{
                        position: 'relative',
                        width: 100,
                        height: 100,
                        borderRadius: 4
                      }}
                    >
                      <StaticImage
                        src="../images/img_puerto_escondido.JPG"
                        formats={['auto']}
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 4
                        }}
                        quality={100}
                        alt="Puerto escondido"
                      />
                    </Box>
                    <Box
                      sx={{
                        position: 'relative',
                        width: 100,
                        height: 100,
                        borderRadius: 4
                      }}
                    >
                      <StaticImage
                        src="../images/img_puerto_escondido.JPG"
                        formats={['auto']}
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 4
                        }}
                        quality={100}
                        alt="Puerto escondido"
                      />
                    </Box>
                  </Slider>
                </Box>
              </Grid>
              <Grid item>
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
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Button
              startIcon={<ChevronLeft/>}
            >
              Volver al inicio
            </Button>
          </Box>
      </Layout>
    </>
  )
}

export default Servicios;