import * as React from "react"
import { Link, navigate } from 'gatsby';
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from  "@mui/material/Box";
import AppBar from  "@mui/material/AppBar";
import MenuIcon from '@mui/icons-material/Menu';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {StyledButton} from "../styled/";
import {defaultTheme} from "../theme/Theme";
import WhatsApp from "@mui/icons-material/WhatsApp"
import Sidebar from "./Sidebar"
import { pages } from "./../constants";
import Slide from '@mui/material/Slide';
// @ts-ignore
import LogoColor from '../images/logo_color.svg';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";

type HeaderPropsType = {
  scrollTrigger?: boolean;
}

const ScrollHeader = ({ scrollTrigger }:HeaderPropsType) => {
  const ref = React.useRef(null);

  function ScrollTrigger( ) {
    return useScrollTrigger({
      disableHysteresis: true,
      threshold: 20,
    })

  }

  const ShowOnScroll = ( {children}:{ children: React.ReactElement } ) => {
    const trigger = useScrollTrigger({
      threshold: 80,
    });

    return (
      <Slide appear={true} direction="down" in={ trigger }>
        {children}
      </Slide>
    );
  }

  const stylesLink = {
    marginRight: '1rem',
    fontFamily: 'Roboto',
    textDecoration: 'none',
  }

  return(
    <header>
      <ShowOnScroll>
        <AppBar
          sx={{
            backgroundColor: scrollTrigger ? "white" : "transparent",
            pt: 1
          }}
          elevation={ scrollTrigger ? 4 : 0 }
          position={ scrollTrigger ? 'fixed' : 'absolute' }
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  flexGrow: {
                    xs: 1,
                    md: 0
                  }
                }}
              >
                <LogoColor src={ LogoColor } width={ 100 } height={ 40 }  alt="Inmobiliaria Puerto Escondido"/> :
              </Box>
              <Box sx={{flexGrow: 0,display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={ () =>  ref.current.toggleDrawer(true) }
                  color={ scrollTrigger ? 'primary' : 'inherit' }
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Stack spacing={ 2 } direction="row" sx={{ flexGrow: 1, ml:8, display: { xs: 'none', md: 'flex' } }}>
                {pages.map(({label,href}) => (
                    <Typography
                        color="primary"
                        onClick={ () => navigate(href) }
                        key={label}
                        sx={{
                          cursor: 'pointer',
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}
                    >
                      { label }
                    </Typography>
                ))}
              </Stack>
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    md: 'inline'
                  },
                  flexGrow: 0
                }}
              >
                <ThemeProvider theme={defaultTheme}>
                  <Button color={ scrollTrigger ? 'primary' : 'inherit' } startIcon={<WhatsApp/>} variant="text">
                    (+52)33526542
                  </Button>
                  <Link to={'/contacto'}>
                    <StyledButton sx={{ml:2}} variant="contained" color="secondary">
                      Cont??ctanos
                    </StyledButton>
                  </Link>
                </ThemeProvider>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ShowOnScroll>
      <Sidebar ref={ref}/>
    </header>
  )
}

export default ScrollHeader;
