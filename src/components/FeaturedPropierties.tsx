import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PostCard from "./PostCard";
import useWindowDimensions from "../hooks/useWindowDimensions"
import SliderComponent from "./SliderComponent"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { graphql, useStaticQuery } from "gatsby"
import PropertyCard from "./PropertyCard"

const title:string = "¡Tu mejor opción!";
const subtitle:string = "Propiedades destacadas";



const FeaturedPropierties = () => {
  const { allProperties } = useStaticQuery(graphql`
    query FeaturedPropiertiesQuery {
        allProperties {
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
            }
        }
  }
    
  `);

  console.log('allProperties ', allProperties.nodes)

  const { width } = useWindowDimensions();
  return(
    <>
      {width < 480 ?
        <>
          <SliderComponent
            title={title}
            subtitle={subtitle}
          />
        </>
        :
        <>
          <Container maxWidth="xl">
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="h5">{subtitle}</Typography>
            <Grid container>
              { allProperties.nodes.map( (item, index ) => (
                <Grid key={index} item>
                  <PropertyCard data={ item }/>
                </Grid>
              )) }
            </Grid>
          </Container>
        </>
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



export default FeaturedPropierties;