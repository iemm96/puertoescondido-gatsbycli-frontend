import * as React from 'react';
import {graphql, navigate} from "gatsby";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Box, Chip, Stack, Typography} from "@mui/material";
import {FmdGood, WhatsApp} from "@mui/icons-material";
import Button from "@mui/material/Button";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { getImage } from "gatsby-plugin-image";
import {Gallery} from "../components/common/Gallery";
import CoverImage from "../components/common/CoverImage";

const PropertyDetails = ({ data }) => {
    const { name, price, location, description, features, images, coverImage } = data.property
    const coverImageObject = getImage( coverImage )
    return(
        <>
            <Seo title={ name }/>
            <Layout scrollTrigger>
                <CoverImage
                    data={{
                        name: name,
                        location: location?.name,
                        lat: location?.lat,
                        lng: location?.lng,
                        features: features,
                        description: description
                    }}
                    gatsbyImage={ coverImageObject }
                />
                <Container maxWidth="xl">
                    <Grid
                        sx={{ mt: 4 }}
                        spacing={4}
                        container
                    >
                        <Grid md={ 6 } item>
                            <Gallery data={ images } preview={ true }/>
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
                                    { name }
                                </Typography>
                                <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
                                    Desde $ { price &&
                                    new Intl.NumberFormat().format( price )
                                } mxn el metro cuadrado
                                </Typography>
                                {
                                    location && (
                                        <Typography
                                            onClick={ () => {
                                                window.open( `https://www.google.com/maps/search/?api=1&query=${ location.lat }%2C${ location.lng }`, '_blank')
                                            } }
                                            color="secondary"
                                        >
                                            <FmdGood sx={{ fontSize: 16 }}/>
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
                                onClick={ () => 
                                    window.open(`https://api.whatsapp.com/send/?phone=529541084925&text=Hola+visité+su+sitio+web+y+me+interesa+más+información+sobre+${ name.replace(' ','+') }`)}
                                startIcon={ <WhatsApp/> }
                                sx={{
                                    mt: 4,
                                    textTransform: 'none'
                                }}
                            >
                                Solicitar más información
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
                        sx={{
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

export default PropertyDetails;

export const query = graphql`
    query PropertiesDetailsPage($slug: String) {
        property(slug: {eq: $slug}) {
            name
            uid
            description
            price
            location {
                name
            }
            coverImage {
                childImageSharp {
                    gatsbyImageData( placeholder: BLURRED, quality: 100, formats: [AUTO, WEBP, AVIF])
                }
            }
            images {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
    }
`