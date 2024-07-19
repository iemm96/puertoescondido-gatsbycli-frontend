import * as React from "react"
import Seo from "../components/seo"
import Container from "@mui/material/Container"
import { Box, Stack, Typography } from "@mui/material"
import Layout from "../components/layout"
import Grid from "@mui/material/Grid"

import { navigate } from "gatsby"
import { Home } from "@mui/icons-material"
import StyledButton from "../styled/StyledButton"
import GalleryDrone from "../components/galleries/GalleryDrone"
import GalleryTopography from "../components/galleries/GalleryTopography"

const Servicios = () => {
  return (
    <>
      <Seo title="Servicios" />
      <Layout scrollTrigger persistentHeader={true}>
        <Box
          sx={{
            mt: 14,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Stack spacing={2} direction="column">
            <Typography align="center" sx={{ mt: 20 }} variant="h4">
              Servicios
            </Typography>
            <Typography align="center" sx={{ mt: 18 }} variant="subtitle1">
              ¡Conoce todas las soluciones que tenemos para ti!
            </Typography>
          </Stack>
        </Box>
        <Container maxWidth="xl">
          <Grid sx={{ mt: 4 }} spacing={4} container>
            <Grid
              xs={12}
              md={6}
              order={{ xs: 2, md: 1 }}
              sx={{ justifyContent: "center", display: "flex" }}
              item
            >
              <GalleryTopography />
            </Grid>
            <Grid xs={12} md={6} order={{ xs: 1, md: 2 }} item>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "left",
                }}
                direction="column"
              >
                <Typography variant="h5">Topografía</Typography>
                <Typography sx={{ mt: 2 }} variant="body2">
                  Empleo de equipo especializado para la MEDICIÓN exacta de
                  áreas, alturas, relieve de un TERRENO.
                </Typography>
              </Stack>
              <StyledButton
                onClick={() => navigate("/contacto")}
                color="primary"
                variant="contained"
                sx={{
                  mt: 4,
                }}
              >
                Agendar cita
              </StyledButton>
            </Grid>
          </Grid>
          <Grid sx={{ mt: 4 }} spacing={4} container>
            <Grid
              xs={12}
              md={6}
              order={{ xs: 2, md: 1 }}
              sx={{ justifyContent: "center", display: "flex" }}
              item
            >
              <GalleryDrone />
            </Grid>
            <Grid xs={12} md={6} order={{ xs: 1, md: 2 }} item>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "left",
                }}
                direction="column"
              >
                <Typography variant="h5">Fotografía con Drone</Typography>
                <Typography sx={{ mt: 2 }} variant="body2">
                  Contamos con los mejores Drones y tecnología especializada
                  para captura de imágenes áreas.
                </Typography>
              </Stack>
              <StyledButton
                onClick={() => navigate("/contacto")}
                color="primary"
                variant="contained"
                sx={{
                  mt: 4,
                }}
              >
                Agendar cita
              </StyledButton>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StyledButton onClick={() => navigate("/")} startIcon={<Home />}>
            Volver al inicio
          </StyledButton>
        </Box>
      </Layout>
    </>
  )
}

export default Servicios
