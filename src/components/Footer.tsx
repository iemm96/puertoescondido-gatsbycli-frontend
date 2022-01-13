import * as React from 'react';
import './../styles/wave-animation.scss';
import { Box, Container, Grid, Typography } from "@mui/material"
import Image from '../components/common/Image';
const Waves = require('./../images/waves.svg') as string;

const Footer = () => {
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
          padding: '2rem 0'
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
                  <Typography>Conócenos</Typography>
                </Grid>
                <Grid item>
                  <Typography>Compañía</Typography>
                </Grid>
                <Grid item>
                  <Typography>Servicios</Typography>
                </Grid>
                <Grid item>
                  <Typography>Catálogo de propiedades</Typography>
                </Grid>
                <Grid item>
                  <Typography>Blog</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid direction="column" container>
                <Grid item>
                  <Typography>Contacto</Typography>
                </Grid>
                <Grid item>
                  <Typography>+52 (954) 108 49 25</Typography>
                </Grid>
                <Grid item>
                  <Typography>+52 (951) 171 48 29</Typography>
                </Grid>
                <Grid item>
                  <Typography>Calle 2a Norte, #306, Sector Reforma B, Centro, Puerto Escondido, Oax, México.</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid direction="column" container>
                <Grid item>
                  <Typography>Legal</Typography>
                </Grid>
                <Grid item>
                  <Typography>Términos y condiciones</Typography>
                </Grid>
                <Grid item>
                  <Typography>Políticas de privacidad</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="caption">© Copyright 2021 Puerto escondido Inmobiliaria. Todos los derechos reservados. </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                Powered By NucleoDev
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">Redes sociales</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>

  )
}

export default Footer;