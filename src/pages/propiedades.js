import * as React from 'react';
import Seo from "../components/seo"
import Layout from "../components/layout"
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Paper,
  Stack,
  TextField,
  Typography,
  Slider,
  FormControl, FormControlLabel, Checkbox
} from "@mui/material"
import GradientBox from "../components/GradientBox"
import PropertyCard from "../components/PropertyCard"
import { ChevronLeft, Clear } from "@mui/icons-material"

function valuetext(value) {
  return `${value}°C`;
}

const Propiedades = () => {
  const [value, setValue] = React.useState([20, 37]);
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const { gilad } = state;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeCheck = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return(
    <>
      <Seo title="Propiedades"/>
      <Layout>
        <GradientBox position="absolute" fullHeight/>
        <Container maxWidth="xl">
          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex'
            }}
          >
            <Stack spacing={2} direction="column">
              <Typography align="center" sx={{ mt: 18 }} variant="h4">Propiedades disponibles</Typography>
              <TextField
                sx={{
                  width: 600,
                  '& .MuiFilledInput-root': {
                    backgroundColor: '#EBF2FF',
                    borderRadius: 3.5,
                  }
                }}
                variant="filled"
                InputProps={{
                 disableUnderline: true,
                 endAdornment: <Button color="primary" variant="contained">Buscar</Button>
                }}
                label="Palabra clave (alberca, terreno, etc.)"
              />
            </Stack>
          </Box>
          <Grid sx={{ mt: 7 }} spacing={4} container>
            <Grid xs={3} item>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 3,
                  height: '100%'
                }}
                elevation={2}
              >
                <Stack direction="column">
                  <Box
                    sx={{
                      justifyContent: 'space-between',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Typography variant="subtitle1">
                      Filtrar resultados
                    </Typography>
                    <Button
                      size="small"
                      startIcon={<Clear/>}
                    >
                      Limpiar filtros
                    </Button>
                  </Box>
                  <Stack sx={{ mt: 2 }} direction="column">
                    <Typography variant="caption">Rango de precio</Typography>
                    <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                    />
                    <Box
                      sx={{
                        justifyContent: 'space-between',
                        display: 'flex'
                      }}
                    >
                      <Typography variant="caption">Desde $100,000</Typography>
                      <Typography variant="caption">Hasta $1,000,000</Typography>
                    </Box>

                    <Typography sx={{ mt: 2 }} variant="caption">Metros cuadrados</Typography>
                    <Slider
                      getAriaLabel={() => 'Metros cuadrados'}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                    />
                    <Box
                      sx={{
                        justifyContent: 'space-between',
                        display: 'flex'
                      }}
                    >
                      <Typography variant="caption">Desde 50m2</Typography>
                      <Typography variant="caption">Hasta 1,000m2</Typography>
                    </Box>
                  </Stack>
                  <Stack sx={{ mt: 2 }} direction="column">
                    <Typography variant="caption">Zonas</Typography>
                    <FormControl component="fieldset" variant="standard">
                      <FormControlLabel
                        control={
                          <Checkbox checked={gilad} onChange={handleChangeCheck} name="gilad" />
                        }
                        label="Cerca de la playa"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={gilad} onChange={handleChangeCheck} name="gilad" />
                        }
                        label="Terreno plano"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={gilad} onChange={handleChangeCheck} name="gilad" />
                        }
                        label="Cerca del centro"
                      />
                    </FormControl>
                  </Stack>
                  <Stack sx={{ mt: 2 }} direction="column">
                    <Typography variant="caption">Ubicaciones</Typography>
                    <FormControl component="fieldset" variant="standard">
                      <FormControlLabel
                        control={
                          <Checkbox checked={gilad} onChange={handleChangeCheck} name="gilad" />
                        }
                        label="Brisas Zicatela"
                      />
                    </FormControl>
                  </Stack>
                  <hr/>
                  <FormControl component="fieldset" variant="standard">
                    <FormControlLabel
                      control={
                        <Checkbox checked={gilad} onChange={handleChangeCheck} name="gilad" />
                      }
                      label="Sólo propiedades destacadas"
                    />
                  </FormControl>
                </Stack>
              </Paper>
            </Grid>
            <Grid xs={9} item>
              <Grid sx={{ mt: 2 }} justifyContent="space-between" container>
                <Grid item>
                  <Typography>Ordenar por: Precio</Typography>
                </Grid>
                <Grid item>
                  <Pagination color="primary" count={10} />
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={4} item>
                  <PropertyCard/>
                </Grid>
                <Grid xs={4} item>
                  <PropertyCard/>
                </Grid>
                <Grid xs={4} item>
                  <PropertyCard/>
                </Grid>
                <Grid xs={4} item>
                  <PropertyCard/>
                </Grid>
                <Grid xs={4} item>
                  <PropertyCard/>
                </Grid>
                <Grid xs={4} item>
                  <PropertyCard/>
                </Grid>
              </Grid>
              <Grid sx={{ mt: 2 }} justifyContent="space-between" container>
                <Grid item>
                  <Typography>Mostrando 6 de 200 resultados</Typography>
                </Grid>
                <Grid item>
                  <Pagination color="primary" count={10} />
                </Grid>
              </Grid>
              <Grid
                sx={{
                  mt: 4,
                  mb: 2
                }}
                container
                justifyContent="center"
              >
                <Grid item>
                  <Button
                    startIcon={<ChevronLeft/>}
                  >
                    Volver al inicio
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default Propiedades;