import * as React from 'react';
import {graphql, navigate} from "gatsby";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Box, Chip, Stack, Typography} from "@mui/material";
import {FmdGood} from "@mui/icons-material";
import Button from "@mui/material/Button";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import Seo from "../components/seo";
import Layout from "../components/layout";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const PropertyDetails = ({ data }) => {
    const { name, price, location, description, features, coverImage, images } = data.property
    const image = getImage( coverImage );
    const [ selectedImage, setSelectedImage ] = React.useState<string | null>();

    const Thumbnails = ( images:[any] ) => (
        <>
            <Stack direction="row" spacing={ 2 }>
                {
                    images.map( (image:any, index:number) => (
                        <img onClick={ () => setSelectedImage( image.url ) } alt={ name } key={index} src={ image.url } width={100} height={ 100 }
                             style={{
                                 cursor: 'pointer',
                                 objectFit: 'cover'
                            }}
                        />
                    ) )
                }
            </Stack>
        </>
    )
    return(
        <>
            <Seo title={ name }/>
            <Layout>
                <Container maxWidth="xl">
                    <Grid
                        sx={{ mt: 24 }}
                        spacing={4}
                        container
                    >
                        <Grid md={ 6 } item>
                            <Stack spacing={ 2 }>
                                {
                                    selectedImage ?
                                        <img alt={ name } src={ selectedImage }
                                             style={{
                                                 width: '100%',
                                                 objectFit: 'cover',
                                             }}
                                        /> : <GatsbyImage alt={ name } image={ image }/>
                                }
                                { Thumbnails( images ) }
                            </Stack>
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
                                    $ { price &&
                                    new Intl.NumberFormat().format( price )
                                } mxn
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
                                    mt: 4,
                                    textTransform: 'none'
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

export default PropertyDetails;

export const query = graphql`
    query PropertiesDetailsPage($slug: String) {
        property(slug: {eq: $slug}) {
            name
            price
            uid
            area
            description
            features {
                name
            }
            location {
                name
            }
            images {
                url
            }
            coverImage {
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                        formats: AUTO
                        layout: FULL_WIDTH
                    )
                }
            }
        }
    }
`