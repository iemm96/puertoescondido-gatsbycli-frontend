import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, Chip, Stack } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image";
import { StyledCard } from "../styled/";
import { ArrowForwardOutlined } from '@mui/icons-material';

const PostCard = ({ data }:{ data:any }) => {

  return(
    <StyledCard>
      <StaticImage
        src="../images/properties/la-isla.jpg"
        alt="La isla"
        style={{
          width: '100%'
        }}
        quality={95}
        formats={['auto', 'webp', 'avif']}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          $ 954,000 mxn
        </Typography>
        {/* @ts-ignore */}
        <Typography variant="cardTitle">
          Fraccionamiento La Isla
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Brisas Zicatela
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Drenaje · Luz · Agua · 200m²
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          sx={{textTransform:'none'}}
          size="small"
          startIcon={<ArrowForwardOutlined/>}
        >
          Ver detalles
        </Button>
      </CardActions>
    </StyledCard>

  )
}

export default PostCard;