import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PostCard from "./PostCard";
import useWindowDimensions from "../hooks/useWindowDimensions"
import SliderComponent from "./SliderComponent"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

const title:string = "Últimas entradas";
const subtitle:string = "De nuestro blog";

const LatestPosts = () => {
  const [ postsResults, setPostsResults ] = React.useState([
    {
      
    }
  ]);

  const { width } = useWindowDimensions();
  return(
    <>
      <SliderComponent
        title={title}
        subtitle={subtitle}
      />
      <Box sx={{
        mt: 2,
        mb: 4,
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

export default LatestPosts