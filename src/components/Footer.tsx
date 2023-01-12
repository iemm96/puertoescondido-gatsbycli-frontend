import * as React from "react"
import "./../styles/wave-animation.scss"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Image from "../components/common/Image"
import { FmdGood, Phone } from "@mui/icons-material"
import useTheme from "@mui/material/styles/useTheme"
import { Link } from "gatsby"
// @ts-ignore
import NucleoLogo from "../images/logo-nucleo-2022.svg"
// @ts-ignore
import Waves from "./../images/waves.svg"
import SocialNetworksIcons from "./common/SocialNetworksIcons";

const Footer = () => {
  const theme = useTheme()

  const typographyStyles = {
    fontFamily: "Poppins",
    color: theme.palette.text.primary,
    fontSize: 14,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  }

  return (
    <footer
      style={{
        position: "relative",
      }}
    >
      <div>
        <Waves />
      </div>
      <Box
        sx={{
          backgroundColor: "#023859",
        }}
      >
        <Container
          sx={{
            padding: "2rem",
            marginTop: -1,
          }}
          maxWidth="xl"
        >
          <Grid
            sx={{
              mb: 3,
              justifyContent: "space-between",
            }}
            container
          >
            <Grid item>
              <Image filename="logo_footer.png" />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                mt: { xs: 2, md: 0 },
              }}
              item
            >
              <SocialNetworksIcons/>
            </Grid>
          </Grid>
          <Grid
            sx={{
              mb: 5,
            }}
            container
            justifyContent="space-between"
          >
            <Grid item>
              <Grid direction="column" container>
                <Grid item>
                  <Typography color={theme.palette.text.primary} variant="h6">
                    Página Web
                  </Typography>
                </Grid>
                <Grid item>
                  <Link style={typographyStyles} to="/">
                    Inicio
                  </Link>
                </Grid>
                <Grid item>
                  <Link style={typographyStyles} to="/conocenos">
                    Conócenos
                  </Link>
                </Grid>
                <Grid item>
                  <Link style={typographyStyles} to="/servicios">
                    Servicios
                  </Link>
                </Grid>
                <Grid item>
                  <Link style={typographyStyles} to="/propiedades">
                    Catálogo de propiedades
                  </Link>
                </Grid>
                <Grid item>
                  <Link style={typographyStyles} to="/blog">
                    Blog
                  </Link>
                </Grid>
                <Grid item>
                  <Link style={typographyStyles} to="/contacto">
                    Contacto
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid direction="column" container>
                <Grid item>
                  <Typography color={theme.palette.text.primary} variant="h6">
                    Contáctanos
                  </Typography>
                </Grid>
                <Grid sx={{ alignItems: "center", display: "flex" }} item>
                  <Phone sx={{ fontSize: 14, color: "white", mr: 1 }} />
                  <Typography
                    onClick={() => window.open("tel:+522226623751")}
                    style={typographyStyles}
                  >
                    +52 (222) 662 3751
                  </Typography>
                </Grid>
                <Grid sx={{ alignItems: "center", display: "flex" }} item>
                  <Phone sx={{ fontSize: 14, color: "white", mr: 1 }} />
                  <Typography
                    onClick={() => window.open("tel:+529511714829")}
                    style={typographyStyles}
                  >
                    +52 (951) 171 48 29
                  </Typography>
                </Grid>
                <Grid sx={{ alignItems: "center", display: "flex" }} item>
                  <FmdGood sx={{ fontSize: 14, color: "white", mr: 1 }} />
                  <Typography
                    sx={{
                      "&:hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                    }}
                    onClick={() =>
                      window.open(
                        "https://g.page/inmobiliaria-puerto-escondido?share",
                        "_blank"
                      )
                    }
                    style={typographyStyles}
                  >
                    Calle 2a Norte, #306, Sector Reforma B, Centro, Puerto
                    Escondido, Oax, México.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid direction="column" container>
                <Grid item>
                  <Typography color={theme.palette.text.primary} variant="h6">
                    Compañía
                  </Typography>
                </Grid>
                <Grid item>
                  <Link to={'/terminos-condiciones'} style={typographyStyles}>Términos y condiciones</Link>
                </Grid>
                <Grid item>
                  <Link to={'/aviso-privacidad'} style={typographyStyles}>Políticas de privacidad</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography
                color={theme.palette.text.primary}
                sx={{ fontSize: 12 }}
              >
                © {new Date().getFullYear()} · Inmobiliaria Puerto Escondido.{" "}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer
