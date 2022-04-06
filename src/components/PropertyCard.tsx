import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StyledCard } from "../styled/";
import { ArrowForwardOutlined } from '@mui/icons-material';
import { CardActionArea, Chip, Stack } from "@mui/material"
import { calculateArea } from "../helpers/calculateArea"
import { navigate } from "gatsby"

const PropertyCard = ({ data, key }:{ data:any, key: number }) => {

  const image = getImage(data?.coverImage);

  return(
      <StyledCard key={ key }>
        <CardActionArea
          onClick={ () => navigate(`/cotizador/${ data.uid }`) }
        >
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
              onClick={  () => navigate(`/${ data.uid }`) }
              variant="text"
              sx={{textTransform:'none'}}
              size="small"
              startIcon={<ArrowForwardOutlined/>}
            >
              Ver detalles
            </Button>
          </CardActions>
        </CardActionArea>
      </StyledCard>
  )
}

export default PropertyCard;