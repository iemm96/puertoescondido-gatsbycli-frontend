import * as React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import GradientBox from "../components/GradientBox";
import {
  Box,
  Button,
  Container,
  Grid, Pagination,
  Stack,
  Typography
} from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import PropertyCard from "../components/PropertyCard";

const Blog = () => {
  return(
    <>
      <Seo title="Blog"/>
      <Layout>
        <GradientBox position="absolute" fullHeight/>
        <Container maxWidth="xl">
          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex'
            }}
          >
            <Stack spacing={2} direction="column">
              <Typography align="center" sx={{ mt: 18 }} variant="h4">Blog</Typography>
              <Typography align="center" sx={{ mt: 18 }} variant="subtitle1">¡Descubre tendencias, noticias y tips del mundo inmobiliario!</Typography>
            </Stack>
          </Box>
          <Grid sx={{ mt: 2 }} justifyContent="space-between" container>
            <Grid item>
              <Typography>Mostrando 6 de 20 entradas</Typography>
            </Grid>
            <Grid item>
              <Pagination color="primary" count={10} />
            </Grid>
          </Grid>
          <Grid spacing={2} container>
            <Grid xs={12} md={4} item>
              <PropertyCard/>
            </Grid>
            <Grid xs={12} md={4} item>
              <PropertyCard/>
            </Grid>
            <Grid xs={12} md={4} item>
              <PropertyCard/>
            </Grid>
            <Grid xs={12} md={4} item>
              <PropertyCard/>
            </Grid>
            <Grid xs={12} md={4} item>
              <PropertyCard/>
            </Grid>
            <Grid xs={12} md={4} item>
              <PropertyCard/>
            </Grid>
          </Grid>
          <Grid sx={{ mt: 2 }} justifyContent="space-between" container>
            <Grid item>
              <Typography>Página 1 de 10</Typography>
            </Grid>
            <Grid item>
              <Pagination color="primary" count={10} />
            </Grid>
          </Grid>
          <Grid
            sx={{
              mt: 4,
              mb: 2
            }}
            container
            justifyContent="center"
          >
            <Grid item>
              <Button
                startIcon={<ChevronLeft/>}
              >
                Volver al inicio
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default Blog;