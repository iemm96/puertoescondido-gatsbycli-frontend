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
import * as ReactDOM from 'react-dom'
import {PortableText} from '@portabletext/react'

import StyledButton from "../styled/StyledButton";
import withTheme from "../components/theme";

const components = {
    types: {
        code: props => (
            <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
        )
    }
}

const Post = ({ data }) => {
    const {title, author, body } = data.project;

    return(
        <>
            <Seo title="Detalles propiedad"/>
            <Layout scrollTrigger>
                {
                    <>
                        {
                            /*
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
                            */
                        }
                        <Container maxWidth="xl">
                            <Grid
                                sx={{ mt: 4 }}
                                spacing={4}
                                justifyContent="center"
                                container
                            >
                                <Grid
                                    sx={{
                                        display: {
                                            xs: 'none',
                                            md: 'block'
                                        }
                                    }}
                                    md={ 12 } item order={{ xs: 1, md: 2 }}
                                >
                                    <Stack
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'left'
                                        }}
                                        direction="column"
                                    >
                                        <Typography variant="h5">
                                            { title }
                                        </Typography>

                                        <Typography
                                            sx={{ mt: 2 }}
                                            variant="body2"
                                        >
                                            {
                                                <PortableText value={ body } components={components} />
                                            }
                                        </Typography>
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

export default withTheme( Post );

export const query = graphql`
    query MyQuery {
        sanityPost(slug: {current: {eq: "en-el-mar-a-nadar"}}) {
            body {
                _type
                style
                list
                _rawChildren
            }
            author {
                name
            }
        }
    }
    }

`