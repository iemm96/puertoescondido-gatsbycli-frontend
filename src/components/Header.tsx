import * as React from "react"
import { Link } from "gatsby"
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
import LogoWhite from '../images/logo_white.svg';
import LogoColor from '../images/logo_color.svg';

type HeaderPropsType = {
  scrollTrigger?: boolean;
}

const Header = ({ scrollTrigger }:HeaderPropsType) => {
  const ref = React.useRef(null);

  console.log( 'LogoColor ', LogoColor )
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
      <Slide appear={true} direction="down" in={ scrollTrigger ? trigger : true }>
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
            pt: {
              xs: 1,
              md: 0
            }
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
                {
                  scrollTrigger ?
                    <LogoColor src={ LogoColor } width={ 100 } height={ 40 }  alt="Inmobiliaria Puerto Escondido"/> :
                    <LogoWhite src={ LogoWhite } width={ 175 }  alt="Inmobiliaria Puerto Escondido"/>
                }

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
              <Box sx={{ flexGrow: 1, ml:8, display: { xs: 'none', md: 'flex' } }}>
                {pages.map(({label,href}) => (
                  <ScrollTrigger oldProps={{style:{color:"white",...stylesLink},activeStyle:{textDecoration:"underline", ...stylesLink}}} newProps={{style:{...stylesLink},activeStyle:{color:defaultTheme.palette.primary.main, ...stylesLink}}}>
                    <Link key={label} to={href}>
                      {label}
                    </Link>
                  </ScrollTrigger>
                ))}
              </Box>
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
                  <Button startIcon={<WhatsApp/>} variant="text">
                    (+52)33526542
                  </Button>
                  <Link to={'/contacto'}>
                    <StyledButton sx={{ml:2}} variant="contained" color="secondary">
                      Contáctanos
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

export default Header
