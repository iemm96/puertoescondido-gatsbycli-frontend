import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PostCard from "./PostCard";
import useWindowDimensions from "../hooks/useWindowDimensions"
import SliderComponent from "./SliderComponent"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

const title:string = "Últimas entradas";
const subtitle:string = "De nuestro blog";

const LastPosts = () => {
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
          <Typography sx={{fontWeight: 600}} variant="h5">{subtitle}</Typography>
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

export default LastPosts;