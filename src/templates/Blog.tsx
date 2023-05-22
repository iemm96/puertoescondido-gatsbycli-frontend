import * as React from 'react';
import Seo from "../components/seo"
import Layout from "../components/layout"
import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material"
import {ChevronLeft, ChevronRight, Home} from "@mui/icons-material"
import StyledButton from "../styled/StyledButton";
import {graphql, navigate} from "gatsby";
import PostCard from "../components/PostCard";
import GradientBox from "../components/GradientBox";

const Blog = (
    {
        data: {
            allSanityPost: {
                nodes,
            }
        },
        pageContext
    }
) => {
    const { numPages, currentPage, totalResults, limit } = pageContext;

    const posts = nodes;

    return(
        <>
            <Seo title="Blog"/>
            <Layout scrollTrigger persistentHeader>
                <GradientBox position="absolute" height={1200}/>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            justifyContent: 'center',
                            display: 'flex'
                        }}
                    >
                        <Stack spacing={2} direction="column">
                            <Typography align="center" sx={{ mt: 18 }} color="primary" variant="h4">Blog</Typography>
                            <Typography align="center" sx={{ mt: 2 }} variant="h6" color="secondary">¡Descubre tendencias, noticias y tips del mundo inmobiliario!</Typography>
                        </Stack>
                    </Box>
                    <Grid sx={{ mt: 7 }} spacing={2} container>
                        <Grid xs={12} item>
                            <Grid spacing={1} container>
                                {
                                    posts && posts.map(( val:any, index:number) => (
                                        <Grid sx={{ justifyContent: 'center' }} xs={ 12 } sm={ 6 } md={ 4 } item key={ index }>
                                            <PostCard key={ index } data={val}/>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            <Grid sx={{ mt: 2 }} justifyContent="space-between" container>
                                <Grid
                                    order={{
                                        xs: 1
                                    }}
                                    xs={ 6 }
                                    md={ 4 }
                                    item
                                >
                                    <Typography
                                        variant="body2">
                                        Total de resultados: { totalResults }
                                    </Typography>
                                </Grid>
                                <Grid
                                    order={{
                                        xs: 3,
                                        md: 2
                                    }}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        mt: {
                                            xs: 4,
                                            md: 0
                                        }
                                    }}
                                    xs={ 12 }
                                    md={ 4 }
                                    item
                                >
                                    <Stack direction="row" spacing={2}>
                                        {
                                            currentPage > 1 && (
                                                <StyledButton
                                                    onClick={
                                                        ( currentPage - 1 ) === 1 ?
                                                            () => navigate( '/blog' ) :
                                                            () => navigate(`/blog/${ ( currentPage - 1 ) }`)
                                                    }
                                                    variant="outlined"
                                                    startIcon={<ChevronLeft/>}
                                                >
                                                    Atrás
                                                </StyledButton>
                                            )
                                        }
                                        {
                                            ( currentPage + 1 ) <= numPages && (
                                                <StyledButton
                                                    onClick={ () => navigate(`/blog/${ currentPage + 1 }`)}
                                                    variant="contained"
                                                    endIcon={<ChevronRight/>}
                                                >
                                                    Siguiente
                                                </StyledButton>
                                            )
                                        }

                                    </Stack>

                                </Grid>
                                <Grid
                                    order={{
                                        xs: 2,
                                        md: 3
                                    }}
                                    xs={ 6 }
                                    md={ 4 }
                                    sx={{
                                        display: 'flex',
                                        justifyContent:'right'
                                    }}
                                    item
                                >
                                    <Typography variant="body2">
                                        Página { currentPage } de { Math.round( totalResults / limit ) }
                                    </Typography>

                                </Grid>
                            </Grid>
                            <Grid
                                sx={{
                                    mt: {
                                        xs: 6,
                                        md: 12
                                    },
                                    mb: 2
                                }}
                                container
                                justifyContent="center"
                            >
                                <Grid item>
                                    <StyledButton
                                        onClick={ () => navigate( '/' ) }
                                        startIcon={<Home/>}
                                    >
                                        Volver al inicio
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Layout>
        </>
    )
}

export default Blog;

export const query = graphql`
    query BlogPosts($skip: Int!, $limit: Int!) {
        localSearchPages {
            index
            store
        }
        allSanityPost(
            limit: $limit
            skip: $skip
        ) {
            nodes {
                title
                mainImage {
                    asset {
                        gatsbyImageData(
                            fit: FILLMAX,
                            placeholder: BLURRED,
                            breakpoints: [750, 1080, 1366, 1920],
                            height: 200,
                            formats: [AVIF, WEBP]
                        )
                    }
                }
                slug {
                    current
                }
                categories {
                    title
                }
                author {
                    name
                }
            }
        }
    }
`