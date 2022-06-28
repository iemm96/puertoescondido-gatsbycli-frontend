import * as React from "react";
import Seo from "../components/seo";
import Container from "@mui/material/Container"
import { Box, Chip, Stack, Typography } from "@mui/material"
import Layout from "../components/layout"
import Grid from "@mui/material/Grid"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import {graphql, navigate} from "gatsby"
import { FmdGood } from "@mui/icons-material"
import { calculateArea } from "../helpers/calculateArea"
import {Gallery} from "../components/common/Gallery";
import { getImage } from "gatsby-plugin-image";
import CoverImage from "../components/common/CoverImage";
import StyledButton from "../styled/StyledButton";
import withTheme from "../components/theme";

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
                                justifyContent="center"
                                container
                            >
                                <Grid md={ 6 } item order={{ xs: 2, md: 1 }}>
                                    <Gallery data={ images } preview={ true }/>
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
                                            display: 'flex',
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
                                        <Stack direction="row">
                                            <StyledButton>
                                                Plano
                                            </StyledButton>
                                            <StyledButton>
                                                Folleto
                                            </StyledButton>
                                            <StyledButton>
                                                Vista aérea
                                            </StyledButton>
                                        </Stack>

                                        <Typography
                                            sx={{ mt: 2 }}
                                            variant="body2"
                                        >
                                            { description }
                                        </Typography>
                                    </Stack>
                                    <Stack sx={{ mt: 2 }} spacing={ 2 } direction="row" flexWrap="wrap">
                                        {
                                            features &&
                                            features.map( (feature, index) => (
                                                <Chip size="small" key={index} label={ feature.name }/>
                                            ) )
                                        }
                                    </Stack>
                                    <StyledButton
                                        color="primary"
                                        variant="contained"
                                        sx={{
                                            mt: 3,
                                            px: 4
                                        }}
                                    >
                                        Agendar cita
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

export default withTheme( ProjectDetails );

export const query = graphql`
    query ProjectsDetailsPage($slug: String) {
        project(slug: {eq: $slug}) {
            name
            uid
            description
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
                    gatsbyImageData( placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED,  aspectRatio: 1.7 )
                }
                
            }

        }
    }
`