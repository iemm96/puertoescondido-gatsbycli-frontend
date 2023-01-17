import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from 'swiper';

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import PropertyCard from "./PropertyCard";
import Box from "@mui/material/Box";
import "./../styles/slick.css";
import Container from "@mui/material/Container"
import {navigate} from "gatsby";
import Button from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";
import {FC} from "react";
import { Fade } from 'react-reveal';

interface FunctionalComponentPropsType {
    key?: number;
    data?: any;
}

type SliderComponentType = {
    title?: string;
    subtitle?: string;
    settings?: any;
    data?: any;
    viewMoreButton?: boolean;
    viewMoreButtonText?: string;
    viewMoreButtonRedirectPath?: string;
    attached?: boolean;
    fullScreen?: boolean;
    Component?: FC<FunctionalComponentPropsType>
}

const boxStyles = {
    p: {
        xs: '0 1rem 0 0'
    },
    width: '100%',
}

const SliderComponent = ({ title, subtitle, data, Component, viewMoreButtonRedirectPath, viewMoreButton, viewMoreButtonText, attached, fullScreen = false }:SliderComponentType) => {
    const theme = useTheme();
    const [ swiperDef, setSwiperDef ] = React.useState<any>( [] );
    const [ swiperState, setSwiperState ] = React.useState<any>( {
        isBeginning: true,
        isEnd: false
    } );

    const arrowButtonStyles = {
        borderRadius: 2,
        height: 40,
    }

    return(
        <>
            <Container maxWidth={ !fullScreen ? 'xl' : false } sx={{
                pl: 2,
                p: attached || fullScreen  ? '0 !important' : 2,
            }}>
                {
                    !attached || !fullScreen && (
                        <Typography variant="subtitle1">{title}</Typography>
                    )
                }
                <Grid
                    sx={{
                        mb:{
                            xs: fullScreen ? 0 : 2
                        }
                    }}
                    container
                    justifyContent="space-between"
                >
                    {
                        !attached || !fullScreen && (
                            <Grid item>
                                <Typography sx={{fontWeight: 600, mb: 1}} variant="h5">{subtitle}</Typography>
                            </Grid>
                        )
                    }

                    <Grid sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                    }} item
                    >
                        {
                            ( viewMoreButton && (!attached && !fullScreen) ) && (
                                <Button
                                    sx={{ textTransform: 'none' }}
                                    color="primary"
                                    onClick={ () => navigate( viewMoreButtonRedirectPath ? `/${viewMoreButtonRedirectPath}` : '/' ) }
                                    variant="contained"
                                >
                                    { viewMoreButtonText ? viewMoreButtonText : 'Ver más' }
                                </Button>
                            )
                        }

                        {
                            !fullScreen && (
                                <Box>
                                    <IconButton
                                        sx={ arrowButtonStyles }
                                        disabled={ swiperState.isBeginning }
                                        onClick={ () => swiperDef ? swiperDef.slidePrev() : '' }
                                    >
                                        <ChevronLeft/>
                                    </IconButton>
                                    <IconButton
                                        sx={{
                                            borderRadius: 2,
                                            height: 40
                                        }}
                                        disabled={ swiperState.isEnd }
                                        onClick={() => swiperDef ? swiperDef.slideNext() : ''}
                                    >
                                        <ChevronRight/>
                                    </IconButton>
                                </Box>
                            )
                        }

                    </Grid>
                </Grid>
                <Swiper
                    style={{
                        // @ts-ignore
                        "--swiper-pagination-color": theme.palette.primary.main,
                        paddingBottom: fullScreen ? 0 : '2rem',
                    }}
                    observeParents={  true }
                    observer={  true }
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={ fullScreen }
                    modules={[ Pagination, Autoplay, Navigation ]}
                    slidesPerView="auto"
                    spaceBetween={ 10 }
                    centeredSlides={ false }
                    autoplay={{
                        delay: 2500,
                    }}
                    onSlideChange={() => {
                        setSwiperState( {
                            isEnd: swiperDef.isEnd,
                            isBeginning: swiperDef.isBeginning
                        } );
                    }}
                    onSwiper={(swiper) => {
                        setSwiperDef( swiper );
                        setSwiperState( {
                            isEnd: false,
                            isBeginning: true
                        });
                    }}
                    breakpoints={{
                        "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 10
                        },
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 3,
                            "spaceBetween": 10
                        },
                        "1280": {
                            "slidesPerView": fullScreen ? 1 : attached ? 3 : 4,
                            "spaceBetween": 10
                        }
                    }}
                    freeMode={true}
                >
                    {( data && data.length > 0 ) && data.map( (item, index ) => (
                        <SwiperSlide>
                            <Fade duration={ 1500 } right={ !fullScreen }>
                                <Box key={index} sx={boxStyles}>
                                    {
                                        Component ? (
                                            <Component key={ index } data={ item.node }/>
                                        ) : (
                                            <PropertyCard key={ index } data={ item.node } attached={ attached } fullScreen={ fullScreen }/>
                                        )
                                    }
                                </Box>
                            </Fade>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Box
                    sx={{
                        mt: 4,
                        display: {
                            xs: 'flex',
                            md: 'none'
                        },
                        justifyContent: 'center'
                    }}
                >
                    {
                        (viewMoreButton && !attached ) && (
                            <Button
                                sx={{ textTransform: 'none' }}
                                color="primary"
                                onClick={ () => navigate( viewMoreButtonRedirectPath ? `/${viewMoreButtonRedirectPath}` : '/' ) }
                                variant="contained"
                            >
                                { viewMoreButtonText ? viewMoreButtonText : 'Ver más' }
                            </Button>
                        )
                    }

                </Box>
            </Container>
        </>
    )
}

export default React.forwardRef(SliderComponent);