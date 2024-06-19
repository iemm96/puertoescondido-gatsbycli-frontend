import * as React from "react"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import InputLabel from "@mui/material/InputLabel"
import {
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
  styled,
  useTheme,
} from "@mui/material"
import Typography from "@mui/material/Typography"

import Fade from "react-reveal/Fade"
// @ts-ignore
import IconHouseConst from "./../images/icons/icon-house-cost.svg"
// @ts-ignore
import IconFindHouse from "./../images/icons/icon-find-house.svg"
// @ts-ignore
import IconSupportHouse from "./../images/icons/icon-support-house.svg"

import useWindowDimensions from "../hooks/useWindowDimensions"
import Carousel from "./Carousel"

const CustomImput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    fontSize: 16,
    padding: "24px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))

const StyledLinearBackgroundDiv = styled("div")(() => ({
  background: "linear-gradient(0deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
  width: "100%",
  height: "100%",
}))

const StyledIconTypographyDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "left",
  alignContent: "center",
}))

const StyledMainTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  fontWeight: 500,
  "&::after": {
    content: '""',
    background: "white",
    width: "20%",
    margin: "8px 0",
    height: 2,
    position: "relative",
    display: "inherit",
  },
}))

const StyledTypesButtonMobile = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  width: "100%",
  textTransform: "none",
  boxShadow: "none",
  flex: 1,
  backgroundColor: theme.palette.primary.main,
  color: "white",
}))

const StyledTypesButton = styled(Button)(() => ({
  borderRadius: 0,
  boxShadow: "none",
  flex: 1,
}))

const Banner = () => {
  const { width } = useWindowDimensions()
  const theme = useTheme()

  return (
    <>
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
              <Grid item xs={12} md={8}>
                <StyledMainTitle variant="h3" color="white">
                  Somos la{" "}
                  <span style={{ color: theme.palette.primary.light }}>
                    inmobiliaria
                  </span>{" "}
                  en la que puedes{" "}
                  <span style={{ color: theme.palette.secondary.light }}>
                    confiar
                  </span>
                  .
                </StyledMainTitle>
              </Grid>
            </Grid>
          </Fade>
          <Grid
            sx={{
              display: {
                xs: "none",
                md: "inline",
              },
            }}
            container
            maxWidth="lg"
            spacing={0}
          >
            <Grid item xs={2} mb={1}>
              <StyledIconTypographyDiv>
                <IconHouseConst width={36} />
                <Typography sx={{ ml: 2 }} color="white">
                  Sin costos ocultos
                </Typography>
              </StyledIconTypographyDiv>
            </Grid>
            <Grid item xs={3}>
              <StyledIconTypographyDiv>
                <IconFindHouse size={48} />
                <Typography color="white" sx={{ ml: 2 }}>
                  Encuentra propiedades fácilmente
                </Typography>
              </StyledIconTypographyDiv>
            </Grid>
            <Grid item xs={3}>
              <StyledIconTypographyDiv>
                <IconSupportHouse size={48} />
                <Typography color="white" sx={{ ml: 2 }}>
                  Asesoría durante todo el proceso
                </Typography>
              </StyledIconTypographyDiv>
            </Grid>
          </Grid>
          <Grid container mt={2}>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel sx={{ pt: 2 }} id="search-property-input-label">
                  ¿Qué tipo de propiedad estás buscando?
                </InputLabel>

                <Paper
                  component="form"
                  sx={{
                    borderRadius: 4,
                    backgroundColor: "#EBF2FF",
                    p: 0,
                    display: "flex",
                    position: "relative",
                    alignItems: "center",

                    width: {
                      xs: 320,
                      md: 420,
                    },
                  }}
                >
                  <Select
                    fullWidth
                    labelId="search-property-input-label"
                    id="search-property-input"
                    value={1}
                    label="¿Qué tipo de propiedad estás buscando?"
                    onChange={() => console.log("change")}
                    input={<CustomImput />}
                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                  >
                    <MenuItem value={1}>Proyectos de playa</MenuItem>
                    <MenuItem value={2}>Proyectos de inversión</MenuItem>
                    <MenuItem value={3}>Proyectos campestres</MenuItem>
                    <MenuItem value={4}>Proyectos comerciales u otros</MenuItem>
                  </Select>
                </Paper>
              </FormControl>
            </Grid>
          </Grid>
        </Container>
      </StyledLinearBackgroundDiv>
      <Carousel
        styles={{
          overflow: "hidden",
          position: "absolute",
          zIndex: -1,
          height: "100%",
          width: "100%",
          top: 0,
        }}
      />
    </>
  )
}

export default Banner
