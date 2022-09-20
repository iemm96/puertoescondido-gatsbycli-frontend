import * as React from 'react';
import Seo from "../components/seo"
import Layout from "../components/layout"
import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material"
import {ChevronLeft, ChevronRight, Home} from "@mui/icons-material"
import PropertyCard from "../components/PropertyCard";
import StyledButton from "../styled/StyledButton";
import {graphql, navigate} from "gatsby";
import {CustomSearchInput, useCustomSearchInput} from "../components/common/CustomSearchInput";
import {FiltersBox, useFiltersBox} from "../components/common/FiltersBox";
import useWindowDimensions from "../hooks/useWindowDimensions";
import FeaturedProperties from "../components/FeaturedProperties";

const PropertiesList = (
    {
        location,
        data: {
            localSearchPages: {
                index,
                store
            },
            allProperty: {
                nodes,
            },
            allCategory: {
                nodes: categories
            },
        },
        pageContext
    }
) => {
    const { limit, numPages, currentPage, totalResults } = pageContext;
    const properties = nodes;

    const {
        filters,
        setFilters,
        handleChange,
        filteredResults
    } = useFiltersBox(
        properties
    );

    const params = new URLSearchParams(location.search);
    const search = params.get("search");
    const category = params.get("categoria");

    const {
        querySearch,
        setQuerySearch,
        handleSearch,
        iterableResults,
        setIterableResults,
        openSidebar,
        setOpenSidebar,

    } = useCustomSearchInput( index, store, search );

    const { width } = useWindowDimensions();

    return(
        <>
            <Seo title="Propiedades"/>
            <Layout scrollTrigger persistentHeader={true}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            justifyContent: 'center',
                            display: 'flex'
                        }}
                    >
                        <Stack spacing={2} direction="column" justifyContent="center">
                            <Typography align="center" sx={{ mt: 18 }} variant="h5">Propiedades disponibles</Typography>
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
                        <Grid xs={12} lg={9} item>
                            <Grid container>
                                <FeaturedProperties attached/>
                            </Grid>
                            <Grid spacing={2} container>
                                {
                                    filteredResults && filteredResults.map(( val:any, index:number) => (
                                        <Grid sx={{ justifyContent: 'center' }} xs={ 12 } sm={ 6 } md={ 4 } item key={ index }>
                                            <PropertyCard key={ index } data={val} showAsList/>
                                        </Grid>
                                    ))
                                }
                            </Grid>
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
                            <Grid
                                sx={{
                                    mt: {
                                        xs: 6,
                                        md: 12
                                    },
                                    mb: 2
                                }}
                                container
                                justifyContent="center"
                            >
                                <Grid item>
                                    <StyledButton
                                        onClick={ () => navigate( '/' ) }
                                        startIcon={<Home/>}
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

export default PropertiesList;

export const query = graphql`
    query PropiedadesQuery($skip: Int!, $limit: Int!) {
        localSearchPages {
            index
            store
        }
        allCategory {
            nodes {
                name
            }
        }
        allProperty(
            limit: $limit
            skip: $skip,
            filter: {
                isVisible: { eq: true }
            }
        ) {
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
                        gatsbyImageData(width: 280, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
        }
    }
`