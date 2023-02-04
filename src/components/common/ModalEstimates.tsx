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
import {Estimates, useEstimates} from "./Estimates";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 360,
    bgcolor: "background.paper",
    boxShadow: 24,
}

const iconButtonStyle = {
    position: 'absolute' as 'absolute',
    top: 0,
    right: 0,
    zIndex: 2
}

type ModalEstimatesType = {
    openModalEstimates: boolean;
    handleModalEstimates: any;
    property?: any;
    estimatesProps: any;
}

export const useModalEstimates = () => {
    const [openModalEstimates, setOpenModalOffer] = React.useState<boolean>(false );
    const estimatesProps = useEstimates();

    const handleModalEstimates = () => {
        estimatesProps.setCurrentAmount(0)
        estimatesProps.setCurrentMonths(0)
        setOpenModalOffer(!openModalEstimates);
    }

    return {
        openModalEstimates,
        handleModalEstimates,
        estimatesProps
    }
}

export const ModalEstimates = ({
                            openModalEstimates,
                            handleModalEstimates,
                            property,
                            estimatesProps
                            }: ModalEstimatesType) => {
    const message = `Hola, quiero solicitar informes sobre la propiedad: ${ property?.name }`;

    return (
        <>
            <Modal
                open={openModalEstimates}
                onClose={handleModalEstimates}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 800,
                }}
            >
                <Fade in={ openModalEstimates }>
                    <Box sx={style}>
                        <IconButton
                            onClick={handleModalEstimates}
                            sx={iconButtonStyle}
                        >
                            <Close/>
                        </IconButton>
                        <Box sx={{ width: '100%', height: '100%', px: 4, py: 8 }}>
                            <Estimates
                                months={ property?.monthly_payments }
                                { ...estimatesProps }
                            />
                        </Box>
                        <Box
                            sx={{
                                px: 2,
                                position: 'relative',
                                bottom: -60,
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
                                    onClick={ handleModalEstimates }
                                    variant="outlined" sx={{ color: 'white' }}>
                                    Cerrar
                                </StyledButton>
                                <StyledButton
                                    onClick={ () => window.open( `https://api.whatsapp.com/send/?phone=522226623751&text=${ message.replace(' ','+') }`, '_blank') }
                                    variant="contained"
                                    color="primary"
                                >
                                    ¡Solicitar informes!
                                </StyledButton>
                            </Stack>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}