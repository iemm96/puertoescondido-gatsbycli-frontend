import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { StyledCard } from "../styled/";
import { FormatQuote } from "@mui/icons-material"
import Box from "@mui/material/Box"
import { Avatar, Stack } from "@mui/material"

const TestimonialCard = ({ data }:{ data?:any }) => {

  return(
      <StyledCard>
        <CardContent>
          <Box>
            <FormatQuote color="primary"/>
          </Box>
          <Typography sx={{ mt: 1 }} variant="body2" color="text.secondary">
            { data.comment }
          </Typography>
          <Stack sx={{ alignItems: 'center', mt: 3 }} spacing={2} direction="row">
            <Avatar/>
            <Stack direction="column">
              <Typography variant="subtitle2">
                { data.name }
              </Typography>
              {
                  data?.role && (
                      <Typography variant="caption">
                        { data.role }
                      </Typography>
                  )
              }

            </Stack>
          </Stack>
        </CardContent>
      </StyledCard>

  )
}

export default TestimonialCard;