import * as React from 'react';
import Seo from "../components/seo"
import Layout from "../components/layout"
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material"
import { ChevronLeft } from "@mui/icons-material"
import PropertyCard from "../components/PropertyCard";
import {fetchRecords} from "../actions/fetchRecords";
import { graphql } from "gatsby";
import {CustomSearchInput, useCustomSearchInput} from "../components/common/CustomSearchInput";
import {FiltersBox, useFiltersBox} from "../components/common/FiltersBox";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useTheme from "@mui/material/styles/useTheme";

const Propiedades = (
    { location,
      data: {
        localSearchPages: {
          index,
          store
        },
        allProperty: {
          nodes
        }
      },
    }
) => {


  const {
    filters,
    setFilters,
    handleChange
  } = useFiltersBox();

  const properties = nodes;
  const params = new URLSearchParams(location.search);
  const search = params.get("search");
  const limit = 6; //properties result limit
  const {
    querySearch,
    setQuerySearch,
    handleSearch,
    iterableResults,
    setIterableResults,
    openSidebar,
    setOpenSidebar
  } = useCustomSearchInput( index, store, search );
  const [ currentPage, setCurrentPage ] = React.useState<number>( 0 );
  const { width } = useWindowDimensions();
  const [ total, setTotal ] = React.useState<number | null>( null );
  const theme = useTheme();

  const [value, setValue] = React.useState([20, 37]);
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const { gilad } = state;

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
      //setProperties( result.properties );
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
                <CustomSearchInput
                    querySearch={ querySearch }
                    setQuerySearch={ setQuerySearch }
                    handleSearch={ handleSearch }
                    iterableResults={ iterableResults }
                    setIterableResults={ setIterableResults }
                    openSidebar={  openSidebar }
                    setOpenSidebar={ setOpenSidebar }
                />
              </Stack>
            </Box>
            <Grid sx={{ mt: 7 }} spacing={4} container>
              <Grid sx={{ display: { xs: 'none', lg: 'inline' } }} xs={3} item>
                <FiltersBox
                    filters={ filters }
                    setFilters={ setFilters }
                    handleChange={ handleChange }
                    openSidebar={ openSidebar }
                    setOpenSidebar={ setOpenSidebar }
                    responsiveMode={ width < 1200 }
                />
              </Grid>
              <Grid xs={12} lg={9} item>
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

export const query = graphql`
  query PropiedadesQuery {
    localSearchPages {
      index
      store
    }
    allProperty {
      nodes {
        name
        slug
        description
        features {
          name
        }
        location {
          name
        }
        coverImage {
          childImageSharp {
            gatsbyImageData(width: 280, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`