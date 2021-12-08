import * as React from "react"
import { Link } from "gatsby"
import { AppBar, Box, Button, Container, IconButton, Toolbar, useScrollTrigger } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material/styles';
import {StyledButton} from "../styled/StyledButton";
import {defaultTheme} from "../theme/Theme";
import { useTheme } from '@mui/material/styles';
import Image from '../components/common/Image';
import { WhatsApp } from "@mui/icons-material"
import { useEffect, useState } from "react";

const pages = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Conócenos",
    href: "/conocenos",
  },
  {
    label: "Servicios",
    href: "/servicios",
  },
  {
    label: "Propiedades",
    href: "/propiedades",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

interface ElevationScrollProps {
  children: React.ReactElement;
  shadow?: number;
  window?: any;
  threshold?: number;
  disableHysteresis?: boolean;
  background?: string;
  filename?: string;
  color?: string;
  oldProps?: object;
  newProps?:object;
}
const Header = props => {

  const getMenuButtons = () => {
    return pages.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: Link,
          }}
          sx={{
            textTransform: "none",
            mr: "1rem"
          }}
        >
          {label}
        </Button>
      );
    });
  };

  function ScrollTrigger({children, oldProps, newProps, disableHysteresis,threshold}:ElevationScrollProps) {
    const trigger = useScrollTrigger({
      disableHysteresis: disableHysteresis ? disableHysteresis : true,
      threshold: threshold ? threshold : 20,
    });

    return React.cloneElement(children, trigger ? newProps : oldProps);
  }

  function ElevationScroll({children,window,shadow,threshold,disableHysteresis,background,filename}:ElevationScrollProps) {
    const theme = useTheme();
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: disableHysteresis ? disableHysteresis : true,
      threshold: threshold ? threshold : 20,
    });

    const getProps = ( filename ? {filename: trigger ? "logo_color.png" : "logo_white.png"} : {style: {
        boxShadow: (trigger && shadow) ? theme.shadows[shadow] : "none",
        backgroundColor: (trigger && background) ? background : "transparent",
        transition: theme.transitions.create(["box-shadow","background-color"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        }),
        color: trigger ? defaultTheme.palette.primary.main : "white"
      },} )
    return React.cloneElement(children, getProps);
  }

  // @ts-ignore
  return(
    <header>
      <ElevationScroll shadow={8} background="white">
        <AppBar
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            padding: 1
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <ElevationScroll filename="logo_color.png">
                <Image alt="Inmobiliaria Puerto Escondido" filename="logo_white.png"/>
              </ElevationScroll>

              <Box sx={{flexGrow: 1,display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => alert('menu clicked')}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              
              <Box sx={{ flexGrow: 0 }}>
                <ThemeProvider theme={defaultTheme}>
                  <ScrollTrigger oldProps={{color:"neutral"}} newProps={{color:"primary"}}>
                    <Button startIcon={<WhatsApp/>} variant="text">
                      (+52)33526542
                    </Button>
                  </ScrollTrigger>
                  <StyledButton sx={{ml:2}} variant="contained" color="secondary">
                    Contáctanos
                  </StyledButton>
                </ThemeProvider>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

    </header>)
}

export default Header
