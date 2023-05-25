import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import {styled, useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";

import Fade from 'react-reveal/Fade';
// @ts-ignore
import IconHouseConst from './../images/icons/icon-house-cost.svg';
// @ts-ignore
import IconFindHouse from './../images/icons/icon-find-house.svg';
// @ts-ignore
import IconSupportHouse from './../images/icons/icon-support-house.svg';
// @ts-ignore
import IconResidential from './../images/icons/residential.svg';
// @ts-ignore
// @ts-ignore
import IconClimate from './../images/icons/climate.svg';
// @ts-ignore

import useWindowDimensions from "../hooks/useWindowDimensions"
import Header from "./Header"
import {graphql, navigate, useStaticQuery} from 'gatsby';
import { CustomSearchInput, useCustomSearchInput } from "./common/CustomSearchInput";

const StyledLinearBackgroundDiv = styled("div")(() => ({
    background: "linear-gradient(0deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
    width: "100%",
    height: "100%"
}));

const StyledIconTypographyDiv = styled("div")(() => ({
    display: 'flex',
    justifyContent: 'left',
    alignContent: 'center',
}));

const StyledMainTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
    },
    fontWeight: 500,
    '&::after': {
        content: '""',
        background: 'white',
        width: '20%',
        margin: '8px 0',
        height: 2,
        position:'relative',
        display: 'inherit',
    }
}));

const StyledTypesButtonMobile = styled(Button)(({ theme }) => ({
    borderRadius: 6,
    width: '100%',
    textTransform: 'none',
    boxShadow: 'none',
    flex: 1,
    backgroundColor: theme.palette.primary.main,
    color: 'white'
}));

const StyledTypesButton = styled(Button)(() => ({
    borderRadius: 0,
    boxShadow: 'none',
    flex: 1
}));

const Banner = () => {
    const { width } = useWindowDimensions();
    const theme = useTheme();
    const { localSearchPages } = useStaticQuery(graphql`
        query PropiedadesQuery2 {
            localSearchPages {
                index
                store
            }
        }
    `);

    const { querySearch, setQuerySearch, handleSearch, iterableResults, setIterableResults } = useCustomSearchInput( localSearchPages.index, localSearchPages.store, undefined )

    return (
        <>
            <Header scrollTrigger={ false }/>
            <StyledLinearBackgroundDiv>
                <Container
                    sx={{
                        pt: 20,
                        pb: 20,
                    }}
                    maxWidth="xl"
                >
                    <Fade bottom>
                        <Grid container spacing={1}>
                            <Grid item xs={ 12 } md={8}>
                                <StyledMainTitle variant="h3" color="white">
                                    Somos la <span style={{ color: theme.palette.primary.light }}>inmobiliaria</span> en la que puedes <span style={{ color: theme.palette.secondary.light }}>confiar</span>.
                                </StyledMainTitle>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Grid
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'inline'
                            }
                        }}
                        container
                        maxWidth="lg"
                        spacing={0}
                    >
                        <Grid item xs={2} mb={1}>
                            <StyledIconTypographyDiv>
                                <IconHouseConst width={36}/>
                                <Typography sx={{ml:2}} color="white">
                                    Sin costos ocultos
                                </Typography>
                            </StyledIconTypographyDiv>
                        </Grid>
                        <Grid item xs={3}>
                            <StyledIconTypographyDiv>
                                <IconFindHouse size={48}/>
                                <Typography color="white" sx={{ml:2}}>
                                    Encuentra propiedades fácilmente
                                </Typography>
                            </StyledIconTypographyDiv>

                        </Grid>
                        <Grid item xs={3}>
                            <StyledIconTypographyDiv>
                                <IconSupportHouse size={48}/>
                                <Typography color="white" sx={{ml:2}}>
                                    Asesoría durante todo el proceso
                                </Typography>
                            </StyledIconTypographyDiv>
                        </Grid>
                    </Grid>
                    <Grid container mt={2}>
                        <Grid item xs={12} md={4}>
                            <InputLabel sx={{ color: 'white' }} shrink htmlFor="search-property-input">
                                ¿Qué tipo de propiedad estás buscando?
                            </InputLabel>
                            <CustomSearchInput
                                querySearch={ querySearch }
                                setQuerySearch={ setQuerySearch }
                                handleSearch={ handleSearch }
                                iterableResults={ iterableResults }
                                setIterableResults={ setIterableResults }
                                hideFiltersButton={ true }
                            />
                        </Grid>
                    </Grid>
                </Container>
            </StyledLinearBackgroundDiv>
            {
                width < 480 ?
                    <Box
                        sx={{
                            backgroundColor: '#F7F6F4',
                            p: 2
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid xs={6} item>
                                <StyledTypesButtonMobile
                                    onClick={ () => navigate(`/propiedades?categoria=Fraccionamiento`) }
                                    variant="contained"
                                >
                                    Fraccionamientos
                                </StyledTypesButtonMobile>
                            </Grid>
                            <Grid xs={6} item>
                                <StyledTypesButtonMobile
                                    onClick={ () => navigate(`/propiedades?categoria=Terreno`) }
                                    variant="contained"
                                >
                                    Terrenos
                                </StyledTypesButtonMobile>
                            </Grid>
                        </Grid>
                    </Box>
                    :
                    <></>
            }
            <Box sx={{
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}>
                <StyledTypesButton
                    onClick={ () => navigate(`/propiedades?categoria=Fraccionamiento`) }
                    sx={{
                        borderRight: '1px solid white',
                    }}
                    startIcon={<IconResidential width={40}/>}
                    color="primary"
                    variant="contained"
                >
                    Fraccionamientos
                </StyledTypesButton>
                <StyledTypesButton
                    onClick={ () => navigate(`/propiedades?categoria=Lotificación`) }
                    sx={{
                        borderRight: '1px solid white'
                    }}
                    startIcon={<IconClimate width={40}/>}
                    color="primary"
                    variant="contained"
                >
                    Terrenos
                </StyledTypesButton>
            </Box>
        </>
    )
};

export default Banner;

