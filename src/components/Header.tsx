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
import useTheme from '@mui/material/styles/useTheme';
import Image from '../components/common/Image';
import WhatsApp from "@mui/icons-material/WhatsApp"
import Sidebar from "./Sidebar"
import { pages } from "./../constants";
import axios from "axios"
import { useEffect } from "react"

type HeaderPropsType = {
  scrollTrigger?: boolean;
}

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

const Header = ({ scrollTrigger }:HeaderPropsType) => {

  useEffect(() => {
    getRecords().then()
  },[ ])
  const getRecords = async () => {
    const result = await axios.get('http://localhost:8080/api/properties');
    console.log(result.data);
  }
  const ref = React.useRef(null);

  function ScrollTrigger({children, oldProps, newProps, disableHysteresis,threshold}:ElevationScrollProps) {
    const trigger = scrollTrigger ? useScrollTrigger({
      disableHysteresis: disableHysteresis ? disableHysteresis : true,
      threshold: threshold ? threshold : 20,
    }) : true;

    return React.cloneElement(children, trigger ? newProps : oldProps);
  }

  function ElevationScroll({children,shadow,threshold,disableHysteresis,background,filename}:ElevationScrollProps) {
    const theme = useTheme();
    // This is only being set here because the demo is in an iframe.
    const trigger = scrollTrigger ? useScrollTrigger({
      disableHysteresis: disableHysteresis ? disableHysteresis : true,
      threshold: threshold ? threshold : 20,
    }) : true;

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

  const stylesLink = {
    marginRight: '1rem',
    fontFamily: 'Roboto',
    textDecoration: 'none',
  }

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
              <Box
                sx={{
                  flexGrow: {
                    xs: 1,
                    md: 0
                  }
                }}
              >
                <ScrollTrigger oldProps={{ filename:"logo_white.png", width: 175 }} newProps={{ filename:"logo_color.png", width:160 }}>
                  <Image alt="Inmobiliaria Puerto Escondido" filename="logo_white.png"/>
                </ScrollTrigger>
              </Box>
              <Box sx={{flexGrow: 0,display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={ () =>  ref.current.toggleDrawer(true) }
                  color="inherit"
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
                  <ScrollTrigger oldProps={{color:"neutral"}} newProps={{color:"primary"}}>
                    <Button startIcon={<WhatsApp/>} variant="text">
                      (+52)33526542
                    </Button>
                  </ScrollTrigger>
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
      </ElevationScroll>
      <Sidebar ref={ref}/>
    </header>)
}

export default Header
