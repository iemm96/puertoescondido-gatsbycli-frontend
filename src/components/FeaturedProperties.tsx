import * as React from "react";
import SliderComponent from "./SliderComponent"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { useEffect, useState } from "react"
import { fetchRecords } from "../actions/fetchRecords"

const title:string = "¡Tu mejor opción!";
const subtitle:string = "Propiedades destacadas";

const FeaturedProperties = () => {
  const [ properties, setProperties ] = useState<any>([]);

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
                  width
                  length
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

  useEffect(() => {
      console.log('here')
      getFeaturedProperties().then();
  }, []);

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
      <Box sx={{
        mt: 2,
        justifyContent: 'center',
        display: 'flex'
      }}>
        <Button
          color="primary"
          variant="contained"
        >
          Ver más propiedades
        </Button>
      </Box>
    </>
  )
}


export default FeaturedProperties;