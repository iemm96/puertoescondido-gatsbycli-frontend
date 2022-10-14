import * as React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import IconButton from "@mui/material/IconButton"
import {Close} from "@mui/icons-material"
import StyledButton from "../../styled/StyledButton"
import {Fade, Stack} from "@mui/material";
import {GatsbyImage} from "gatsby-plugin-image";
import Backdrop from '@mui/material/Backdrop';
import {navigate} from "gatsby";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 360,
    height: 640,
    bgcolor: "background.paper",
    boxShadow: 24,
}

const iconButtonStyle = {
    position: 'absolute' as 'absolute',
    top: 0,
    right: 0,
    zIndex: 2
}

type ModalOffersType = {
    image: any,
    openModalOffer: boolean,
    handleModalOffer: any,
    property?: any
}

export const useModalOffers = () => {
    const [openModalOffer, setOpenModalOffer] = React.useState<boolean>(false );
    const handleModalOffer = () => {
        setOpenModalOffer(!openModalOffer);
    }

    React.useEffect(() => {
        delayOpen()
    },[]);

    const delayOpen = () => {
        setTimeout(() => {
            setOpenModalOffer( true )
        }, 3000 )
    }

    return {
        openModalOffer,
        handleModalOffer
    }
}

export const ModalOffers = ({
                                image,
                                openModalOffer,
                                handleModalOffer,
                                property
                            }: ModalOffersType) => {
    return (
        <>
            <Modal
                open={openModalOffer}
                onClose={handleModalOffer}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 800,
                }}
            >
                <Fade in={ openModalOffer }>
                    <Box sx={style}>
                        <IconButton
                            onClick={handleModalOffer}
                            sx={iconButtonStyle}
                        >
                            <Close/>
                        </IconButton>
                        {
                            image && (
                                <GatsbyImage alt="promocion"
                                 image={image}
                                 onClick={ () => {

                                     if (property?.slug) {
                                         navigate(`/propiedad/${ property.slug }`)
                                     }
                                 } }
                                 style={{
                                     cursor: property?.slug ? 'pointer' : 'inherit',
                                    width: '100%',
                                    height: '100%',
                                    marginBottom: 0
                                }}/>
                            )
                        }
                        <Box
                            sx={{
                                px: 2,
                                position: 'relative',
                                bottom: -20,
                                width: '100%'
                            }}
                        >
                            <Stack
                                direction="row"
                                sx={{
                                    justifyContent: 'space-between',
                                }}
                            >

                                <StyledButton
                                    onClick={ handleModalOffer }
                                    variant="outlined" sx={{ color: 'white' }}>
                                    Cerrar
                                </StyledButton>
                                <StyledButton
                                    onClick={ handleModalOffer }
                                    variant="contained"
                                    color="primary"
                                >
                                    ¡Entendido!
                                </StyledButton>
                            </Stack>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}