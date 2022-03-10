import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StyledCard } from "../styled/";
import { ArrowForwardOutlined } from '@mui/icons-material';
import { Chip, Stack } from "@mui/material"
import { calculateArea } from "../helpers/calculateArea"

const PropertyCard = ({ data }:{ data:any }) => {

  const image = getImage(data?.coverImage);

  return(
      <StyledCard>

        { image ?
          <GatsbyImage
            image={ image }
            alt="La isla"
          /> : <img
              src={ data?.coverImage?.url }
              alt={'cover image'}
          />
        }
        <CardContent>
          <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
            $ { data?.price &&
                new Intl.NumberFormat().format(data?.price)
              } mxn { ( data?.width && data?.length ) &&
                `· ${calculateArea( parseInt(data.width), parseInt(data.length), data?.measures_unit )}`
              }
          </Typography>
          {/* @ts-ignore */}
          <Typography variant="cardTitle">
            { data?.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { data?.location && data.location.name }
          </Typography>
          <Stack sx={{ mt: 2 }} spacing={ 1 } direction="row">
            {
              data?.features &&
              data.features.map( (feature, index) => (
                <Chip size="small" key={index} label={ feature.name }/>
              ) )
            }
          </Stack>
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

export default PropertyCard;