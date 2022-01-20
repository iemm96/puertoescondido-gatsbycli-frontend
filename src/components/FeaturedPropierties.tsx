import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PostCard from "./PostCard";
import useWindowDimensions from "../hooks/useWindowDimensions"
import SliderComponent from "./SliderComponent"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

const title:string = "¡Tu mejor opción!";
const subtitle:string = "Propiedades destacadas";

const FeaturedPropierties = () => {
  const [ postsResults, setPostsResults ] = React.useState([
    {
      
    }
  ]);

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
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="h5">{subtitle}</Typography>
          <Grid container>
            <Grid item>
              <PostCard/>
            </Grid>
            <Grid item>
              <PostCard/>
            </Grid>
            <Grid item>
              <PostCard/>
            </Grid>
            <Grid item>
              <PostCard/>
            </Grid>
          </Grid>
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
          Ver más entradas
        </Button>
      </Box>
    </>
  )
}

export default FeaturedPropierties