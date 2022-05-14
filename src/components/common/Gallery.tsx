import Container from "@mui/material/Container";
import {Scrollbar} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Box from "@mui/material/Box";
import * as React from "react";
import {Modal} from "@mui/material";
import {useState} from "react";
const boxStyles = {
    p: {
        xs: '0 1rem 0 0'
    },
    width: '100%',
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

export const Gallery = ({data}:{data:any}) => {
    const [ open, setOpen ] = useState<boolean>( false );
    const [ swiperDef, setSwiperDef ] = React.useState<any>( [] );
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
        <>
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
                modules={[ Scrollbar ]}
                slidesPerView="auto"
                spaceBetween={ 10 }
                centeredSlides={ true }
                onSlideChange={ () => {
                    setSwiperState( {
                        isEnd: swiperDef.isEnd,
                        isBeginning: swiperDef.isBeginning
                    } );
                } }
                onSwiper={ (swiper) => {
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
                {
                    data && data.map((val:any, index:number) => (
                        <SwiperSlide key={ index }>
                            <Box key={ index } sx={boxStyles}>

                                <img
                                    onClick={ () => handleSelectImage( val.url ) }
                                    alt={"img-1"}
                                    width={200}
                                    height={200}
                                    style={{
                                        cursor: 'pointer',
                                        borderRadius: 16,
                                        objectPosition: 'cover'
                                    }}
                                    src={val.url}
                                />
                            </Box>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>

    )
}

