import * as React from "react";
import Seo from "../../components/seo";
import Container from "@mui/material/Container"
import { Box, Chip, Stack, Typography } from "@mui/material"
import Layout from "../../components/layout"
import Grid from "@mui/material/Grid"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button"
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { useEffect, useState } from "react"
import { fetchRecord } from "../../actions/fetchRecord"
import { FmdGood } from "@mui/icons-material"
import { calculateArea } from "../../helpers/calculateArea"
import {Gallery} from "../../components/common/Gallery";
import CoverImage from "../../components/common/CoverImage";

const settings = {
  dots: true,
  slidesToShow: 5,
  infinite: false,
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

const Servicios = ({ property }) => {
  const [ propertyData, setPropertyData ] = useState( null );
  useEffect(() => {
    getProperty().then()
  },[  ]);

  const getProperty = async () => {
    const propertyResult = await fetchRecord( 'projects/bySlug', property );
    setPropertyData( propertyResult.project );
  }

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
          <Seo title="Detalles propiedad"/>
          <Layout scrollTrigger>
            {
              propertyData && (
                  <>
                      <CoverImage data={{
                          image: propertyData?.coverImage?.url,
                          price: propertyData?.price,
                          name: propertyData?.name,
                          currency: propertyData?.currency,
                          location: propertyData?.location?.name,
                          features: propertyData?.features
                      }}/>
                      <Container maxWidth="xl">
                          <Grid
                              sx={{ mt: 24 }}
                              spacing={4}
                              container
                          >
                              <Grid md={ 6 } item>
                                  <Gallery data={ propertyData?.images }/>
                              </Grid>
                              <Grid md={ 6 } item>
                                  <Stack
                                      sx={{
                                          display: 'flex',
                                          justifyContent: 'left'
                                      }}
                                      direction="column"
                                  >
                                      <Typography variant="h5">
                                          { propertyData.name }
                                      </Typography>
                                      <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
                                          $ { propertyData?.price &&
                                          new Intl.NumberFormat().format( propertyData?.price )
                                      } mxn { ( propertyData?.width && propertyData?.length ) &&
                                          `· ${calculateArea( parseInt( propertyData.width ), parseInt( propertyData.length ), data?.measures_unit )}`
                                      }
                                      </Typography>
                                      {
                                          propertyData?.location && (
                                              <Typography
                                                  onClick={ () => {
                                                      window.open( `https://www.google.com/maps/search/?api=1&query=${ propertyData.location.lat }%2C${ propertyData.location.lng }`, '_blank')
                                                  } }
                                              >
                                                  <FmdGood/>
                                                  { propertyData.location.name }
                                              </Typography>
                                          )
                                      }

                                      <Typography
                                          sx={{ mt: 2 }}
                                          variant="body2"
                                      >
                                          { propertyData.description }
                                      </Typography>
                                  </Stack>
                                  <Stack sx={{ mt: 2 }} spacing={ 1 } direction="row">
                                      {
                                          propertyData?.features &&
                                          propertyData.features.map( (feature, index) => (
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

              )
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

export default Servicios;