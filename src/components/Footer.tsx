import * as React from 'react';
import './../styles/wave-animation.scss';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Image from '../components/common/Image';
import { Tiktok } from "@styled-icons/boxicons-logos/Tiktok";

import useTheme from "@mui/material/styles/useTheme"
import {Facebook, Instagram, YouTube} from "@mui/icons-material";
import {Stack} from "@mui/material";
import {Link} from "gatsby";
// @ts-ignore
import NucleoLogo  from "../images/logo-nucleo-2022.svg";
// @ts-ignore
import Waves from './../images/waves.svg';

const Footer = () => {
    const theme = useTheme();

    const typographyStyles = {
        fontFamily: 'Poppins',
        color: theme.palette.text.primary,
        fontSize: 14,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    }

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
                <Container
                    sx={{
                        padding: '2rem',
                        marginTop: -1,
                    }}
                    maxWidth="xl"
                >
                    <Grid
                        sx={{
                            mb:3,
                            justifyContent: 'space-between'
                        }}
                        container
                    >
                        <Grid item>
                            <Image filename="logo_footer.png"/>
                        </Grid>
                        <Grid sx={{ display: 'flex', alignItems: 'center' }} item>
                            <Stack spacing={ 4 } direction="row">
                                <a href="https://www.facebook.com/TerrenosenPuertoEscondido/?_rdc=1&_rdr" target="_blank">
                                    <Facebook sx={{ color: theme.palette.text.primary }}/>
                                </a>
                                <a href="https://www.tiktok.com/@inmpuertoescondido" target="_blank">
                                    <Tiktok size={24} style={{ color: theme.palette.text.primary }}/>
                                </a>
                                <a href="https://www.instagram.com/inmobiliariapuertoescondido/?igshid=qbodrxzdlg5m" target="_blank">
                                    <Instagram sx={{ color: theme.palette.text.primary }}/>
                                </a>
                                <a href="https://www.youtube.com/channel/UCFUKXzIphheZd_tHWW1yB4w" target="_blank">
                                    <YouTube sx={{ color: theme.palette.text.primary }}/>
                                </a>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid sx={{
                        mb:5
                    }} container justifyContent="space-between">
                        <Grid item>
                            <Grid direction="column" container>
                                <Grid item>
                                    <Typography color={theme.palette.text.primary} variant="h6">Página Web</Typography>
                                </Grid>
                                <Grid item>
                                    <Link style={ typographyStyles } to="/conocenos">Conócenos</Link>
                                </Grid>
                                <Grid item>
                                    <Link style={ typographyStyles } to="/servicios">Servicios</Link>
                                </Grid>
                                <Grid item>
                                    <Link style={ typographyStyles } to="/propiedades">Catálogo de propiedades</Link>
                                </Grid>
                                <Grid item>
                                    <Link style={ typographyStyles } to="/blog">Blog</Link>
                                </Grid>
                                <Grid item>
                                    <Link style={ typographyStyles } to="/contacto">Contacto</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid direction="column" container>
                                <Grid item>
                                    <Typography color={theme.palette.text.primary} variant="h6">Contáctanos</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={ typographyStyles }>+52 (954) 108 49 25</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={ typographyStyles }>+52 (951) 171 48 29</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={ typographyStyles }>Calle 2a Norte, #306, Sector Reforma B, Centro, Puerto Escondido, Oax, México.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid direction="column" container>
                                <Grid item>
                                    <Typography color={theme.palette.text.primary} variant="h6">Compañía</Typography>
                                </Grid>
                                <Grid item>
                                    <Link style={ typographyStyles }>Términos y condiciones</Link>
                                </Grid>
                                <Grid item>
                                    <Link style={ typographyStyles }>Políticas de privacidad</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <a href="https://nucleodev.com">
                                <NucleoLogo/>
                            </a>
                        </Grid>
                        <Grid item>
                            <Typography color={theme.palette.text.primary} sx={{ fontSize: 12 }}>© { new Date().getFullYear() } · Inmobiliaria Puerto Escondido. </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;