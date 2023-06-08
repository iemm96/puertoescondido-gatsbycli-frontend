import Box from "@mui/material/Box";
import * as React from "react";
import { Fade } from 'react-reveal';

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay, Navigation } from 'swiper'
const boxStyles = {
    p: {
        xs: '0 1rem 0 0'
    },
    width: '100%',
}

const mySwiperComponent = (setSwiperState,setSwiperDef,fullScreen,attached, Component, PropertyCard, data, theme, swiperDef) => (
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
        {( data && data.length > 0 && SwiperSlide && Swiper ) && data.map( (item, index ) => (
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
)
const SwiperComponent = ({setSwiperState,setSwiperDef,fullScreen,attached, Component, PropertyCard, data, theme, swiperDef}) => {
    return(
        mySwiperComponent(setSwiperState,setSwiperDef,fullScreen,attached, Component, PropertyCard, data, theme, swiperDef)
    )
}

export default SwiperComponent