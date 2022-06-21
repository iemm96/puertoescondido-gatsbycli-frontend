import {
    Box,
    Button,
    Checkbox,
    Drawer,
    FormControl,
    FormControlLabel,
    Paper,
    Slider,
    Stack,
    Typography
} from "@mui/material";
import {Clear} from "@mui/icons-material";
import * as React from "react";

type FilterType = {
    minPrice: number,
    currentPrice: number,
    maxPrice: number,
    maxSquareMeters: number,
    currentSquareMeters: number,
    onlyFeaturedProperties: boolean
}
export const useFiltersBox = () => {
    const [ filters, setFilters ] = React.useState<FilterType | null>( {
        minPrice: 0,
        currentPrice: 0,
        maxPrice: 0,
        maxSquareMeters: 0,
        currentSquareMeters: 0,
        onlyFeaturedProperties: false
    }  );

    const handleChange = ( ) => {

    }

    return {
        filters,
        setFilters,
        handleChange
    }
}

export const FiltersBox = (
    {
        filters,
        setFilters,
        handleChange,
        openSidebar,
        setOpenSidebar,
        responsiveMode
    }:{
        filters:FilterType,
        setFilters:any,
        handleChange:any,
        openSidebar:boolean,
        setOpenSidebar:any,
        responsiveMode?:boolean
    }
) => {

    const filterBoxFragment = () => (
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
                        getAriaLabel={() => 'Rango de precio'}
                        value={ filters.currentPrice }
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={ () => "" }
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
                        value={ filters.currentSquareMeters }
                        onChange={ handleChange }
                        valueLabelDisplay="auto"
                        getAriaValueText={ () => "" }
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
                    {
                        /*
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

                        */
                    }
                </Stack>
                <Stack sx={{ mt: 2 }} direction="column">
                    <Typography variant="caption">Ubicaciones</Typography>
                    {
                        /*
                                            <FormControl component="fieldset" variant="standard">
                        <FormControlLabel
                            control={
                                <Checkbox checked={gilad} onChange={handleChangeCheck} name="gilad" />
                            }
                            label="Brisas Zicatela"
                        />
                    </FormControl>
                         */
                    }

                </Stack>
                <hr/>
                <FormControl component="fieldset" variant="standard">
                    <FormControlLabel
                        control={
                            <Checkbox checked={ filters.onlyFeaturedProperties } onChange={ () => {
                                setFilters( (prev:any) => ({
                                    ...prev,
                                    onlyFeaturedProperties: !filters.onlyFeaturedProperties
                                }))
                            }} name="only_featured_properties" />
                        }
                        label="Sólo propiedades destacadas"
                    />
                </FormControl>
            </Stack>
        </Paper>
    )
    return(
        responsiveMode ? (
            <Drawer
                anchor="left"
                open={ openSidebar }
                onClose={ () => setOpenSidebar( !openSidebar ) }
            >
                { filterBoxFragment() }
            </Drawer>
        ) : (
            filterBoxFragment()
        )
    )
}