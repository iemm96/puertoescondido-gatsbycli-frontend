import * as React from "react";
import Seo from "../components/seo";
import Container from "@mui/material/Container"
import { Box, Chip, Stack, Typography } from "@mui/material"
import Layout from "../components/layout"
import Grid from "@mui/material/Grid"
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import {graphql, navigate} from "gatsby"
import {Download, FmdGood} from "@mui/icons-material"
import { calculateArea } from "../helpers/calculateArea"
import {Gallery} from "../components/common/Gallery";
import { getImage } from "gatsby-plugin-image";
import CoverImage from "../components/common/CoverImage";
import StyledButton from "../styled/StyledButton";
import withTheme from "../components/theme";

const PropertyDetails = ({ data }) => {
    const { name, price, location, description, features, images, width, length, coverImage, brochureFile, bluePrintFile, timeFromDowntown, nearToBeaches } = data.property;
    const coverImageObject = getImage( coverImage );
    const descriptionComponent = () => (
        <>
            <Box
                sx={{ mb: 1, mt: 2 }}
            >
                <Typography variant="caption">
                    Descripción:
                </Typography>
            </Box>
            <div
                dangerouslySetInnerHTML={{
                    __html: description
                }}
            />
        </>
    )

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
                                lat: location?.lat,
                                lng: location?.lng,
                                features: features,
                            }}
                            gatsbyImage={ coverImageObject }
                        />
                        <Container maxWidth="xl">
                            <Grid
                                sx={{ mt: { xs: 0, md: 4} }}
                                spacing={ 4 }
                                justifyContent="center"
                                container
                            >
                                <Grid md={ 6 } item order={{ xs: 2, md: 1 }}>
                                    <Box sx={{
                                        display: {
                                            xs: 'inline',
                                            md: 'none'
                                        }
                                    }}>
                                        { descriptionComponent() }
                                    </Box>
                                    <Gallery data={ images } preview={ true }/>
                                    <StyledButton
                                        color="primary"
                                        variant="contained"
                                        onClick={ () => navigate('/contacto')}
                                        sx={{
                                            mt: 3,
                                            px: 4,
                                            py: 2,
                                            width: {
                                                xs: '100%',
                                            },
                                            display: {
                                                xs: 'inline',
                                                md: 'none'
                                            }
                                        }}
                                    >
                                        Agendar cita
                                    </StyledButton>
                                </Grid>
                                <Grid
                                    sx={{
                                        display: {
                                            xs: 'none',
                                            md: 'block'
                                        }
                                    }}
                                    md={ 6 } item order={{ xs: 1, md: 2 }}
                                >
                                    <Stack
                                        sx={{
                                            justifyContent: 'left'
                                        }}
                                        direction="column"
                                    >
                                        <Typography variant="h5">
                                            { name }
                                        </Typography>
                                        {
                                            data?.price && (
                                                <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
                                                    $ { price &&
                                                    new Intl.NumberFormat().format( price )
                                                } mxn { ( width && length ) &&
                                                    `· ${calculateArea( parseInt( width ), parseInt( length ), data?.measures_unit )}`
                                                }
                                                </Typography>
                                            )
                                        }
                                        {
                                            location && (
                                                <a
                                                    style={{
                                                        color: '#CD7D1E',
                                                        alignItems: 'center',
                                                        display: 'flex'
                                                    }}
                                                    href={
                                                        ( location?.lat && location?.lng ) ?
                                                            `https://www.google.com/maps/search/?api=1&query=${ location.lat }%2C${ location.lng }` :
                                                            '#'
                                                    }
                                                    target={ ( location?.lat && location?.lng ) ? '_blank' : '_self' }
                                                >
                                                    <FmdGood style={{ fontSize: 14 }}/>
                                                    { location.name }
                                                </a>
                                            )
                                        }
                                        <Stack sx={{ mt: 2 }} spacing={ 2 } direction="row">

                                            {
                                                bluePrintFile && (
                                                    <StyledButton
                                                        size="small"
                                                        startIcon={ <Download/> }
                                                        variant="outlined"
                                                        onClick={ () => window.open( bluePrintFile.url, '_blank' )}
                                                    >
                                                        Plano
                                                    </StyledButton>
                                                )
                                            }

                                            {
                                                brochureFile && (
                                                    <StyledButton
                                                        size="small"
                                                        startIcon={ <Download/> }
                                                        variant="outlined"
                                                        onClick={ () => window.open( brochureFile.url, '_blank' )}
                                                    >
                                                        Folleto
                                                    </StyledButton>
                                                )
                                            }
                                        </Stack>
                                        <Box
                                            sx={{ mb: 1, mt: 2 }}
                                        >
                                            <Typography variant="caption">
                                                Descripción:
                                            </Typography>
                                        </Box>
                                        <div
                                            style={{ textAlign: 'justify' }}
                                            dangerouslySetInnerHTML={{
                                                __html: description
                                            }}
                                       />
                                        { timeFromDowntown && (
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontWeight: 300,
                                                }}
                                                color="white"
                                            >
                                                A {data?.timeFromDowntown} de puerto escondido
                                            </Typography>
                                        )}
                                        { nearToBeaches && (
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontWeight: 300,
                                                }}
                                                color="white"
                                            >
                                                Playas cercanas: {data?.nearToBeaches}
                                            </Typography>
                                        )}
                                    </Stack>
                                    <Stack sx={{ mt: 2 }} spacing={ 2 } direction="row" flexWrap="wrap">
                                        {
                                            features &&
                                            features.map( (feature, index) => (
                                                <Chip
                                                    sx={{ mb: 1 }}
                                                    size="small"
                                                    key={index}
                                                    label={ feature.name }
                                                />
                                            ) )
                                        }
                                    </Stack>
                                    <StyledButton
                                        color="primary"
                                        variant="contained"
                                        onClick={ () => 
                                            window.open(`https://api.whatsapp.com/send/?phone=522226623751&text=Hola+visité+su+sitio+web+y+me+interesa+más+información+sobre+${ name.replace(' ','+') }`)}
                                        sx={{
                                            mt: 3,
                                            px: 4,
                                        }}
                                    >
                                        Solicitar más información
                                    </StyledButton>
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
                    <StyledButton
                        sx={{
                            my: 6,
                            px: 4,
                        }}
                        onClick={ () => navigate( -1 ) }
                        startIcon={<ChevronLeft/>}
                        variant="outlined"
                    >
                        Volver
                    </StyledButton>
                </Box>
            </Layout>
        </>
    )
}

export default withTheme( PropertyDetails );

export const query = graphql`
    query PropertyDetailsPage($slug: String) {
        property(slug: {eq: $slug}) {
            name
            uid
            description
            nearToBeaches
            timeFromDowntown
            bluePrintFile {
                url
            }
            brochureFile {
                url
            }
            location {
                name
                lat
                lng
            }
            features {
                name
            }
            coverImage {
                childImageSharp {
                    gatsbyImageData( placeholder: BLURRED, quality: 100, formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED, aspectRatio: 1.5 )
                }
            }
            images {
                childImageSharp {
                    gatsbyImageData( placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED )
                }
            }

        }
    }
`