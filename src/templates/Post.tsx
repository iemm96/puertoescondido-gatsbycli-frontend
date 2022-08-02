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
import { PortableText } from '@portabletext/react';

import StyledButton from "../styled/StyledButton";
import withTheme from "../components/theme";
import CoverImage from "../components/common/CoverImage";
import {getImage} from "gatsby-plugin-image";
import Divider from "@mui/material/Divider";

const serializers = {
    types: {
        normal: ({children}) => <Typography>
            {children}
        </Typography>,
    },
}

const Post = ({ data }) => {
    const {title, author, _rawBody, mainImage } = data.sanityPost;
    const coverImageObject = getImage( mainImage.asset );
    console.log( _rawBody )

    return(
        <>
            <Seo title={ `${title}`} />
            <Layout scrollTrigger>
                {
                    <>
                        {

                            <CoverImage
                                maxWidth="md"
                                data={{
                                    name: title,
                                    author: author.name
                                }}
                                gatsbyImage={ coverImageObject }
                        />

                        }
                        <Container maxWidth="md">
                            <Grid
                                sx={{ mt: 2 }}
                                justifyContent="left"
                                container
                            >
                                <Grid
                                    xs={ 12 }
                                    md={ 9 }
                                >
                                    { /* @ts-ignore */ }
                                    <PortableText value={_rawBody} components={serializers} />
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Grid container>

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
    query Post($slug: String) {
        sanityPost(slug: {current: {eq: $slug}}) {
            _rawBody
            title
            author {
                name
            }
            mainImage {
                asset {
                    gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
                }
            }
        }
    }
`