import * as React from "react";
import Seo from "../../components/seo";
import Container from "@mui/material/Container"
import { Box, Chip, Stack, Typography, Slider } from "@mui/material"
import Layout from "../../components/layout"
import Grid from "@mui/material/Grid"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button"
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { useEffect, useState } from "react"
import { fetchRecord } from "../../actions/fetchRecord"
import { FmdGood } from "@mui/icons-material"
import { calculateArea } from "../../helpers/calculateArea"
import CoverImage from "../../components/common/CoverImage"

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

const EstimateDetails = ({ property }) => {
  const [ propertyData, setPropertyData ] = useState( null );
  useEffect(() => {
    getProperty().then()
  },[  ]);

  const getProperty = async () => {
    const propertyResult = await fetchRecord( 'properties', property );
    setPropertyData( propertyResult.property );
    console.log( propertyResult )
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

  const marks = [
    {
      value: 0,
      label: 'De contado',
    },
    {
      value: 12,
      label: '12 meses',
    },
    {
      value: 24,
      label: '37 meses',
    },
    {
      value: 36,
      label: '36 meses',
    },
  ];

  function valuetext(value: number) {
    return `${value} meses`;
  }

  return(
    <>
      <Seo title="Cotizador de propiedad"/>
      <Layout>
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
              <Typography variant="subtitle1">Paso 2 de 2</Typography>
              <Typography sx={{fontWeight: 600, mb: 1}} variant="h5">Elige las mensualidades...</Typography>
              <Slider
                aria-label="Mensualidades"
                defaultValue={12}
                max={ 36 }
                getAriaValueText={valuetext}
                step={ null }
                valueLabelDisplay="auto"
                marks={marks}
              />
              <Grid
                sx={{ mt: 24 }}
                spacing={4}
                container
              >
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
            onClick={ () => navigate( '/' ) }
            startIcon={<ChevronLeft/>}
          >
            Volver al inicio
          </Button>
        </Box>
      </Layout>
    </>
  )
}

export default EstimateDetails;