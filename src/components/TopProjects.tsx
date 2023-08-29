import * as React from "react";
import { useState } from "react"
import { graphql, navigate, useStaticQuery } from "gatsby";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {ArrowCircleRightOutlined} from "@mui/icons-material";
import loadable from '@loadable/component'

const ProjectCard = loadable(() => import( "./ProjectCard" ))

const TopProjects = ({ attached, fullScreen }:{ attached?:boolean, fullScreen?:boolean }) => {
    const [ properties, setProperties ] = useState<any>([]);

    const data = useStaticQuery(graphql`
        query FeaturedItemsQuery {
            allProperty(filter: {isFeatured: {eq: true}, isVisible: {eq: true}}, limit: 4) {
                edges {
                    node {
                        coverImage {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 280,
                                    placeholder: BLURRED,
                                    quality: 80,
                                    formats: [ WEBP, AVIF]
                                )
                            }
                        }
                        name
                        uid
                        slug
                        price
                        measures_unit
                        isFeatured
                        isProject
                    }
                }
            }
        }
    `);

    React.useEffect(() => {
        if( data?.allProperty?.edges ) {
            setProperties( data.allProperty.edges )
        }
    },[ data ]);

    const fullScreenStyles:React.CSSProperties = {
        width: '100%',
        overflow:'hidden',
        position:'relative',
        height: '100%',
        top:0
    }

    return(
        <>
            {
                properties.length > 0 && (
                    <div style={
                        fullScreen ? fullScreenStyles : {}
                    }>
                        {
                            /*
                            <SliderContainer
                            title={ title }
                            fullScreen={ fullScreen }
                            attached={ attached }
                            subtitle={ subtitle }
                            data={ properties }
                            viewMoreButtonRedirectPath="propiedades"
                        />
                             */
                        }

                        <Container sx={{
                            pl: 2,
                            p: attached || fullScreen  ? '0 !important' : 2,
                        }}
                                   maxWidth="xl"
                        >

                            <Grid
                                sx={{
                                    mb:{
                                        xs: fullScreen ? 0 : 2
                                    }
                                }}
                                container
                                justifyContent="space-between"
                                spacing={ 1 }
                            >
                                {
                                    properties.map((property:any, index:number) => (
                                        <Grid item xs={ 12 }
                                              md={ 3 } >
                                            {
                                                ProjectCard && (
                                                    <ProjectCard key={index} data={property.node}/>
                                                )
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
                                        onClick={ () => navigate('/propiedades')  }
                                        variant="contained"
                                    >
                                        { 'Ver todas las propiedades' }
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                )
            }
        </>
    )
}


export default TopProjects;