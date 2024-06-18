import * as React from "react";
import { useState } from "react"
import {graphql, navigate, useStaticQuery} from "gatsby";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {ArrowCircleRightOutlined} from "@mui/icons-material";
import loadable from '@loadable/component'

const PostCard = loadable(() => import( "./PostCard" ))

const LatestPosts = () => {
    const [ posts, setPosts ] = useState<any>([]);

    const data = useStaticQuery(graphql`
        query LatestPosts {
            allSanityPost(limit: 4) {
                edges {
                    node {
                        title
                        slug {
                            current
                        }
                        categories {
                            title
                        }
                        author {
                            name
                        }
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
                    }
                }
            }
        }
    `);

    React.useEffect(() => {
        if( data ) {
            setPosts( data.allSanityPost.edges )
        }
    },[ data ])

    return(
        <>
            {
                posts.length > 0 && (
                    <Container sx={{
                        pl: 2,
                    }} maxWidth="xl">
                        <Grid
                            container
                            justifyContent="space-between"
                            spacing={ 1 }
                        >
                            {
                                posts.map((post:any, index:number) => (
                                    <Grid item xs={ 12 }
                                          md={ 3 } >
                                        {
                                            PostCard && <PostCard data={post.node} key={index}/>
                                        }
                                    </Grid>
                                ))
                            }
                        </Grid>
                        <Grid container justifyContent="right" display="flex">
                            <Grid item>
                                <Button
                                    startIcon={ <ArrowCircleRightOutlined/> }
                                    sx={{ textTransform: 'none' }}
                                    color="primary"
                                    onClick={ () => navigate('/blog')  }
                                    variant="contained"
                                >
                                    { 'Explorar blog' }
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                )
            }
        </>
    )
}


export default LatestPosts;