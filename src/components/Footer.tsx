import * as React from 'react';
import './../styles/wave-animation.scss';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Image from '../components/common/Image';
// @ts-ignore
import Waves from './../images/waves.svg';
import useTheme from "@mui/material/styles/useTheme"

const Footer = () => {
  const theme = useTheme();
  
  const typographyStyles = { 
    color: theme.palette.text.primary 
  }

  return(

      <footer style={{
        position:'relative'
      }}>
        <div>
          <Waves/>
        </div>
        <Box sx={{
          backgroundColor: '#023859'
        }}>
          <Container sx={{
            padding: '2rem 0',
            marginTop: -1
          }} maxWidth="xl">
            <Grid sx={{
              mb:3
            }} container>
              <Grid item>
                <Image filename="logo_footer.png"/>
              </Grid>
            </Grid>
            <Grid sx={{
              mb:5
            }} container justifyContent="space-between">
              <Grid item>
                <Grid direction="column" container>
                  <Grid item>
                   <Typography sx={ typographyStyles }>Conócenos</Typography>
                  </Grid>
                  <Grid item>
                   <Typography sx={ typographyStyles }>Compañía</Typography>
                  </Grid>
                  <Grid item>
                   <Typography sx={ typographyStyles }>Servicios</Typography>
                  </Grid>
                  <Grid item>
                   <Typography sx={ typographyStyles }>Catálogo de propiedades</Typography>
                  </Grid>
                  <Grid item>
                   <Typography sx={ typographyStyles }>Blog</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid direction="column" container>
                  <Grid item>
                   <Typography sx={ typographyStyles }>Contacto</Typography>
                  </Grid>
                  <Grid item>
                   <Typography sx={ typographyStyles }>+52 (954) 108 49 25</Typography>
                  </Grid>
                  <Grid item>
                   <Typography sx={ typographyStyles }>+52 (951) 171 48 29</Typography>
                  </Grid>
                  <Grid item>
                   <Typography sx={ typographyStyles }>Calle 2a Norte, #306, Sector Reforma B, Centro, Puerto Escondido, Oax, México.</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid direction="column" container>
                  <Grid item>
                   <Typography sx={ typographyStyles }>Legal</Typography>
                  </Grid>
                  <Grid item>
                   <Typography sx={ typographyStyles }>Términos y condiciones</Typography>
                  </Grid>
                  <Grid item>
                   <Typography sx={ typographyStyles }>Políticas de privacidad</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
              <Grid item>
               <Typography sx={ typographyStyles } variant="caption">© Copyright 2021 Puerto escondido Inmobiliaria. Todos los derechos reservados. </Typography>
              </Grid>
              <Grid item>
               <Typography sx={ typographyStyles } variant="caption">
                  Powered By NucleoDev
                </Typography>
              </Grid>
              <Grid item>
               <Typography sx={ typographyStyles } variant="caption">Redes sociales</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>


  )
}

export default Footer;