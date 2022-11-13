import * as React from "react";
import SliderComponent from "./SliderComponent"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby";
import Container from "@mui/material/Container"
const title:string = "¡Tu mejor opción!";
const subtitle:string = "Propiedades destacadas";

const FeaturedProperties = ({ attached, fullScreen }:{ attached?:boolean, fullScreen?:boolean }) => {
    const [ properties, setProperties ] = useState<any>([]);

    const data = useStaticQuery(graphql`
        query FeaturedItems {
            allProperty(filter: {isFeatured: {eq: true}}) {
                edges {
                    node {
                        coverImage {
                            childImageSharp {
                                gatsbyImageData(width: 280, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                            }
                        }
                        name
                        uid
                        measures_unit
                        isFeatured
                    }
                }
            }
            allProject(filter: {isFeatured: {eq: true}}) {
                edges {
                    node {
                        coverImage {
                            childImageSharp {
                                gatsbyImageData(width: 1280, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                            }
                        }
                        name
                        uid
                        measures_unit
                        isFeatured
                        slug
                        location {
                            name
                        }
                        isProject
                    }
                }
            }
        }
    `);

    React.useEffect(() => {
        if( data ) {
            if( data.allProject.edges ) {
                setProperties( data.allProject.edges.concat( data.allProperty.edges ) )
            }
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
                        <SliderComponent
                            title={ title }
                            fullScreen={ fullScreen }
                            attached={ attached }
                            subtitle={ subtitle }
                            data={ properties }
                            viewMoreButtonRedirectPath="propiedades"
                        />
                    </div>
                )
            }
        </>
    )
}


export default FeaturedProperties;