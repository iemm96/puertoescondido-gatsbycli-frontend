import * as React from "react";
import SliderComponent from "./SliderComponent"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby";

const title:string = "¡Tu mejor opción!";
const subtitle:string = "Propiedades destacadas";

const FeaturedProperties = () => {
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
                                gatsbyImageData(width: 280, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
    },[ data ])

    return(
        <>
            {
                properties.length > 0 && (
                    <SliderComponent
                        title={title}
                        subtitle={subtitle}
                        data={ properties }
                        viewMoreButtonRedirectPath="propiedades"
                        viewMoreButtonText="Ver más propiedades"
                        viewMoreButton
                    />
                )
            }
        </>
    )
}


export default FeaturedProperties;