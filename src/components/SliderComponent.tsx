import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper';

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

interface FunctionalComponentPropsType {
    key?: number;
    data?: any;
}

type SliderComponentType = {
    title: string;
    subtitle: string;
    settings?: any;
    data?: any;
    viewMoreButton?: boolean;
    viewMoreButtonText?: string;
    viewMoreButtonRedirectPath?: string;
    Component?: FC<FunctionalComponentPropsType>
}

const boxStyles = {
    p: {
        xs: '0 1rem 0 0'
    },
    width: '100%',
}

const SliderComponent = ({ title, subtitle, data, Component, viewMoreButtonRedirectPath, viewMoreButton, viewMoreButtonText }:SliderComponentType) => {
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
            <Container maxWidth="xl" sx={ {pl: 2} }>
                <Typography variant="subtitle1">{title}</Typography>
                <Grid
                    sx={{
                        mb:{
                            xs: 2
                        }
                    }}
                    container
                    justifyContent="space-between"
                >
                    <Grid item>
                        <Typography sx={{fontWeight: 600, mb: 1}} variant="h5">{subtitle}</Typography>
                    </Grid>
                    <Grid sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                    }} item
                    >
                        {
                            viewMoreButton && (
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
                    </Grid>
                </Grid>
                <Swiper
                    style={{
                        // @ts-ignore
                        "--swiper-pagination-color": theme.palette.primary.main,
                        paddingBottom: '2rem',
                    }}
                    observeParents={  true }
                    observer={  true }
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[ Pagination ]}
                    slidesPerView="auto"
                    spaceBetween={ 10 }
                    centeredSlides={ false }
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
                            "slidesPerView": 4,
                            "spaceBetween": 10
                        }
                    }}
                    freeMode={true}
                >
                    {( data && data.length > 0 ) && data.map( (item, index ) => (
                        <SwiperSlide>
                            <Box key={index} sx={boxStyles}>
                                {
                                    Component ? (
                                        <Component key={ index } data={ item.node }/>
                                    ) : (
                                        <PropertyCard key={ index } data={ item.node }/>
                                    )
                                }
                            </Box>
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
                        viewMoreButton && (
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