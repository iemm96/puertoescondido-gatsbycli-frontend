import * as React from "react"
import { Fade, Zoom } from "react-reveal"
import Stack from "@mui/material/Stack"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { navigate } from "gatsby"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"
// @ts-ignore
import IconGastronomy from "./../images/icons/gastronomy.svg"
// @ts-ignore
import IconBeach from "./../images/icons/Beach.svg"
// @ts-ignore
import IconHiking from "./../images/icons/hiking.svg"
// @ts-ignore
import IconTurtle from "../images/icons/turtle.svg"
// @ts-ignore
import IconFolclore from "./../images/icons/Folklore.svg"
// @ts-ignore
import Eco from "./../images/icons/eco.svg"

const MainInfoContent = () => {
  return (
    <Box
      sx={{
        background: "#F2FBFC",
        height: {
          xs: "auto",
        },
        width: "100%",
        padding: "2rem 0",
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid xs={12} md={6} item>
            <Typography sx={{ fontWeight: 600 }} variant="h5">
              Puerto Escondido, Oaxaca.
            </Typography>
            <Grid container>
              <Grid item>
                <Typography sx={{ mb: 2 }} variant="h6" color="secondary">
                  Invierte en este destino turístico.
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Typography
                  align="justify"
                  sx={{ mb: 3, pr: 2 }}
                  variant="body2"
                >
                  Una vez que pises Puerto Escondido, tu corazón quedará
                  enganchado con la belleza de sus playas, su atmósfera rústica
                  y relajada. Definitivamente no te arrepentirás de invertir en
                  un pedacito de esta joya del pacífico mexicano y disfrutar de
                  todas las virtudes que este lugar mágico tiene para ti. ¡Te
                  esperamos!
                </Typography>
              </Grid>
            </Grid>
            <Fade cascade bottom>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexFlow: "row wrap",
                  marginBottom: 16,
                }}
              >
                <Stack sx={{ flex: "0 0 33.333333%" }} direction="column">
                  <IconBeach width={40} />
                  <Typography variant="caption" color="secondary">
                    Playas
                  </Typography>
                </Stack>
                <Stack sx={{ flex: "0 0 33.333333%" }} direction="column">
                  <IconGastronomy width={40} />
                  <Typography variant="caption" color="secondary">
                    Gastronomía
                  </Typography>
                </Stack>
                <Stack sx={{ flex: "0 0 33.333333%" }} direction="column">
                  <Eco width={40} />
                  <Typography variant="caption" color="secondary">
                    Eco-turismo
                  </Typography>
                </Stack>
                <Stack sx={{ flex: "0 0 33.333333%" }} direction="column">
                  <IconTurtle width={40} />
                  <Typography variant="caption" color="secondary">
                    Vida salvaje
                  </Typography>
                </Stack>
                <Stack sx={{ flex: "0 0 33.333333%" }} direction="column">
                  <IconFolclore width={40} />
                  <Typography variant="caption" color="secondary">
                    Folclore
                  </Typography>
                </Stack>
                <Stack sx={{ flex: "0 0 33.333333%" }} direction="column">
                  <IconHiking width={40} />
                  <Typography variant="caption" color="secondary">
                    Aventura
                  </Typography>
                </Stack>
              </div>
            </Fade>

            <Grid
              sx={{
                mb: {
                  xs: 4,
                },
              }}
              spacing={2}
              container
            >
              <Grid
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: "left",
                  },
                }}
                item
              >
                <Button
                  onClick={() => navigate("/contacto")}
                  sx={{
                    textTransform: "none",
                  }}
                  variant="contained"
                  color="primary"
                >
                  Contáctanos
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            sx={{
              mb: {
                xs: 4,
              },
            }}
            justifyContent="center"
            display="flex"
            xs={12}
            md={6}
            item
          >
            <Zoom>
              <StaticImage
                src="../images/img_puerto_escondido.JPG"
                formats={["webp"]}
                style={{
                  borderRadius: 16,
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  marginTop: 0,
                }}
                quality={100}
                width={740}
                alt="Puerto escondido"
              />
            </Zoom>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default MainInfoContent
