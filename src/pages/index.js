import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Banner"

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { StaticImage } from "gatsby-plugin-image";
import {graphql, navigate, useStaticQuery} from "gatsby"
import TestimonialsSlider from "../components/TestimonialsSlider"
import {Zoom, Fade} from 'react-reveal';
// @ts-ignore
import IconGastronomy from './../images/icons/gastronomy.svg';
import IconBeach from "./../images/icons/Beach.svg";
import IconHiking from "./../images/icons/hiking.svg";
import IconTurtle from "../images/icons/turtle.svg";
import IconFolclore from "./../images/icons/Folklore.svg";
import LatestPosts from "../components/LatestPosts"
import FeaturedProperties from "../components/FeaturedProperties"
import SplashScreen from "../components/common/SplashScreen";

const IndexPage = () => {
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
        <Seo title="Home" />
        <Layout scrollTrigger={true}>
          <Banner/>
          <Box sx={{
            background: 'linear-gradient(0deg, rgba(234,227,217,1) 0%, rgba(255,255,255,1) 100%)',
            height: {
              xs: 'auto',
            },
            width: '100%',
            pt: 4,
            pb: 2
          }}>
            <FeaturedProperties/>
          </Box>
          <Box sx={{
            background: '#F2FBFC',
            height: {
              xs: 'auto',
            },
            width: '100%',
            padding: '2rem 0'
          }}>
            <Container maxWidth="xl">
              <Grid container>
                <Grid

                  xs={ 12 }
                  md={ 6 }
                  item
                >
                  <Typography sx={{fontWeight: 600}} variant="h5">Puerto Escondido, Oaxaca.</Typography>
                  <Grid container>
                    <Grid item>
                      <Typography sx={{mb: 2}} variant="h6">Invierte en este destino turístico.</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Typography sx={{mb: 3}} variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor velit adipiscing lorem tellus
                        blandit. In suspendisse a ut id aliquam. Enim vitae aliquet sit sit lectus ultrices urna. Donec orci,
                        ridiculus blandit fames tristique. At lobortis.
                      </Typography>
                    </Grid>
                  </Grid>
                    <Fade cascade bottom>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexFlow: 'row wrap',
                        marginBottom: 16
                      }}>
                        <Stack
                          sx={{ flex: '0 0 33.333333%' }}
                          direction="column"
                        >
                          <IconBeach width={40}/>
                          <Typography variant="caption">Playas</Typography>
                        </Stack>
                        <Stack sx={{ flex: '0 0 33.333333%' }} direction="column">
                          <IconGastronomy width={40}/>
                          <Typography variant="caption">Gastronomía</Typography>
                        </Stack>
                        <Stack sx={{ flex: '0 0 33.333333%' }} direction="column">
                          <IconHiking width={40}/>
                          <Typography variant="caption">Senderismo</Typography>
                        </Stack>
                        <Stack sx={{ flex: '0 0 33.333333%' }} direction="column">
                          <IconTurtle width={40}/>
                          <Typography variant="caption">Vida salvaje</Typography>
                        </Stack>
                        <Stack sx={{ flex: '0 0 33.333333%' }} direction="column">
                          <IconFolclore width={40}/>
                          <Typography variant="caption">Folclore</Typography>
                        </Stack>
                        <Stack sx={{ flex: '0 0 33.333333%' }} direction="column">
                          <IconHiking width={40}/>
                          <Typography variant="caption">Senderismo</Typography>
                        </Stack>
                      </div>
                    </Fade>
                  <Grid
                    sx={{
                      mb: {
                        xs: 4
                      }
                    }}
                      container>
                    <Grid
                      xs={12}
                      sx={{
                        display: 'flex',
                        justifyContent: {
                          xs: 'center',
                          md: 'left'
                        }
                      }}
                      item
                    >
                      <Button
                          onClick={() => navigate('/contacto')}
                          sx={{
                            textTransform: 'none'
                          }}
                          variant="contained"
                          color="primary"
                      >
                        Contáctanos
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    mb: {
                      xs: 4,
                    }
                  }}

                  justifyContent="center"
                  display="flex"
                  xs={12}
                  md={6}
                  item
                >
                  <Zoom>
                    <StaticImage
                      src="../images/img_puerto_escondido.JPG"
                      formats={['auto']}
                      style={{
                        borderRadius: 16,
                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                        marginTop: 0,
                      }}
                      quality={100}
                      fixed={data.file.childImageSharp.fixed}
                      alt="Puerto escondido"
                    />
                  </Zoom>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <LatestPosts/>
          <Container maxWidth="xl">
            <TestimonialsSlider/>
          </Container>
          <Typography sx={{ my:6 }} align="center">
            “NO ESPERE A INVERTIR EN BIENES RAICES,
            INVIERTA EN BIENES RAICES Y ESPERE”
          </Typography>
        </Layout>
    </>
  )
}

export default IndexPage;

