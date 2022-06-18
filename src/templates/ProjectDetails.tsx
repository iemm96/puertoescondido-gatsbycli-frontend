import * as React from "react";
import Seo from "../components/seo";
import Container from "@mui/material/Container"
import { Box, Chip, Stack, Typography } from "@mui/material"
import Layout from "../components/layout"
import Grid from "@mui/material/Grid"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button"
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import {graphql, navigate} from "gatsby"
import { FmdGood } from "@mui/icons-material"
import { calculateArea } from "../helpers/calculateArea"
import {Gallery} from "../components/common/Gallery";
import { getImage } from "gatsby-plugin-image";
import CoverImage from "../components/common/CoverImage";

const ProjectDetails = ({ data }) => {
    const { name, price, location, description, features, images, width, length, coverImage } = data.project;
    const coverImageObject = getImage( coverImage );
  return(
      <>
          <Seo title="Detalles propiedad"/>
          <Layout scrollTrigger>
            {
                  <>
                      <CoverImage
                          data={{
                            price: price,
                            name: name,
                            location: location?.name,
                            features: features
                        }}
                        gatsbyImage={ coverImageObject }
                      />
                      <Container maxWidth="xl">
                          <Grid
                              sx={{ mt: 4 }}
                              spacing={4}
                              justifyContent="center"
                              container
                          >
                              <Grid md={ 6 } item order={{ xs: 2, md: 1 }}>
                                  <Gallery data={ images } preview={ true }/>
                              </Grid>
                              <Grid md={ 6 } item order={{ xs: 1, md: 2 }}>
                                  <Stack
                                      sx={{
                                          display: 'flex',
                                          justifyContent: 'left'
                                      }}
                                      direction="column"
                                  >
                                      <Typography variant="h5">
                                          { name }
                                      </Typography>
                                      <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
                                          $ { price &&
                                          new Intl.NumberFormat().format( price )
                                      } mxn { ( width && length ) &&
                                          `· ${calculateArea( parseInt( width ), parseInt( length ), data?.measures_unit )}`
                                      }
                                      </Typography>
                                      {
                                          location && (
                                              <Typography
                                                  onClick={ () => {
                                                      window.open( `https://www.google.com/maps/search/?api=1&query=${ location.lat }%2C${ location.lng }`, '_blank')
                                                  } }
                                              >
                                                  <FmdGood/>
                                                  { location.name }
                                              </Typography>
                                          )
                                      }

                                      <Typography
                                          sx={{ mt: 2 }}
                                          variant="body2"
                                      >
                                          { description }
                                      </Typography>
                                  </Stack>
                                  <Stack sx={{ mt: 2 }} spacing={ 1 } direction="row">
                                      {
                                          features &&
                                          features.map( (feature, index) => (
                                              <Chip size="small" key={index} label={ feature.name }/>
                                          ) )
                                      }
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

                  </>

            }
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Button
                      sx={{
                          mt: 4,
                          textTransform: 'none'
                      }}
                    onClick={ () => navigate( -1 ) }
                    startIcon={<ChevronLeft/>}
              >
                Volver
              </Button>
            </Box>
          </Layout>
      </>
  )
}

export default ProjectDetails;

export const query = graphql`
    query ProjectsDetailsPage($slug: String) {
        project(slug: {eq: $slug}) {
            name
            uid
            description
            location {
                name
            }
            coverImage {
                childImageSharp {
                    gatsbyImageData( placeholder: BLURRED, quality: 100, formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED, aspectRatio: 1.5 )
                }
            }
            images {
                childImageSharp {
                    gatsbyImageData( placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED,           aspectRatio: 1 )
                }
            }
            
        }
    }
`