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
  Typography,
  Slider,
  FormControl, FormControlLabel, Checkbox
} from "@mui/material"
import { ChevronLeft, Clear } from "@mui/icons-material"
import PropertyCard from "../components/PropertyCard";
import {fetchRecords} from "../actions/fetchRecords";
import {CustomSearchInput, useCustomSearchInput} from "../components/common/CustomSearchInput";

function valuetext(value) {
  return `${value}°C`;
}

const Propiedades = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const search = params.get("search");
  const limit = 6; //properties result limit
  const { querySearch, setQuerySearch, handleSearch } = useCustomSearchInput();
  const [ currentPage, setCurrentPage ] = React.useState<number>( 0 );
  const [ properties, setProperties ] = React.useState<any>( null );
  const [ total, setTotal ] = React.useState<number | null>( null );
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

  React.useEffect(() => {
    getProperties().then();
  },[ currentPage ]);

  const getProperties = async () => {
    let resource:string = `properties?limit=${ limit }&startAt=${currentPage}`;

    if( search ) {
      resource = `properties/search?query=${search}&limit=${ limit }&startAt=${currentPage}`;
    }

    const result = await fetchRecords( resource )
    if( result ) {
      setTotal( result.total );
      setProperties( result.properties );
    }
  }

  const handleChangeCheck = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return(
      <>
        <Seo title="Propiedades"/>
        <Layout scrollTrigger>
          <Container maxWidth="xl">
            <Box
                sx={{
                  justifyContent: 'center',
                  display: 'flex'
                }}
            >
              <Stack spacing={2} direction="column">
                <Typography align="center" sx={{ mt: 18 }} variant="h4">Propiedades disponibles</Typography>
                <CustomSearchInput querySearch={querySearch} setQuerySearch={setQuerySearch} handleSearch={handleSearch}/>
              </Stack>
            </Box>
            <Grid sx={{ mt: 7 }} spacing={4} container>
              <Grid sx={{ display: { xs: 'none', sm: 'inline' } }} xs={3} item>
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
              <Grid xs={12} md={9} item>
                <Grid sx={{ mt: 2 }} justifyContent="space-between" container>
                  <Grid item>
                    <Typography>Ordenar por: Precio</Typography>
                  </Grid>
                  <Grid item>
                    <Pagination color="primary" count={10} />
                  </Grid>
                </Grid>
                <Grid spacing={2} container>
                  {
                      properties && properties.map(( val:any, index:number) => (
                          <Grid md={ 4 } item key={ index }>
                            <PropertyCard key={ index } data={val}/>
                          </Grid>
                      ))
                  }
                </Grid>
                <Grid sx={{ mt: 2 }} justifyContent="space-between" container>
                  <Grid item>
                    {
                        total && (
                            <Typography>Mostrando { limit } de { total } resultados</Typography>
                        )
                    }
                  </Grid>
                  <Grid item>
                    <Pagination color="primary" count={10} onChange={ (event, page) => setCurrentPage(page) } />
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