import Container from "@mui/material/Container";
import {Scrollbar} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/scrollbar';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

import Box from "@mui/material/Box";
import * as React from "react";
import {Modal} from "@mui/material";
import {useState} from "react";
import useTheme from "@mui/material/styles/useTheme"
import {GatsbyImage, getImage} from "gatsby-plugin-image";
const boxStyles = {
    p: {
        xs: '0 1rem 0 0'
    },
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
}

const modalStyles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
};
export const useGallery = () => {

}

export const Gallery = ({ data, preview }:{ data:any, preview:boolean }) => {
    console.log( data )
    const theme = useTheme();
    const [ open, setOpen ] = useState<boolean>( false );
    const [ swiperDef, setSwiperDef ] = React.useState<any>( [] );
    const [ thumbsSwiper, setThumbsSwiper ] = useState<any>(null);
    const [ selectedImage, setSelectedImage ] = useState<string | null>( null );
    const [ swiperState, setSwiperState ] = React.useState<any>( {
        isBeginning: true,
        isEnd: false
    } );

    const handleSelectImage = ( imageUrl:string ) => {
        setSelectedImage( imageUrl );
        setOpen( true );
    }

    return(
        <Box sx={{
            width: {
                xs: 375,
            },
            position: 'relative'
        }}>
            <Modal
                open={ open }
                onClose={ () => setOpen( false ) }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ modalStyles }>
                    <img
                        alt="preview-image"
                        width="100%"
                        height="100%"
                        src={ selectedImage }
                    />
                </Box>
            </Modal>

                <Swiper
                    style={{
                        // @ts-ignore
                        "--swiper-navigation-color": theme.palette.primary.main,
                        "--swiper-pagination-color": theme.palette.primary.main,
                        width: '100%',
                    }}
                    slidesPerView="auto"
                    spaceBetween={ 10 }
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                >
                    {
                        data && data.map((val:any, index:number) => (
                            <SwiperSlide key={ index }>
                                <Box key={ index } sx={boxStyles}>

                                    <GatsbyImage
                                        //onClick={ () => handleSelectImage( val.url ) }
                                        alt={"img-1"}
                                        style={{
                                            maxWidth: 300,
                                            cursor: 'pointer',
                                            borderRadius: 16,
                                            objectFit: 'cover'
                                        }}
                                        image={getImage( val )}
                                    />
                                </Box>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Swiper
                    style={{
                        marginTop: 8
                    }}
                    spaceBetween={10}
                    slidesPerView={4}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    onSlideChange={ () => {
                        setSwiperState( {
                            isEnd: swiperDef.isEnd,
                            isBeginning: swiperDef.isBeginning
                        } );
                    } }
                    onSwiper={ (swiper) => {
                        setThumbsSwiper(swiper)
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
                            "spaceBetween": 6
                        }
                    }}
                    freeMode={true}
                >
                    {
                        data && data.map((val:any, index:number) => (
                            <SwiperSlide key={ index }>
                                <Box key={ index } sx={boxStyles}>


                                    <GatsbyImage
                                        //onClick={ () => handleSelectImage( val.url ) }
                                        alt={"img-1"}
                                        style={{
                                            maxWidth: 300,
                                            cursor: 'pointer',
                                            borderRadius: 8,
                                            objectFit: 'cover'
                                        }}
                                        image={getImage( val )}
                                    />
                                </Box>

                            </SwiperSlide>
                        ))
                    }
                </Swiper>

        </Box>

    )
}

