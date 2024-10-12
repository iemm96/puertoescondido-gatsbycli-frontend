import * as React from "react"
import { Link, navigate } from "gatsby"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import MenuIcon from "@mui/icons-material/Menu"
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import { StyledButton } from "../styled/"
import { defaultTheme } from "../theme/Theme"
import WhatsApp from "@mui/icons-material/WhatsApp"
import Sidebar from "./Sidebar"
import { pages } from "./../constants"
// @ts-ignore
import Typography from "@mui/material/Typography"
import { Stack } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

type HeaderPropsType = {
  scrollTrigger?: boolean
}

const Header = ({ scrollTrigger }: HeaderPropsType) => {
  const ref = React.useRef(null)

  return (
    <header id="header-classic">
      <AppBar
        sx={{
          backgroundColor: "transparent",
          pt: 1,
        }}
        elevation={0}
        position={"absolute"}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: {
                  xs: 1,
                  md: 0,
                },
              }}
            >
              <Link to="/">
                <StaticImage
                  src="../images/logo_white.png"
                  formats={["auto", "webp", "avif"]}
                  quality={80}
                  width={175}
                  alt="Logotipo Puerto escondido"
                />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => ref.current.toggleDrawer(true)}
                color={scrollTrigger ? "primary" : "inherit"}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Stack
              spacing={2}
              direction="row"
              sx={{ flexGrow: 1, ml: 8, display: { xs: "none", md: "flex" } }}
            >
              {pages.map(({ label, href }) => (
                <Typography
                  onClick={() => navigate(href)}
                  key={label}
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {label}
                </Typography>
              ))}
            </Stack>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "inline",
                },
                flexGrow: 0,
              }}
            >
              <ThemeProvider theme={defaultTheme}>
                <Button
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=529541084925&text=Hola+los+contacto+desde+su+web",
                      "_blank"
                    )
                  }
                  color={scrollTrigger ? "primary" : "inherit"}
                  startIcon={<WhatsApp />}
                  variant="text"
                >
                  (+52) 954 108 4925
                </Button>
                <StyledButton
                  onClick={() => navigate("/contacto")}
                  sx={{ ml: 2 }}
                  variant="contained"
                  color="secondary"
                >
                  Contáctanos
                </StyledButton>
              </ThemeProvider>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Sidebar ref={ref} />
    </header>
  )
}

export default Header
