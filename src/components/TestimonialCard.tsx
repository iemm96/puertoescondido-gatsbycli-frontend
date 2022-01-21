import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { StyledCard } from "../styled/";
import { FormatQuote } from "@mui/icons-material"
import Box from "@mui/material/Box"
import { Avatar, Stack } from "@mui/material"

const TestimonialCard = () => {

  return(
      <StyledCard>
        <CardContent>
          <Box>
            <FormatQuote color="primary"/>
          </Box>
          <Typography sx={{ mt: 1 }} variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, massa sed
            suscipit sollicitudin, odio quam lobortis nibh, id elementum leo urna a lorem. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Typography>
          <Stack sx={{ alignItems: 'center', mt: 3 }} spacing={2} direction="row">
            <Avatar/>
            <Stack direction="column">
              <Typography variant="subtitle2">
                Lorena Vazquez
              </Typography>
              <Typography variant="caption">
                Cliente Feliz
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </StyledCard>

  )
}

export default TestimonialCard;