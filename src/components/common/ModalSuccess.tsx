import * as React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import IconButton from "@mui/material/IconButton"
import { Close } from "@mui/icons-material"
import StyledButton from "../../styled/StyledButton"
import { Fade, Icon, Stack, Typography } from "@mui/material"
import Backdrop from "@mui/material/Backdrop"
import { ThemeProvider } from "@mui/styles"
import useTheme from "@mui/material/styles/useTheme"
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead"
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
}

const iconButtonStyle = {
  position: "absolute" as "absolute",
  top: 0,
  right: 0,
  zIndex: 2,
}

type ModalSuccessType = {
  openModalSuccess: boolean
  handleModalSuccess: any
}

export const useModalSuccess = () => {
  const [openModalSuccess, setModalSuccess] = React.useState<boolean>(false)
  const handleModalSuccess = () => {
    setModalSuccess(!openModalSuccess)
  }

  return {
    openModalSuccess,
    handleModalSuccess,
  }
}

export const ModalSuccess = ({
  openModalSuccess,
  handleModalSuccess,
}: ModalSuccessType) => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={openModalSuccess}
        onClose={handleModalSuccess}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 800,
        }}
      >
        <Fade in={openModalSuccess}>
          <Box sx={style}>
            <IconButton onClick={handleModalSuccess} sx={iconButtonStyle}>
              <Close />
            </IconButton>
            <Box
              sx={{
                px: 2,
                position: "relative",
                bottom: -20,
                width: "100%",
              }}
            >
              <Stack
                sx={{
                  alignItems: "center",
                }}
                spacing={2}
              >
                <MarkEmailReadIcon
                  sx={{
                    fontSize: 128,
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography align="center" variant="h6">
                  ¡Tu mensaje ha sido enviado correctamente!
                </Typography>
                <Typography variant="body2">
                  Nos pondremos contigo a la brevedad.
                </Typography>
                <StyledButton
                  onClick={handleModalSuccess}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  ¡Entendido!
                </StyledButton>
              </Stack>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </ThemeProvider>
  )
}
