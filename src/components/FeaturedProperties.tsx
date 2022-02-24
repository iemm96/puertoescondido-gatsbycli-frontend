import * as React from "react";
import SliderComponent from "./SliderComponent"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

const title:string = "¡Tu mejor opción!";
const subtitle:string = "Propiedades destacadas";

const FeaturedProperties = () => {

  return(
    <>
      <SliderComponent
        title={title}
        subtitle={subtitle}
      />
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