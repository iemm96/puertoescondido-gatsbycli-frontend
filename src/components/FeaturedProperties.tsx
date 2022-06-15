import * as React from "react";
import SliderComponent from "./SliderComponent"
import { useState } from "react"
import { fetchRecords } from "../actions/fetchRecords"
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
                        price
                        uid
                        measures_unit
                        isFeatured
                        slug
                        location {
                            name
                        }
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

  /*
    const { allProperties } = useStaticQuery(graphql`
      query FeaturedPropertiesQuery {
          allProperties(filter: {isFeatured: {eq: true}}) {
              nodes {
                  coverImage {
                      childImageSharp {
                          gatsbyImageData(width: 280, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                      }
                  }
                  name
                  price
                  uid
                  measures_unit
                  features {
                      name
                  }
                  currency
                  location {
                      name
                  }
                  isFeatured
              }
          }
      }
  `);
  */

    React.useEffect(() => {
        if( data ) {
            if( data.allProject.edges ) {

                setProperties( data.allProject.edges.concat( data.allProperty.edges ) )
            }
        }
    },[ data ])

  const getFeaturedProperties = async () => {
      const { properties } = await fetchRecords('properties' );

      const arrFeaturedProperties = [];

      properties.map( item => (
        item.isFeatured && arrFeaturedProperties.push( item )
      ))

      setProperties( arrFeaturedProperties );
  }

  return(
    <>
      {
          properties.length > 0 && (
            <SliderComponent
              title={title}
              subtitle={subtitle}
              data={ properties }
            />
          )
      }
    </>
  )
}


export default FeaturedProperties;