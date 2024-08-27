import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import { Container, Grid, Stack, Typography } from "@mui/material"
import { ChevronLeft, ChevronRight, Home } from "@mui/icons-material"
import PropertyCard from "../../components/PropertyCard"
import StyledButton from "../../styled/StyledButton"
import { graphql, navigate } from "gatsby"
import { useCustomSearchInput } from "../../components/common/CustomSearchInput"
import { FiltersBox, useFiltersBox } from "../../components/common/FiltersBox"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import FeaturedProperties from "../../components/FeaturedProperties"

const Propiedades = ({
  data: {
    allProperty: { nodes: properties },
  },
}) => {
  const { filteredResults } = useFiltersBox(properties)

  return (
    <>
      <Seo title="Propiedades" />
      <Layout scrollTrigger persistentHeader={false}>
        <FeaturedProperties fullScreen />
        <Container
          maxWidth="xl"
          sx={{
            pt: {
              md: 2,
            },
          }}
        >
          <Grid spacing={4} container>
            {/*
                                                    <Grid sx={{ display: { xs: 'none', lg: 'inline' } }} xs={3} item>
                            <FiltersBox
                                defaultCategory={ category }
                                categories={ categories }
                                filters={ filters }
                                setFilters={ setFilters }
                                handleChange={ handleChange }
                                openSidebar={ openSidebar }
                                setOpenSidebar={ setOpenSidebar }
                                responsiveMode={ width < 1200 }
                            />
                        </Grid>

                            */}
            <Grid xs={12} lg={12} item>
              <Grid container></Grid>
              <Grid spacing={2} container>
                {filteredResults &&
                  filteredResults.map((val: any, index: number) => (
                    <Grid
                      sx={{ justifyContent: "center" }}
                      xs={12}
                      sm={6}
                      md={4}
                      item
                      key={index}
                    >
                      <PropertyCard
                        key={index}
                        data={val}
                        showAsList
                        showEstimate={false}
                      />
                    </Grid>
                  ))}
              </Grid>
              {/*
                            <Grid sx={{ mt: 2 }} justifyContent="space-between" container>
                                <Grid
                                    order={{
                                        xs: 1
                                    }}
                                    xs={ 6 }
                                    md={ 4 }
                                    item
                                >
                                    <Typography
                                        variant="body2">
                                        Total de resultados: { totalResults }
                                    </Typography>
                                </Grid>
                                <Grid
                                    order={{
                                        xs: 3,
                                        md: 2
                                    }}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        mt: {
                                            xs: 4,
                                            md: 0
                                        }
                                    }}
                                    xs={ 12 }
                                    md={ 4 }
                                    item
                                >
                                    <Stack direction="row" spacing={2}>
                                        {
                                            currentPage > 1 && (
                                                <StyledButton
                                                    onClick={
                                                        ( currentPage - 1 ) === 1 ?
                                                            () => navigate( '/propiedades' ) :
                                                            () => navigate(`/propiedades/${ ( currentPage - 1 ) }`)
                                                    }
                                                    variant="outlined"
                                                    startIcon={<ChevronLeft/>}
                                                >
                                                    Atrás
                                                </StyledButton>
                                            )
                                        }
                                        {
                                            ( currentPage + 1 ) <= numPages && (
                                                <StyledButton
                                                    onClick={ () => navigate(`/propiedades/${ currentPage + 1 }`)}
                                                    variant="contained"
                                                    endIcon={<ChevronRight/>}
                                                >
                                                    Siguiente
                                                </StyledButton>
                                            )
                                        }

                                    </Stack>

                                </Grid>
                                <Grid
                                    order={{
                                        xs: 2,
                                        md: 3
                                    }}
                                    xs={ 6 }
                                    md={ 4 }
                                    sx={{
                                        display: 'flex',
                                        justifyContent:'right'
                                    }}
                                    item
                                >
                                    <Typography variant="body2">
                                        Página { currentPage } de { Math.round( totalResults / limit ) === 0 ? 1 :  Math.round( totalResults / limit ) }
                                    </Typography>

                                </Grid>
                            </Grid>
                                */}
              <Grid
                sx={{
                  mt: {
                    xs: 6,
                    md: 12,
                  },
                  mb: 2,
                }}
                container
                justifyContent="center"
              >
                <Grid item>
                  <StyledButton
                    onClick={() => navigate("/")}
                    startIcon={<Home />}
                  >
                    Volver al inicio
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default Propiedades

export const query = graphql`
  query PropiedadesQuery {
    localSearchPages {
      index
      store
    }
    allCategory {
      nodes {
        name
      }
    }
    allProperty(filter: { isVisible: { eq: true } }) {
      nodes {
        name
        slug
        description
        price
        category {
          name
        }
        features {
          name
        }
        location {
          name
        }
        coverImage {
          childImageSharp {
            gatsbyImageData(
              width: 280
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
